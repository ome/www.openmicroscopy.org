---
layout: post
title: Building open collaborations for the sustainable support of proprietary file formats
tags: file-formats community
categories: blog
---

The challenges and cost associated with the development and maintenance of
software for reading images stored in proprietary file formats (PFFs) have
been discussed at length in previous blog posts
[1](http://blog.openmicroscopy.org/file-formats/2014/10/16/file-formats/),
[2](http://blog.openmicroscopy.org/file-formats/community/2016/01/06/format-support/).
One approach to help address these issues is the development of community
collaborations that provide sustainable solutions to PFF support in
Bio-Formats.

In this blog post, we want to describe two successful examples of partnerships
established with well-recognized commercial entities,
[Carl Zeiss Microscopy GmbH](http://www.zeiss.com/) and
[Intelligent Imaging Innovations (“3i”)](https://www.intelligent-imaging.com/)
and how this will result in more open, reusable code and better tools for the
imaging community.

## ZEISS: Open support for JPEG-XR compression

Some image acquisition systems built by Carl Zeiss Microscopy GmbH store
binary image data using [JPEG-XR](https://jpeg.org/jpegxr/) compression.
Open-source efforts to decode data stored using this technology have to date
been unsuccessful. As we have noted previously, the complexity of providing a
pure Java implementation of this compression scheme was simply too high to be
fully assumed by a non-profit, grant-funded organization like OME.

In response, the user community has raised their concerns to ZEISS and a
partnership has been established with
[Glencoe Software](
http://glencoesoftware.com/pressreleases/2016-08-30-glencoe-software-zeiss-partner-open-source-file-reader-whole-slide.html)
to add a Java-based JPEG-XR decoder to Bio-Formats. Thanks to extensive,
fruitful discussions with ZEISS all outputs of this partnership are publicly
available and all source code licensed identically to other OME projects. Some
public examples of this ongoing work are:

* [JPEG-XR Trello card targeting Bio-Formats 5.3.x](https://trello.com/c/OHKk0BiI/3-jpeg-xr)
* [GitHub fork of jxrlib where work on Java bindings is ongoing](https://github.com/glencoesoftware/jxrlib)

In addition to being a powerful example of how commercial partners can work
together, its philosophical implications should not be understated. In
particular, the openness of the result demonstrates a cultural shift in the
commercial instrumentation community towards the appreciation of
community-based open-source projects.

## 3i: Maintaining a native reader

3i designs and manufactures systems for biological imaging, powered by their
SlideBook software. Maintaining Bio-Formats support alongside the fast
development of the SlideBook format and their multiple versions has also
proven to be challenging. Over the last five years, developers in the 3i team
have been building contact with the Bio-Formats development team to implement
a [native solution to read SlideBook image formats](https://www.openmicroscopy.org/community/viewtopic.php?f=6&t=7653&p=14823&hilit=slidebook#p14823).

A first version of a native Slidebook reader for 32-bit Windows was integrated
and released as part of
[Bio-Formats 5.1.2](https://www.openmicroscopy.org/community/viewtopic.php?f=11&t=7822).
Following discussions with members of the 3i team who attended the 2016 OME
Users Meeting, this reader has been separated from the Bio-Formats source code
and is completely [maintained by the 3i team](http://www.openmicroscopy.org/info/slidebook).  As of Bio-Formats 5.2.0,
the 3i reader became fully pluggable into Bio-Formats e.g. via ImageJ/Fiji.
The 3i library is the first Bio-Formats reader where the development, quality
control and release processes are fully managed by a third-party.

Support has also been added for Linux and Mac OS X platforms with 32 and 64 bit architectures. Integration into a platform like OMERO is an obvious next step.

## What’s next

Collaboration and integration with different organisations undoubtedly comes
at some cost: there are differences in objectives, priorities, process and
culture to reconcile. However, our experience in these partnerships has been
uniformly positive and the collaborations have been efficient and productive.
We believe one under-appreciated aspect of open-source development is the
ability to adapt to different scenarios and requirements, in order to achieve
outcomes that benefit the whole community. We look forward to growing these
kinds of collaborations for the community’s benefit.
