var BAR_TYPE={
SPECIALTY:'specialty',
INVERSE_SPECIALTY:'inverse-specialty',
SHEET:'sheet',
STATIC:'static',
OVERLAY:'overlay',
BASIC:'basic'};


var COLOR={
CELEBRATORY:'celebratory',
VALID:'valid',
INVALID:'invalid',
UNVALIDATED:'unvalidated'};


var CLOSE_BEHAVIOR={
POP:'pop',
DISMISS:'dismiss'};



var LEFT_ICON={
CLOSE:'close',
MENU:'menu',
NONE:'none',
NAV_LEFT:'nav-left'};


function themeFromBarStyle(_ref){var barType=_ref.barType;




switch(barType){
case BAR_TYPE.SPECIALTY:return'transparent-light';
case BAR_TYPE.INVERSE_SPECIALTY:return'transparent-light';
case BAR_TYPE.SHEET:return'transparent-light';
case BAR_TYPE.STATIC:return'opaque';
case BAR_TYPE.OVERLAY:return'transparent-light';
case BAR_TYPE.BASIC:return'transparent-dark';
default:return'transparent-light';}

}

module.exports={
BAR_TYPE:BAR_TYPE,
COLOR:COLOR,
CLOSE_BEHAVIOR:CLOSE_BEHAVIOR,
LEFT_ICON:LEFT_ICON,
themeFromBarStyle:themeFromBarStyle};
//# sourceMappingURL=navBar.js.map