FROM debian:bullseye-slim

# Set working directory
WORKDIR /app

# Install required dependencies
RUN apt-get update && apt-get install -y curl git bash build-essential && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Install NVM
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Set NVM environment variables
ENV NVM_DIR=/root/.nvm
ENV PATH="$NVM_DIR/bin:$PATH"

# Install Node.js version 18
RUN bash -c "source $NVM_DIR/nvm.sh && nvm install 18 && nvm use 18 && nvm alias default 18"

# Confirm Node.js and npm versions
RUN bash -c "node -v && npm -v"
