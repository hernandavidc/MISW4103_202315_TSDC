## Ejecucion de Kraken y Pruebas

El esqueleto que genera la plantilla de Kraken contiene un directorio features, compuesto de 2 subdirectorios y un archivo
En el cual se encuentra Mobile y Web para ambos escenarios, y en la cual se encuentran los .feature que son los pasos que vamos a verificar

Internamente hay una una carpeta llamada step_definition en la cual esta un archivo donde estan guardados los calls que se hace en cada uno de los steps,
basicamente es codigo jquery que va ejecutandose en un browser y el cual por medio del dom de html interactura y ejecuta pasos, como clicks llenar informacion
de formularios etc.

### Entonces teniendo esto en cuenta instalamos Kraken con el siguiente comando: 

npm install kraken-node

Luego para ejecutar el kraken utilizarmos el para correrlo 

./node_modules/kraken-node/bin/kraken-node run

El ira por el feature paso a pasa ejecutando el codigo jquery que dejamos asociado

Cuando el termina genera un reporte como se ve en el repositorio en la carpeta reports queda todo el informe HTML en donde se denota que dispositivos que pruebas y deja los screenshots guardados en el index report.

Es necesario añadir en el path de windows el tema de las variables de entorno para adb, las cuales son de android. Usamos este link para configurar las variables de entorno acorde

https://stackoverflow.com/questions/20564514/adb-is-not-recognized-as-an-internal-or-external-command-operable-program-or

Tambien hay que ser enfaticos de que funciona unicamente con una version de nodejs lo cual es una limitante, funciona con la version 16.14.2

Se hace la aclaracion de que debe correrse uno a uno para poder sacar todos los reportes, se sacaron todos los reportes de kraken estan en la carpeta de cada una de las versiones llamadas reports

## BackStop

Para poder utilizar backstop es bastante sencillo:

Tenemos que ejecutar el siguiente comando npm install -g backstopjs el cual instalara globalmente el backstop

Backstop funciona con 3 simples comandos:

backstop init, sobre el directorio que se esta trabajando 

backstop reference, para sacar las imagenes de referencia con las cuales vamos a comparar las versiones anteriores

backstop test, para ejecutar la comparacion entre referencia y las imagenes reales de la version a comparar

automaticamente saca el report en html en la carpeta indicada html_report

## Resemble

Para utilizar resemble, es una libreria de node js por lo cual requiere instalarse y tener un archivo en el cual se implemente:

En este caso ejecutaremos el comando sobre un proyecto de node js 

npm i resemblejs

el cual instalara la biblioteca, al tener la libreria instalada se debe crear un archivo en el cual importe la libreria y la incluya para su uso

```
const compareImages = require("resemblejs/compareImages");
const fs = require("mz/fs");

async function getDiff() {
    const options = {
        output: {
            errorColor: {
                red: 255,
                green: 0,
                blue: 255
            },
            errorType: "movement",
            transparency: 0.3,
            largeImageThreshold: 1200,
            useCrossOrigin: false,
            outputDiff: true
        },
        scaleToSameSize: true,
        ignore: "antialiasing"
    };

    const data = await compareImages(await fs.readFile("./your-image-path/People.jpg"), await fs.readFile("./your-image-path/People2.jpg"), options);

    await fs.writeFile("./output.png", data.getBuffer());
}

getDiff();
```

en nuestro caso es el archivo dentro de resemble llamado test.js el cual se ejecuta y saca las imagenes en la ruta deseada. con el methodo de compareImages()

asi se realizaron todos los casos los cuales añadimos en un reporte html custom hecho en html el cual se ven las imagenes comparadas uno a uno el reporte esta en la carpeta resemble Report.html
