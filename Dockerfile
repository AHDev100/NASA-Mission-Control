FROM node:16-alpine 

WORKDIR /app

COPY package*.json ./ 

COPY client/package*.json client/
RUN npm install --prefix client 

COPY server/package*.json server/
RUN npm install --prefix server 

COPY client/ client/
RUN npm run build --prefix client

COPY client/public/ server/public/

COPY server/ server/ 

USER node

CMD ["npm", "start", "--prefix", "server"] 

EXPOSE 8000