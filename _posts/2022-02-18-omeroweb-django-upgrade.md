---
layout: post
title: OMERO.web upgrade to Django 3.2
tags: tech-issues future-plans community
categories: blog

---

## Introduction

Since 5.6.0, OMERO.web has depended on Django 1.11.x.  This version left
extended support in April 2020 [^1].  Django version conservatism has helped
us establish a very fertile, stable environment for plugin developers.
Furthermore, the usage of the plethora of Django functionality available in
core OMERO.web is quite limited.

Running a version of any software that the authors consider unsupported is
risky; if any bugs of either class are found they will not be fixed upstream.
However, we are not currently aware of any security or data loss bugs in the
latest available versions of Django 1.11.x that affect OMERO.web.

For the future safety of the community as well as enhanced developer
ergonomics we need to upgrade Django.  This was first attempted, targetting
Django 2.2, during the summer of 2020 [^2].  Unfortunately, that work never
came to fruition and Django 2.2.x leaves Long Term Support in just a few
months (April 2022).  Consequently, we have reactivated the work [^3] and plan
to upgrade to Django 3.2.x this Spring.

## Path to release

By the end of March 2022 we plan to have a release candidate version of
OMERO.web with Django 3.2.x as a dependency to be made available for the
community to evaluate.  We will notify the community as soon as this release
candidate is available.  In anticipation of this we are recommending that
__all__ plugin developers pin their `omero-web` dependencies to `<5.14.0` and
make a release of their plugin as soon as possible.

Plugin developers are encouraged to review the release notes, in particular
the *Backwards incompatible* and *Features deprecated* for all major Django
versions since 1.11.x to ensure they can be compliant with the new APIs.  They
are as follows:

* [Django 2.0 release notes](https://docs.djangoproject.com/en/4.0/releases/2.0/)
* [Django 2.1 release notes](https://docs.djangoproject.com/en/4.0/releases/2.1/)
* [Django 2.2 release notes](https://docs.djangoproject.com/en/4.0/releases/2.2/)
* [Django 3.0 release notes](https://docs.djangoproject.com/en/4.0/releases/3.0/)
* [Django 3.1 release notes](https://docs.djangoproject.com/en/4.0/releases/3.1/)
* [Django 3.2 release notes](https://docs.djangoproject.com/en/4.0/releases/3.2/)

The OME team will be publishing a migration guide along with the release
candidate to draw the attention of plugin developers to specific OMERO.web
idioms and design patterns that __will__ change in this new major version.
Those developers wishing to observe this process in real time may do so by
watching the progress on the upgrade PR [^3].

Every attempt has been made to make the absolute minimum number of changes
required to maintain OMERO.web functionality and leave potential Django
infrastructure modernisation to other follow up PRs.

__NOTE:__ The supported Python versions for Django 3.2.x are currently 3.6,
3.7, 3.8, 3.9, and 3.10 [^4].  At this time for changes to include Python 3.10
support are not planned.

[^1]: [https://www.djangoproject.com/download/#supported-versions](https://www.djangoproject.com/download/#supported-versions)
[^2]: [https://github.com/ome/omero-web/pull/200](https://github.com/ome/omero-web/pull/200)
[^3]: [https://github.com/ome/omero-web/pull/356](https://github.com/ome/omero-web/pull/356)
[^4]: [https://docs.djangoproject.com/en/4.0/releases/3.2/#python-compatibility](https://docs.djangoproject.com/en/4.0/releases/3.2/#python-compatibility)
