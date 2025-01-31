# Toolbox prueba tecnica

Este proyecto consta de una API y un cliente frontend desarrollados en Node.js y React. A continuación, se detallan los pasos para configurar y ejecutar ambos servicios.

## Requisitos previos

Asegúrate de tener instalado:
- [Node Version Manager (NVM)](https://github.com/nvm-sh/nvm)
- Node.js 14 para la API
- Node.js 16 para el cliente frontend

## Configuración y ejecución de la API

1. Navega a la carpeta de la API:
   ```sh
   cd ./API
   ```
2. Usa la versión de Node.js 14:
   ```sh
   nvm use 14
   ```
3. Instala las dependencias:
   ```sh
   npm install
   ```
4. Inicia la API:
   ```sh
   npm start
   ```
5. Para ejecutar los tests unitarios:
   ```sh
   npm test
   ```
6. Para ejecutar standard:
   ```sh
   npm run standard
   ```

## Configuración y ejecución del Cliente Frontend

1. Navega a la carpeta del cliente:
   ```sh
   cd ./client
   ```
2. Usa la versión de Node.js 16:
   ```sh
   nvm use 16
   ```
3. Instala las dependencias:
   ```sh
   npm install
   ```
4. Inicia la aplicación de React:
   ```sh
   npm start
   ```

## Notas
- Asegúrate de que la API esté corriendo antes de iniciar el cliente frontend para evitar problemas de conexión.
- Si tienes problemas con `nvm use`, verifica que tienes instaladas las versiones de Node.js necesarias con `nvm list`.
- Puedes configurar variables de entor