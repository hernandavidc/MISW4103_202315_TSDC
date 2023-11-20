# Semana 6

## Aclaraciones
Se ha empleado la versión de Ghost 5.71 [Ghost 5.71 servidor](https://ghost-test-e23.digitalpress.blog/ghost/#/signin) y la versión de Ghost 4.48 [Ghost 4.48 servidor](http://ec2-18-191-49-64.us-east-2.compute.amazonaws.com:2368/ghost/#/signin). Estas versiones están en servidores para facilitar el proceso de evaluación, por este motivo, las credenciales están quemadas en los archivos **cypress.config.js** de las carpetas cypress-4.48 y cypress-5.71.  
Resemble se utiliza en Cypress con 10 escenarios de prueba, Backstop se implementa para los escenarios de Kraken.

## Procedimiento

En la carpeta cypress-5.71 de Ghost se hará la instalación de Resemble, esto con el propósito de ejecutar la comparación desde la última versión a probar de Ghost para ver si se presentan regresiones.

Para la instalación de ResembleJS se recomienda leer las instrucciones
[Resemble](https://github.com/rsmbl/Resemble.js/blob/master/README.md), los comandos básicos son:

Si se va a realizar la ejecución en MAC, ejecutar el siguiente comando si no se tienen las dependencias para canvas [Canvas](https://www.npmjs.com/package/canvas):
> brew install pkg-config cairo pango libpng jpeg giflib librsvg pixman

Si se va a realizar la ejención en Windows, se requiere seguir lo documentado en el siguiente link: [Canvas en windows](https://github.com/Automattic/node-canvas/wiki/Installation:-Windows)

Instalar las dependencias incluyendo Resemble:
>npm i -E

Luego, nos ubicamos en las carpetas cypres-4.48 y cypress-5.71 y ejecutamos el siguiente comando para ejecutar las pruebas y generar las capturas de pantalla:

>npm run cypress:run

Se debe esperar hasta que todas las pruebas se terminen de ejecutar, una vez terminadas, nos ubicamos sobre la carpeta cypress-5.71 y ejecutamos el siguiente comando para generar el reporte con resemble:

>node resemble.js

El comando anterior creará una carpeta dentro de la carpeta cypress-5.71 nombrada reports y contendrá carpetas con nombre de fechas según se haya ejecutado el reporte, se puede abrir la carpeta de preferencia en caso de existir varias y dentro de la carpeta seleccionada, abrir el archivo **report.html** que muestra el reporte para las funcionalidades de eliminar post, eliminar página, SEO y editar post, esto en total suma 10 escenarios. 

Las incidencias encontradas con las herramientas para VRT se encuentran en [Incidencias](https://github.com/hernandavidc/MISW4103_202315_TSDC/issues)


# Semana 5
## Escenarios con cypress

### Instrucciones para ejecutar el código.
GHOST CMS versión: 5.71

Desde la raíz de la carpeta (primera carpeta cypress) ejecutar el siguiente comando con el fin de descargar los paquetes requeridos:
> npm install

En el archivo **cypress.config.js** se evidencia la configuración de las variables de entorno. Se puede apreciar que el admin_url (dominio) es un servicio alojado en la nube.

Una vez instaladas las dependencias, ejecutar el siguiente comando el cual abrirá una ventana de cypress:
> npm run cypress:open

En la ventana que abre de cypress, seleccionar E2E Testing, luego seleccionar el navegador Chrome o el de preferencia y dar en el botón de abajo para ejecutar las pruebas en el navegador 

Otra opción para ejecutar cypress es desde la consola ejecutar:
> npm run cypress:run 

Este muestra el resultado por consola de todos los escenarios probados.
