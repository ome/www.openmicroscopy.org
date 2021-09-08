---
layout: post
title: Latest Java security issue
tags: tech-issues
categories: blog
---

A user [reported last week](https://www.openmicroscopy.org/community/viewtopic.php?f=5&t=7856) that
after a Java upgrade, it was no longer possible to connect to the OMERO server
using OMERO.insight. Since then we’ve been looking into the issue. A fix is
ready as well as a few steps for the future.

## Background

A recent security vulnerability in Java

- [https://bugzilla.redhat.com/show_bug.cgi?id=1223211](https://bugzilla.redhat.com/show_bug.cgi?id=1223211)
- [https://access.redhat.com/security/cve/CVE-2015-4000](https://access.redhat.com/security/cve/CVE-2015-4000)

prompted Oracle to release critical patches for the JDK in versions 6u101,
7u85, and 8u51:

[http://www.oracle.com/technetwork/java/javase/8all-relnotes-2226344.html](http://www.oracle.com/technetwork/java/javase/8all-relnotes-2226344.html)

Among the changes in the new JDKs, support has been dropped for some SSL
ciphers which OMERO uses, via the Ice library. This prevents Java clients
connecting to an OMERO server due to a handshake error in Ice. Since the
router used by OMERO (Glacier2) is not written in Java, just updating the Java
version on the server is not enough to prevent the issue.

## Workaround

Instead, a small configuration change is needed in OMERO. This will remove the
no-longer supported ciphers, allowing both old and new OMERO clients, whether
with or without the Java patches, to work normally.

If you are an OMERO user, you should ensure your version of Java is upgraded
to take advantage of the security update, and contact your system
administrator to ask for the following procedure to be followed.

If you are an OMERO administrator and you either have received user complaints
or want to forestall them, you can arrange a short restart with your users,
download the patch from
[http://downloads.openmicroscopy.org/patches/java_issue\_2015-07-21.txt](http://downloads.openmicroscopy.org/patches/java_issue_2015-07-21.txt), and
take the following steps:

>$ cd OMERO.server-5.1.2-ice35-b45  
>$ patch -p1 < ../java_issue\_2015-07-21.txt  
>patching file etc/grid/templates.xml  
>$ bin/omero admin deploy

## What we're doing about it

The patch above will be included in the next release of OMERO (5.1.3) but we
are providing it in the meantime for users currently completely blocked by
this issue as we encourage everyone to update their Java to take advantage of
this latest security fix. We’re looking into further modifications to the
IceSSL configuration to make your connections more secure.

One caveat may be that safer connections invariably include more processing
overhead, which may be most notable in OMERO.web. We’ll provide suggestions in
the release on how to have a faster connection to a local web server while
keeping the safer connection for OMERO clients.

Further, we’ll make the connection settings configurable, so that should a
future version of Java remove a cipher that OMERO is using, you’ll be able to
handle the issue without a patch from us.

