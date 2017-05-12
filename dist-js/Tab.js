var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');


var _reactNativeSafeModule=require('react-native-safe-module');var _reactNativeSafeModule2=_interopRequireDefault(_reactNativeSafeModule);
var _utils=require('./utils');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var NativeTab=_reactNativeSafeModule2.default.component({
viewName:'NativeNavigationTabView',
mockComponent:function mockComponent(){return _react2.default.createElement(_reactNative.View,null);}});var


Tab=function(_React$Component){_inherits(Tab,_React$Component);function Tab(){_classCallCheck(this,Tab);return _possibleConstructorReturn(this,(Tab.__proto__||Object.getPrototypeOf(Tab)).apply(this,arguments));}_createClass(Tab,[{key:'render',value:function render()
{var _props=
this.props,route=_props.route,props=_props.props,config=_objectWithoutProperties(_props,['route','props']);
return(
_react2.default.createElement(NativeTab,{
route:route,
props:props,
config:(0,_utils.processConfig)(config)}));


}}]);return Tab;}(_react2.default.Component);


Tab.propTypes={
route:_react.PropTypes.string.isRequired,
props:_react.PropTypes.any};


module.exports=Tab;
//# sourceMappingURL=Tab.js.map