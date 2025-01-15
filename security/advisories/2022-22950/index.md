---
layout: security-advisory
filename: security
title: CVE-2022-22950 ("Spring Expression DoS Vulnerability")
---

Major news carriers have been reporting on the
[Spring Expression DoS Vulnerability](https://spring.io/security/cve-2022-22950/)
in Java applications that utilize Spring.


The OME team in Dundee as well as Glencoe Software have evaluated the libraries
used by OMERO.server, OMERO.insight as well as the OMERO micro-services. We
can say with confidence that OMERO and OMERO Plus are not vulnerable as they do
not utilize internally or expose programmatic usage of the SpEL API. As already
documented in the
[assessment of CVE-2022-22965]({{ site.baseurl }}/2022/04/01/spring-framework-issue.html),
neither pieces of software parse user input via Spring’s Data Binding
infrastructure.

OME and Glencoe will continue to monitor and evaluate the exposure of our
various software libraries to these and any other vulnerabilities.
