var _reactNative=require('react-native');



var _shallowEquals=require('./shallowEquals');var _shallowEquals2=_interopRequireDefault(_shallowEquals);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

function isEventKey(key){
if(key.substr(0,2)!=='on')return false;
var c=key[2];
if(c===undefined||!isNaN(c*1))return false;
return c===c.toUpperCase();
}
var IS_IMAGE_REGEX=/image/i;

function isImageKey(key){
return IS_IMAGE_REGEX.test(key);
}

var IS_COLOR_REGEX=/color$/i;


function isColorKey(key){
return IS_COLOR_REGEX.test(key);
}

function processConfig(config){
if(typeof config!=='object'){
return config;
}
var obj={};
Object.keys(config).forEach(function(key){
if(isColorKey(key)){
obj[key]=(0,_reactNative.processColor)(config[key]);
}else if(isImageKey(key)){
obj[key]=_reactNative.Image.resolveAssetSource(config[key]);
}else if(isEventKey(key)){

}else if(Array.isArray(config[key])){
obj[key]=config[key].map(processConfig);
}else{
obj[key]=config[key];
}
});
return obj;
}

function processConfigWatchingForMutations(target,prev,next,mutationFlag,onEvent){

if(typeof next!=='object'){
return;
}
Object.keys(next).forEach(function(key){
if(key==='children')return;
if(isEventKey(key)){
onEvent&&onEvent(key);
}else if(prev[key]!==next[key]){
if(isColorKey(key)){
target[key]=(0,_reactNative.processColor)(next[key]);
mutationFlag.hasMutated=true;
}else if(isImageKey(key)){
target[key]=_reactNative.Image.resolveAssetSource(next[key]);
mutationFlag.hasMutated=true;
}else if(Array.isArray(next[key])){

if(!(0,_shallowEquals2.default)(next[key],prev[key],_shallowEquals2.default)){
processConfigWatchingForMutations(target[key]);
target[key]=next[key].map(function(el){
var result={};
processConfigWatchingForMutations(result,{},el,mutationFlag,null);
return result;
});
mutationFlag.hasMutated=true;
}
}else{
target[key]=next[key];
mutationFlag.hasMutated=true;
}
}
});



Object.keys(prev).forEach(function(key){
if(key in prev&&!(key in next)){
if(isEventKey(key)){
onEvent&&onEvent(key);
}else if(key==='children'){

}else{

target[key]=undefined;
mutationFlag.hasMutated=true;
}
}
});
}

module.exports={
isEventKey:isEventKey,
isColorKey:isColorKey,
processConfig:processConfig,
processConfigWatchingForMutations:processConfigWatchingForMutations};
//# sourceMappingURL=utils.js.map