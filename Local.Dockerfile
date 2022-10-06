# Local Dockerfile
# Use this file to build for local

# Get Node 14 Alpine Image
FROM node:14-alpine

# Our work directory is /app
WORKDIR /app

# Ensure that package.json has been put first
COPY package.json .

# After that, move package-lock.json to ensure `npm ci` can run smoothly
COPY package-lock.json .

# Then run npm ci to install all dependencies
# Read [https://stackoverflow.com/questions/52499617/what-is-the-difference-between-npm-install-and-npm-ci] to learn more
RUN npm ci
# RUN npm install

# Next, copy all remaining files to /app
COPY . .

# React port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]

# Run locally
# docker run -p 3000:3000 --name container_name -d image_name