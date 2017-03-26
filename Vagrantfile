# -*- mode: ruby -*-
# vi: set ft=ruby :
Vagrant.configure("2") do |config|
    config.vm.box = "ubuntu/trusty64"
    config.vm.network "private_network", ip: "192.168.33.10"
    config.vm.provision "shell", inline: <<-SHELL
        apt-get update
        apt-get upgrade --assume-yes

        apt-get install --assume-yes git
        apt-get autoremove --assume-yes

        curl -L https://get.rvm.io | bash -s stable --ruby=2.0.0
        source /usr/local/rvm/scripts/rvm
        gem install jekyll minima

        echo 'source /usr/local/rvm/scripts/rvm' >> /home/vagrant/.profile

    SHELL
end
