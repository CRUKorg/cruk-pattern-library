# -*- mode: ruby -*-
# vi: set ft=ruby :

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure(2) do |config|
  if Vagrant.has_plugin?("vagrant-cachier")
    # Configure cached packages to be shared between instances of the same base box.
    # More info on http://fgrehm.viewdocs.io/vagrant-cachier/usage
    config.cache.scope = :box
    config.cache.enable :generic, {
      "composer" => { :cache_dir => "/home/vagrant/.cache/composer" },
      "npm" => { :cache_dir => "/root/.npm" },
    }
  end

  # The most common configuration options are documented and commented below.
  # For a complete reference, please see the online documentation at
  # https://docs.vagrantup.com.

  # Every Vagrant development environment requires a box. You can search for
  # boxes at https://atlas.hashicorp.com/search.
  config.vm.box = "ubuntu/trusty64"

  # Disable automatic box update checking. If you disable this, then
  # boxes will only be checked for updates when the user runs
  # `vagrant box outdated`. This is not recommended.
  # config.vm.box_check_update = false

  # Create a forwarded port mapping which allows access to a specific port
  # within the machine from a port on the host machine. In the example below,
  # accessing "localhost:8080" will access port 80 on the guest machine.
  config.vm.network :forwarded_port, guest: 22, host: 2231

    config.hostmanager.enabled = true
    config.hostmanager.manage_host = true
    config.hostmanager.ignore_private_ip = false
    config.hostmanager.include_offline = true
    config.vm.hostname = 'dev-pattern-library'
    config.vm.network "private_network", ip: '192.168.56.168'
    config.hostmanager.aliases = %w(pl.dev.cruk.org)

  # Create a public network, which generally matched to bridged network.
  # Bridged networks make the machine appear as another physical device on
  # your network.
  #config.vm.network "public_network"

  # Share an additional folder to the guest VM. The first argument is
  # the path on the host to the actual folder. The second argument is
  # the path on the guest to mount the folder. And the optional third
  # argument is a set of non-required options.

  if Vagrant.has_plugin?("vagrant-bindfs")
      config.bindfs.default_options = {
        force_user:   'vagrant',
        force_group:  'vagrant',
        perms:        'u=rwX:g=rD:o=rD'
      }

    config.vm.synced_folder "./", "/vagrant-nfs/cruk_events",
      type: "nfs", nfs_export: true, nfs_udp: false, mount_options: ['actimeo=2']
    config.bindfs.bind_folder "/vagrant-nfs/cruk_events", "/home/vagrant/cruk-pattern-library"
  else
    config.vm.synced_folder "./", "/home/vagrant/cruk-pattern-library",
      owner: "vagrant", group: "vagrant"
  end

  # Provider-specific configuration so you can fine-tune various
  # backing providers for Vagrant. These expose provider-specific options.
  # Example for VirtualBox:
  #
  config.vm.provider "virtualbox" do |vb|
    # Display the VirtualBox GUI when booting the machine
    # vb.gui = true

    # Customize the amount of memory on the VM:
    vb.memory = "1024"
    vb.name = "pattern-library"
  end


  # Run installation scripts.
  config.vm.provision "shell", path: "provisioning/script/bootstrap.sh"
end
