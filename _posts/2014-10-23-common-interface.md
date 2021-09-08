---
layout: post
title: The OME Approach to a Common Interface
tags: file-formats data-model
categories: blog
---

## Introduction

In the previous entry, we examined the challenges presented by supporting a
wide variety of file formats that represent data outputs in the rapidly
evolving and innovative field of imaging. We argued that defining a single
metadata standard for scientific images is difficult at best and almost
certainly impractical. Instead, we have attempted to provide a standardized
interface to metadata and pixel data so that we provide a single point of
access to many different image files. That point of access is [Bio-Formats](http://www.openmicroscopy.org/site/products/bio-formats). In
this entry, we discuss the technical foundation for Bio-Formats and how it
provides a single metadata description that is both well-defined and
extensible.

## The OME Data Model

A common interface for accessing image data requires a known specification for
that data. When OME started (around 2001) there weren’t any defined
specifications available for biological imaging. The most advanced
specification available was DICOM
([Digital Imaging and Communications in Medicine](http://medical.nema.org/Dicom/about-DICOM.html))
but this was very tightly linked to medical imaging and required, for
example, a patient’s name to generate a valid file. In OME, we began
defining the elements and components of biological imaging systems,
illumination devices, objective lenses, detectors, etc. We referred to this
specification as the OME Data Model (see
[Goldberg et al., 2005](https://doi.org/10.1186/gb-2005-6-5-r47)). For each
element of an imaging system, it provides a definition, and, critically, a
specific statement of the relationship of that element to others, e.g.
numerical aperture is a property of an objective, which is part of an imaging
instrument, and so on. The Model was repeatedly updated, improving the
specification and matching it to newly developed imaging technologies. When
Kevin Eliceiri and Curtis Rueden ([LOCI](http://loci.wisc.edu/)) proposed what became Bio-Formats they
realized that the OME Data Model was a useful tool – it was an open,
supported and evolving specification into which they could convert any
incoming data. Because it was expressed in XML, it could be used to define
Bio-Formats’ metadata specifications.

Over the years, the OME Data Model has become the foundation of many different
open data solutions. For example,
[OME–TIFF](http://www.openmicroscopy.org/site/support/ome-model/ome-tiff/) is
an open data format that stores OME-XML metadata in the header of a standard
TIFF file. This approach allows anyone to write an open file that includes
metadata in a structure that most imaging software tools understand. At the
very least, the binary pixel data is accessible, and the image metadata is
accessible with little effort.

Bio-Formats uses the OME Data Model as its internal specification, and not
only can it read metadata from proprietary files but it can also write OME-XML
in an OME-TIFF file. Thus the OME Data Model, via Bio-Formats, is a
specification for converting and also writing image data. Any software tool
that uses Bio-Formats has access to
[all the formats Bio-Formats supports](http://www.openmicroscopy.org/site/support/bio-formats/supported-formats.html).

## Multi-dimensional data

From its earliest versions, the OME Data Model supported a 5D image, including
3 spatial dimensions, time, and frequency (often referred to as “channel”).
Any individual image should have all 5 dimensions but might have a value of 1
in any particular dimension. Thus a standard 2D image plane recorded on a
monochrome detector is 5D, but the 3rd spatial dimension (by convention often
referred to as “z”), time and channel values are all set to 1.

This representation has proven quite powerful, as it supports many of the most
common imaging modalities. However with the appearance of new modalities, e.g.
HCS, FLIM, LSFM, and OPT, the need to express even more dimensions has become
more and more important. For screening, we extended the OME Data Model to
include [representations of screens, plates and wells](http://www.openmicroscopy.org/site/support/ome-model/developers/screen-plate-well.html).
In our experience, we have seen 6, 7 and 8 dimensional images and anticipate
that even higher dimensions will appear as imaging modalities evolve. For the
moment, OME has settled on taking the core 5D image model and extending into
larger dimensions using a
[modulo-based approach](http://www.openmicroscopy.org/site/support/ome-model/developers/6d-7d-and-8d-storage.html).
This approach keeps the original 5D model intact but gives a simple way to
support images with larger dimensionality and avoids writing new individual
models for many rapidly evolving domains. This has been successfully used for
[FLIM](http://www.openmicroscopy.org/site/products/partner/flimfit)
and OPT imaging. In the longer term, we anticipate the need to expand
OME’s Data Model to a much more extensible approach, and are working with
several groups on this problem. In particular, we are following the
[ImgLib2](http://imglib2.net) project's work on building an N-dimensional
image library.

## A least common denominator

As noted in our first entry to this blog, conversion of original metadata into
some kind of common model inherently risks data loss. There is a compromise
between guaranteeing access to the data and ensuring complete fidelity. In
practice, a common specification like the OME Data Model becomes a least
common denominator where basic metadata can be reliably stored. For more
application-specific metadata, the OME Data Model provides a variety of ways
for extending the specification with custom annotations of various types. Full
details are provided in the original paper describing how the model works
([Goldberg et al., 2005](https://doi.org/10.1186/gb-2005-6-5-r47)) and in the
[Data Model specification pages](http://www.openmicroscopy.org/site/support/ome-model/).
These custom annotations provide an enormous flexibility but also mean that
custom versions of an OME-compliant specification can be generated. We
consider this to be a reasonable compromise that allows common metadata to be
stored and accessed by any application, while application-specific metadata
can be stored and will be accessible to third parties if the appropriate
specification is made available.

## A frustratingly incomplete, always obsolete, amazingly effective solution

Using a common specification that cannot specify every advanced,
cutting edge biological imaging system results in a solution that is always
incomplete and very likely unable to support the latest innovations in
biological imaging. Moreover, any updates made to the model to support new
innovations may become obsolete within a few months as new innovations
or updates are added. The OME Data Model also does not provide comprehensive
support for all imaging modalities. For example, while fluorescence is well
supported, including XML elements 'Illumination', 'Filter Set', and
'Detector', high-end transmitted light techniques such as Differential
Interference Contrast are not well supported-- there are no elements
describing the shear of a Wollaston prism. Addressing such a deficit involves 
identifying partners who can help define critical data elements and their relationships. 
This is the approach we used to extend the OME Data Model to support HCS data-- [OME ScreenPlateWell](http://www.openmicroscopy.org/site/support/ome-model/developers/screen-plate-well.html). Feedback from [TDS Dresden](http://www.mpi-cbg.de/facilities/profiles/ht-tds.html), Harvard's [ICCB](http://iccb.med.harvard.edu/) and others was coalesced into an extension of the OME Data Model. In a rapidly innovating field like imaging, the OME Data Model will always be at least somewhat incomplete, as newly developed modalities mature and can then be included in the specification. 

Regardless of these significant limitations, the approach adopted by OME has
proven to be reasonably successful and effective. With a fairly rich
description of metadata supporting the most popular imaging modalities in
biological imaging, the OME Data Model has been
[adopted by several commercial companies](http://www.openmicroscopy.org/site/support/ome-model/ome-tiff/index.html#support)
and is used many thousands of times each day via both commercial and open
source solutions making use of Bio-Formats. Bio-Formats thus presents a
standard interface to scientific image data. This approach can be considered
an indirect way of establishing an imaging metadata standard: while accepting
all the limitations of a common metadata specification, OME’s approach has
allowed many thousands of scientists worldwide easier access to their image
data. In OME, we believe this is the pragmatic, user-focused way of developing
an imaging standard.

