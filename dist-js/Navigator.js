var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');


var _NavigatorModule=require('./NavigatorModule');var _NavigatorModule2=_interopRequireDefault(_NavigatorModule);
var _navigatorEmitter=require('./navigatorEmitter');var _navigatorEmitter2=_interopRequireDefault(_navigatorEmitter);
var _utils=require('./utils');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var RESULT_CANCELED=0;
var RESULT_OK=-1;

function wrapResult(promise){



return promise;








}

function unwrap(thunk){
var Screen=thunk();

if(Screen.__esModule===true){
return Screen.default;
}
return Screen;
}


function wrapScreen(sceneName,sceneThunk){var
WrappedScreen=function(_React$Component){_inherits(WrappedScreen,_React$Component);
function WrappedScreen(props){_classCallCheck(this,WrappedScreen);var _this=_possibleConstructorReturn(this,(WrappedScreen.__proto__||Object.getPrototypeOf(WrappedScreen)).call(this,
props));


_this.nativeNavigationConfig={};return _this;
}_createClass(WrappedScreen,[{key:'getChildContext',value:function getChildContext()
{var _this2=this;
return{
nativeNavigationInstanceId:this.props.nativeNavigationInstanceId,
nativeNavigationInitialBarHeight:this.props.nativeNavigationInitialBarHeight,
nativeNavigationGetConfig:function nativeNavigationGetConfig(){return _this2.nativeNavigationConfig;}};

}},{key:'componentDidMount',value:function componentDidMount()
{var _this3=this;
_navigatorEmitter2.default.emit('sceneDidMount.'+this.props.nativeNavigationInstanceId);
setTimeout(
function(){return _NavigatorModule2.default.signalFirstRenderComplete(_this3.props.nativeNavigationInstanceId);},
0);

}},{key:'render',value:function render()
{
var ScreenComponent=unwrap(sceneThunk);
return _react2.default.createElement(ScreenComponent,this.props);
}}]);return WrappedScreen;}(_react2.default.Component);


WrappedScreen.displayName='Scene('+sceneName+')';

WrappedScreen.propTypes={
nativeNavigationInstanceId:_react.PropTypes.string,
nativeNavigationInitialBarHeight:_react.PropTypes.number};


WrappedScreen.childContextTypes={
nativeNavigationInstanceId:_react.PropTypes.string,
nativeNavigationInitialBarHeight:_react.PropTypes.number,
nativeNavigationGetConfig:_react.PropTypes.func};


return WrappedScreen;
}

var NavigatorModule={
RESULT_CANCELED:RESULT_CANCELED,
RESULT_OK:RESULT_OK,
registerScreen:function registerScreen(screenName,sceneThunk){var options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};
var waitForRender=!!options.waitForRender;
var mode=options.mode||'screen';
var initialConfig=options.initialConfig||null;

_NavigatorModule2.default.registerScreen(
screenName,
initialConfig?(0,_utils.processConfig)(initialConfig):null,
waitForRender,
mode);


var WrappedScreen=wrapScreen(screenName,sceneThunk);
_reactNative.AppRegistry.registerComponent(screenName,function(){





sceneThunk();
return WrappedScreen;
});
return WrappedScreen;
},

push:function push(screenName){var props=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;var options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};
if(typeof screenName==='function'){



}
if(_reactNative.AppRegistry.getAppKeys().indexOf(screenName)!==-1){
return wrapResult(_NavigatorModule2.default.push(screenName,props,options));
}
return wrapResult(_NavigatorModule2.default.pushNative(screenName,props,options));
},
present:function present(screenName){var props=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;var options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};
if(_reactNative.AppRegistry.getAppKeys().indexOf(screenName)!==-1){
return wrapResult(_NavigatorModule2.default.present(screenName,props,options));
}
return wrapResult(_NavigatorModule2.default.presentNative(screenName,props,options));
},
pop:function pop(){var payload=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;var animated=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;
_NavigatorModule2.default.pop(payload,animated);
},
dismiss:function dismiss(){var payload=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;var animated=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;
_NavigatorModule2.default.dismiss(payload,animated);
}};


module.exports=NavigatorModule;
//# sourceMappingURL=Navigator.js.map