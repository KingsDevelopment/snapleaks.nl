'use strict';

/*
 * config library.
 * get any config by seperated dots.
 * eg; file.property
 */

var fs = require('fs');
var merge = require('deepmerge');

var deepFindValue = (obj, variables) => {
  // get the very first to find.
  let firstVar = variables.shift();

  // check if the object has this property.
  if(obj.hasOwnProperty(firstVar)) {
    // if there are more variables, search deeper within the found object.
    if(variables.length && typeof obj[firstVar] == 'object') {
      return deepFindValue(obj[firstVar], variables);
    }
    else {
      // return whatever is found.
      return obj[firstVar];
    }
  }

  return null;
}

module.exports = (config, returnDefault) => {
  let obj = null;
  let isJS = false;

  // split the variables so we can do something with it.
  let variables = config.split('.');
  let file = variables.shift(); // first is always file.

  let configDirectory = process.cwd() + '/common/config/'
  let fileLocation = configDirectory + file + '.json';
  let devFileLocation = configDirectory + file + '.dev.json';
  let localFileLocation = configDirectory + file + '.local.json';
  let fileLocationJS = configDirectory + file + '.js';


  if(fs.existsSync(fileLocationJS)){
    obj = require(fileLocationJS);
    isJS = true;
  }

  // try to get file, if exception, throw it to make sure you know it comes from here.
  if(fs.existsSync(fileLocation) && !isJS){
    try {
      obj = JSON.parse(fs.readFileSync(fileLocation, 'utf8'));
    }
    catch(e) {
      throw e;
    }
  }

  // if development environment, load in .dev.json file and merge it.
  if(fs.existsSync(devFileLocation) && process.env.APP_DEBUG && !isJS){
    try {
      let devObj = JSON.parse(fs.readFileSync(devFileLocation, 'utf8'));
      obj = merge(obj, devObj);
    }
    catch(e) {
      throw e;
    }
  }

  // if local environment, load in .local.json file and merge it.
  if(fs.existsSync(localFileLocation) && !isJS){
    try {
      let localObj = JSON.parse(fs.readFileSync(localFileLocation, 'utf8'));
      obj = merge(obj, localObj);
    }
    catch(e) {
      throw e;
    }
  }

  // if no extra variables are sent, just throw in the obj.
  if(!variables.length) {
    return obj ? obj : null;
  }

  // if variables, deepfind.
  let deepFind = deepFindValue(obj, variables);

  // if found, return it.
  if(deepFind) {
    return deepFind;
  }

  // if not found, return default or null
  return returnDefault ? returnDefault : null;
}
