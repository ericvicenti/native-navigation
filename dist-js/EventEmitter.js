Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var
EventEmitter=function(){
function EventEmitter(){_classCallCheck(this,EventEmitter);
this.registry={};
}_createClass(EventEmitter,[{key:"on",value:function on(

event,handler){
if(!this.registry[event]){
this.registry[event]=[];
}
this.registry[event].push(handler);
return{event:event,handler:handler};
}},{key:"unsubscribe",value:function unsubscribe(_ref)

{var event=_ref.event,handler=_ref.handler;
this.off(event,handler);
}},{key:"off",value:function off(

event,handler){
var events=this.registry[event];
if(!events)return;
var index=events.indexOf(handler);
if(index===-1)return;
events.splice(index,1);
if(events.length===0){
delete this.registry[event];
}
}},{key:"emit",value:function emit(

event){for(var _len=arguments.length,args=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){args[_key-1]=arguments[_key];}
var events=this.registry[event];
if(!events)return;
events.forEach(function(handler){return handler.apply(undefined,args);});
}}]);return EventEmitter;}();exports.default=EventEmitter;
//# sourceMappingURL=EventEmitter.js.map