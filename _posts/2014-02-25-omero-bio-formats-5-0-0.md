---
layout: post
title: Release of OMERO & Bio-Formats 5.0.0
intro-blurb: The OME team is pleased to announce the full production-ready release of OMERO & Bio-Formats 5.0.0
---
Today we are releasing OMERO and Bio-Formats 5.0.0. This is a full,
production-ready release of OME's new software tools. With this
release, the 4.4.x line enters maintenance mode and while we will
continue to support it throughout 2014, it will only be updated for
major bug fixes. We've provided scripts to upgrade OMERO 4.4.x
installations to 5.0.0.

The 5.0.0 release represents a major change in how the OMERO server
handles files at import compared with all previous versions of
OMERO. Referred to as 'OMERO.fs', this change means that OMERO uses
Bio-Formats to read your files directly from the filesystem in their
original format, rather than converting them and duplicating the pixel
data for storage. Images saved in an OMERO 5.0.0 repository can be
accessed by other 3rd party software (this is read-only access).
OMERO also now reports on the file integrity at upload so you know if
your file is safely stored.

Bio-Formats 5.0.0 includes substantially improved handling of complex
multidimensional datasets, including tile-based formats used in
digital pathology and support for several new file formats; Aperio
AFI, Inveon, MPI-BPC Imspector, Bio-Rad SCN, Yokogawa CellVoyager [1],
LaVision Imspector, PCORAW, and Woolz [2].

In addition, 5.0.0 continues our effort to support new
multidimensional images. We previously enabled support for FLIM data
in OMERO.server, and the FLIMfit application built by the Imperial
team. We've now added support for FLIM data in OMERO.insight.

The changes in Bio-Formats and OMERO 5.0.0 are especially important
for sites working with large multi-GB datasets, e.g., long time lapse,
HCS and digital pathology data. With this foundation, we will deliver
support for other multidimensional modalities (e.g., light sheet
microscopy) later in 2014.

Other features of this release are:

For Bio-Formats:

- Launched 'bioformats_package.jar', a new bundled plugin for ImageJ to replace 'loci_tools.jar'
- Added support for 8 new formats (see above)
- Fixed support for Becker & Hickl .sdt files with multiple blocks
- Fixed tiling support for TIFF, Hamamatsu .ndpi, JPEG, and Zeiss .czi files
- Added support for populating and parsing ModuloAlong{Z, C, T} annotations for FLIM/SPIM data
- Many bug fixes (especially Nikon ND2, Zeiss .czi, CellWorX)
- Updated Bio-Formats tools [command line documentation](https://www.openmicroscopy.org/site/support/bio-formats5.0/users/comlinetools/index.html)
- Updated component names, .jar file names, and Maven artefact names
- Improved continuous integration testing

The software is available from [archived
downloads](https://downloads.openmicroscopy.org/bio-formats/5.0.0).


For OMERO:

- Support for password salting to improve server security
- Updated indexing to help improve search performance
- OMERO.web upgrade to Django 1.6 allowing more flexibility for developing new web apps
- Initial steps towards supporting MATLAB and Jython scripts
- CLI plugin allowing access to tags and tag sets from the [command line](https://docs.openmicroscopy.org/latest/omero5.0/users/command-line-interface.html)
- Modulo (FLIM/SPIM) support in OMERO.insight
- Many bug fixes including thumbnails, plates, tables and LDAP
- New help guide for installing the plugins needed to use [OMERO with ImageJ](https://help.openmicroscopy.org/imagej.html)
- 'What's New' summaries for [users](https://docs.openmicroscopy.org/latest/omero5.0/users/whatsnew.html), [sysadmins](https://docs.openmicroscopy.org/latest/omero5.0/sysadmins/whatsnew.html) and [developers](https://docs.openmicroscopy.org/latest/omero5.0/developers/whatsnew.html) to help you quickly identify updates

The software is available from [archived
downloads](https://downloads.openmicroscopy.org/omero/5.0.0).

Upgrade information is available in the [server upgrade
documentation](https://docs.openmicroscopy.org/latest/omero5.0/sysadmins/server-upgrade.html).

In the near future, the OME team will release updates to several
applications, including OMERO.searcher, u-track and several others.

NOTE: Sites that use Java Webstart may see Java security exceptions.
Please see [this forum
post](https://www.openmicroscopy.org/community/viewtopic.php?f=5&t=7410)
for more information. We are working on obtaining code signing certs
and will deliver signed client builds as soon as we can.

Any problems or comments, please use the OME [forums or mailing
lists]({{ site.baseurl }}/support/).


[1] Thanks to Jean-Yves Tinevez
[2] Thanks to Bill Hill