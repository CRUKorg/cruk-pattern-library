#!/usr/bin/env bash
# Set up some gorram swap space!
free -m | grep Swap | grep 4095 > /dev/null
if [ $? -eq 1 ]; then
    fallocate -l 4G /swapfile # Create a 4 gigabyte swapfile
    chmod 600 /swapfile # Secure the swapfile by restricting access to root
    mkswap /swapfile # Mark the file as a swap space
    swapon /swapfile # Enable the swap
fi

# Latest and greatest stuffs

apt-add-repository -y ppa:rael-gc/rvm
apt-get -y update
apt-get -y upgrade
apt-get install -y git rvm

# Add vagrant and root to rvm group
perl -pi -e 's/^(rvm:x:[0-9]+:ubuntu)$/$1,vagrant,root/' /etc/group

# Ensure bundles are grabbed and use compass to do an initial build
su - vagrant -c "rvm --quiet-curl install 2.3.1"
su - vagrant -c "rvm 2.3.1"
su - vagrant -c "gem install bundler"

if [ ! -e /usr/bin/nodejs ]; then
    curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
    apt-get install -y nodejs

    update-alternatives --install /usr/bin/node node /usr/bin/nodejs 10
fi

if [ ! -e /usr/local/bin/grunt ]; then
    npm install -g grunt-cli
fi

su - vagrant -c "cd /vagrant && bundle install"
su - vagrant -c "cd /vagrant && npm install"
su - vagrant -c "cd /vagrant && bower install"

su - vagrant -c "cp /vagrant/provisioning/file/.bashrc /home/vagrant/.bashrc"

# Tidy
apt-get autoremove -y