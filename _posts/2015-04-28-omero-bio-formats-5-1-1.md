---
layout: post
title: Release of OMERO & Bio-Formats 5.1.1
intro-blurb: The OME team is pleased to announce the release of OMERO & Bio-Formats 5.1.1
---
Today we are releasing OMERO and Bio-Formats 5.1.1. This is a point release that contains bug-fixes, but also adds several new features to Bio-Formats and OMERO.

**Bio-Formats**

Bio-Formats 5.1.1 adds TIFF writing support to the native C++ implementation and substantially improves our support for Windows by fixing the remaining functional differences between Windows and Mac/Linux.

Other updates include:

    * improved performance of ImageJ plugin when working with ROIs

    * TIFF export - switch to BigTIFF if .tf2, .tf8, or .btf extensions are used

    * fixed upgrade checking to more accurately report when a new version is available

    * Many bug fixes for formats including:
        * Zeiss CZI - fixed ordering of multiposition data and improved support for RGB and fused images
        * Nikon ND2 - improved ordering of multiposition data
        * Leica LIF - improved metadata validity checks and excitation wavelength detection
        * Metamorph STK/TIFF - record lens numerical aperture and fixed millisecond values in timestamps
        * Gatan DM3 - correctly detect signed pixel data
        * Imaris HDF - fix channel count detection
        * ICS export - fix writing of files larger than 2GB

Full details can be found at [Bio-Formats version history](https://www.openmicroscopy.org/site/support/bio-formats5.1/about/whats-new.html)

The software is available at [archived downloads](https://downloads.openmicroscopy.org/bio-formats/5.1.1) and the C++ implementation is available from [archived downloads](https://downloads.openmicroscopy.org/bio-formats-cpp/5.1.1/)

**OMERO**

OMERO 5.1.1 focuses on user-facing issues and cleaning resources for developers. Improvements include:

For OMERO.web:

    * significant review of the web share functionality
    * correction of thumbnail refreshing
    * fixes to the user administration panel
    * fix for embedding of the Javascript image viewer

For OMERO.insight:

    * improved open actions
    * tidying of the menu structure
    * correction of the mouse zoom behavior
    * fix for the Drag-n-Drop functionality

Other updates include:

    * overhaul of the CLI session log-in logic
    * cleaning and testing of all code examples
    * further removal of the use of deprecated methods

The software is available at [archived downloads](https://downloads.openmicroscopy.org/omero/5.1.1)

Upgrade information is at the [server upgrade page](https://docs.openmicroscopy.org/latest/omero5.1/sysadmins/server-upgrade.html).

Any problems or comments, please use the [OME Forums or mailing lists]({{ site.baseurl }}/support/).
