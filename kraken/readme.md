Ejecucion de Kraken y Pruebas

El esqueleto que genera la plantilla de Kraken contiene un directorio features, compuesto de 2 subdirectorios y un archivo
En el cual se encuentra Mobile y Web para ambos escenarios, y en la cual se encuentran los .feature que son los pasos que vamos a verificar

Internamente hay una una carpeta llamada step_definition en la cual esta un archivo donde estan guardados los calls que se hace en cada uno de los steps,
basicamente es codigo jquery que va ejecutandose en un browser y el cual por medio del dom de html interactura y ejecuta pasos, como clicks llenar informacion
de formularios etc.

Entonces teniendo esto en cuenta instalamos Kraken con el siguiente comando 

npm install kraken-node

Luego para ejecutar el kraken utilizarmos el para correrlo 

./node_modules/kraken-node/bin/kraken-node run

El ira por el feature paso a pasa ejecutando el codigo jquery que dejamos asociado

Cuando el termina genera un reporte como se ve en el repositorio en la carpeta reports queda todo el informe HTML en donde se denota que dispositivos que pruebas y
deja los screenshots guardados en el index report.

Es necesario añadir en el path de windows el tema de las variables de entorno para adb, las cuales son de android. Usamos este link para configurar las variables de entorno acorde

https://stackoverflow.com/questions/20564514/adb-is-not-recognized-as-an-internal-or-external-command-operable-program-or

Tambien hay que ser enfaticos de que funciona unicamente con una version de nodejs lo cual es una limitante, funciona con la version 16.14.2
