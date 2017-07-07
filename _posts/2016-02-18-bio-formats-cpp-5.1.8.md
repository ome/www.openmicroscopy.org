---
layout: post
title: Release of Bio-Formats-C++ 5.1.8
intro-blurb: The OME team i pleased to announce the release of Bio-Formats C++ 5.1.8
---
Today we have released the binary builds of Bio-Formats C++ 5.1.8, together with the ome-cmake-superbuild package used for building Bio-Formats C++ and its dependencies on Windows and other platforms.  With our current C++ development efforts being devoted to the upcoming 5.2.0 release, this release contains no new features, and is restricted to security updates in our third-party dependencies.  Future 5.1 releases will also be restricted to serious bugfixes and security updates.

See [archived downloads](http://downloads.openmicroscopy.org/bio-formats-cpp/5.1.8/) for links to the source releases, documentation and API reference, and binary builds for a number of platforms including Windows, Linux and MacOS X.

Bio-Formats changes:

- None

CMake Super-Build changes:

- Upgrade libpng to 1.6.21 (security update)

CMake Super-Build components:

-  bioformats 5.1.8
-  boost 1.59
-  bzip2 1.0.6
-  icu 55.1
-  libpng 1.6.21
-  py-docutils 0.12
-  py-genshi 0.7
-  py-jinja2 2.7.3
-  py-markupsafe 0.23
-  py-pygments 2.0.2
-  py-setuptools 18.3.2
-  py-sphinx 1.2.3
-  tiff 4.0.6
-  xerces-c 3.1.2
-  zlib 1.2.8

The software release is available at [archived downloads](http://downloads.openmicroscopy.org/bio-formats-cpp/5.1.8).

For any problems or comments, please use the [OME Forums or mailing lists]({{ site.baseurl }}/support/)
