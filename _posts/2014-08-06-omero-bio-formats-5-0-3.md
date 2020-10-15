---
layout: post
title: Release of OMERO & Bio-Formats 5.0.3
intro-blurb: The OME team is pleased to announce the release of OMERO & Bio-Formats 5.0.3
---
Today we are releasing OMERO and Bio-Formats 5.0.3. This a bug-fixing release covering a number of issues as listed below.

Bio-Formats improvements include:

- improved metadata saving in MATLAB functions
- many bug fixes for ND2 files
- several other bug fixes, including:
    - LZW image decoding
    - Stage position parsing for Zeiss CZI
    - Exposure time units for ScanR
    - Physical pixel size units for DICOM
    - NDPI and Zeiss LSM files larger than 4GB
    - Z and T dimensions for InCell 6000 plates
- Export of RGB images in ImageJ

** Note that if you want to take advantage of these improvements to ND2 file support in OMERO, you will need to upgrade your server to 5.0.3 as well as your clients. If you find any bugs, we encourage you to submit the files that are not handled correctly via our [QA system](https://www.openmicroscopy.org/qa2/qa/upload/).**

For OMERO users, this release includes:

- further improvements to the searching functionality in all the clients.
- group owners may adjust group permissions.
- Webclient: Group user switching now works on tablets and handles long group/user lists better.
- Webclient: Downloading of original files is now available when multiple images are selected.

Don't miss the new User guide [search page](https://help.openmicroscopy.org/search.html)!

Developers, script creators, and other power users may be interested in:

- the migration to Sphinx for the auto-generated Python API documentation
- OMERO.matlab: support for upload of large file annotations

** Though several Java 8 issues have recently been seen, we did not have time to fix them for 5.0.3. We suggest staying on Java 7 with all current versions of OMERO and Bio-Formats.**

For system administrators, changes include:

- a number of further search indexing fixes beyond those in 5.0.2.
- modified import template path, including new expansion terms and the ability to migrate individual file sets
- superficial checksum available for fast in-place import as well as in-place import support on Windows
- complete reworking of how the Java services configure their memory settings
- a large redesign of the Sphinx documentation for system administrators including sections on search and performance configuration and glossary of the server configuration properties
- several CLI fixes including the -g option for import as, better support for non-ASCII characters

** [Re-indexing](https://docs.openmicroscopy.org/latest/omero5.0/sysadmins/search.html) your server may significantly improve the search results.**

Note that the generated Apache 2.2 config contains a Rewrite rule `(RewriteRule ^/?$ /omero/ [R])` which no longer works (404 error), possibly due to changes in the OMERO.web custom prefix auto-configuration. Removing the rule fixes things.

Further details are available on [Trac](https://trac.openmicroscopy.org/ome/milestone/5.0.3)

To see details of the actual code changes and the specific issues they are addressing, refer to the GitHub milestone pages for OMERO and Bio-Formats.

The software is available from
[OMERO archived downloads](https://downloads.openmicroscopy.org/omero/5.0.3/)
and
[Bio-Formats archived downloads](https://downloads.openmicroscopy.org/bio-formats/5.0.3/)

For information on upgrading your server, see [server upgrade](https://docs.openmicroscopy.org/latest/omero5.0/sysadmins/server-upgrade.html)

For any problems or comments, please use the [OME Forums or mailing lists]({{ site.baseurl }}/support/)
