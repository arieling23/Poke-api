FROM node:18

WORKDIR /app

COPY . .

# 1. Instalar dependencias y dar permisos a react-scripts
RUN npm install && chmod +x ./node_modules/.bin/react-scripts

# 2. Asegurar que el PATH incluye los binarios locales de node_modules
ENV PATH /app/node_modules/.bin:$PATH

# 3. Compilar la app
RUN npm run build

# 4. Instalar un servidor estático para servir el frontend
RUN npm install -g serve

EXPOSE 3001

# 5. Comando por defecto
CMD ["serve", "-s", "build"]
