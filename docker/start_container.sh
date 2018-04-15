#!/bin/bash
#port 80 is mapped to port 3000 inside the container
docker run -v ~/web3:/web3 -p 80:3000 -it web3 /bin/sh
