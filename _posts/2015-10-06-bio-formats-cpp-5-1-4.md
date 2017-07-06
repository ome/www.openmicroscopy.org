---
layout: post
title: Release of Bio-Formats-C++ 5.1.4
intro-blurb: The OME team is pleased to announce the release of Bio-Formats-C++ 5.1.4 binary builds and ome-cmake-superbuild package
---
Today we have released the binary builds of Bio-Formats-C++ 5.1.4, together with the ome-cmake-superbuild package used for building Bio-Formats-C++ and its dependencies on Windows and other platforms.This is a new package split out from the Bio-Formats sources, which may be used to build the libraries required by Bio-Formats such as zlib, bzip2, icu, boost, libtiff and xerces-c.

The major goal of this release was porting Bio-Formats-C++ to Microsoft Windows, initially supporting Visual Studio 2013 (VS2013). This goal was realised, with Bio-Formats 5.1.4 (released on 07/09/15) being buildable with both VS2013 and also with VS2012.  The CMake Super-Build released today works with VS2013 with the "Visual Studio 12 2013" (msbuild) generator; work has been done to support additional versions of Visual Studio and additional generators, which will be completed in subsequent releases.

See [archived downloads](http://downloads.openmicroscopy.org/bio-formats-cpp/5.1.4/)
for links to the source releases, documentation and API reference, and binary builds for a number of platforms which now include Windows with VS2013.

Bio-Formats Windows portability changes:

-  Use pImpl in OME model objects to simplify future DLL exports
-  Provide compatibility snprintf(3) for VS2013 and VS2012
-  Use _putenv_s rather than setenv(3) with MSVC
-  Added workaround for missing va_copy() in VS2012
-  Made CMake use of shared or static libraries configurable; Windows currently uses static libraries until the libraries are updated to have the appropriate DLL exports
-  Corrected use of boost::filesystem to use the correct native path type on all platforms; the TIFF code now uses native paths and the wide version of TIFFOpen on Windows
-  Fixed a number of MSVC warnings, primarily unused variables in catch statements which GCC and clang don't warn about
-  Do not reuse or compare iterators with different containers; MSVC doesn't like this and it's technically incorrect
-  Updated unit tests to cope with minor floating point formatting differences on Windows
-  Corrected static initialisation ordering issues on Windows (and with static libraries) in a number of places; these are primarily static mappings used during program initialisation. Previously we were making some assumptions which only held true with ELF/Mach-O linkers.
-  Added missing directories to the include search path
-  Added missing includes where missing on Windows but implicit elsewhere
-  Reordered include order for lexical_cast to ensure usable MPL limits; added additional MPL tests with boost::variant to test the limits
-  Search for both Debug and Release libraries on Windows, so the correct Debug and Release library dependencies will always be used

Additional Bio-Formats changes:

-  Added additional functional checks for broken GCC <regex> implementation
-  Corrected return in Timestamp ostream output operator
-  Made CMake checks for xsd-fu failures stricter
-  Removed CMake warnings about duplicate targets created by xsd-fu
-  Default logging level set under all circumstances

CMake Super-Build components:

-  bioformats 5.1.4
-  boost 1.58
-  bzip2 1.0.6
-  icu 55.1
-  libpng 1.6.17
-  tiff 4.0.6
-  xerces-c 3.1.2
-  zlib 1.2.8

CMake Super-Build changes:

-  CMake Super-Build logic moved out of the bioformats source tree into a [separate source repository](https://github.com/ome/ome-cmake-superbuild)
-  Added ICU build
-  Added VS2012 support to Xerces-C build
-  Allowed use of generators other than Visual Studio's msbuild on Windows such as Ninja, to allow fast parallel building (not yet fully functional)
-  Allowed verbose building with the Ninja generator
-  Corrected libtiff symbol versioning
-  Updated libtiff to 4.0.6; this provides BigTIFF support for Windows
-  Allowed building from libtiff CVS HEAD

The software release is available at [archived downloads](http://downloads.openmicroscopy.org/bio-formats-cpp/5.1.4).

For any problems or comments, please use the [OME Forums or mailing lists]({{ site.baseurl }}/support/).
