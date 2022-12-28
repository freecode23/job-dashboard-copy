# FROM --platform=linux/amd64 node:16.16.0-alpine3.16

FROM node:16.16.0-alpine3.16
ARG REACT_APP_SOMETHING
# 1. create the dir for this app
WORKDIR /app


# 2. install chrome
RUN apk update && apk add --no-cache bash \
    g++ make py3-pip\
    util-linux\
    chromium \
    chromium-chromedriver


# 3. copy the dependency list to container
COPY ./package.json ./

# 4. install all dependencies
RUN npm cache clear --force
RUN npm i

# 5. copy all current dir to container
COPY ./ ./

RUN ls

# 6. Bundle front end
RUN npm run build

# # debug
# RUN ls

# # 7. RUN SERVER
CMD [ "npm", "start" ]


