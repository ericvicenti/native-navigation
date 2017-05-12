
var hasOwnProperty=Object.prototype.hasOwnProperty;

function shallowArray(a,b,compare){
var l=a.length;
if(l!==b.length)return false;

if(compare){
for(var i=0;i<l;i+=1){
if(!compare(a[i],b[i]))return false;
}
}else{
for(var _i=0;_i<l;_i+=1){
if(a[_i]!==b[_i])return false;
}
}

return true;
}

function shallowObject(a,b,compare){
var ka=0;
var kb=0;

if(compare){
for(var key in a){
if(
hasOwnProperty.call(a,key)&&
!compare(a[key],b[key]))
return false;

ka+=1;
}
}else{
for(var _key in a){
if(
hasOwnProperty.call(a,_key)&&
a[_key]!==b[_key])
return false;

ka+=1;
}
}

for(var _key2 in b){
if(hasOwnProperty.call(b,_key2))kb+=1;
}

return ka===kb;
}

function flat(type){
return(
type!=='function'&&
type!=='object');

}

function shallow(a,b,compare){
var aIsArray=Array.isArray(a);
var bIsArray=Array.isArray(b);

if(aIsArray!==bIsArray)return false;

var aTypeof=typeof a;
var bTypeof=typeof b;

if(aTypeof!==bTypeof)return false;
if(flat(aTypeof)){
return compare?
compare(a,b):
a===b;
}

return aIsArray?
shallowArray(a,b,compare):
shallowObject(a,b,compare);
}

module.exports=shallow;
//# sourceMappingURL=shallowEquals.js.map