parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"LiEu":[function(require,module,exports) {
var n=function(n,t){return Math.floor(Math.random()*(t-n+1)+n)},t=function(t){return new Promise(function(o,a){var c=n(200,500);setTimeout(function(){Math.random()>.3?o(t.id,c):a(t.id)},c)})},o=function(n,t){console.log("Transaction ".concat(n," processed in ").concat(t,"ms"))},a=function(n){console.warn("Error processing transaction ".concat(n,". Please try again later."))};t({id:70,amount:150}).then(o).catch(a),t({id:71,amount:230}).then(o).catch(a),t({id:72,amount:75}).then(o).catch(a),t({id:73,amount:100}).then(o).catch(a);
},{}]},{},["LiEu"], null)
//# sourceMappingURL=/goit-js-hw-11-promisification/task-3.e3586b09.js.map