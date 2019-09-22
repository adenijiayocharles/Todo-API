#!/bin/sh
ssh root@159.65.60.238 <<EOF
 cd ~/Todo-API
 git pull
 npm install — production
 pm2 restart all
 exit
EOF