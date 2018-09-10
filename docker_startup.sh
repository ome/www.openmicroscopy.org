#!/bin/bash

docker run -it --rm -p 4000:4000 -v $PWD:/srv/jekyll jekyll/builder:pages jekyll server -w
