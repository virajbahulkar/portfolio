FROM debian:bullseye-slim

# Set working directory
WORKDIR /app

# Install required dependencies
RUN apt-get update && apt-get install -y \
    curl git bash build-essential libc6-dev unzip && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Install NVM
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Set NVM environment variables
ENV NVM_DIR=/root/.nvm
ENV PATH="$NVM_DIR/versions/node/v18/bin:$PATH"

# Install Node.js version 18
RUN bash -c "source $NVM_DIR/nvm.sh && nvm install 18 && nvm use 18 && nvm alias default 18"

# Ensure the correct version is used
RUN bash -c "source $NVM_DIR/nvm.sh && node -v && npm -v"

# Copy application files
COPY . .

# Install application dependencies
RUN npm install --legacy-peer-deps

# Build the application (if needed)
RUN npm run build

# Expose default application port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
