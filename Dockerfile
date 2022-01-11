FROM node:16.13.0-alpine

WORKDIR /app
COPY --from=client /app/client/build/ ./client/build/
RUN ls

WORKDIR /app/server/
COPY server/package*.json ./
RUN npm install -qy
COPY server/ ./

EXPOSE 8080

FROM node:16.13.0-alpine as client

WORKDIR /app/client/

COPY client/package*.json ./

RUN npm install

COPY client/ ./
RUN ls

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]