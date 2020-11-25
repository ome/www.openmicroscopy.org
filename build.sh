#! /bin/sh
# Script to build the www.openmicroscopy.org website using Docker

set -e
set -u

docker run --rm -v $PWD:/srv/jekyll -eJEKYLL_UID=$UID jekyll/builder:pages jekyll build --config _config.yml,_prod.yml
# Report 4xx status codes except 429 errors (Too Many Requests)
# typically sent by GitHub while linkchecking the downloads
docker run --rm -v $(pwd)/_site:/site -it jekyll/builder:pages /usr/gem/bin/htmlproofer /site --only_4xx --http-status-ignore "429" --file_ignore '/minutes/'
