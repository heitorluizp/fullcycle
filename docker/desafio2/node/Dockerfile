FROM node:15

WORKDIR /usr/src/app

COPY wait-for-it.sh /usr/local/bin/

RUN chmod +x /usr/local/bin/wait-for-it.sh

RUN npm install
RUN npm install express
RUN npm install mysql



COPY . .

CMD ["wait-for-it.sh", "db:3306", "--", "node", "index.js"]

EXPOSE 3000

