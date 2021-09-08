---
layout: post
title: The slow death of Java Web Start
tags: tech-issues future-plans
categories: blog
---

For the past few years, we have supported the distribution of the OMERO Java desktop clients as Java Web Start Applications. This feature was requested by several institutions and we are aware that some continue to use it.
We acknowledge that Java Web Start is a practical and still active way to distribute the applications. But, due to the steady increase of issues not under our control, continuing to support the use of Java Web Start for distribution of the OMERO Desktop clients is not sustainable and is likely to become impossible in the near future.

Java applets and almost all [NPAPI](https://en.wikipedia.org/wiki/NPAPI) plugins are becoming obsolete and
are being replaced by Web-based technologies, probably for the better due to the security risks that plugins bring.
NPAPI plugins have now been removed from the latest version of Google Chrome and Chromium.
We believe the days of Java Web Start applications are probably numbered.

In recently released versions of OMERO, we made significant effort to unify the OMERO Desktop and Web clients.
With new import options available via, for example, OMERO.dropbox or in-place, more features like ROI support being worked on in the Web client and the removal of Java support in Google Chrome, we feel that it is time to deprecate the distribution of our Desktop clients as Java Web Start Applications. We emphasize that this decision is really out of our control, and reflects the current trends in security policies being enforced in web browsers.
As such, we will be deprecating Java Web Start in the upcoming 5.1.4 release and will stop providing these applications from OMERO version 5.2. We understand that this will cause issues for some members of our community but we really have no choice in the longer term. We will continue to expand the functionality of the OMERO web client to try to mitigate this as much as we can.

Below we discuss the technical background behind this decision in more detail.

## Background

Java Web Start was introduced in 2001 to allow applications to be launched through browsers or directly via the Java Network Launching Protocol (JNLP).

Java Web Start Applications do not run inside the browser like Applets but still run in a restricted environment. Those restrictions can be removed by signing the applications with a trusted certificate. This has been encouraged since Java 7 update 21 to reduce risks for desktop users and it has been reinforced in follow-up updates.
Two security changes to enhance authentication and authorization for Java Web Start (and Applets) were introduced back in January 2014 with Java 7 update 51.

As of Java 7 update 51
Rich Internet Applications must contain two things:

1. code signatures from a trusted authority
2. Manifest Attributes:
   - Permissions (required) indicating if the application should run within the sandbox or it requires full-permissions.
   - Codebase (recommended): location of the hosted code

Due to vulnerabilities affecting Java plugins, security experts frequently recommend users disable Java at least in their browser. Since 2013, Firefox, Google Chrome and other browsers have started to block plugins by default.

## What does it mean for desktop developers/administrators?

To deploy Java Web Start, one first needs to get familiar with [Deployment Rule Sets](https://docs.oracle.com/javase/7/docs/technotes/guides/jweb/security/deployment_rules.html).
Administrators can then create a list of known-safe applications and manage compatibility between
different versions of Java on the system.
Each browser will have their own set of dialogs and control mechanisms.

It is getting harder and harder to distribute Java Web Start applications for developers and/or administrators.

## What about Browser support?

The Java plugin for web browsers relies on the cross-platform plugin architecture [NPAPI](https://en.wikipedia.org/wiki/NPAPI), which has been supported by all major web browsers for the past 10 years.
In version 45 (released Sept 2015), Google Chrome has dropped support for [NPAPI plugins like Java](https://support.google.com/chrome/answer/6213033).
This means that you can't enable Java in Google Chrome 45 (or later).
Firefox, Internet Explorer and Safari still continue to support it but for how long?

During our testing, we are increasingly encountering unpredictable issues across all platforms, with various combinations of browsers, browser versions, Java versions and Java Web Start.

This means that even if we had the resources to devote to supporting this in the near future, we would only be delaying the inevitable.
