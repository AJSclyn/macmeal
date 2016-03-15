#!/usr/bin/env bash

sudo apt-get update
sudo apt-get install git -y
sudo apt-get install sqlite3 -y
command curl -sSL https://rvm.io/mpapis.asc | gpg --import -
\curl -sSL https://get.rvm.io | bash -s stable --rails
source /home/vagrant/.rvm/scripts/rvm
curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
sudo apt-get install nodejs -y
sudo npm install -g ionic
sudo npm install -g cordova
