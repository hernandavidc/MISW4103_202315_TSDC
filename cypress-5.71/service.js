var fs = require('fs');
function filesList(dirName, useCaseList) {
    // Find the files in the dirName directory
    var folderFound = fs.readdirSync(dirName)
    // Fin the folder that contains the required use case
    var useCaseToEvaluate = folderFound.filter((dir) => {
        return useCaseList.some(element => dir.includes(element));
    })
    // Get all the images needed to compare
    var allFilesForUseCases = []
    useCaseToEvaluate.forEach(folderName => {
        fs.readdirSync(dirName + "/" +folderName).forEach(file => allFilesForUseCases.push(dirName + "/" + folderName + "/" + file))
    })
    return allFilesForUseCases
}

module.exports = {
    "filesList": filesList
}