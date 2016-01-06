#!/bin/bash

sudo apt-get install nginx
cp nginx.conf /etc/nginx/nginx.conf
sudo apt-get install node
cd <project-directory>
npm install express body-parser

#to re-start server
node server.js
