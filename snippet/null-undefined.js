Object.prototype.toString.call(null); // [object Null]
Object.prototype.toString.call(undefined); // [object Undefined]

null == 0; // false
undefined == ''; //false
null == false; // false
null == true; //false
undefined == false; // fasle
undefined == true; // false
null == undefined; // true
null === undefined; // false

// http://es5.github.io/#x15.1.1.3
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null 