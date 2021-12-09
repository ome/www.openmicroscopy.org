---
layout: post
title: Decoupling
tags: future-plans community
categories: blog
---

We are in the process of getting rid of submodules and separating our code into
smaller repositories. Why? And why should developers and users care?

The OME development workflow has been following a single, integrated approach
for the last couple of years. This means that all components of the OME stack,
including
[OMERO](http://www.openmicroscopy.org/site/products/omero) and
[Bio-Formats](http://www.openmicroscopy.org/site/products/bio-formats)
are versioned globally and released simultaneously. The only notable exception
to this rule is the
[OME Data Model](https://www.openmicroscopy.org/site/support/ome-model/)
which is released on its own release cycle to be consumed by major versions of
Bio-Formats and OMERO.

While such a global approach can simplify both internal and external
communication to a certain extent, it does have several limitations for
developers and users. For example, the increasingly-frequent  security
vulnerabilities (see the [recent blog post about the Java security issue](http://blog.openmicroscopy.org/tech-issues/2015/07/21/java-issue/))
usually require one of our software components to be released with a very fast
turnaround without modifying other components. A second example is the release
of urgent bug fixes or support for new file formats in Bio-Formats. In the
current approach, these updates are held back until a full release of OMERO
and Bio-Formats is ready, delaying access and use by a very large community.
A single release cycle across all components also does not scale with the
diversity, the needs and the size of our user community.

Starting with the 5.1.3 release, we are separating our various software, both
at the codebase and release level. We call this process *decoupling*.  This
follows a development pattern adopted by other open-source softwares - see for
example [http://imagej.net/Architecture](http://imagej.net/Architecture).

The first concrete application of decoupling is Bio-Formats which had been
included as a Git submodule of the OMERO source code since 
[2011](https://github.com/openmicroscopy/openmicroscopy/commit/1d12ad1f44fc042edc22093741a57d38e1074724).
As of OMERO 5.1.3, Bio-Formats is now treated as any other dependency of 
OMERO, like Hibernate or Spring. This means:

- Bio-Formats is now released independently of OMERO as was the case for [Bio-Formats 5.1.3](https://www.openmicroscopy.org/community/viewtopic.php?f=11&t=7859) and [OMERO 5.1.3](https://www.openmicroscopy.org/community/viewtopic.php?f=11&t=7869).
- Bio-Formats source code is no longer embedded either directly or via a submodule.
- Bio-Formats is no longer built as part of the
  [OMERO build system](http://www.openmicroscopy.org/site/support/omero5.1/developers/build-system.html).
  Instead, the JARs are referenced by their version and consumed from the
  [OME artifactory](http://artifacts.openmicroscopy.org/) as part of the build.

Bio-Formats decoupling comes at some cost, it increases the testing burden
and the complexity of our build system, but delivers important benefits to the
communities that use Bio-Formats such as [ImageJ](http://imagej.nih.gov/ij/),
[Fiji](http://fiji.sc/Fiji), [CellProfiler](http://www.cellprofiler.org/),
[KNIME](https://www.knime.org/), [Icy](http://icy.bioimageanalysis.org/),
[Matlab](http://www.mathworks.com/products/matlab/), and others.

In the near future, other components of OMERO and Bio-Formats may undergo the
same split process. Amongst potential decoupling candidates are:

- all C++ projects for both OMERO and Bio-Formats
- all Bio-Formats and OMERO code generation
- OME documentation

We hope this change is useful for the community. One of the great things about
open source software is the ability to learn, change, and adapt, especially as
we integrate feedback from the
[community](https://www.openmicroscopy.org/site/community/). We welcome
comments from users and developers, and any ideas on how we can continue to
improve the tools we deliver.
