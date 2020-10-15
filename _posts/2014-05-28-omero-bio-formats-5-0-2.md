---
layout: post
title: Release of OMERO & Bio-Formats 5.0.2
intro-blurb: The OME team is pleased to announce the release of OMERO & Bio-Formats 5.0.2
---
Today we are releasing OMERO and Bio-Formats 5.0.2. This a bug-fixing
release covering a number of issues as listed below.

Bio-Formats improvements include:

- Many bug fixes for Zeiss .czi files;
- Several other bug fixes, including:
    - Gatan .dm3 units and step count parsing;
    - Imspector .msr 5D image support;
    - DICOM reading of nested tags;
    - and others in the Imaris, MRC, ND2, SDT, and SVS file formats.
- Update native-lib-loader version (to 2.0.1);
- Updates and improvements to user documentation.


**Note that if you want to take advantage of these improvements to
.czi file support in OMERO, you will need to upgrade your server to
5.0.2 as well as your clients.**


For OMERO users, this release includes:

- Import improvements especially for large image datasets;
- Allowing rendering settings to be shared between users;
- Downloading original files from the command line;
- Improvements to the way OMERO.matlab handles annotations;
- Improvements to tagging workflows in the clients;
- Further work on [code signing](https://docs.openmicroscopy.org/latest/omero5.0/sysadmins/server-webstart-codesigning.html)
  for webstart and accompanying documentation;
- Disk space usage reporting for OMERO.web admins;
- Custom webstart intro page templates;
- Enabling searching by Image ID in the clients.;

Developers, script creators, and other power users should note that
we've adopted [flake8](https://pypi.python.org/pypi/flake8) formatting
for all Python code contributions. Further:

- the Java build dependencies have been aligned more closely with Maven Central
- there are two new CLI commands, "obj" for creating and editing objects, and "fs" for seeing an overview of your data imported into OMERO5
- a number of script improvements.

For system administrators, changes include:

- modification to the import template path
- the addition of "bin/omero ldap create" to create LDAP users before they login
- fix for the periodic failure of the script process
- various fixes for issues on Windows with testing up to version 2008 Server. A build of Ice 3.5 is now also available for testing.


Further details are available on
[Trac](https://trac.openmicroscopy.org/ome/milestone/5.0.2).


The software is available from [OMERO archived downloads](https://downloads.openmicroscopy.org/omero/5.0.2/) and [Bio-Formats archived downloads](https://downloads.openmicroscopy.org/bio-formats/5.0.2/).


For information on upgrading your server, see the [server upgrade
documentation](https://docs.openmicroscopy.org/latest/omero5.0/sysadmins/server-upgrade.html).


Any problems or comments, please use the OME [forums or mailing
lists]({{ site.baseurl }}/support/).
