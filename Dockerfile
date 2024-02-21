FROM node:20-slim

WORKDIR /home/node/app

USER node

CMD [ "tail", "-f", "/dev/null" ]
## tail comando de leitura de arquivos Linux
## -f roda o arquivo de forma indefinida 