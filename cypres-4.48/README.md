## Escenarios con cypress

### Instrucciones para ejecutar el código.

Desde la raíz de la carpeta (primera carpeta cypress) ejecutar el siguiente comando con el fin de descargar los paquetes requeridos:
> npm install

En el archivo **cypress.config.js** se evidencia la configuración de las variables de entorno. Se puede apreciar que el admin_url (dominio) es un servicio alojado en la nube.

Una vez instaladas las dependencias, ejecutar el siguiente comando el cual abrirá una ventana de cypress:
> npm run cypress:open

En la ventana que abre de cypress, seleccionar E2E Testing, luego seleccionar el navegador Chrome o el de preferencia y dar en el botón de abajo para ejecutar las pruebas en el navegador 

Otra opción para ejecutar cypress es desde la consola ejecutar:
> npm run cypress:run 

Este muestra el resultado por consola de todos los escenarios probados.
