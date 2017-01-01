FROM mhart/alpine-node:6

ADD data/ /data

WORKDIR /data/apps/bar

RUN npm install

EXPOSE 4000

CMD [ "node", "index.js" ]
