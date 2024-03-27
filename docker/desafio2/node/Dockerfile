FROM node:15

WORKDIR /usr/src/app


RUN npm install
RUN npm install express
RUN npm install mysql



COPY . .

CMD ["node", "index.js"]

EXPOSE 3000


