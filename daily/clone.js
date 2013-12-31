/*
 * 浅复制，子类实例引用类型属性的修改会影响父类对应的属性
 */
function clone(parent, child) {
    var i;
        
    child = child || {};
        
    for(i in parent){
        if(parent.hasOwnProperty(i)){
            child[i] = parent[i];
        }
    }
    
    return child;
}
/*
 * 深复制
 */
function deepClone(parent, child) {
    var i,
        toStr = Object.prototype.toString,
        arrStr = ['object Array'];
        
    child = child || {};
    
    for(i in parent) {
        if(parent.hasOwnProperty(i)) {
            if(typeof parent[i] === 'object') {
                child[i] = (toStr.call(parent[i]) === arrStr) ? [] : {};
                deepClone(parent[i], child[i]);
            } else {
                child[i] = parent[i];
            }
        }
    }
    
    return child;
};
/*
 * 混合，将多个对象参数混合到一个对象中
 */
function mix() {
    var arg,
        prop,
        child = {};
        
    for(arg = 0, argLen = arguments.length; arg < argLen; arg += 1) {
        for(prop in arguments[arg]) {
            if(arguments[arg].hasOwnProperty(prop)) {
                child[prop] = arguments[arg][prop];
            }
        }
    }
    
    return child;
}