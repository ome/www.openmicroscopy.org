---
layout: post
title: Release of Bio-Formats 5.2.3
intro-blurb: The OME team is pleased to announce the release of Bio-Formats 5.2.3
---
Today we are releasing Bio-Formats 5.2.3, a bug-fix release. 

Improvements include fixes for three formats:

*  CZI
    -  fixed imageCount for RGB images
*  ICS writing
    -  fixed ordering of image dimensions
*  DeltaVision
    -  fixed reading of large time dimensions

Other improvements:

*  Command-line tools
    -  bftools.zip now includes the version history as NEWS.rst (thanks to Gerhard Burger)
*  Code clean-up
    -  switched to String.indexOf(int) in GPL-licensed reader code so that a simpler library method can be used
    -  strings now extended with characters where possible
    -  completed deprecation of DataTools.sanitizeDouble()
    -  deprecated unused OSGi and ome-tools bundle build targets
*  Documentation
    -  documented versioning policy
    -  clarified supported versions for Micro-Manager and Olympus ScanR files
*  OME-XML changes
    -  bumped schema version number to 2 (schema namespace left unchanged)
    -  added acquisition modes BrightField, SweptFieldConfocal and SPIM
    -  added parsing for Laser Scan Confocal and Swept Field Confocal

Any problems or comments, please use the
[OME Forums or mailing lists]({{ site.baseurl }}/support/).

The software is available at:
[archived downloads](http://downloads.openmicroscopy.org/bio-formats/5.2.3).
