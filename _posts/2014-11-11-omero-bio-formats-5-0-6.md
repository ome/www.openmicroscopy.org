---
layout: post
title: Release of OMERO & Bio-Formats 5.0.6
intro-blurb: The OME team is pleased to announce the release of OMERO & Bio-Formats 5.0.6
---
Two security vulnerabilities have been discovered in versions of OMERO up to and including 5.0.5.
**System administrators should review the "Security Vulnerabilities" pages on the OME website:**

[https://www.openmicroscopy.org/site/products/omero/secvuln
](https://www.openmicroscopy.org/site/products/omero/secvuln)

We do not consider either 2014-SV3 CSRF or 2014-SV4 POODLE to be critical vulnerabilities due to the difficulty of exploiting them. **However, we do highly recommend all installations be upgraded.**

The new version is available [archived downloads](http://downloads.openmicroscopy.org/omero/5.0.6/)

For information on the upgrade from 4.4.x or 5.0.x to 5.0.6, see the [OMERO 5 instructions](http://www.openmicroscopy.org/site/support/omero5.0/sysadmins/server-upgrade.html)


Bio-Formats 5.0.6 is also being released, although not due to a security vulnerability. Bug fixes include:

-  Pixel sign for DICOM images
-  Image dimensions for Zeiss CZI and Nikon ND2
-  Support for Leica LIF files produced by LAS AF 4.0 and later

The new version is available from   [archived downloads](http://downloads.openmicroscopy.org/bio-formats/5.0.6/)


**Note that OpenJDK8 is not yet supported by OMERO or Bio-Formats.**

For any problems or comments, please use the [OME Forums or mailing lists]({{ site.baseurl }}/support/)
