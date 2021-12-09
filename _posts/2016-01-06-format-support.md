---
layout: post
title: Supporting complex formats - what we will and won't do, and what you can do to help
tags: file-formats community
categories: blog
---

You may have noticed that a few months ago, we received an email asking us
about when we expect to support 3D HISTECH .mrxs files. This sort of request
isn’t particularly unusual and the reply gives an insight into one of the key 
challenges we face.

## Just because we don’t have a reader, doesn’t mean we haven’t done any work

3D HISTECH .mrxs is an example of a complex format, the design of which does
not make our work any easier. In fact, we can say with some confidence that
the 3D HISTECH .mrxs file format is the most complex whole slide imaging file
format we have ever encountered. We can say this because although we haven’t
delivered a full reader for .mrxs—and there hasn’t been substantial public
development—we have spent a great deal of time examining the format and
potential solutions, and building test readers. Thanks to the example data the
community has generously provided, we have been able to analyse the on-disk
layout as well as the compression types, and map out the details of what an
implementation would entail.

Unfortunately, the result of all this work has been the conclusion that we
simply do not have the resources to prioritize delivering a complete solution
for this format. This is not the only format we have reached this conclusion
about. For example, support for [3i Slidebook 6 files](http://www.openmicroscopy.org/site/support/bio-formats/formats/3i-slidebook.html) was only added to
Bio-Formats last May when [3i](https://www.intelligent-imaging.com) committed
to developing the reader themselves.
Obviously, we are very grateful for this, but that doesn’t change the fact
that we had already spent years working on various versions of this format
(our initial single-series Slidebook reader was released back in 2006 and
obviously the work to produce it started even further back than that). Nikon
ND2 and Zeiss CZI are other examples of formats with a complex design that
makes them very difficult for us to support.

## We won’t deliver something that doesn’t do the job well enough

One thing to understand about our work, strategy and commitment to supporting
all file formats, especially formats used in production-scale facilities that
use technology like whole slide imaging, is that we insist on delivering as
close to complete support as possible. This is important given the size of
community we support, the breadth of applications that use our software, and
the need for utility and reliability in the software we deliver to the
community.

With 3D HISTECH .mrxs, it is very hard and expensive to meet this goal. To be
specific:

1. The design decisions of 3D HISTECH with respect to image pyramid layout are
   at odds with what we can reasonably handle within the infrastructure
   currently in place. Our analysis suggests we will have to re-calculate
   several of the resolution levels, because of choices 3D HISTECH has made in
   their tiling strategy.  This will create a substantial performance penalty
   for anyone using Bio-Formats to read this format.
2. The strategy for storing binary data on disk in 3D HISTECH .mrxs
   brightfield differs substantially from fluorescence images stored in .mrxs.
   They are essentially two different file formats, thus doubling the work
   required.
3. Based on recent data submissions and information from the community, 3D
   HISTECH scanners default to JPEG-XR compression when acquiring fluorescence
   data. Another doubling of work and complexity, as we would need to support
   both compressed and uncompressed data, in brightfield and fluorescence.

These points are specific to this format but similar issues occur with other
proprietary formats. As a team, we are not comfortable with releasing a reader
implementation that works on a limited set of file format variants, or
requires time consuming and computationally expensive reprocessing and pyramid
creation, just because of the implementation choices made by the format
designers.

## A philosophical point about our funding and resources

The OME Consortium and the wider development community have worked steadily
since 2002, funded mostly by grants from non-profit charities and public
funders, to build tools for the scientific community.

Building readers for proprietary formats has never been funded, and we don’t
think it would ever be funded by any grant funding panel. New readers are
created either by diverting our precious resources from other projects, by
contributions from the community (most recently by the companies themselves),
or by work commissioned by customers of [Glencoe Software](http://www.glencoesoftware.com).  We certainly listen to
the community and adjust our priorities based on requests, but we can’t do
everything with limited resources.

Perhaps we could crowdsource the funding for file formats  but that misses the
point—the formats we often lack the resources to support are those which are
complex, expensive, difficult, proprietary, closed formats, designed to lock
their users into a single, proprietary software application. The community’s
resources are finite and should be used for things other than reverse
engineering this type of format; work that, if subjected to peer review, would
be declined as a waste of community resources.  Several of those “other
things” were discussed at our most recent Annual Users Meeting and represent
key technologies that the community needs to achieve its scientific goals.

Over the last few years, we have seen efforts by several commercial imaging
companies to support open formats, provide open APIs, and to make it easier
for researchers and clinicians to work with the data acquired by their
instruments. We have also received specifications and input from several
imaging companies, which we have used to improve our own work and output.  We
applaud this trend; ultimately it means scientists, clinicians, engineers and
developers spend less time dealing with data formats and more time doing
science, developing new technologies and treating patients.

## What you can do

The community has the power to change this situation. You are paying for these
proprietary formats. You can condition your purchase, continued payment of
support and maintenance fees etc. on:

- the delivery of a rational, well-designed, efficient, open format
- use of open compression schemes
- support for the community’s efforts to deliver open readers for these files

You can of course also commit your own development resources to help solve
this problem.
