#!/usr/bin/env node

import path from 'path';
const argv = require('minimist')(process.argv.slice(2));
const { configPath, loginUserName, loginPwd } = argv;
import main from '../src/index';

if(!configPath) {
    throw new Error("no configPath!");
}

if(!loginUserName) {
    throw new Error("no loginUserName!");
}

if(!loginPwd) {
    throw new Error("no loginPwd!");
};
const config = require(process.cwd() +'/'+ configPath );
main(config,loginUserName,loginPwd);