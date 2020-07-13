#!/bin/sh
# echo $1
# cd into the cloned repo

cd ./$(basename $1 .git)
ls

# ssh into aws ec2
# ec2 having docker

docker build -t srn/nodeapp .
# docker run -p 3000:8080 -d  srn/nodeapp

$SHELL