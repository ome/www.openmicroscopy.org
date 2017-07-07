---
layout: post
title: Release of Bio-Formats C++ 5.1.5
intro-blurb: The OME team is pleased to announce the release of Bio-Formats C++ 5.1.5 binary builds and ome-cmake-superbuild package
---
Today we have released the binary builds of Bio-Formats C++ 5.1.5, together with the ome-cmake-superbuild package used for building Bio-Formats C++ and its dependencies on Windows and other platforms.

See [archived downloads](https://downloads.openmicroscopy.org/bio-formats-cpp/5.1.5/) for links to the source releases, documentation and API reference, and binary builds for a number of platforms which now include Windows with VS2013.

Bio-Formats changes:

* TIFF strip/tile row and column calculations corrected to compute the correct row and column count
* several compiler warnings removed (false positive warnings in third-party headers disabled, and additional warnings fixed)
* it is now possible to build with Boost 1.59 and compile with a C++ 14 compiler

CMake Super-Build changes:

* Upgrade Boost to 1.59
* Use tar source release; this permits building on platforms which could not unpack the source zip
* Add recursive dependency addition; this makes the superbuild much more adaptable for the use of optional and version-specific packages, and the addition of new packages
* Add required Python modules (genshi and sphinx) and their dependencies

CMake Super-Build components:

* bioformats 5.1.5
* boost 1.59
* bzip2 1.0.6
* icu 55.1
* libpng 1.6.17
* py-docutils 0.12
* py-genshi 0.7
* py-jinja2 2.7.3
* py-markupsafe 0.23
* py-pygments 2.0.2
* py-setuptools 18.3.2
* py-sphinx 1.2.3
* tiff 4.0.6
* xerces-c 3.1.2
* zlib 1.2.8

The software release is available at: [archived downloads](https://downloads.openmicroscopy.org/bio-formats-cpp/5.1.5)

Any problems or comments, please use the [OME Forums or mailing lists]({{ site.baseurl }}/support/)
