---
layout: post
title: Release of OMERO & Bio-Formats 5.1.0
intro-blurb: The OME team is pleased to announce the release of OMERO & Bio-Formats 5.1.0
---

Today we are releasing OMERO and Bio-Formats 5.1.0. This is a full, production-ready release of OME's new software tools. With this release, the 5.0.x line enters maintenance mode and while we will continue to support it throughout 2015, it will only be updated for major bug fixes and security issues. We will not be releasing any further updates to the 4.4.x line.

The 5.1.0 release updates the Data Model to the [January 2015 schema](https://docs.openmicroscopy.org/latest/ome-model/schemas/january-2015.html), including support for units and new more flexible user-added metadata, improves performance for a number of operations and formats, especially import times for large datasets such as HCS and SPIM, fixes many bugs, and features a substantial code clean-up across the platform and upgrade to OMERO.web.

Bio-Formats 5.1.0 includes substantially improved performance with network file systems, and initial version of a native C++ implementation with its own viewer, improved support for ImageJ, and support for several new file formats; CellH5[1], Perkin Elmer Nuance[2], Amnis FlowSight[3], Veeco AFM, Zeiss .lms, I2I, plus support for writing Vaa3D data[4].

Other features of this release are:

For Bio-Formats:

    * Improvements to developer documentation
    * Improved support for opening and saving ROI data with ImageJ and other ImageJ improvements/fixes
    * Updated RandomAccessInputStream and RandomAccessOutputStream to read and write bits
    * Bug fixes for many file formats
    * Fixes and improvements to bfconvert

Full details can be found at [Bio-Formats version history](https://www.openmicroscopy.org/site/support/bio-formats5.1/about/whats-new.html)

The software is available at: [archived downloads](https://downloads.openmicroscopy.org/bio-formats/5.1.0) and the C++ implementation is available from: [archived downloads](https://downloads.openmicroscopy.org/bio-formats-cpp/5.1.0/)

For OMERO:

    * New key-value pairs annotations for adding experimental metadata
    * Improved workflow for rendering settings and parity between the clients
    * Import images to OMERO from ImageJ and save ROIs and overlays from ImageJ to OMERO
    * Changing groups and delete operations are now faster
    * Import times are much improved for large datasets
    * OMERO.mail lets admins configure the server to email users
    * Configurable server download policy for controlling the download of original files
    * Many developer updates such as removal of deprecated methods, updates to OMERO.web and the C++ implementation

Further details are available on the What's New pages:

[Users](https://docs.openmicroscopy.org/latest/omero5.1/users/whatsnew.html), [Sysadmins](https://docs.openmicroscopy.org/latest/omero5.1/sysadmins/whatsnew.html) and [Developers](https://docs.openmicroscopy.org/latest/omero5.1/developers/whatsnew.html).

External developers who have not been following the milestone releases should also read the 5.1.0-m1 to 5.1.0-m5 [Bio-Formats version history](https://docs.openmicroscopy.org/latest/omero5.1/users/history.html)

The software is available at [archived downloads](https://downloads.openmicroscopy.org/omero/5.1.0)

Upgrade information is at [server upgrade page](https://docs.openmicroscopy.org/latest/omero5.1/sysadmins/server-upgrade.html.

**NOTE: PostgreSQL 9.2 is the new minimum required version. Sysadmins who don't currently meet this will need to upgrade to a later version, 9.3+ is recommended.**

**NOTE: Upgrades to OMERO.web break both OMERO.figure (version 1.0.0 and earlier) and OMERO.webtagging (version 1.1.0 and earlier). We will be releasing updated versions which are compatible with OMERO 5.1 imminently but in the meantime, you should not upgrade if you rely on either of these optional extensions.**

For any problems or comments, please use the [OME Forums or mailing lists]({{ site.baseurl }}/support/)


[1] Thanks to Christophe Sommer [2] Thanks to Lee Kamentsky [3] Thanks to Lee Kamentsky and Sebastien Simard [4] Thanks to Brian Long
