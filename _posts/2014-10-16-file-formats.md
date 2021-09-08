---
layout: post
title: The Joy of File Formats
tags: file-formats
categories: blog
---

### What's the problem?

Imaging technology-- including probes and molecular reporters, acquisition
systems, and data analysis tools-- is one of the great success stories of
modern science. From the mid-20th century onward, a steady stream of new
imaging modalities has been the foundation for modern life and biomedical
sciences. Since the late 1970s, the use of electronic detectors that detect
analog signals and convert them to digital measurements has rapidly
increased, transforming imaging into a computational science. Initially, rapid
growth of CPU power (cf.
[Moore's Law](http://en.wikipedia.org/wiki/Moore%27s_law)) kept pace with
improvements in detector speed, size, and cost, so
that image processing and analysis has largely been achieved on desktop or
laptop computers. However, in the past two decades, the combination of
increasingly sophisticated imaging techniques with improvements in automation
has again transformed imaging, from simply a science that makes use of
computational analysis into a data science, where tools for handling,
processing, sharing and storing TB-sized datasets become a critical part of
the discovery process. One of the annoying facts about data handling, and data
science in general, is that details that are normally considered "engineering,
not science"-- file formats, network configuration, application design,
software design and architecture-- become important, and in some cases the
limiting factor in making a scientific discovery.

Thus, this Blog, and our first topic, File Formats.

## Image data and metadata

A digital image is written to disk in a *file format* that stores the *pixel*
data (sometimes referred to as the binary data) and the *image metadata*. This
term is often a catch-all phrase, and ends up describing any data associated
with the pixel data that might have some value. Image metadata includes
detector settings, illumination parameters (e.g. in photon-based imaging), and
pulse sequences (e.g. in magnetic resonance imaging). Generally,
interpretation of an image requires access to image pixel data and image
metadata to correctly represent the dimensions of the image, the pixel size,
etc.

In our experience, we've seen many different implied definitions of image
metadata (we call them "implied" because it's rare for anyone to actually
define what they mean by image metadata). In some cases, image metadata
refers only to acquisition data. In other cases, it can also include derived
measurements or other analytic results. In OME, we call anything saved in an
incoming file format "image metadata". As we will see, this is a very broad
definition, but it is probably the only viable one to use.

## What's a file format?

A file format is a mechanism for storing data on digital media. It's a defined
way to read and write the pixel data and image metadata produced by a specific
imaging system onto a hard disk or other storage medium. With so many
different imaging modalities in use in the life and biomedical sciences, the
number of file formats has proliferated so that, in practice, every time a new
type or a new implementation of an imaging modality is developed, a new file
format is introduced to support this new system's image metadata. The result
is that there are approximately as many file formats as imaging systems
available. Most are private, in the sense that they are not openly documented 
and supported, so in OME, we refer to these as *proprietary file formats*
(PFFs).

## Data standards and lossy data storage

So why isn't there a single standard for image files?

![xkcd on how standards profilerate](http://imgs.xkcd.com/comics/standards.png)

[xkcd.com](https://xkcd.com/license.html)

There are have been several efforts to standardize image file formats-- DICOM,
OME-TIFF, NifTi and cellH5 are just some examples.  We've discussed the
advantages and disadvantages of various standards previously
([Linkert et al., 2010](http://jcb.rupress.org/content/189/5/777.full)).
Overall, data standards suffer from two inherent problems that limit their
practical implementation and utility, and thus their full adoption:

1. In rapidly innovating fields, like imaging, a data standard is always
   obsolete-- the next generation technology that has the community so excited
   has metadata structures or requirements that weren't anticipated when the
   standard was created. Either the standard must be updated or a new
   mechanism that supports the new modality developed.

2. Really an extension of above; a standard or specification will have as its
   foundation a data model, a specification of the relationships between the
   different data elements it supports. These definitions are critical-- they
   serve as a reference for anyone trying to understand or work with the
   standard, and they also serve as the basis for the development of software
   that reads and writes the standard. These powerful concepts underpin the
   standard file format and the model. However, when a new modality, or even a
   new implementation of an existing modality, requires a new, unanticipated
   data element or relationship, the model and format can't intrinsically
   support it.

Various attempts at dynamic or self-describing data models have been proposed
([Swedlow et al., 2003](http://www.sciencemag.org/content/300/5616/100.long);
[Goldberg et al., 2005](https://doi.org/10.1186/gb-2005-6-5-r47));
[Millard et al.,
2011](http://www.nature.com/nmeth/journal/v8/n6/full/nmeth.1600.html)) but in
practice, we have found that either a revised specification is necessary or
the new data is stored in the old model, with some loss of information and
data value (one of these days we'll write a blog entry on dynamic data models,
but the concepts and history are just too arcane to be addressed right now).

Maintaining a data model and the specification and software derived from it in
a rapidly advancing field like imaging is very difficult-- it's a constant
battle against guaranteed obsolescence. Some communities use standards
committees, others simply make updates available in a rather ad hoc way--
there are advantages and disadvantages to both. 

A further challenge to data standards is the need by most users for easy
customization-- a standard is acceptable as long as it supports some amount of
easy, often proprietary customization. In the DICOM medical imaging data
standard, "private fields" are used by the commercial imaging system
manufacturers to store proprietary metadata hidden from view from standard
image viewers.

## How different are different file formats?

Almost all file formats use an established or known standard-- for example,
TIFF to store the pixel data, XML to store metadata and so on. Several use
some extension of these basic standards. While many use roughly similar
mechanisms to store pixel data and image metadata, in most cases the
specific implementations differ enough to require a specific reader for every
file format.

Since the 1990s, the push towards multidimensional imaging has meant that an
"image" contains frames from a combination of several optical sections,
channels, time points, phases, etc. The pixel data from each frame
can be stored as individual files or sometimes combined into multi-frame
files, e.g. all the frames from a single timepoint can be stored as a
multi-page TIFF.
The image metadata is usually stored in a separate text file sometimes as free
text, sometimes in a format like XML. The result is that a single
multidimensional image or imaging experiment is often stored in dozens,
sometimes hundreds of individual files containing some combination of pixel
data and image metadata. Many formats store these files in several tiered
directories or folders, coding metadata in the directory hierarchy. Keeping
track of data from an experiment stored in this fashion can be difficult for
users. Perhaps more importantly, as experiments grow and these file structures
become larger and more complex, the simple act of browsing a multidimensional
image requires the open and closing of several hundred files. This incurs a
performance cost and in extreme cases, exceeds operating system or filesystem
limits. 

From the standpoint of the software developer who has to contend with file
formats (i.e. anyone who wants to develop their own analysis tools and methods
for their imaging experiments), the use of free text or other undefined image
metadata structures is especially problematic. While any specific metadata
structure can be supported, any update or change-- an additional metadata
element, a changed data type-- makes a new version of the file format
incompatible with the software, and usually causes the software to crash,
which is especially inconvenient for the user. With a few hundred different
imaging systems currently available, each with a few updates per year, it's no
wonder that users [report spending so much time dealing with image file formats](http://www.eurobioimaging.eu/sites/default/files/D11.1%20State%20of%20the%20art%20and%20community%20requirements%20in%20Biomedical%20Image%20Analysis,%20Storage%20and%20Remote%20%20Access.pdf).

## What to do?

So, if data format standardization is not really possible, what’s the
solution? In 2002, Kevin Eliceiri and Curtis Rueden (LOCI, Madison), proposed
the concept of Bio-Formats: accept that the panoply of file formats will
always be a necessary consequence of a rapidly innovating field, and build a
library that could translate as many formats as possible into a common
metadata model which any software could consume. Together with OME, LOCI began
working on this concept: rather than standardizing the original data format,
find ways to standardize the interface into the data, and make the use and
adoption of this interface as easy as possible.

In our next chapter, we’ll look at how this approach actually helps build an
image metadata standard.

