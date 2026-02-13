---
layout: post
title: Release of OMERO.server 5.6.17 and OMERO.web 5.31.0
intro-blurb: The OME team is pleased to announce the release of OMERO.server 5.6.17 and OMERO.web 5.31.0
---

Today we are releasing OMERO.server 5.6.17 and OMERO.web 5.31.0, which includes a number of
bugfixes to the UI and backend improvements.

### OMERO.server 5.6.17

This bug-fix release of OMERO.server which includes:

-   an upgrade of Bio-Formats from 8.2.0 to 8.4.0. The new version will invalidate previous Bio-Formats
    cache files. Please refer to the
    [upgrade documentation](https://omero.readthedocs.io/en/stable/sysadmins/server-upgrade.html)
    for further information.
-   an upgrade of the OMERO scripts from 5.9.1 to 5.10.0. The new version includes several bug fixes as
    well as the ability to specify custom labels in the Split View Figure script

The IceGrid templates have been updated to use a local temporary directory, `var/tmp`, for the Java processes. This change allows the server and notably Bio-Formats to remain fully functional on hardened environments where the noexec mount option has been set on the `/tmp` partitition.


The following OMERO.server dependencies have been upgraded:

- `org.openmicroscopy:omero-blitz` from 5.8.3 to 5.8.4
- `org.openmicroscopy:omero-common` from 5.7.3 to 5.7.4
- `org.openmicroscopy:omero-gateway-java` from 5.10.3 to 5.10.5
- `org.openmicroscopy:omero-model` from 5.7.3 to 5.7.4
- `org.openmicroscopy:omero-server` from 5.7.3 to 5.7.4
- `org.openmicroscopy:omero-renderer` from 5.6.3 to 5.6.4
- `org.openmicroscopy:omero-romio` from 5.8.3 to 5.8.4


### OMERO.web 5.31.0

OMERO.web 5.31.0 now requires Python 3.10, 3.11, or 3.12 and Django 5.2 LTS and delivers
a number of bug fixes and UI improvements.

Please see the [OMERO.web release](https://github.com/ome/omero-web/releases/tag/v5.31.0)
and [notes on upgrading](https://github.com/ome/omero-web/blob/v5.31.0/UPGRADING.md).

### Installing the Software

OMERO.server 5.6.17 has been tested with OMERO.py 5.22.0 and OMERO.web 5.31.0.
We recommend that you upgrade all components accordingly on your deployments.

OMERO.server is available from the [downloads page]({{ site.baseurl }}/omero/downloads/)
and OMERO.web is available from PyPI - see 
[here](https://pypi.org/project/omero-web/5.31.0/).

Official server Docker images based on [Rocky Linux 9](https://rockylinux.org/) are available as usual on Docker Hub:

* https://hub.docker.com/r/openmicroscopy/omero-server
* https://hub.docker.com/r/openmicroscopy/omero-web-standalone
* https://hub.docker.com/r/openmicroscopy/omero-web


You are invited to discuss this announcement on
[the image.sc forum](https://forum.image.sc/tags/c/data-management/29/omero).

All the best with your upgrades,

The OME Team
