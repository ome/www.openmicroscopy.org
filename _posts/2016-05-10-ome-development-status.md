---
layout: post
title: OME Development Status
intro-blurb: Status of development and focus shifts for OMERO, Bio-Formats, CI and documentation
---
With the recent release of OMERO 5.2.3 and Bio-Formats 5.1.10, the OME team is now focusing on the preparation of the workshops for our annual [OME Users meeting]({{ site.baseurl }}/events/11th-annual-users-meeting-2016.html).

For the upcoming OMERO milestones, our efforts will be shifting towards the delivery of OMERO 5.3.0 which already includes the OME data model [additions](https://blog.openmicroscopy.org/file-formats/data-model/future-plans/2016/01/26/bf-model-status/). As a consequence, OMERO 5.2.x now enters maintenance mode and will only be released in the case of security vulnerabilities, and support for OMERO 5.1.x will be dropped. On the Bio-Formats side, Bio-Formats 5.1.x will only release critical bug fixes to allow ourselves to complete the work on Bio-Formats 5.2.0.

For developers:

Starting mid-May, the breaking OMERO work initiated on a separate branch will be merged into the develop branch. This development branch will contain the new model work, breaking API changes and development database upgrades and should be considered as unstable. Most of the Continuous Integration will be happening on the [OME Jenkins CI](https://ci.openmicroscopy.org/view/DEV/). The [contributing documentation](https://docs.openmicroscopy.org/contributing/) will be updated as part of this work to document the new development process.
