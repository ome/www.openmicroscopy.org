---
layout: post
title: OMERO / Python 3 Rollout Plan
intro-blurb: Python 2-based versions of OMERO (5.5 and earlier) will be no longer be supported in 2020.
---

After recent questions regarding Python 3, a few first beta testers, and over
200 PRs, we’d like to get your feedback on the Python 3 rollout plan for
OMERO covering the next few months. We’re happy to help developers migrate
their scripts & plugins ASAP but it’s critical to have system administrators
onboard as well. Read the Bad News below for why.

#### Roadmap

The current plan is to have a public milestone (either beta or release
candidate) available **in one month** (early December) for deployment testing.
A major component of that release will be the deployment guide for everyone to
test and nitpick. We are primarily testing with the default Python 3.6 on
CentOS 7 and some conda deployments. Help covering more platforms would be
welcome.

Since the final update will require changing base packages on your deployment
systems, we’d very much encourage everyone to give this a try **before the
general release is ready early 2020**.

#### The Good News

Luckily, the upcoming OMERO version (currently planned as 5.6.0) will not be
significantly different from 5.5. Other than the change of the base Python
installation, there should be no significant hurdles:

- No database upgrade is needed.
- There are no changes in Java or Ice version.
- API changes are minimal and only where forced by the differences between Python 2 and Python 3.
- Updates to all the standard web plugins (e.g. figure, iviewer, parade, gallery, mapr) as well as cli plugins (e.g. duplicate, render) will be provided.

#### The Bad News

However, (you knew there was a catch) with the [Python 2.7
countdown](https://pythonclock.org/) nearly counted down and support for
OMERO’s current Django version (1.8) long since dropped, Python 2 will no
longer be supported. All plugins, extensions, and user-code will need to be
migrated.

As a result, all future security patches will *only* be available for OMERO 5.6
and greater. **For your own safety, it will be imperative that you be ready to
upgrade your OMERO installation early in 2020.**

Comments welcome on the <https://forum.image.sc/t/omero-python-3-rollout-plan/31278> forum thread.
