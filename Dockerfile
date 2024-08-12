FROM node:22.5.1-alpine3.19
# FROM --platform=linux/amd64 node:22.5.1-alpine3.19

LABEL name="n-task"

WORKDIR /var/www

ENV PORT=3000

COPY . .

EXPOSE ${PORT}/tcp
EXPOSE ${PORT}/udp

RUN npm install
CMD npm run start:prod
