---
layout: post
title: Release of Bio-Formats 5.4.0
intro-blurb: The OME team is pleased to announce the release of Bio-Formats 5.4.0
---
Today we are releasing Bio-Formats 5.4.0 which includes the following changes:

File format improvements:

-  DICOM
    -  added support for DICOMDIR files, which allow multiple DICOM files in a single directory to be opened as a single dataset
    -  plane position values for values X, Y and Z are now being set in OME-XML
    -  correctly read the physical size X and Y values based on the available specification
-  Nikon NIS-Elements ND2
    -  performance improvements based on reading chunkmap. Processing of the chunkmap can be disabled via the MetadataOptions API using the boolean option 'nativend2.chunkmap'. For ImageJ users this option can be accessed via a checkbox in the Nikon ND2 section of the Bio-Formats configuration dialog 'Plugins --> Bio-Formats --> Bio-Formats Plugins Configuration' (thanks to Christian Sachs)
-  OME-TIFF
    -  added an option to save an OME-TIFF dataset as a binary TIFF and companion XML. This can be used via the bfconvert command line tool by setting the value of option 'ometiff.companion' to the name of the companion file to use. For example: `bfconvert -option ometiff.companion outputFile.companion.ome inputFile.tiff outputFile.ome.tiff`
-  CellVoyager
    -  metadata fixes specifically the naming of plates. Additional refactoring of the reader for general maintainability
-  Gatan Digital Micrograph
    -  previously missing Image-Instrument reference has been added to OME-XML
-  TiffSaver
    -  ensure open resources are closed under all possible scenarios
-  Zeiss CZI
    -  improved performance of large uncompressed images. When tiles from a large uncompressed image with no internal tiling are requested, only the specific tile specified in the call to openBytes is read from disk, instead of the entire image being read and then copied
-  Zeiss AxioVision ZVI (Zeiss Vision Image)
    -  ensure that the bitsPerPixel field is always set to match the final pixel type, and populate any channel colors that were parsed in the metadata. The bits per pixel update should only affect uint16 or int16 files where the acquisition bit depth is not a multiple of 8, and the RGB channel count is greater than 1

Updated build system:

-  updated dependency for NetCDF to 4.3.22
-  updated copyright headers from 2016 to 2017 and reviewed and fixed any incorrect header descriptions
-  documentation has been migrated to use '.rst' file format for Sphinx files
-  reviewed and cleaned up warnings such as unused variables and imports
-  added CellVoyager datasets to automated testing via continuous integration
-  unified the semantics for creating temporary directories within unit tests

Documentation improvements:

-  fixed link for PerkinElmer UltraVIEW system
-  fixed links for NIfTI public specification and data sets
-  available software for Hamamatsu ndpi has been updated from NDP.view to NDP.view2

The software is available to download now and will shortly be available from
the Java-8 update site for Fiji users ([archived downloads](http://downloads.openmicroscopy.org/bio-formats/5.4.0)).

Any problems or comments, please use the [OME Forums or mailing lists]({{ site.baseurl }}/support/).
