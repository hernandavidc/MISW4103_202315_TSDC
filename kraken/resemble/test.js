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

    const data = await compareImages(
        await fs.readFile("./images/test4-2/screenshots/login1.png"),
        await fs.readFile("./images/test4-1/screenshots/login1.png"), options);

    await fs.writeFile("./diff/test4/output1.png", data.getBuffer());
}

getDiff();