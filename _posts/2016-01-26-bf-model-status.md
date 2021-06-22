---
layout: post
title: Bio-Formats and OME Data Model Development Status
tags: file-formats data-model future-plans
categories: blog
---

This is an update about what we are working on in the Bio-Formats codebase for
the next few months. As this is where the OME Data Model lives, it covers our
current and upcoming work on the Model and the Bio-Formats project.

## Current Bio-Formats development focus

The release of [5.1.7 back in December](http://www.openmicroscopy.org/site/news/release-of-bio-formats-5.1.7)
is likely to be the last regularly planned release of Bio-Formats 5.1.x.
Bio-Formats development has now shifted to focus on 5.2.0 in the develop
branch. There are two points for Bio-Formats users to note:

* the primary aim of the Bio-Formats 5.2.0 work is to upgrade
  our OME Data Model (as discussed below) to provide critical new
  functionality for many of our users
* our regular Bio-Formats Java schedule of monthly releases will be suspended
  and non-critical bug fixes and new format support will have a lower priority
  until this model work is complete

For developers using Bio-Formats, the develop branch will include development schema versions and should not be used for writing OME files (OME-XML, OME-TIFF) until Bio-Formats 5.2.0 is released.

We hope to release Bio-Formats version 5.2.0 in Spring 2016. You can follow
our progress on the [public Trello board](https://trello.com/b/OHTqY4pc/bio-formats-5-2-0).

## Data Model work

The main effort of the Bio-Formats 5.2.0 development work will be focused on
updating the Data Model to include a folder-like structure for storing Regions
of Interest (ROIs), as discussed in the
[most recent OMERO status post](http://blog.openmicroscopy.org/future-plans/community/2015/12/09/omero-status/).

Regions of Interest are core features of the OME Data Model currently stored
as image components without any ordering or structure. We have identified
several use cases across a wide range of imaging domains from high content
screening to digital pathology where this representation limits the ROI
usability. For instance, the [Image Data Resource](http://idr.openmicroscopy.org/)[^1]
built by OME contains several datasets where each image is associated with
several hundreds of thousands of ROIs (nice examples are [here](http://idr.openmicroscopy.org/webclient/?show=well-590686),
[here](http://idr.openmicroscopy.org/tara/webclient/?show=plate-362), and
[here](http://idr.openmicroscopy.org/pgpc/webclient/?show=screen-101)).
Similar orders of magnitudes of ROIs are commonly generated computationally by
analytical tools in high content screening. In other domains, a ROI or set of
ROIs needs to be associated with a complex hierarchical representation like
ontology. Across all these use cases, there is a growing need to organize,
browse and filter ROIs at the model-level. To address it, we will introduce a
folder concept allowing the ROIs within an image to be grouped in a
hierarchical manner.

We aim to update OMERO to include ROI Folders and release this as version 5.3
during Spring 2016.

If you are interested in our design process, you can follow the discussion on the [issues in our Design GitHub repository](https://github.com/openmicroscopy/design/issues).

We also aim to extend our support of experimental and analytic metadata—more
about this in a later entry. In brief, our aim is to package and release all
the work we’ve done on the Image Data Repository as tools for the community to
use to access a broad range of types of metadata.

## New format support

Despite the focus on the Data Model, 5.2.0 will also introduce two new
formats. These are scheduled to be Becker & Hickl SPC and Princeton
Instruments SPE. We are currently working on the readers for these and would
greatly appreciate sample files if you have any to help us with testing (you
can submit files via our
[QA system](http://qa.openmicroscopy.org.uk/qa/upload/) or get in touch on our
[mailing lists](https://www.openmicroscopy.org/site/community/mailing-lists)
for details on how to submit larger files).

While the core team won't be focusing on any other readers for 5.2.0, we
continue to encourage community submissions. New readers submitted by external
collaborators will be treated on a case-by-case basis. We always aim to review
external PRs promptly but our capacity for reviewing major changes is going to
be reduced for the next couple of months so release of new readers may be
delayed to 5.2.1 or later. We will endeavour to keep you informed of the
timeline, including having public Trello boards for future Bio-Formats
releases so the whole community can follow what is upcoming (these will be
listed on the [Getting Started Trello board](https://trello.com/b/4EXb35xQ/getting-started)).


## OME-Files

The OME Data Model and Bio-Formats C++ will be decoupled from the main
Bio-Formats code repository and renamed as OME-Files. This new API will
provide the reference implementation for working with the file formats defined
by the Open Microscopy Environment—OME-XML and OME-TIFF—in Java and C++
and the new development cycle will allow us to get updates out to our users as
quickly as possible.

[^1]: At the time of publication, this was referred to as the 'Image Data Repository'.
