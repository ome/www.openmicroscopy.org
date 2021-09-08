---
layout: post
title: Upcoming support for ROI Folders
tags: data-model future-plans
categories: blog
---

For several months the OME team has been working on what will soon be
released as the new 2016 OME Data Model. The OME Data Model specifies
Regions of Interest (ROIs) in terms of a set of Shapes. As OMERO 5.3
will use the new Data Model, the upcoming changes include an initial
round of adjustments that improve consistency between Shape
representations in the Data Model and OMERO. They will each also include
a significant addition: *Folders*, a new top-level model object.

## Using ROI Folders

Our initial focus is on supporting ROI-based Folder workflows.
OMERO.insight, OMERO.web and OMERO.cli will offer some support for users
to have their images' ROIs organized into a hierarchy of folders. We
have several use cases in mind: for example, one may wish to sort cells
into phenotypes or assign ontology terms to them, or an analysis script
may track entities across a set of images and use a folder for each
entity to store sightings of it. We expect the community to think of
many more uses for folders.

Folders may seem rather like Datasets in their implementation: in our
current draft of the Data Model one may name Folders, add a description,
even annotate them, exactly as with datasets. The most obvious
difference from Datasets is what Folders may contain: ROIs, but also
other folders, even a mix of both. Folders may be nested arbitrarily
deeply but with a caveat: a Folder may have only one parent. The same
Dataset can be put into many projects but the Folder hierarchy is a
strict tree. This simplifies the user interface and speeds up
processing.

## Graphical clients

An ROI may be both on an image and in some folders. When a scientist
views the ROIs of an image in OMERO.insight or OMERO.web they will be
able to see how those ROIs are organized into folders. Work is ongoing
in both clients to deliver at least some ability to work with ROIs and
folder hierarchies in OMERO 5.3.0. On
[Twitter](https://twitter.com/openmicroscopy/status/710155229682126848),
[YouTube](https://www.youtube.com/watch?v=rkwQ8lzpAFs)
[and](https://github.com/openmicroscopy/design/issues/14)
[elsewhere](https://github.com/openmicroscopy/design/issues/15) we have
already published some screenshots of how OMERO.insight can be used to
organize ROIs into folders and we are working on usability features such
as making images searchable by the name of a folder that contains any of
the image's ROIs.

![ROI Folder screenshot](/images/ROI-Folder-Insight.png){:width="100%"}

## OMERO.server and scripts

Users of the [Blitz
API](http://www.openmicroscopy.org/site/support/omero5.2/developers/Modules/Api.html)
are well aware that it allows a wider range of actions than the
graphical clients support. Those exploring how Folders are represented
will see that a Folder has a `parentFolder` property for its parent, if
any, and `childFolders` and `roiLinks` properties for its contents, as
they might expect.

In our current draft of the new OME Data Model folders may *directly*
contain images regardless of ROIs. One may expect the graphical clients
to ignore this experimental feature, relying instead on folder-image
linkage via ROIs as above, but the additional `imageLinks` property of
Folder objects may be useful for grouping images in a different way
within a hierarchy.

One concern with writing scripts may be that processing an arbitrarily
deep Folder hierarchy could require many separate calls to the `IQuery`
query service. OMERO 5.3.0 will include two new `Request` subclasses for
queries, `FindParents` and `FindChildren`, that can be used to traverse
hierarchies arbitrarily far in one call: for instance, to ask which
images are contained in a set of Folders or in any of their subfolders.

## The future of Folders

We have considered proposals for containing other objects, like plates,
wells and annotations, in Folders. One can imagine that someday Folders
may supersede everything from tag sets to datasets but, in starting out
by allowing only a couple of kinds of content, and then only in a strict
tree of Folders, we take a conservative approach that allows us to
adjust our plans based on how the community reacts to the introduction
of Folders in OMERO. We welcome your input on how you see Folders being
used in your workflows.
