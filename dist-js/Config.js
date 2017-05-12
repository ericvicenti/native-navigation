var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');



var _navigatorEmitter=require('./navigatorEmitter');var _navigatorEmitter2=_interopRequireDefault(_navigatorEmitter);
var _NavigatorModule=require('./NavigatorModule');var _NavigatorModule2=_interopRequireDefault(_NavigatorModule);
var _utils=require('./utils');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var



Config=function(_React$Component){_inherits(Config,_React$Component);
function Config(props,context){_classCallCheck(this,Config);var _this=_possibleConstructorReturn(this,(Config.__proto__||Object.getPrototypeOf(Config)).call(this,
props,context));
_this.deeSubscriptions={};
_this.neSubscriptions={};
_this.handleProps(
props,
{},
context.nativeNavigationInstanceId,
context.nativeNavigationGetConfig());return _this;

}_createClass(Config,[{key:'componentWillReceiveProps',value:function componentWillReceiveProps(

nextProps,nextContext){
this.handleProps(
nextProps,
this.props,
nextContext.nativeNavigationInstanceId,
nextContext.nativeNavigationGetConfig());

}},{key:'componentWillUnmount',value:function componentWillUnmount()

{var _this2=this;
Object.keys(this.deeSubscriptions).forEach(function(key){
_reactNative.DeviceEventEmitter.removeSubscription(_this2.deeSubscriptions[key]);
});

Object.keys(this.neSubscriptions).forEach(function(key){
_navigatorEmitter2.default.unsubscribe(_this2.neSubscriptions[key]);
});
}},{key:'setCallbackIfNeeded',value:function setCallbackIfNeeded(

event,next,prev,id){
if(next[event]!==prev[event]){
this.setCallback(event,id,next[event]);
if(event==='onAppear'&&_reactNative.Platform.OS==='android'){



this.setNavigatorEmitterCallback('sceneDidMount',id,next[event]);
}
}
}},{key:'setNavigatorEmitterCallback',value:function setNavigatorEmitterCallback(

event,id,cb){
var key=event+'.'+id;
if(this.neSubscriptions[key]){
_navigatorEmitter2.default.unsubscribe(this.neSubscriptions[key]);
}
this.neSubscriptions[key]=_navigatorEmitter2.default.on(key,cb);
}},{key:'setCallback',value:function setCallback(

event,id,cb){
var key='NativeNavigationScreen.'+event+'.'+id;
if(this.deeSubscriptions[key]){
_reactNative.DeviceEventEmitter.removeSubscription(this.deeSubscriptions[key]);
}
this.deeSubscriptions[key]=_reactNative.DeviceEventEmitter.addListener(key,cb);
}},{key:'handleProps',value:function handleProps(

next,prev,id,screenProps){var _this3=this;

if(!id||!screenProps){
return;
}
var flag={hasMutated:false};
(0,_utils.processConfigWatchingForMutations)(
screenProps,
prev,
next,
flag,
function(key){return _this3.setCallbackIfNeeded(key,next,prev,id);});


if(flag.hasMutated){



_NavigatorModule2.default.setScreenProperties(_extends({},screenProps),id);
}
}},{key:'render',value:function render()

{
if(this.props.children){
return _react2.default.Children.only(this.props.children);
}
return null;
}}]);return Config;}(_react2.default.Component);


Config.propTypes={
children:_react.PropTypes.node,


onAppear:_react.PropTypes.func,
onDisappear:_react.PropTypes.func,
onEnterTransitionComplete:_react.PropTypes.func};


Config.contextTypes={
nativeNavigationInstanceId:_react.PropTypes.string,
nativeNavigationGetConfig:_react.PropTypes.func};


module.exports=Config;
//# sourceMappingURL=Config.js.map