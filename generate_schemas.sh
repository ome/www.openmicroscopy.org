#! /bin/sh
# Generate static schema pages from the ome-model specifications


version=$(awk '/omemodel/{getline; print $0}' _config.yml | sed "s/  version: //")
git clone git://github.com/ome/ome-model -b v$version
(cd ome-model/specification && sh publish)
mv ome-model/specification/target/published Schemas
rm -rf ome-model
