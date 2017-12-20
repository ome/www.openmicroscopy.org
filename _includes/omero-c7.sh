#!/bin/sh
yum install -y -q epel-release
yum install -y -q ansible sudo
ansible-galaxy install \
    openmicroscopy.postgresql \
    openmicroscopy.omero-server \
    openmicroscopy.omero-web
cat << EOF > ~/omero-playbook.yml
- hosts: localhost
  roles:
    - role: openmicroscopy.postgresql
      postgresql_databases:
      - name: omero
      postgresql_users:
      - user: omero
        password: omero
        databases: [omero]
      postgresql_version: "9.6"
    - role: openmicroscopy.omero-server
      omero_server_rootpassword: ChangeMe
    - role: openmicroscopy.omero-web
EOF
ansible-playbook ~/omero-playbook.yml
