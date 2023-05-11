# node image
FROM node:8.2.1

#RUN git clone https://github.com/mcollina/mosca.git
WORKDIR /mosca

# install all needed packages
#RUN npm install 
RUN npm install mosca --save && npm install jsonschema@1.2.6 --save

# add the files to load
ADD ./broker.js .

# expose port
EXPOSE 1883
EXPOSE 80

# execute app.js
ENTRYPOINT ["node", "broker.js"]