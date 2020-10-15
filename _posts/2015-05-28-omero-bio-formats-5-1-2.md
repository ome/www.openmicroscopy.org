---
layout: post
title: Release of OMERO & Bio-Formats 5.1.2
intro-blurb: The OME team is pleased to announce the release of OMERO & Bio-Formats 5.1.2
---
Today we are releasing OMERO and Bio-Formats 5.1.2. This is a point release that contains bug-fixes, but also adds several new features to Bio-Formats and OMERO.

**Bio-Formats**

Bio-Formats 5.1.2 adds writing support for OME-TIFF to the native C++ implementation, allows export of OME BigTIFF, and adds a Slidebook6 reader (many thanks to Richard Myers of 3i - [Intelligent Imaging Innovations](https://www.intelligent-imaging.com)

Other improvements include:

* improved MATLAB developer documentation 
* preliminary work to make MATLAB toolbox work with Octave
* ImageJ fixes for getPlanePosition* macro extension methods and display of composite color virtual stacks
* many bug fixes for formats including:
    * Nikon ND2 - improved parsing of plane position and timestamp data
    * TIFF - reduced memory required to read color lookup tables
    * Zeiss LSM - improved parsing of 16-bit color lookup tables
    * Zeiss CZI - fixed ordering of original metadata table and reading of large pre-stitched tiled images
    * AIM - fixed handling of truncated files
    * Metamorph/MetaXpress TIFF - improved UIC1 metadata tag parsing
    * Leica LIF - improved metadata handling

Full details can be found at [Bio-Formats version history](https://www.openmicroscopy.org/site/support/bio-formats5.1/about/whats-new.html)

The software is available at
[archived downloads](https://downloads.openmicroscopy.org/bio-formats/5.1.2)
and the C++ implementation is available from
[archived downloads](https://downloads.openmicroscopy.org/bio-formats-cpp/5.1.2/)

**OMERO**

OMERO 5.1.2 features a number of bug fixes and also introduces some new functionality. 

Improvements include:

* Read-Write group support
* LDAP plugin can now set group owners
* auto log-in via webstart for users already logged into OMERO.web 
* ability to attach results tables from ImageJ/Fiji to your images in OMERO
* better delete functionality and warnings in the UI
* magnification values now displayed as multiplication factors (e.g. 40x) rather than percentages
* long file names more readable in OMERO.insight data tree
* various deployment fixes
* OMERO.web updates include:
    * image interpolation on zoom
    * optimization of plate grid and right-hand panel
    * download single original files
    * faster loading of large datasets

Critical bug fixes include:

* in-place import file handle leak
* various unicode and unit failures (thanks to Tristan Nowak for his help in identifying several of these bugs)
 
Full details are available at [OMERO version history](https://docs.openmicroscopy.org/latest/omero5.1/users/history.html)

The software is available at
[archived downloads](https://downloads.openmicroscopy.org/omero/5.1.2)

Upgrade information is at [server upgrade page](https://docs.openmicroscopy.org/latest/omero5.1/sysadmins/server-upgrade.html).


For any problems or comments, please use the [OME Forums or mailing lists]({{ site.baseurl }}/support/)
