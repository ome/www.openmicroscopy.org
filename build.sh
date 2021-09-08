#! /bin/sh
# Script to build the www.openmicroscopy.org website using Docker

set -e
set -u

docker run --rm -v $PWD:/srv/jekyll -eJEKYLL_UID=$UID jekyll/builder:pages jekyll build --config _config.yml,_prod.yml
# Report 4xx status codes except 429 errors (Too Many Requests)
# typically sent by GitHub while linkchecking the downloads
docker run --rm -v $(pwd)/_site:/site jekyll/builder:pages /usr/gem/bin/htmlproofer /site --only_4xx --http-status-ignore "429" --file_ignore '/minutes/' --url-ignore "/twitter.com/,/s3.embassy.ebi.ac.uk/" --typhoeus-config='{"headers" : {"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Brave Chrome/91.0.4472.164 Safari/537.36"}}'

# Test file existence
echo "Checking Schemas existence"
test -f _site/Schemas/OME/2016-06/ome.xsd
echo "Checking meeting minutes existence"
test -f _site/minutes/README.md
