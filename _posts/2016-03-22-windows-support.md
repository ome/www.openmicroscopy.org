---
layout: post
title: Windows support update
tags: tech-issues future-plans deployment
categories: blog
---

The OME team has always been committed to building specifications and software
that are cross-platform solutions and that support as many different types of
users as possible, including those with limited IT support/budget. In keeping
with our open source ethos and the fact we rely on public and charity grant
funding, we also try to use open source tools as part of our workflows for
testing, building and deploying our products wherever possible.  We do support
commercial operating systems and platforms — we build and test OMERO.insight
on Windows, actively work to support accessing the OMERO and Bio-Formats APIs
in Matlab, and actively support browsing OMERO.web using IE.

Since the beginning of the OMERO project, we have actively tested and
supported builds and tests of OMERO.server on Windows. Several users—
students, faculty and institutions—have highlighted the importance of this
support over many years. **Therefore we are frustrated and saddened to
announce that we have to withdraw support for OMERO.server on Windows starting
with the 5.3.0 release. This means OMERO.web hosting will not be possible on
Windows either.** We will of course still support running OMERO.insight on
Windows, OMERO.web browsing on IE and continue to provide full support for
Bio-Formats on Windows (including the C++ components of this project). The
reasons for this decision are outlined below.

## Ever-increasing technical challenges

Our Continuous Integration (CI) system uses [Travis](https://travis-ci.org/)
and allows the OME Consortium’s work to be built and tested on a per-commit
basis. One of the challenges of running OME’s CI system is including tests for
the numerous products we release, across  several operating systems with
different configurations e.g. Python 2.7, Openjdk 1.8, Ice 3.5. The testing
matrix is constantly growing; already we are adding Ice 3.6 and soon Java 1.9
will need to be on our radar too. The resources we have for building and
maintaining our CI system aren’t infinite. We have to balance these resources
with core development work. There’s always a tension between rapid development
of new functionality and robust, reliable testing.

The focus of our OMERO 5.2.1 release was on deployment, following feedback
from system administrators (e.g. [this forum thread](https://www.openmicroscopy.org/community/viewtopic.php?f=5&t=7924)).
We improved our server installation guides and OMERO.web deployment
documentation, and provided stepwise deployment scripts, e.g. for CentOS 6
with
Python 2.7. We extensively used [Docker](https://www.docker.com/) to test our
Linux installation scripts and also to test our installation documentation.
All the installation scripts are available (see
[omero-install](https://github.com/ome/omero-install/)) and run on the CI
system each time a commit is pushed.

During the development phase of OMERO 5.2.1, we dedicated a large amount of
extra resources—from the devops team and in terms of computing hardware—to
test the Windows installation
scripts and improve our installation documentation. This level of effort will
not scale with the introduction of new elements to our testing matrix e.g. Ice
3.6 support. Moreover, we have other critical priorities—public repositories
and improved support for ontologies to name but two—so we are forced to make
difficult decisions.

Our usage statistics indicate that a large majority of production servers are
installed on Ubuntu 14.04 and CentOS 6, and less than 10 % are run on Windows,
so this decision should have relatively limited impact. We are, nonetheless,
an open source project and aim to support our incredibly diverse community and
the needs they have to deploy our software. So, even if only a few
OMERO.server installations run on Windows, we very much want to support them.
We simply can’t afford to do so.

For all these reasons, from version 5.3, we will not be able to support
OMERO.server on Windows. Again, this is a build and testing issue, so if
anyone out there would like to contribute their time, energy, expertise and
compute resources to provide Windows support, we’d welcome them doing so.
Instead, we will
focus on ensuring we provide the best support we can for a range of UNIX-like
systems, continuing the effort to make OMERO.server easier to install,
maintain and manage.

This decision is for **OMERO.server support and OMERO.web hosting only**; we
will continue to support and test OMERO.insight, OMERO.web browsing and all
aspects of the Bio-Formats project on Windows.
