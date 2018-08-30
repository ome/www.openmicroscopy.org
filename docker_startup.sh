#!/bin/bash

docker run -it --rm -p 4000:4000 -v $PWD:/src jekyll/jekyll jekyll server -w -s /src
