FROM node:18

# Set working directory
WORKDIR /app

# Copy application files
COPY . .

# Install dependencies
RUN npm install --legacy-peer-deps --force

# Build the application (if you have a build step, otherwise skip)
RUN npm run build

# Expose default application port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
