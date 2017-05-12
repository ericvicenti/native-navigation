var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNativeSafeModule=require('react-native-safe-module');var _reactNativeSafeModule2=_interopRequireDefault(_reactNativeSafeModule);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var NativeSharedElement=_reactNativeSafeModule2.default.component({
viewName:'NativeNavigationSharedElement',
mockComponent:function mockComponent(_ref){var children=_ref.children;return children;},
propTypes:{
id:_react.PropTypes.string,
nativeNavigationInstanceId:_react.PropTypes.string}});



var numberOrString=_react.PropTypes.oneOfType([
_react.PropTypes.number,
_react.PropTypes.string]);


var IdPropTypes={
type:_react.PropTypes.string.isRequired,
typeId:numberOrString,
subType:_react.PropTypes.string,
subTypeId:numberOrString};


var propTypes=_extends({},
IdPropTypes,{
children:_react.PropTypes.node.isRequired});


var defaultProps={
typeId:'',
subType:'',
subTypeId:''};


var contextTypes={
nativeNavigationInstanceId:_react.PropTypes.string};var


SharedElement=function(_React$Component){_inherits(SharedElement,_React$Component);function SharedElement(){_classCallCheck(this,SharedElement);return _possibleConstructorReturn(this,(SharedElement.__proto__||Object.getPrototypeOf(SharedElement)).apply(this,arguments));}_createClass(SharedElement,[{key:'getId',value:function getId()
{var _props=
this.props,type=_props.type,typeId=_props.typeId,subType=_props.subType,subTypeId=_props.subTypeId;
return type+'|'+typeId+'|'+subType+'|'+subTypeId;
}},{key:'render',value:function render()
{
return(
_react2.default.createElement(NativeSharedElement,{
id:this.getId(),
nativeNavigationInstanceId:this.context.nativeNavigationInstanceId},

_react2.default.Children.only(this.props.children)));


}}]);return SharedElement;}(_react2.default.Component);


SharedElement.propTypes=propTypes;
SharedElement.defaultProps=defaultProps;
SharedElement.contextTypes=contextTypes;
SharedElement.IdPropTypes=IdPropTypes;

module.exports=SharedElement;
//# sourceMappingURL=SharedElement.js.map