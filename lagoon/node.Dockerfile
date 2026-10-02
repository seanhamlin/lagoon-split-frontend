FROM uselagoon/node-24:latest

COPY frontend/ /app/
RUN npm ci --omit=dev

EXPOSE 3000

CMD ["npm", "run", "start"]
