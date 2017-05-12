Object.defineProperty(exports,"__esModule",{value:true});var _reactNativeSafeModule=require('react-native-safe-module');var _reactNativeSafeModule2=_interopRequireDefault(_reactNativeSafeModule);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var noop=function noop(){};
var unresolvedPromise=function unresolvedPromise(){return new Promise(function(){});};

var NavigatorModule=_reactNativeSafeModule2.default.module({
moduleName:'NativeNavigationModule',
mock:{
push:unresolvedPromise,
pushNative:unresolvedPromise,
present:unresolvedPromise,
presentNative:unresolvedPromise,
replace:unresolvedPromise,
pop:noop,
dismiss:noop,
signalFirstRenderComplete:noop,
setScreenProperties:noop,
registerScreen:noop}});exports.default=



NavigatorModule;
//# sourceMappingURL=NavigatorModule.js.map