import fs from 'fs';

const generateResult = (pageComments) => {
    var outputFilename = `${process.cwd()}/results-${Date.now()}.json`;
    fs.writeFile(outputFilename, JSON.stringify(pageComments, null, 4), (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Result saved to " + outputFilename);
        }
    });
}

export default generateResult;