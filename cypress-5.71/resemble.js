const service = require('./service.js');
const compareImages = require("resemblejs/compareImages")
const config = require("./config.json");
const fs = require('fs');

async function executeResembleReport(){
    var rootPathOld = "./cypress/screenshots"
    var rootPathNew = "./cypress/screenshots"
    var oldVersionImagesRoutes = service.filesList(rootPathOld, ["create-page", "create-post"])
    var newVersionImagesRoutes = service.filesList(rootPathNew, ["create-page", "create-post"])
    let resultInfo = {}
    let reportInfoConsolidated = []
    let datetime = new Date().toISOString().replace(/:/g,".");
    for (var i = 0; i < newVersionImagesRoutes.length; i++) {
        const data = await compareImages(
            fs.readFileSync(oldVersionImagesRoutes[i]),
            fs.readFileSync(newVersionImagesRoutes[i]),
            config.options
        );
        let comparedFilePath = newVersionImagesRoutes[i].split("/")
        let fileNameCompared = comparedFilePath[comparedFilePath.length-1]
        resultInfo = {
            isSameDimensions: data.isSameDimensions,
            dimensionDifference: data.dimensionDifference,
            rawMisMatchPercentage: data.rawMisMatchPercentage,
            misMatchPercentage: data.misMatchPercentage,
            diffBounds: data.diffBounds,
            analysisTime: data.analysisTime,
            oldImagePath: "../.." + oldVersionImagesRoutes[i].substring(1),
            newImagePath: "../.." + newVersionImagesRoutes[i].substring(1),
            fileNameCompared: fileNameCompared
        }
        reportInfoConsolidated.push(resultInfo)
        if (!fs.existsSync(`./reports/${datetime}`)){
            fs.mkdirSync(`./reports/${datetime}`, { recursive: true });
        }
        fs.writeFileSync(`./reports/${datetime}/compare-${fileNameCompared}`, data.getBuffer());
    }
    fs.writeFileSync(`./reports/${datetime}/report.html`, createReport(datetime, reportInfoConsolidated));
    fs.copyFileSync('./index.css', `./reports/${datetime}/index.css`);
    console.log('********************************************************************');
    console.log("Execution finished. Check the report under the results folder");
}

function reportContent(info){
    return `<div class=" browser" id="test0">
    <div class=" btitle">
        <pre>Data: ${JSON.stringify(info, null, 2)}</pre>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Reference</span>
        <img class="img2" src="${info.oldImagePath}" id="refImage" label="Reference">
      </div>
      <div class="imgcontainer">
        <span class="imgname">Test</span>
        <img class="img2" src="${info.newImagePath}" id="testImage" label="Test">
      </div>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Diff</span>
        <img class="imgfull" src="./compare-${info.fileNameCompared}" id="diffImage" label="Diff">
      </div>
    </div>
  </div>`
}

function createReport(datetime, reportConsolidated){
    return `
    <html>
        <head>
            <title> VRT Report </title>
            <link href="index.css" type="text/css" rel="stylesheet">
        </head>
        <body>
            <h1>Report for </h1>
            <p>
            Old Ghost 4.48: <a href="http://ec2-18-191-49-64.us-east-2.compute.amazonaws.com:2368/ghost/#/signin">http://ec2-18-191-49-64.us-east-2.compute.amazonaws.com:2368/ghost/#/signin</a>
            </p>
            <p>
            New Ghost 5.71: <a href="https://ghost-test-e23.digitalpress.blog/ghost/#/signin"> https://ghost-test-e23.digitalpress.blog/ghost/#/signin</a>
            </p>
            <p>Executed: ${datetime}</p>
            <div id="visualizer">
                ${reportConsolidated.map(report=>reportContent(report))}
            </div>
        </body>
    </html>`
}

executeResembleReport()