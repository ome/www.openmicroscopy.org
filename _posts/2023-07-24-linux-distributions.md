---
layout: post
title: Updates to OMERO support on CentOS/RHEL/Ubuntu
tags: System Administrators
categories: blog
---

OME will stop deploying OMERO installations on CentOS 7 before the end of 2023 and
will no longer provide installation instructions on Ubuntu 16.04, 18.04 and 20.04.


## Why are we doing this?

OME has limited resources for supporting OMERO installation on multiple operating systems in terms of documentation, testing and troubleshooting, so we need to focus on a small number of widely adopted and well-supported systems.

Some distributions including Ubuntu 16.04 LTS and 18.04 LTS have already reached their end of life in terms of maintenance and security support.


In December 2020, the CentOS community and Red Hat announced the sunset of CentOS. CentOS 7 will officially reach its end of life in [June 2024](https://endoflife.date/centos). RHEL 7 maintenance support will terminate at the same time although Extended Life Cycle support will be available until [June 2026](https://endoflife.date/rhel).
Distribution like CentOS7/RHEL 7 also ships a series of outdated software through its system packages, the most impactful ones for the OMERO ecosystem being Python 3.6 and OpenSSL 1.0.2. While a more recent version of Python 3.8, supported until [October 2024](https://endoflife.date/python), can be obtained from the Software Collections (SCL) packages, the Python ecosystem has adopted a quick [deprecation policy](https://numpy.org/neps/nep-0029-deprecation_policy.html). 

Similarly, on the OpenSSL front, the outdated 1.0.2 version is already causing several issues reported publicly in the wider bioimaging community including:

 * Issues while exchanging key during the SSL handshake using the default [https://forum.image.sc/t/omero-login-ssl-error-dh-key/79574](https://forum.image.sc/t/omero-login-ssl-error-dh-key/79574) 
 * Multiple libraries including urllib3 are dropping support for OpenSSL 1.0.2 [https://urllib3.readthedocs.io/en/stable/v2-migration-guide.html#what-are-the-important-changes](https://urllib3.readthedocs.io/en/stable/v2-migration-guide.html#what-are-the-important-changes) 

We expect these problems will get worse over the course of the upcoming year with additional libraries dropping support for OpenSSL 1.0.x making support too expensive.

Upgrading to systems using OpenSSL 1.1.1 or later will allow us to remove a lot of code workarounds specifically designed for CentOS 7 compatibility, add support for the TLS 1.3 standard and increase the default encryption protocol of our libraries, making OMERO access on par with the latest security standards.


The table below summarizes the end of life of each of the major Linux distributions under which OMERO can be installed.

| OS               | End of Life |
|------------------|-------------|
|RHEL 7            | June 2024   |
|CentOS 7          | June 2024   |
|RHEL 8            | May 2029    |
|Rocky 8           | May 2029    |
|RHEL 9            | May 2032    |
|Rocky 9           | May 2032    |
|Ubuntu 16.04 LTS  | April 2021  |
|Ubuntu 18.04 LTS  | April 2023  |
|Ubuntu 20.04 LTS  | April 2025  |
|Ubuntu 22.04 LTS  | April 2027  |

## What happens now?

We are working with the Glencoe software team to test and release a series of changes across the OMERO components to workaround several of the known CentOS 7 issues and maintain compatibility for the upcoming 6 months. Once support has ended, these changes will be removed.

We will update our documentation and update the OMERO components to work with Rocky 9 and Ubuntu 22.04 LTS.

## Can I still install OMERO on CentOS 7/RHEL7?
The OME team will no longer install new deployments on CentOS 7/RHEL 7 and will no longer test the daily builds on CentOS 7/RHEL 7.

## How should I upgrade?

OME supports the installation of OMERO over a range of supported platforms.

CentOS 7/RHEL 7 end of life will impact other resources in your institution. First and foremost, you should reach out to your IT department or provider and clarify their policies and supported operating systems.

Upgrades to the OS in-place are not recommended by OME. We instead recommend treating it as a migration to new machine(s). This would involve a database migration as well as raw data and configuration migration.


## Any questions?

Please do not hesitate to contact us at [https://forum.image.sc/tag/omero](https://forum.image.sc/tag/omero).
