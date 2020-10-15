---
layout: post
title: Release of OMERO & Bio-Formats 5.0.4
intro-blurb: The OME team is pleased to announce the release of OMERO & Bio-Formats 5.0.4
---
Today we are launching 5.0.4, a bug-fixing release.

For OMERO this includes:

-  fixes for Java 8 issues - both the OMERO clients and OMERO.server should now be compatible with this Java update
-  a fix for uploading masks in OMERO.matlab

Bio-Formats improvements include:

-  multiple fixes for the .ND2 formats
-  Java 8 fixes
-  support for PicoQuant .bin files (thanks to Ian Munro)


Full details are available on the [OMERO GitHub milestone](https://github.com/openmicroscopy/openmicroscopy/issues?q=milestone%3A5.0.4+is%3Aclosed) and the [Bio-Formats GitHub milestone](https://github.com/openmicroscopy/bioformats/issues?q=milestone%3A5.0.4+is%3Aclosed) pages.

The software is available from
[OMERO archived downloads](https://downloads.openmicroscopy.org/omero/5.0.4/)
and
[Bio-Formats archived downloads](https://downloads.openmicroscopy.org/bio-formats/5.0.4/)

For information on upgrading your server, see the upgrade guide for system administrators - [server upgrade](https://docs.openmicroscopy.org/latest/omero5.0/sysadmins/server-upgrade.html)

Note that you need to upgrade your OMERO.server to take advantage of the improved support for .ND2 in Bio-Formats.

For full details of the next major release, see the [5.1 milestone page](https://trac.openmicroscopy.org/ome/milestone/5.1.0).
We currently intend 5.0.4 to be the last update to the 5.0.x series. Our development focus is now on the OME 5.1 line and updating the OME Data Model for the next schema release, and while we will continue to support both 4.4.11 and 5.0.4 through early 2015, we will only perform critical bug fixes on the 5.0.x line and do not intend any fixes on the 4.4.x line.

For any problems or comments, please use the [OME Forums or mailing lists]({{ site.baseurl }}/support/)
