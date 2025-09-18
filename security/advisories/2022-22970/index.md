---
layout: security-advisory
filename: security
title: CVE-2022-22970 ("Spring Framework DoS via Data Binding to MultipartFile or Servlet Part")
---

Major news carriers have been reporting on the
[Spring Framework DoS Vulnerability](https://spring.io/security/cve-2022-22970/)
in Java applications that utilize Spring.

The OME team in Dundee as well as Glencoe Software have evaluated the libraries
used by OMERO.server, OMERO.insight as well as the OMERO micro-services. We
can say with confidence that OMERO and OMERO Plus are not vulnerable as they do
not handle file uploads via data binding to MultipartFile or Servlet Part.

OME and Glencoe will continue to monitor and evaluate the exposure of our
various software libraries to these and any other vulnerabilities.
