#! /bin/sh
# Script to build the www.openmicroscopy.org website using Docker

set -e
set -u

docker pull jekyll/builder:pages
docker run --rm -v $PWD:/srv/jekyll -eJEKYLL_UID=$UID jekyll/builder:pages jekyll build --config _config.yml,_prod.yml
# Report 4xx status codes except 429 errors (Too Many Requests)
# typically sent by GitHub while linkchecking the downloads
docker run --rm -v $(pwd)/_site:/site jekyll/builder:pages /usr/gem/bin/htmlproofer /site --only_4xx --ignore-status-codes "429" --ignore-files "/site/minutes/,/minutes/,/site/2014/,/site/2018/,/site/citing-ome/,/site/teams/,/site/about/" --ignore-urls "/www.icr.ac.uk/,/medium.com/pangeo/,/java.com/en/download/help/java_6.html/,/columbia.edu/,/eurobioimaging.eu/,/github.com/openmicroscopy/openmicroscopy/commit/,/figure.openmicroscopy.org/demo/,/loci.wisc.edu/,/twitter.com/,/biovisioncenter.uzh.ch/,/monash.edu/,/micronoxford.com/,/upf.edu/,/scientifica.uk.com/,/uk1s3.embassy.ebi.ac.uk/,/biorxiv.org/,/openmicroscopy.org/events/ome-community-meeting-2024/,/meded.hms.harvard.edu/,/loc.gov/,/royalsocietypublishing.org/,/science.1082602/,/www.softwarecollections.org/" --no-enforce-https --allow-missing-href --typhoeus='{"headers" : {"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Brave Chrome/91.0.4472.164 Safari/537.36"}}'

# Test file existence
echo "Checking Schemas existence"
test -f _site/Schemas/OME/2016-06/ome.xsd
echo "Checking meeting minutes existence"
test -f _site/minutes/README.md
