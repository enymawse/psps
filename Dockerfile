# Stage 1: Build
FROM node:22 AS build
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Build the Angular application
COPY . .
RUN npm run build --prod

# Stage 2: Serve
FROM nginx:alpine

# Copy the production build to Nginx's default HTML directory
COPY --from=build /app/dist/psps/browser /usr/share/nginx/html

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 6767
EXPOSE 6767

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
