#!/usr/bin/env venv/bin/python
# -*- coding: utf-8 -*-


import urllib2
import sys

DOWNLOADS_URL = "https://downloads.openmicroscopy.org/"
SUFFIXES = ['B', 'KB', 'MB', 'GB', 'TB', 'PB']


def get_bytes_length(name, version, artifact):
    url = "%s%s/%s/artifacts/%s" % (DOWNLOADS_URL, name, version, artifact)
    response = urllib2.urlopen(url)
    meta = response.info()
    return int(meta.getheaders("Content-Length")[0])


def humansize(nbytes):
    if nbytes == 0:
        return '0 B'
    i = 0
    while nbytes >= 1000 and i < len(SUFFIXES)-1:
        nbytes /= 1000.
        i += 1
    f = ('%.2f' % nbytes).rstrip('0').rstrip('.')
    return '%s %s' % (f, SUFFIXES[i])


def list_artifacts(name, version):
    url = "%s%s/%s/artifacts/SHA1SUMS" % (DOWNLOADS_URL, name, version)
    response = urllib2.urlopen(url)
    shasums = response.read()
    artifacts = []
    for i in shasums.split('\n'):
        lastitem = i.rsplit(' ')[-1]
        if lastitem:
            artifacts.append(lastitem)
    return artifacts


def usage():
    print "gen_sizes.py name version"
    sys.exit(1)


try:
    name = sys.argv[1]
    version = sys.argv[2]
except:
    usage()


for a in list_artifacts(name, version):
    print "%s: %s" % (a, humansize(get_bytes_length(name, version, a)))
