<div class="main-content">

This explains how to create a website using node.js and express on MacOS. By the end of this tutorial, you should have a website hosted on a local machine. Credits to [Ben Gourley](https://github.com/bengourley) for the original code.

# Making the Website

1.  Clone this project from github [here](https://github.com/vlad-the-EPIChacker/web3).  
    `git clone https://github.com/vladov3000/web3`
2.  Install node.js using homebrew  
    `brew install npm`
3.  Install express and a logger(morgan) using npm  
    `npm i --save express morgan`
4.  Install jade(html template language) and stylus(css template language) for our front end of the website  
    `npm i --save pug stylus`
5.  Install nodemon so we can see our changes to the website live  
    `npm install -g nodemon`

# Changing the Website

2.  Run `npm init` to initialize your website. Enter all the information it asks for. If you need to change it later, edit the package.json file.
3.  Build the website by running `npm run build`
4.  Run `npm run watch` and open [http://localhost:3000](http://localhost:3000) to watch your website update live (you have to save your files for it to update).
5.  Edit homepage.jade or any other template ending in -page.jade to change the html of that page. Edit defualt.jade to change the the taskbar or other elements present on every page.
6.  Edit index.style to edit the css classes of the website. Do NOT edit the index.css file, because the file regenerates, discarding all changes, everytime the css is built.

# Hosting the website

1.  I used [digital ocean](https://www.digitalocean.com) to host my website, because it only costs [$5](https://www.digitalocean.com/pricing/) per month for one CPU, 1 GB of RAM, and 25 GB of SSD.
2.  Click on [this](https://www.digitalocean.com) and sign up for digital ocean.
3.  Create a new droplet by clicking the green button in the top right corner.
4.  Select Ubuntu and the $5/mo option. Choose a datacenter closest to you. DO NOT SUBMIT THE FORM YET!
5.  Go to the terminal and input `ssh-keygen -t rsa -b 4096` and accept all defaults (just keep pressing enter).
6.  Do `cat .ssh/id_rsa.pub` for your public key and `cat .ssh/id_rsa` for your private key.
7.  Go back to the create a droplet page and add a new ssh key. Copy your public key into that field and save it.
8.  Press Create
9.  Now go to your dashboard and copy the ip adress of the droplet you just created
10.  Run `ssh root@ipAdress` in your command prompt.

# Setting Up the Website on a Droplet

1.  Instead of writing a script, we're gonna use [docker](https://www.docker.com/) to install everything we installed in "Making the Website". Docker allows us to package multiple components in a single container. See the [Dockerfile](https://github.com/vladov3000/web3/blob/master/docker/Dockerfile) for more details.
2.  Set up the droplet for our docker:  
    `sudo apt-get update  
    sudo apt-get upgrade  
    sudo apt-get install docker.io  
    sudo apt-get install git  
    sudo gpasswd -a $USER docker  
    exit  
    ssh root@ipAdress`
3.  Now we clone the project by running  
    `git clone https://github.com/vladov3000/web3`  
    (replace the link to my repo with the link to your repo if you forked my repo).
4.  Go to the docker folder by running `cd web3/docker`
5.  First we need to make a docker container by running `./make_container.sh`
6.  To start the container, run `./web3/docker/start_container.sh`
7.  Type in your browser the ip address of your website

# Getting a Domain Name

1.  I am using [godaddy.com](https://www.godaddy.com/) for this tutorial. This section will require some form of electronic payment(credit card, paypal, etc).
2.  Create an account on godaddy.
3.  Go to the home page and select a domain.
4.  Add it to your cart and continue to your cart.
5.  Press continue with these options.
6.  Pay and confirm the order.
7.  Navigate to the My Products page.
8.  Press the DNS button next to your domain's name.
9.  Edit the line with type "A". Change the "points to" to the ip adress of your droplet.
10.  Type in your domain name and you should see your website. If it doesn't work, wait a bit, and try to access it again.

</div>
