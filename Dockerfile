FROM node:20.12.0-alpine3.19

WORKDIR /usr/src/app

ENV DATABASE_URL="postgres://avnadmin:AVNS_ZcXAtToDmCHzMi07SwD@pg-d427b22-maniksharma-1ba0.l.aivencloud.com:23009/defaultdb?sslmode=require"

COPY package.json package-lock.json turbo.json tsconfig.json ./

COPY apps ./apps
COPY packages ./packages

# Install dependencies
RUN npm install
# Can you add a script to the global package.json that does this?
RUN npm run db:generate

# Can you filter the build down to just one app?
RUN npm run build

CMD ["npm", "run", "start-user-app"]