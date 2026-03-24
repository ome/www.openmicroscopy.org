---
layout: post
title: End of support for Java 8
intro-blurb: Java 8 support will be removed in Bio-Formats 9.0.0 and OMERO 5.7.0
---

Java 8 was released in 2014 and its support was introduced iteratively in
Bio-Formats 5 and OMERO 5 between 2014 and 2015. More than a decade later, the
Java ecosystem has evolved significantly. In particular, the acquisition of Sun
Microsystems by Oracle was followed by changes in the development cycle with
long-term support (LTS) releases every two years as well as a series of
licensing changes (Binary Code License, No-Fee Terms and Conditions) which led
to a fragmentation of the Java Runtime Environment (JRE) and 
the Java Development Kit (JDK) into separate distributions.

There are now four Java LTS releases more recent than Java 8: Java 11 (released
in September 2018), Java 17 (released in September 2021), Java 21 (released
in September 2023) and Java 25 (released in September 2025).
The OpenJDK 8 builds will remain supported on some distributions like
Azul Zulu and Eclipse Temurin until 2030, but other vendor distributions
like RedHat or Oracle have dropped or are in the process of dropping support
for OpenJDK 8 and 11. We are seeing an increasing number of libraries &
applications dropping support for Java 8.

Starting with Bio-Formats 9.0.0 and OMERO 5.7.0, we will also remove support
for Java 8. Java 11 will become the minimal runtime requirement. For most
operating systems where OME applications are installed, newer versions of the
JRE are available via the standard package managers. Users should plan to
upgrade their production environments to newer LTS versions like Java 21 by
the end of 2026.

For developers, the libraries should remain compatible with Java 11 at runtime
but the minimum build requirement will be further increased to 17 or 21 for
some projects.
