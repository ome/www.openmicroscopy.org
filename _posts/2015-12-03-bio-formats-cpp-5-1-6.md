---
layout: post
title: Release of Bio-Formats C++ 5.1.6
intro-blurb: The OME team is pleased to announce the release of Bio-Formats C++ 5.1.6 binary builds and ome-cmake-superbuild package
---
Today we have released the binary builds of Bio-Formats C++ 5.1.6, together with the ome-cmake-superbuild package used for building Bio-Formats C++ and its dependencies on Windows and other platforms.

See [archived downloads](http://downloads.openmicroscopy.org/bio-formats-cpp/5.1.6/) for links to the source releases, documentation and API reference, and binary builds for a number of platforms.

Bio-Formats C++ changes include:

- Dropped superbuild option (not needed now it is a separate release)
- Added support for path introspection on Windows (used to determine the location of the schema files); this now matches the behaviour for all other platforms
- Disabled bounds checks in the PixelBuffer multi-dimensional array code for Debug builds for performance reasons (it is always disabled for Release builds)
- Updated doxygen documentation links (N.B. will come into effect next week when Bio-Formats 5.1.7 is released)
- Source releases are now xz compressed

Superbuild changes include:

- Added support for caching builds of prerequisites for future rebuilds (build-cache and python-cache options); this saves time if doing many builds with the same prerequisites.
- Component changes:
    - Bioformats: Updated to 5.1.6 (uses boost-1.59)
    - boost-1.58: Removed (no longer used)
    - png: Updated to 1.6.19

The software release is available at [archived downloads](http://downloads.openmicroscopy.org/bio-formats-cpp/5.1.6).

For any problems or comments, please use the [OME Forums or mailing lists]({{ site.baseurl }}/support/)
