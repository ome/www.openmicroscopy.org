---
layout: post
title: OMEROImageChooser
tags: community tools
categories: blog
---

*This is the first of what will hopefully be a series of posts about tools
developed by members of the community. Ian Munro of Imperial writes:*

Over the course of adding OMERO capabilities to a number of pre-existing
software tools, I felt that there was a need for a lightweight graphical tool
that would make it possible to easily add the capability of allowing  users to
select images from OMERO, to desktop tools.

What I needed  was an OMERO equivalent of JFileChooser or Matlab’s uigetfile
or Qt’s QFilelDialog.

**OMEROImageChooser is the result.**

It is a graphical tool which allows a variety of OMERO objects (Images,
Datasets, Plates, Attachments) to be selected with a look and feel modelled on
OMERO.insight. It can easily be called from Java or Matlab code and is
presented as a quick and relatively easy path to either developing a new OMERO
desktop  client or adding an OMERO interface to existing code. 

The source is available from [https://github.com/imperial-photonics/omeUiUtils](https://github.com/imperial-photonics/omeUiUtils).

A ready-to-use .jar file compatible with OMERO 5.2.x  can be also  downloaded
from Bintray.

For instructions on how to integrate with Maven/Gradle, refer to the
[Bintray user documentation](https://bintray.com/docs/usermanual/formats/formats_mavenrepositories.html#_working_with_maven).

There are a number of options available, depending what feedback is needed
from the user. The screenshots below illustrate some of these.

1. Selecting one or more images:
![selecting images in the UI](/images/Images.png)

2. Selecting an image or attachment:
![selecting images or attachments in the UI](/images/imageOrAttachment.png)

3. Selecting a plate:
![selecting a plate in the UI](/images/choose_plate.png)

4. Selecting a Dataset and file name for importing files to OMERO - e.g for
   use from acquisition tools:
![selecting a dataset in the UI](/images/datasetForImport.png)


