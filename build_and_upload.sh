#! /bin/sh

yarn build
rsync -avp ./build/* deployer@119.29.178.236:~/huzhu
ssh deployer@119.29.178.236 "sudo service nginx reload"
