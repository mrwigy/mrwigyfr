FROM node:latest as mrwigyfr

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:latest

COPY --from=mrwigyfr /app/dist/ /usr/share/nginx/gtml/
RUN ln -s /usr/share/nginx/html /usr/share/nginx/html/mrwigyfr

RUN rm /etc/nginx/conf.d/default.conf
COPY ./conf/mrwigyfr.conf /etc/nginx/conf.d/