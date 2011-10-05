// Underscore-Awesomer.js 1.0.0
// (c) 2011 Kevin Malakoff.
// Underscore-Awesomer is freely distributable under the MIT license.
// Underscore-Awesomer are extensions to the Underscore library: http://documentcloud.github.com/underscore
// https://github.com/kmalakoff/underscore-awesomer
//
// Note: some code from Underscore.js is repeated in this file.
// Please see the following for details on Underscore.js and its licensing:
// https://github.com/documentcloud/underscore
// https://github.com/documentcloud/underscore/blob/master/LICENSE
(function(){var m=this;if(!m._)throw Error("Underscore-Awesomer.js requires Underscore.js...please include it before this file.");var b=m._;b.AWESOMENESS="1.0.0";b.pluck=function(a,c,d){return d?b.map(a,function(a){var b=a[c];delete a[c];return b}):b.map(a,function(a){return a[c]})};b.isEqual=function(a,c){if(a===c)return!0;if(!a&&c||a&&!c)return!1;if(a===void 0||c===void 0)return!1;if(a._chain)a=a._wrapped;if(c._chain)c=c._wrapped;if(a.isEqual)return a.isEqual(c);if(c.isEqual)return c.isEqual(a);
var d=typeof a;if(d!=typeof c)return!1;if(a==c)return!0;if(b.isDate(a)&&b.isDate(c))return a.getTime()===c.getTime();if(b.isNaN(a)&&b.isNaN(c))return!1;if(b.isRegExp(a)&&b.isRegExp(c))return a.source===c.source&&a.global===c.global&&a.ignoreCase===c.ignoreCase&&a.multiline===c.multiline;if(d!=="object")return!1;if(a.length&&a.length!==c.length)return!1;var d=b.keys(a),e=b.keys(c);if(d.length!=e.length)return!1;for(var g in a)if(!(g in c)||!b.isEqual(a[g],c[g]))return!1;return!0};b.remove=function(a,
c,d){if(b.isEmpty(a))return!c||b.isFunction(c)?[]:void 0;d||(d={});b.isFunction(d)&&(d={callback:d});var e;if(d.preclear){var g=a,a=b.clone(a);if(b.isArray(g))g.length=0;else for(e in g)delete g[e]}var f=[],j,h,n,g=!1;if(b.isArray(a)){if(b.isUndefined(c))f=b.keys(a);else if(b.isFunction(c))d.first_only?(g=!0,b.find(a,function(a,b){return c(a)?(f.push(b),!0):!1})):b.each(a,function(a,b){c(a)&&f.push(b)});else if(b.isArray(c))if(d.first_only){g=!0;for(h=c.length-1;h>=0;h--)j=c[h],b.find(a,function(a,
b){return j===a?(f.push(b),!0):!1})}else for(h=c.length-1;h>=0;h--)j=c[h],b.each(a,function(a,b){j===a&&f.push(b)});else d.first_only?(g=!0,h=b.indexOf(a,c),h>=0&&f.push(h)):(g=!0,b.each(a,function(a,b){c===a&&f.push(b)}));if(g){if(f.length){g=0;e=a[f[0]];for(f=f.sort(function(a,c){return b.compare(a,c)});f.length;)g++,a.splice(f.pop(),1);if(d.callback)for(;g>0;)d.callback(e),g--;return e}}else if(f.length){e=[];for(f=f.sort(function(a,c){return b.compare(a,c)});f.length;)g=f.pop(),e.unshift(a[g]),
a.splice(g,1);d.callback&&b.each(e,function(a){d.callback(a)});return b.uniq(e)}else return[]}else{var k;if(b.isUndefined(c))f=b.keys(a);else if(b.isFunction(c))for(e in a)c(a[e],e)&&f.push(e);else if(b.isArray(c))if(d.values)for(h=0,n=c.length;h<n;h++)if(j=c[h],d.first_only)for(e in a){if(j===a[e]){f.push(e);break}}else for(e in a)j===a[e]&&f.push(e);else{k=c;for(h=0,n=c.length;h<n;h++)e=c[h],a.hasOwnProperty(e)&&f.push(e)}else if(b.isString(c)&&!d.values)g=!0,k=[],a.hasOwnProperty(c)&&(k.push(c),
f.push(c));else for(e in a)c===a[e]&&f.push(e);if(k)if(k.length){for(h=[];f.length;)e=f.shift(),h.push(a[e]),delete a[e];d.callback&&b.each(h,function(a,b){d.callback(a,k[b])});return g?h[0]:h}else return g?void 0:[];else if(f.length){for(h={};f.length;)e=f.shift(),h[e]=a[e],delete a[e];d.callback&&b.each(h,function(a,b){d.callback(a,b)});return h}else return{}}};b.findIndex=function(a,b){for(i=0,l=a.length;i<l;i++)if(b(a[i]))return i;return-1};b.hasKeypath=b.keypathExists=function(a,c){return!!b.keypathValueOwner(a,
c)};b.keypathValueOwner=function(a,c){var d=b.isString(c)?c.split("."):c;if(d.length===1)return a instanceof Object&&e in a?a:void 0;for(var e,g=a,f=0,j=d.length;f<j;){e=d[f];if(!(e in g))break;if(++f===j)return g;g=g[e];if(!g||!(g instanceof Object))break}};b.keypath=function(a,c,d){c=b.isString(c)?c.split("."):c;a=b.keypathValueOwner(a,c);if(b.isUndefined(d))return!a?void 0:a[c[c.length-1]];else if(a)return a[c[c.length-1]]=d,a[c[c.length-1]]};b.cloneToDepth=function(a,c){if(typeof a!=="object")return a;
b.isUndefined(c)&&(c=0);if(c<1)return b.clone(a);clone=b.clone(a);for(var d in clone)clone[d]=b.cloneToDepth(clone[d],c-1);return clone};b.isConstructor=function(a){return b.isFunction(a)&&a.name};b.resolveConstructor=function(a){var c=b.isArray(a)?a:b.isString(a)?a.split("."):void 0;if(c)return(a=c.length===1?m[c[0]]:b.keypath(m,c))&&b.isConstructor(a)?a:void 0;else if(b.isFunction(a)&&b.isConstructor(a))return a};b.CONVERT_NONE=0;b.CONVERT_IS_TYPE=1;b.CONVERT_TO_METHOD=2;b.conversionPath=function(a,
c){var d=b.isArray(c)?c:b.isString(c)?c.split("."):void 0,e=typeof a,g=d?d[d.length-1]:void 0;if(d&&e===g)return b.CONVERT_IS_TYPE;if((d=b.resolveConstructor(d?d:c))&&e=="object")try{if(a instanceof d)return b.CONVERT_IS_TYPE}catch(f){}g=d&&d.name?d.name:g;if(!g)return b.CONVERT_NONE;if(b["is"+g]&&b["is"+g](a))return b.CONVERT_IS_TYPE;else if(e=="object"&&a["to"+g])return b.CONVERT_TO_METHOD;return b.CONVERT_NONE};b.isConvertible=function(a,c){return b.conversionPath(a,c)>0};b.toType=function(a,c){var d=
b.isArray(c)?c:b.isString(c)?c.split("."):void 0;switch(b.conversionPath(a,d?d:c)){case 1:return a;case 2:return d?a["to"+d[d.length-1]]():(d=b.resolveConstructor(c))&&d.name?a["to"+d.name]():void 0}};b.functionExists=function(a,c){return a instanceof Object&&a[c]&&b.isFunction(a[c])};b.callIfExists=function(a,c){return b.functionExists(a,c)?a[c].apply(a,Array.prototype.slice.call(arguments,2)):void 0};b.getSuperFunction=function(a,c){var d=b.keypathValueOwner(a,["constructor","__super__",c]);return d&&
b.isFunction(d[c])?d[c]:void 0};b.superCall=function(a,c){return b.superApply(a,c,Array.prototype.slice.call(arguments,2))};b.superApply=function(a,c,d){return(c=b.getSuperFunction(a,c))?c.apply(a,d):void 0};b.classOf=function(a){return a!=null&&(a instanceof Object||a instanceof Function)&&Object.getPrototypeOf(a).constructor.name||void 0};b.copyProperties=function(a,c,d,e){for(var g=d||b.keys(c),f=!1,j=0,h=g.length;j<h;j++)d=g[j],hasOwnProperty.call(c,d)&&(a[d]=c[d],f=!0,e&&delete c[d]);return f};
b.getValue=function(a,b,d,e){if(hasOwnProperty.call(a,b)){if(!e)return a[b];d=a[b];delete a[b]}return d};b.COMPARE_EQUAL=0;b.COMPARE_ASCENDING=-1;b.COMPARE_DESCENDING=1;b.compare=function(a,c,d){if(typeof a!=="object")return a===c?b.COMPARE_EQUAL:a<c?b.COMPARE_ASCENDING:b.COMPARE_DESCENDING;d||(d="compare");if(a[d]&&b.isFunction(a[d]))return a=a[d](c),a===0?b.COMPARE_EQUAL:a<0?b.COMPARE_ASCENDING:b.COMPARE_DESCENDING;else if(c[d]&&b.isFunction(c[d]))return a=c[d](a),a===0?b.COMPARE_EQUAL:a<0?b.COMPARE_DESCENDING:
b.COMPARE_ASCENDING;return a===c?b.COMPARE_EQUAL:a<c?b.COMPARE_ASCENDING:b.COMPARE_DESCENDING};b.own=function(a,c){if(!a||typeof a!="object")return a;c||(c={});if(b.isArray(a))if(c.share_collection)b.each(a,function(a){b.own(a,{prefer_clone:c.prefer_clone})});else{var d=[];b.each(a,function(a){d.push(b.own(a,{prefer_clone:c.prefer_clone}))});return d}else if(c.properties)if(c.share_collection)b.each(a,function(a){b.own(a,{prefer_clone:c.prefer_clone})});else{var e={};b.each(a,function(a,d){e[d]=b.own(a,
{prefer_clone:c.prefer_clone})});return e}else if(a.retain)if(c.prefer_clone&&a.clone)return a.clone();else a.retain();else if(a.clone)return a.clone();return a};b.disown=function(a,c){if(!a||typeof a!="object")return a;c||(c={});if(b.isArray(a))c.clear_values?b.each(a,function(c,e){b.disown(c);a[e]=null}):(b.each(a,function(a){b.disown(a)}),a.length=0);else if(c.properties)if(c.clear_values)b.each(a,function(c,e){b.disown(c);a[e]=null});else for(key in b.each(a,function(a){b.disown(a)}),a)delete a[key];
else a.release?a.release():a.destroy&&a.destroy();return a};b.toJSON=function(a,c){if(!a||typeof a!=="object")return a;c||(c={});var d;if(b.isArray(a)){if(c.included){var e;e=c.excluded?b.difference(c.included,c.excluded):c.included;d={};b.each(e,function(c){b.contains(a,c)&&d.push(b.toJSON(c))})}else c.excluded?(d=[],b.each(a,function(a){b.contains(c.excluded,a)||d.push(b.toJSON(a))})):(d=[],b.each(a,function(a){d.push(b.toJSON(a))}));return d}else if(a.toJSON)return a.toJSON();else if(c.properties)return c.included?
(e=c.excluded?b.difference(c.included,c.excluded):c.included,d={},b.each(e,function(c){a.hasOwnProperty(c)&&(d[c]=b.toJSON(a[c]))})):c.excluded?(d={},b.each(a,function(a,e){b.contains(c.excluded,e)||(d[e]=b.toJSON(a))})):(d={},b.each(a,function(a,c){d[c]=b.toJSON(a)})),d;return a};b.parseJSON=function(a,c){var d=typeof a;if(d!=="object"&&d!=="string")return a;if(d==="string"&&a.length&&(a[0]==="{"||a[0]==="["))try{var e=JSON.parse(a);e&&(a=e)}catch(g){throw new TypeError("Unable to parse JSON: "+
a);}var f;if(b.isArray(a))return f=[],b.each(a,function(a){f.push(b.parseJSON(a,j))}),f;else if(c&&c.properties)return f={},b.each(a,function(a,c){f[c]=b.parseJSON(a,j)}),f;var j=c&&c.type_field?c.type_field:"_type";if(!(a instanceof Object)||!a.hasOwnProperty(j))return a;d=a[j];e=b.keypathValueOwner(m,d+".parseJSON");if(!e)throw new TypeError("Unable to find a parseJSON function for type: "+d);return e.parseJSON(a)};b.mixin({AWESOMENESS:b.AWESOMENESS,pluck:b.pluck,isEqual:b.isEqual,remove:b.remove,
findIndex:b.findIndex,hasKeypath:b.hasKeypath,keypathExists:b.keypathExists,keypathValueOwner:b.keypathValueOwner,keypath:b.keypath,cloneToDepth:b.cloneToDepth,isConstructor:b.isConstructor,resolveConstructor:b.resolveConstructor,CONVERT_NONE:b.CONVERT_NONE,CONVERT_IS_TYPE:b.CONVERT_IS_TYPE,CONVERT_TO_METHOD:b.CONVERT_TO_METHOD,conversionPath:b.conversionPath,isConvertible:b.isConvertible,conversionPath:b.conversionPath,toType:b.toType,functionExists:b.functionExists,callIfExists:b.callIfExists,getSuperFunction:b.getSuperFunction,
superCall:b.superCall,superApply:b.superApply,classOf:b.classOf,copyProperties:b.copyProperties,getValue:b.getValue,COMPARE_EQUAL:b.COMPARE_EQUAL,COMPARE_ASCENDING:b.COMPARE_ASCENDING,COMPARE_DESCENDING:b.COMPARE_DESCENDING,compare:b.compare,own:b.own,disown:b.disown,toJSON:b.toJSON,parseJSON:b.parseJSON})})();
