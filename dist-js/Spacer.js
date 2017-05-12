var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var





Spacer=function(_React$Component){_inherits(Spacer,_React$Component);
function Spacer(props,context){_classCallCheck(this,Spacer);var _this=_possibleConstructorReturn(this,(Spacer.__proto__||Object.getPrototypeOf(Spacer)).call(this,
props,context));
_this.state={
height:context.nativeNavigationInitialBarHeight||0};


_this.subscription=null;
_this.onHeightChanged=_this.onHeightChanged.bind(_this);return _this;
}_createClass(Spacer,[{key:'componentDidMount',value:function componentDidMount()

{
var id=this.context.nativeNavigationInstanceId;
var key='NativeNavigationScreen.onBarHeightChanged.'+id;
this.subscription=_reactNative.DeviceEventEmitter.addListener(key,this.onHeightChanged);
}},{key:'componentWillUnmount',value:function componentWillUnmount()

{
_reactNative.DeviceEventEmitter.removeSubscription(this.subscription);
}},{key:'onHeightChanged',value:function onHeightChanged(

height){
if(this.props.animated){
_reactNative.LayoutAnimation.easeInEaseOut();
}
this.setState({height:height});
}},{key:'render',value:function render()

{
return _react2.default.createElement(_reactNative.View,{style:{height:this.state.height}});
}}]);return Spacer;}(_react2.default.Component);


Spacer.propTypes={
animated:_react.PropTypes.bool};


Spacer.defaultProps={
animated:false};


Spacer.contextTypes={
nativeNavigationInstanceId:_react.PropTypes.string,
nativeNavigationInitialBarHeight:_react.PropTypes.number};


module.exports=Spacer;
//# sourceMappingURL=Spacer.js.map