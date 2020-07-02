const fs = require('fs');
const path = require('path');

const generateResult = (pageComments) => {
    const outputPath = require(path.resolve(__dirname));
    var outputFilename = `${outputPath}/results-${Date.now()}.json`;
    fs.writeFile(outputFilename, JSON.stringify(pageComments, null, 4), (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Result saved to " + outputFilename);
        }
    });
}

module.exports = generateResult;