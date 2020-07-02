const path = require('path');

const argv = require('minimist')(process.argv.slice(2));
const { configPath, loginUserName, loginPwd } = argv;
const main = require('../src/index');

if(!configPath) {
    throw new Error("no configPath!");
}

if(!loginUserName) {
    throw new Error("no loginUserName!");
}

if(!loginPwd) {
    throw new Error("no loginPwd!");
}
const config = require(path.resolve(__dirname, '..', configPath));
main(config,loginUserName,loginPwd);