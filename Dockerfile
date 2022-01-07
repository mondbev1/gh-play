FROM node:14
WORKDIR /usr/src/app
RUN npm install -g nodemon
COPY package.json ./
RUN npm install
COPY app.js ./
EXPOSE 3000
CMD ["node", "app.js"]