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
RUN npm i --save express
RUN npm i --save morgan
RUN npm i --save pug
RUN npm i --save stylus
RUN npm install -g nodemon

ENV PATH="/node_modules/stylus/bin:${PATH}"

#website works on port 3000 inside the container
EXPOSE 3000
WORKDIR /web3
#code runs when we start container
ENTRYPOINT ["npm", "run","watch"]
