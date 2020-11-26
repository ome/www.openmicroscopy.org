#!/usr/bin/env python
import argparse
import json
import os
import sys
import tarfile
# Python 2 and 3 compatible so this can be run on RHEL7 without a virtualenv
try:
    from urllib.request import urlopen
except ImportError:
    from urllib2 import urlopen


def main(version, parent, dry_run):
    # https://docs.github.com/en/free-pro-team@latest/rest/reference/repos#releases
    # No paging, assume no-one will install a really old version
    r = urlopen('https://api.github.com/repos/ome/www.openmicroscopy.org/releases')
    assert r.code == 200
    releases = json.load(r)

    if version == 'latest':
        release = releases[0]
    else:
        release = None
        for check in releases:
            if check['tag_name'] == version:
                release = check
                break
        if release is None:
            print('Failed to find release {}'.format(version))
            sys.exit(1)

    tag = release['tag_name']

    dst = os.path.join(parent, tag)
    sym = os.path.join(parent, 'html')

    if os.path.exists(dst):
        print('{} already exists, not downloading'.format(dst))
    elif dry_run:
        print('Would download {}'.format(dst))
    else:
        www_assets = [a for a in release['assets'] if a['name'] == 'www.openmicroscopy.org.tar.gz']
        assert len(www_assets) == 1, 'Expected one asset named www.openmicroscopy.org.tar.gz'
        url = www_assets[0]['browser_download_url']

        h = urlopen(url)
        thetarfile = tarfile.open(fileobj=h, mode="r|gz")
        thetarfile.extractall(path=dst)
        h.close()
        print('Extracted {} to {}'.format(url, dst))

    if os.path.exists(sym):
        assert os.path.islink(sym), '{} is not a symlink'.format(sym)
        target = os.readlink(sym)
        if target == dst:
            print('{} already points to {}, no changes made'.format(dst, sym))
            sys.exit(0)
        elif dry_run:
            print('Would remove symlink {} (target={})'.format(sym, target))
        else:
            print(target)
            # Mutator
            os.remove(sym)
    if dry_run:
        print('Would symlink {} to {}'.format(dst, sym))
    else:
        # Mutator
        os.symlink(dst, sym)
        print('Symlinked {} to {}'.format(dst, sym))
    sys.exit(0)


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    xor = parser.add_mutually_exclusive_group()
    xor.add_argument('-n','--dry-run', action='store_true', default=True)
    xor.add_argument('-f','--force', action='store_false', dest="dry_run")
    parser.add_argument(
        '--parentdir', default='/var/www/www.openmicroscopy.org',
        help='Web-server directory for www.openmicroscopy.org')
    parser.add_argument('--version', default='latest',
        help='Release to download')
    args = parser.parse_args()
    main(args.version, args.parentdir, args.dry_run)
