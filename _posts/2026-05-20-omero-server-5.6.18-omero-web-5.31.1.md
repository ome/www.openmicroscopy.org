---
layout: post
title: Release of OMERO.server 5.6.18 and OMERO.web 5.31.1
intro-blurb: The OME team is pleased to announce the release of OMERO.server 5.6.18 and OMERO.web 5.31.1
---

Today we are releasing OMERO.server 5.6.18 and OMERO.web 5.31.1, which includes some
bugfixes to the UI and backend improvements.

OMERO.server 5.6.18 includes an upgrade of Bio-Formats from 8.4.0 to 
[8.5.0]({{ site.baseurl }}/2026/03/18/bio-formats-8-5-0.html). The new version
will invalidate previous Bio-Formats cache files. Please refer to the
[upgrade documentation](https://omero.readthedocs.io/en/stable/sysadmins/server-upgrade.html)
for further information.

The following OMERO.server dependencies have been upgraded:

- `org.openmicroscopy:omero-blitz` from 5.8.4 to 5.8.5
- `org.openmicroscopy:omero-common` from 5.7.4 to 5.7.5
- `org.openmicroscopy:omero-gateway` from 5.10.5 to 5.11.0
- `org.openmicroscopy:omero-model` from 5.7.4 to 5.7.5
- `org.openmicroscopy:omero-server` from 5.7.4 to 5.7.5
- `org.openmicroscopy:omero-renderer` from 5.6.4 to 5.6.5
- `org.openmicroscopy:omero-romio` from 5.8.4 to 5.8.5

OMERO.web 5.31.1 includes a few bug fixes - see the
[OMERO.web release](https://github.com/ome/omero-web/releases/tag/v5.31.1)
and [notes on upgrading](https://github.com/ome/omero-web/blob/v5.31.1/UPGRADING.md).

### Installing the Software

OMERO.server 5.6.18 has been tested with OMERO.py 5.22.1 and OMERO.web 5.31.1.
We recommend that you upgrade all components accordingly on your deployments.

OMERO.server is available from the [downloads page]({{ site.baseurl }}/omero/downloads/)
and OMERO.web is available from PyPI - see 
[here](https://pypi.org/project/omero-web/5.31.1/).

Official server Docker images based on [Rocky Linux 9](https://rockylinux.org/) are available as usual on Docker Hub:

* https://hub.docker.com/r/openmicroscopy/omero-server
* https://hub.docker.com/r/openmicroscopy/omero-web-standalone
* https://hub.docker.com/r/openmicroscopy/omero-web


You are invited to discuss this announcement on
[the image.sc forum](https://forum.image.sc/tags/c/data-management/29/omero).

All the best with your upgrades,

The OME Team
