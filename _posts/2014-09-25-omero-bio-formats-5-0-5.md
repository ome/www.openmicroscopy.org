---
layout: post
title: Release of OMERO & Bio-Formats 5.0.5
intro-blurb: The OME team is pleased to announce the release of OMERO & Bio-Formats 5.0.5
---
Two security vulnerabilities have been discovered in versions of OMERO up to and including 4.4.11
and up to and including 5.0.4.

**System administrators should review the "Security Vulnerabilities"
pages on the OME website:**

[http://www.openmicroscopy.org/site/products/omero/secvuln](http://www.openmicroscopy.org/site/products/omero/secvuln)

The more critical of the two, 2014-SV2, provides a workaround which can and should be applied immediately.



An upgrade of all installations is highly recommended. The new versions are available from the
respective downloads page:

 - [archived downloads](http://downloads.openmicroscopy.org/omero/5.0.5/)
 - [archived downloads](http://downloads.openmicroscopy.org/omero/4.4.12/)

For information on the upgrade from 4.4.x or 5.0.x to 5.0.5, see the [OMERO 5 instructions](https://www.openmicroscopy.org/site/support/omero5.0/sysadmins/server-upgrade.html)

For information on the upgrade from 4.4.x to 4.4.12, see the OMERO4 instructions, but upgrading
directly to 5.0.5 would be preferred, see [server upgrade](https://www.openmicroscopy.org/site/support/omero4/sysadmins/server-upgrade.html)

Note that version 4.4.12 introduces the same password salting that is used in the 5.0 series.
The implications of this improvement to server security are described in a warning among the
server upgrade instructions.



Bio-Formats 5.0.5 is also being released, although not due to a security vulnerability.
Changes include:

 - Documentation improvements
 - Support for non-spectral Prairie 5.2 datasets

The new version is available from [archived downloads](http://downloads.openmicroscopy.org/bio-formats/5.0.5/).

For any problems or comments, please use the [OME Forums or mailing lists]({{ site.baseurl }}/support/)
