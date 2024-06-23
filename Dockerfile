
# Build the frontend
FROM node:16 as frontend-builder
WORKDIR /app
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build

# Setup Nginx to serve the frontend
FROM nginx:alpine
COPY --from=frontend-builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
