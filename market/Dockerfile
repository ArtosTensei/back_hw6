FROM node:20

WORKDIR /back/market


COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8000

CMD ["npm", "run", "dev"]
