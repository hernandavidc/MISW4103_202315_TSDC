# Semana 8
Los pasos anteriores siguen siendo vigentes para una ejecución global de las pruebas. Para esta semana, se recomienda habilitar la variable de entorno `enable_screenshots` que se encuentra en el archivo cypress.config.js y ejecutar la prueba en específico para evitar bloqueos en el CMS y tiempos de espera.

Para ejecutar la prueba en específico, en la terminal, entramos a la carpeta de este proyecto:
> cd .\cypress-5.71\ 

> npx cypress run --spec cypress/e2e/subscribe-newsletter.cy.js

# Semana 7

Los pasos de impletación de la semana 6 aún son pertienentes, como variante se tiene una nueva variable de entorno llamada `enable_screenshots` el cual es utilizada en el comando personalizado `custom_screenshot` para activar o desactivar la toma de pantalla en cada caso.

Como primer paso, nos debemos ubicar en la carpeta cypress-5.71

Para cerciorarse que se tengan todas las dependencias necesarias, ejecutar:
> npm i -E

Para ejecutar los 64 escenarios de pruebas se debe utilizar el comando (OJO: tener en cuenta las notas):
> npm run cypress:run

### Notas

Con el comando npm run cypress:run se ha experimentado que se puede tumbar el servicio de Amazon EC2 que está alojando a Ghost 5.71, por lo que es recomendable ir ejecutando cada archivo de pruebas por separado dando espera entre cada ejecución, se configuró un comando cron para que en caso de que la instancia se reinicie sola levante nuevamente el proyecto de Ghost, pero en caso de experimentar problemas con la instancia en EC2, por favor comunicarse con Hernán David Álvarez Caballero.

Se debe tener en cuenta que Ghost soporta una cantidad máxima de inicio de sesión por hora, por lo que puede ser posible que dada la alta cantidad de escenarios haciendo login se bloqueé Ghost, si esto pasa, se aconseja esperar 30 o 60 minutos e ir ejecutando cada archivo de prueba que están presentes en la carpeta cypress/e2e con el siguiente comando que muestra como ejecutar solo el archivo edit-post.cy.js, pero se pueden probar los demás archivos:
> npx cypress run --spec cypress/e2e/edit-post.cy.js

En caso de requerir ver la interfaz gráfica de cypress para la ejecución de los escenarios, se puede ejecutar el siguiente comando:
> npm run cypress:open

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
