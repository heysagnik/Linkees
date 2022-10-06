# Production Dockerfile
# Use this file to build for production

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
# Don't use `npm ci --production` as it won't install devDependencies which contains TypeScript that will enable `npm run build` to work
RUN npm ci

# Next, copy all remaining files to /app
COPY . .

# Compile the app
RUN npm run build

# Install serve globally for the container
RUN npm install -g serve

# React port
EXPOSE 4000

# Start the app and listen to port 4000
CMD ["serve", "-s", "build", "-l", "4000"]