---
layout: post
title: Initial release of OMERO.downloader
tags: tools
categories: blog
---

# Introducing OMERO.downloader

For OMERO to properly fulfill the role of being a useful repository for
microscopy images its users must have easy access to that data. As data
sets grow in size it becomes a correspondingly greater challenge to
provide access to that data. This motivates the creation of server-side
solutions such as the IDR's
[Virtual Analysis Environment](https://idr-analysis.openmicroscopy.org/).
For the past couple of years the OME team has also been investigating
ways to improve users' ability to obtain data from OMERO for client-side
storage and processing.

We now release
[OMERO.downloader v0.1.0](https://github.com/ome/omero-downloader/releases/download/v0.1.0/OMERO.downloader-0.1.0-release.zip),
a Java application that acts as a command-line OMERO client. It writes
selected data from an OMERO server into a local directory and creates
soft links to represent some of the relationships among server objects.
This is still an early version missing many features but it can already
download some original files and metadata.

OMERO.downloader is designed to handle situations in which not all the
specified data can be downloaded in a single session. If download is
interrupted then it can be resumed by repeating the same command line
invocation. If files have already been downloaded then they will not be
fetched again.


# Downloading original files

The files that were uploaded for OMERO image ID 1234 are available
through:

    ./download.sh -u my-user -w my-pass -s my.omero.server -f binary,companion Image:1234

These are downloaded within the current directory. The `-b` option can
be used to specify a different preexisting directory to use as a base
for the downloads. We recommend using a different base directory for
each OMERO server that you use because the directory structure created
locally reflects how the server stores your data.

The above command would download image files into the
`Image/1234/Binary/` directory with any companion files (not containing
pixel data) in the `Image/1234/Companion/` directory. The files are soft
links that, perhaps via a `Fileset/` directory, link to files in
`Repository/`. In the repository directory the binary and companion
files are located together. On systems with the GNU Core Utilities
installed a command like:

    showinf `realpath Image/1234/Binary/my-image.fmt`

can be used to conveniently direct Bio-Formats' command-line tools to
the directory that includes the binary and companion files together.

The original files for multiple images can be downloaded by specifying,
e.g., `Dataset:123` or `Image:1234,1235,1236`. However, nothing stored
in the base directory indicates which datasets or other containers held
the downloaded images. Original files from plates may be downloaded only
if the server's `omero.policy.binary_access` setting is configured to
permit it.


# Exporting metadata as OME-XML

Metadata representing images, ROIs and some annotations can be fetched
from the OMERO server and written locally as OME-XML:

    ./download.sh -u my-user -w my-pass -s my.omero.server -f ome-xml Image:1234

The OME-XML is stored in two forms: First, each top-level schema object
is stored independently in separate files, e.g., in
`Image/1234/Metadata/image-1234.ome.xml`. Soft links exist among related
model objects, e.g., `Image/1234/Annotation/567` may link to
`Annotation/567/` which contains `Metadata/annotation-567.ome.xml`. To
use those files and links to list the IDs of the images that are tagged
as "anaphase":

    grep -lr '^<Tag.*<Value>anaphase<' Image/*/Annotation/*/Metadata/ | cut -f 2 -d / | sort -nu

Second, each specified model object is assembled from the various object
files into a single OME-XML document, e.g.,
`Image/1234/Export/image-1234.ome.xml`. The OME-XML files in `Export/`
can include multiple top-level schema objects: for example, with
`ROIRef` elements linking an image to its ROIs.

As the pixel data is not included, any `Pixels` element contains
`MetadataOnly`.


# Plans for the future

OMERO.downloader is an early prototype: we have many ideas for how to
improve both how it is engineered and what it can do. For instance, it
cannot yet fetch map annotations or file attachments but both should be
feasible. We have been working toward offering export of pixel data into
TIFF or OME-TIFF, even for large images. This could make local image
analysis easier for pathology images that are too large for the server
to export or for plates where file download is disabled. We intend to
benefit from new developments in Bio-Formats such as having large
exported OME-TIFFs include pyramids.

There are also more ambitious possibilities. For example,
OMERO.downloader's operation could be parallelized for greater speed, a
graphical user interface could be added, images' container structure
(screens, projects, etc.) could be fetched. Further work depends on what
our user community most needs and what best supports our funded
deliverables. We would gladly exchange design and implementation ideas
with collaborators who wish to assist with OMERO.downloader development.
In the meantime, we hope that the present version is already very useful
to some scientists. We welcome questions and comments via our forum and
mailing lists.
