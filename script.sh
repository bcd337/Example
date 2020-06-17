#!/bin/bash

ssh root@$SERVER "mkdir -p ~/sembako-dashboard"


scp -r ./* root@$SERVER:~/sembako-dashboard

ssh root@$SERVER '

cd sembako-dashboard
docker build -t sembako-dashboard .
docker stop sembako-dashboard
docker rm sembako-dashboard
docker run -p 3005:80 -d --name sembako-dashboard sembako-dashboard:latest

'