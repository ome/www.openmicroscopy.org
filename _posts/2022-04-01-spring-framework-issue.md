---
layout: post
title: CVE-2022-22965 ("Spring Framework RCE") Assessment
categories: blog
---

Major news carriers have been reporting recently on Spring Framework Remote
Code Execution (RCE) vulnerabilities in Java applications that utilize Spring.
VMWare has also [posted](https://spring.io/blog/2022/03/31/spring-framework-rce-early-announcement)
on the issue in detail. It is fair to say that the specifics of mitigation
are still being worked out. However, both the OME team in Dundee as well as
Glencoe Software have evaluated the libraries used by OMERO.server and
OMERO.insight. We can say with confidence that OMERO and OMERO Plus
are not vulnerable as they do not utilize Spring MVC, Spring WebFlux, or
Tomcat. Neither pieces of software parse user input via Spring's Data Binding
infrastructure.
