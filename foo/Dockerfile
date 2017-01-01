FROM mhart/alpine-node:6

ADD data/ /data

WORKDIR /data/apps/foo

RUN npm install

EXPOSE 5000

CMD [ "node", "index.js" ]
