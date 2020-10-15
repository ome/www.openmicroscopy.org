---
layout: post
title: Release of OMERO & Bio-Formats 5.0.1
intro-blurb: The OME team is pleased to announce the release of OMERO & Bio-Formats 5.0.1
---
Today we are releasing OMERO and Bio-Formats 5.0.1. This a bug-fixing
release covering a number of issues as listed below.

Our plan for the 5.0.x line is to do a series of these bug-fixing
releases. Therefore, if you are having an issue with 5.0.0 which has
not yet been addressed, be assured that 5.0.2 will be following with
further fixes as soon as possible. Note that only the jar-signing
issue will be back-ported to the 4.4.x line - we will be releasing
4.4.11 imminently with this fix included.

For OMERO, this release includes:

-  Code signing to fix the Java Web Start issues
-  New import scenarios [documentation](https://docs.openmicroscopy.org/latest/omero5.0/sysadmins/index.html#data-import-options) including for the new 'in-place' import capability
-  Significant stability improvements to search, possibly requiring [re-indexing](https://docs.openmicroscopy.org/latest/omero5.0/developers/Modules/Search.html?highlight=indexing#re-indexing) if you are having issues
-  Correct a serious CLASSPATH issue in OMERO.matlab in older versions of MATLAB 
-  Bug fixes and improvements in OMERO.insight for groups, user menus, file name settings, metadata, cut/copy/paste operations,
-  Bug fixes and improvements in OMERO.web including image IDs for Wells, image sorting, and timeouts on upgrade checks.

Bio-Formats improvements include:

-  Adding image pyramid support for CellSens .vsi data
-  Several bug fixes, including:
    - Woolz import into OMERO
    - Cellomics file name parsing (thanks to Lee Kamentsky)
    - Olympus FV1000 timestamp support (thanks to Lewis Kraft and Patrick Riley)
    - (A)PNG large image support
    - Zeiss .czi dimension detection for SPIM datasets
    - Speeding up OME-TIFF import
-  Performance improvements for Becker & Hickl .sdt file reading (thanks to Ian Munro)
-  Performance improvements to directory listing over NFS

Developers might be interested to note that we've updated the
following libraries:

-  slf4j: 1.7.6
-  logback: 1.1.1
-  jgoodies-forms: 1.7.2

Full details are available on the OMERO [GitHub
milestone](https://github.com/openmicroscopy/openmicroscopy/issues?milestone=20&page=1&state=closed)
and the Bio-Formats [GitHub
milestone](https://github.com/openmicroscopy/bioformats/issues?milestone=14&page=1&state=closed)
pages.

The software is available from [OMERO archived downloads](https://downloads.openmicroscopy.org/omero/5.0.1/) and [Bio-Formats archived downloads](https://downloads.openmicroscopy.org/bio-formats/5.0.1/).

For information on upgrading your server, see the [server upgrade
documentation](https://docs.openmicroscopy.org/latest/omero5.0/sysadmins/server-upgrade.html).

Any problems or comments, please use the OME [forums or mailing
lists]({{ site.baseurl }}/support/).
