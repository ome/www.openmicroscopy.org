---
layout: post
title:  Release of OMERO & Bio-Formats 5.0.7
intro-blurb: The OME team is pleased to announce the release of OMERO & Bio-Formats 5.0.7
---

Today we are launching 5.0.7, a bug-fixing release.

For OMERO this includes:

    * Rendering improvements including 32 bit and float support
    * Vast improvements in Mac launching (separate clients for your Java version)
    * Faster import of complex plates
    * OMERO.dropbox improvements
    * ROI and measurement tool fixes
    * OMERO.matlab updates

Bio-Formats fixes include:

    * ND filter parsing for DeltaVision
    * Timepoint count and original metadata parsing for Metamorph
    * Build issues when Genshi or Git are missing
    * LZW image decoding
    * Minor core formats (OME/XML/TIFF) improvements
    * Minor doc improvements - Eclipse build instructions and documenting using Bio-Formats in Python (extensive developer doc improvements coming in 5.1)

The software is available from
[OMERO archived downloads](https://downloads.openmicroscopy.org/omero/5.0.7/)
and
[Bio-Formats archived downloads](https://downloads.openmicroscopy.org/bio-formats/5.0.7/)


For information on upgrading your server, see the [upgrade guide](https://docs.openmicroscopy.org/latest/omero5.0/sysadmins/server-upgrade.html) for system administrators.

For full details of the next major release, see the [5.1 milestone page](https://trac.openmicroscopy.org/ome/milestone/5.1.0)

For any problems or comments, please use the [OME Forums or mailing lists]({{ site.baseurl }}/support/)
