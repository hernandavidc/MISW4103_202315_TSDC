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
    //Login
    const dataLogin1 = await compareImages(
        await fs.readFile("./images/test4-2/screenshots/1700360584.png"),
        await fs.readFile("./images/test4-1/screenshots/1700350089.png"), options);

    await fs.writeFile("./diff/test4/output1.png", dataLogin1.getBuffer());

    const dataLogin2 = await compareImages(
        await fs.readFile("./images/test4-2/screenshots/1700360590.png"),
        await fs.readFile("./images/test4-1/screenshots/1700350094.png"), options);

    await fs.writeFile("./diff/test4/output2.png", dataLogin2.getBuffer());

    const dataLogin3 = await compareImages(
        await fs.readFile("./images/test4-2/screenshots/1700360592.png"),
        await fs.readFile("./images/test4-1/screenshots/1700350096.png"), options);

    await fs.writeFile("./diff/test4/output3.png", dataLogin3.getBuffer());

    const dataLogin4 = await compareImages(
        await fs.readFile("./images/test4-2/screenshots/1700360597.png"),
        await fs.readFile("./images/test4-1/screenshots/1700350102.png"), options);

    await fs.writeFile("./diff/test4/output4.png", dataLogin4.getBuffer());

    const dataLogin5 = await compareImages(
        await fs.readFile("./images/test4-2/screenshots/1700360603.png"),
        await fs.readFile("./images/test4-1/screenshots/1700350107.png"), options);

    await fs.writeFile("./diff/test4/output5.png", dataLogin5.getBuffer());

    //Create Post
    const dataCreatePost1 = await compareImages(
        await fs.readFile("./images/test5-2/screenshots/1700361599.png"),
        await fs.readFile("./images/test5-1/screenshots/1700350144.png"), options);

    await fs.writeFile("./diff/test5/output1.png", dataCreatePost1.getBuffer());

    const dataCreatePost2 = await compareImages(
        await fs.readFile("./images/test5-2/screenshots/1700361604.png"),
        await fs.readFile("./images/test5-1/screenshots/1700350145.png"), options);

    await fs.writeFile("./diff/test5/output2.png", dataCreatePost2.getBuffer());

    const dataCreatePost3 = await compareImages(
        await fs.readFile("./images/test5-2/screenshots/1700361606.png"),
        await fs.readFile("./images/test5-1/screenshots/1700350147.png"), options);

    await fs.writeFile("./diff/test5/output3png", dataCreatePost3.getBuffer());

    const dataCreatePost4 = await compareImages(
        await fs.readFile("./images/test5-2/screenshots/1700361609.png"),
        await fs.readFile("./images/test5-1/screenshots/1700350149.png"), options);

    await fs.writeFile("./diff/test5/output4.png", dataCreatePost4.getBuffer());

    const dataCreatePost5 = await compareImages(
        await fs.readFile("./images/test5-2/screenshots/1700361616.png"),
        await fs.readFile("./images/test5-1/screenshots/1700350156.png"), options);

    await fs.writeFile("./diff/test5/output5.png", dataCreatePost5.getBuffer());

    const dataCreatePost6 = await compareImages(
        await fs.readFile("./images/test5-2/screenshots/1700361619.png"),
        await fs.readFile("./images/test5-1/screenshots/1700350157.png"), options);

    await fs.writeFile("./diff/test5/output6.png", dataCreatePost6.getBuffer());

    const dataCreatePost7 = await compareImages(
        await fs.readFile("./images/test5-2/screenshots/1700361620.png"),
        await fs.readFile("./images/test5-1/screenshots/1700350160.png"), options);

    await fs.writeFile("./diff/test5/output7.png", dataCreatePost7.getBuffer());

    const dataCreatePost8 = await compareImages(
        await fs.readFile("./images/test5-2/screenshots/1700361623.png"),
        await fs.readFile("./images/test5-1/screenshots/1700350163.png"), options);

    await fs.writeFile("./diff/test5/output8.png", dataCreatePost8.getBuffer());

    const dataCreatePost9 = await compareImages(
        await fs.readFile("./images/test5-2/screenshots/1700361625.png"),
        await fs.readFile("./images/test5-1/screenshots/1700350165.png"), options);

    await fs.writeFile("./diff/test5/output9.png", dataCreatePost9.getBuffer());

    const dataCreatePost10 = await compareImages(
        await fs.readFile("./images/test5-2/screenshots/1700361629.png"),
        await fs.readFile("./images/test5-1/screenshots/1700350169.png"), options);

    await fs.writeFile("./diff/test5/output10.png", dataCreatePost10.getBuffer());

    const dataCreatePost11 = await compareImages(
        await fs.readFile("./images/test5-2/screenshots/1700361631.png"),
        await fs.readFile("./images/test5-1/screenshots/1700350171.png"), options);

    await fs.writeFile("./diff/test5/output11.png", dataCreatePost11.getBuffer());

    const dataCreatePost12 = await compareImages(
        await fs.readFile("./images/test5-2/screenshots/1700361633.png"),
        await fs.readFile("./images/test5-1/screenshots/1700350173.png"), options);

    await fs.writeFile("./diff/test5/output12.png", dataCreatePost12.getBuffer());

    //Publish Post
    const dataPublishPost1 = await compareImages(
        await fs.readFile("./images/test7-2/screenshots/1700369858.png"),
        await fs.readFile("./images/test7-1/screenshots/1700350339.png"), options);

    await fs.writeFile("./diff/test7/output1.png", dataPublishPost1.getBuffer());

    const dataPublishPost2 = await compareImages(
        await fs.readFile("./images/test7-2/screenshots/1700369858.png"),
        await fs.readFile("./images/test7-1/screenshots/1700350339.png"), options);

    await fs.writeFile("./diff/test7/output2.png", dataPublishPost2.getBuffer());

    const dataPublishPost3 = await compareImages(
        await fs.readFile("./images/test7-2/screenshots/1700369864.png"),
        await fs.readFile("./images/test7-1/screenshots/1700350345.png"), options);

    await fs.writeFile("./diff/test7/output3.png", dataPublishPost3.getBuffer());

    const dataPublishPost4 = await compareImages(
        await fs.readFile("./images/test7-2/screenshots/1700369866.png"),
        await fs.readFile("./images/test7-1/screenshots/1700350347.png"), options);

    await fs.writeFile("./diff/test7/output4.png", dataPublishPost4.getBuffer());

    const dataPublishPost5 = await compareImages(
        await fs.readFile("./images/test7-2/screenshots/1700369868.png"),
        await fs.readFile("./images/test7-1/screenshots/1700350349.png"), options);

    await fs.writeFile("./diff/test7/output5.png", dataPublishPost5.getBuffer());

    const dataPublishPost6 = await compareImages(
        await fs.readFile("./images/test7-2/screenshots/1700369876.png"),
        await fs.readFile("./images/test7-1/screenshots/1700350356.png"), options);

    await fs.writeFile("./diff/test7/output6.png", dataPublishPost6.getBuffer());
   
    const dataPublishPost7 = await compareImages(
        await fs.readFile("./images/test7-2/screenshots/1700369879.png"),
        await fs.readFile("./images/test7-1/screenshots/1700350360.png"), options);

    await fs.writeFile("./diff/test7/output7.png", dataPublishPost7.getBuffer());
    
    const dataPublishPost8 = await compareImages(
        await fs.readFile("./images/test7-2/screenshots/1700369883.png"),
        await fs.readFile("./images/test7-1/screenshots/1700350363.png"), options);

    await fs.writeFile("./diff/test7/output8.png", dataPublishPost8.getBuffer());
    
    const dataPublishPost9 = await compareImages(
        await fs.readFile("./images/test7-2/screenshots/1700369885.png"),
        await fs.readFile("./images/test7-1/screenshots/1700350365.png"), options);

    await fs.writeFile("./diff/test7/output9.png", dataPublishPost9.getBuffer());
    
    const dataPublishPost10 = await compareImages(
        await fs.readFile("./images/test7-2/screenshots/1700369888.png"),
        await fs.readFile("./images/test7-1/screenshots/1700350369.png"), options);

    await fs.writeFile("./diff/test7/output10.png", dataPublishPost10.getBuffer());
   
    const dataPublishPost11 = await compareImages(
        await fs.readFile("./images/test7-2/screenshots/1700369891.png"),
        await fs.readFile("./images/test7-1/screenshots/1700350371.png"), options);

    await fs.writeFile("./diff/test7/output11.png", dataPublishPost11.getBuffer());
    
    const dataPublishPost12 = await compareImages(
        await fs.readFile("./images/test7-2/screenshots/1700369893.png"),
        await fs.readFile("./images/test7-1/screenshots/1700350371.png"), options);

    await fs.writeFile("./diff/test7/output12.png", dataPublishPost12.getBuffer());
    
    const dataPublishPost13 = await compareImages(
        await fs.readFile("./images/test7-2/screenshots/1700369896.png"),
        await fs.readFile("./images/test7-1/screenshots/1700350373.png"), options);

    await fs.writeFile("./diff/test7/output13.png", dataPublishPost13.getBuffer());
    
    const dataPublishPost14 = await compareImages(
        await fs.readFile("./images/test7-2/screenshots/1700369896.png"),
        await fs.readFile("./images/test7-1/screenshots/1700350373.png"), options);

    await fs.writeFile("./diff/test7/output14.png", dataPublishPost14.getBuffer());

    //Create Page

    const dataCreatePage1 = await compareImages(
        await fs.readFile("./images/test10-2/screenshots/1700369064.png"),
        await fs.readFile("./images/test10-1/screenshots/1700350533.png"), options);

    await fs.writeFile("./diff/test10/output1.png", dataCreatePage1.getBuffer());

    const dataCreatePage2 = await compareImages(
        await fs.readFile("./images/test10-2/screenshots/1700369069.png"),
        await fs.readFile("./images/test10-1/screenshots/1700350538.png"), options);

    await fs.writeFile("./diff/test10/output2.png", dataCreatePage2.getBuffer());

    const dataCreatePage3 = await compareImages(
        await fs.readFile("./images/test10-2/screenshots/1700369070.png"),
        await fs.readFile("./images/test10-1/screenshots/1700350539.png"), options);

    await fs.writeFile("./diff/test10/output3.png", dataCreatePage3.getBuffer());

    const dataCreatePage4 = await compareImages(
        await fs.readFile("./images/test10-2/screenshots/1700369071.png"),
        await fs.readFile("./images/test10-1/screenshots/1700350540.png"), options);

    await fs.writeFile("./diff/test10/output4.png", dataCreatePage4.getBuffer());

    const dataCreatePage5 = await compareImages(
        await fs.readFile("./images/test10-2/screenshots/1700369073.png"),
        await fs.readFile("./images/test10-1/screenshots/1700350542.png"), options);

    await fs.writeFile("./diff/test10/output5.png", dataCreatePage5.getBuffer());

    const dataCreatePage6 = await compareImages(
        await fs.readFile("./images/test10-2/screenshots/1700369080.png"),
        await fs.readFile("./images/test10-1/screenshots/1700350549.png"), options);

    await fs.writeFile("./diff/test10/output6.png", dataCreatePage6.getBuffer());

    const dataCreatePage7 = await compareImages(
        await fs.readFile("./images/test10-2/screenshots/1700369084.png"),
        await fs.readFile("./images/test10-1/screenshots/1700350553.png"), options);

    await fs.writeFile("./diff/test10/output7.png", dataCreatePage7.getBuffer());

    const dataCreatePage8 = await compareImages(
        await fs.readFile("./images/test10-2/screenshots/1700369087.png"),
        await fs.readFile("./images/test10-1/screenshots/1700350556.png"), options);

    await fs.writeFile("./diff/test10/output8.png", dataCreatePage8.getBuffer());

    const dataCreatePage9 = await compareImages(
        await fs.readFile("./images/test10-2/screenshots/1700369090.png"),
        await fs.readFile("./images/test10-1/screenshots/1700350558.png"), options);

    await fs.writeFile("./diff/test10/output9.png", dataCreatePage9.getBuffer());

    const dataCreatePage10 = await compareImages(
        await fs.readFile("./images/test10-2/screenshots/1700369093.png"),
        await fs.readFile("./images/test10-1/screenshots/1700350562.png"), options);

    await fs.writeFile("./diff/test10/output10.png", dataCreatePage10.getBuffer());

    const dataCreatePage11 = await compareImages(
        await fs.readFile("./images/test10-2/screenshots/1700369095.png"),
        await fs.readFile("./images/test10-1/screenshots/1700350562.png"), options);

    await fs.writeFile("./diff/test10/output11.png", dataCreatePage11.getBuffer());

    const dataCreatePage12 = await compareImages(
        await fs.readFile("./images/test10-2/screenshots/1700369101.png"),
        await fs.readFile("./images/test10-1/screenshots/1700350570.png"), options);

    await fs.writeFile("./diff/test10/output12.png", dataCreatePage12.getBuffer());

    //View Pages Public
    const dataViewPage1 = await compareImages(
        await fs.readFile("./images/test20-2/screenshots/1700360948.png"),
        await fs.readFile("./images/test20-1/screenshots/1700351217.png"), options);

    await fs.writeFile("./diff/test20/output1.png", dataViewPage1.getBuffer());

    const dataViewPage2 = await compareImages(
        await fs.readFile("./images/test20-2/screenshots/1700360954.png"),
        await fs.readFile("./images/test20-1/screenshots/1700351218.png"), options);

    await fs.writeFile("./diff/test20/output2.png", dataViewPage2.getBuffer());

    const dataViewPage3 = await compareImages(
        await fs.readFile("./images/test20-2/screenshots/1700360955.png"),
        await fs.readFile("./images/test20-1/screenshots/1700351219.png"), options);

    await fs.writeFile("./diff/test20/output3.png", dataViewPage3.getBuffer());

    const dataViewPage4 = await compareImages(
        await fs.readFile("./images/test20-2/screenshots/1700360957.png"),
        await fs.readFile("./images/test20-1/screenshots/1700351221.png"), options);

    await fs.writeFile("./diff/test20/output4.png", dataViewPage4.getBuffer());

    const dataViewPage5 = await compareImages(
        await fs.readFile("./images/test20-2/screenshots/1700360965.png"),
        await fs.readFile("./images/test20-1/screenshots/1700351228.png"), options);

    await fs.writeFile("./diff/test20/output5.png", dataViewPage5.getBuffer());

    const dataViewPage6 = await compareImages(
        await fs.readFile("./images/test20-2/screenshots/1700360968.png"),
        await fs.readFile("./images/test20-1/screenshots/1700351232.png"), options);

    await fs.writeFile("./diff/test20/output6.png", dataViewPage6.getBuffer());
}

getDiff();