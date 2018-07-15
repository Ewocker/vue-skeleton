#==================== Building Stage ================================================

# Create the image based on the official Node 8.9.0 image from Dockerhub
FROM node:8.11.3-alpine as node

ARG APP_DIR=/app
ARG PORT=3000

ENV PORT=$PORT

# Create a directory where our app will be placed. This might not be necessary
RUN mkdir -p $APP_DIR

# Change directory so that our commands run inside this new directory
WORKDIR $APP_DIR

# Copy dependency definitions
COPY package.json $APP_DIR

# Install dependencies using npm
RUN npm install

# Get all the code needed to run the app
COPY . $APP_DIR

# Expose the port the app runs in
EXPOSE $PORT

#Build the app
RUN npm run build

ENTRYPOINT ["npm", "start"]

LABEL maintainer="chockerlin@gmail.com" \
      app.vcs-ref="${VCS_REF}" \
      app.version="${VERSION}" \
      app.build-date="${BUILD_DATE}" \
      app.vendor="Ewocker" \
      app.name="ewing-portfolio" \
      app.description="A Vue.js skeleton app" \
      app.docker.dockerfile="/Dockerfile" \
