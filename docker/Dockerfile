FROM ubuntu
MAINTAINER vladov3000@gmail.com

RUN echo "0.1" > /version

VOLUME /web3 

#update your droplet
RUN apt-get update
RUN apt-get upgrade -y
#tmux is a convient terminal manager
RUN apt-get -y install tmux
#you can tab to complete filenames
RUN apt-get -y install bash-completion
#insatll git
RUN apt-get -y install git
RUN apt-get update
#install nodejs, npm, etc.
RUN apt-get -y install nodejs
RUN ln -s /usr/bin/nodejs /usr/bin/node
RUN apt-get -y install npm
RUN npm i --save express@4 morgan@1
RUN npm i --save pug  stylus@0
RUN npm install -g nodemon

#website works on port 3000 inside the container
EXPOSE 3000
WORKDIR /web3
#code runs when we start container
ENTRYPOINT ["npm", "run","watch"]
