FROM node:20-bullseye-slim

WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y \
    curl python3 make g++ libc6-dev unzip git && \
    apt-get clean && rm -rf /var/lib/apt/lists/*


# Copy package.json and ensure dependencies
COPY package.json ./
RUN npm install --legacy-peer-deps --verbose

# Explicitly install Astro in case it's being skipped
RUN npm install astro --verbose

# Add node_modules/.bin to PATH for accessing `astro`
ENV PATH="/app/node_modules/.bin:$PATH"

# Copy application files
COPY . .

# Expose Astro dev server port
EXPOSE 4321

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

