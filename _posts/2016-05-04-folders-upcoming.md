---
layout: post
title: Upcoming support for ROI Folders
categories: data-model future-plans
---

For many months the OME team has been working on what will become a new
2016 OME Data Model. The OME Data Model specifies Regions of Interest
(ROIs) in terms of a set of Shapes. As OMERO 5.3 will use the new Data
Model, the upcoming changes include an initial round of adjusting how
the Data Model and OMERO each represent Shapes so that the two match
better. They will each also include a significant addition: *Folders*, a
new top-level model object.

## Using ROI Folders

Our initial focus is on supporting ROI-based Folder workflows. Both
OMERO.insight and OMERO.web will offer some support for users to have
their images' ROIs organized into a hierarchy of folders. We have
several use cases in mind: for example, one may wish to sort cells into
phenotypes or assign ontology terms to them, or an analysis script may
track entities across a set of images and use a folder for each entity
to store sightings of it. We expect the community to think of many more
uses for folders.

Folders may seem rather like datasets in their implementation: in our
current draft of the Data Model one may name folders, add a description,
even annotate them, exactly as with datasets. The most obvious
difference from datasets is what folders may contain: ROIs, but also
other folders, even a mix of both. Folders may be nested arbitrarily
deeply but with a caveat: a folder may have only one parent. The same
dataset can be put into many projects but the folder hierarchy is a
strict tree. This simplifies the user interface and speeds up
processing.

## Graphical clients

A ROI may be both on an image and in some folders. When a scientist
views the ROIs of an image in OMERO.insight or OMERO.web they will be
able to see how those ROIs are organized into folders. Work is ongoing
in both clients to deliver at least some ability to work with ROIs and
folder hierarchies in OMERO 5.3.0. We have already published some
screenshots of how OMERO.insight can be used to organize ROIs into
folders and we are working on usability features such as making images
searchable by the name of a folder that contains any of the image's
ROIs.

## OMERO.server and scripts

Users of the Blitz API are well aware that it allows a wider range of
actions than the graphical clients support. Those exploring how folders
are represented will see that a folder has a `parentFolder` property for
its parent, if any, and `childFolders` and `roiLinks` properties for its
contents, as they might expect.

In our current draft of the new OME Data Model folders may directly
contain images. The graphical clients may ignore such links, relying
instead on folder-image linkage via ROIs as above, but folder objects
offer an additional `imageLinks` property that may be useful for
grouping images in a different way within a hierarchy.

One concern with writing scripts may be that processing an arbitrarily
deep folder hierarchy could require many separate calls to the `IQuery`
query service. OMERO 5.3.0 will include two new `Request` subclasses for
queries, `FindParents` and `FindChildren`, that can be used to traverse
hierarchies arbitrarily far in one call: for instance, to ask which
images are contained in a set of folders or in any of their subfolders.

## The future of Folders

We have considered proposals for containing other objects, like plates,
wells and annotations, in folders. One can imagine that someday folders
may supersede everything from tag sets to datasets but, in starting out
by allowing only a couple of kinds of content, and then only in a strict
tree of folders, we take a conservative approach that allows us to
adjust our plans based on how the community reacts to the introduction
of folders in OMERO. We certainly do not wish to regret making folders
too flexible too soon and to have to rein them in at a later date.
Still, the OME team will be eager to understand what further ideas come
to your mind as you someday begin to use folders in OMERO 5.3 so that we
can better support your workflows.
