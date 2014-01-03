// 相邻的项相互比较，每次循环的过程中将较小的冒泡到顶部
var bubbleSort = function(arr, dir){
    // 参数合法性检查
    if(!Array.isArray(arr)) {
        throw Error('参数非法');
    }
    
    // 排序方式
    var dir = dir || 'asc';
    
    var compare = function(a,b,d) {
        if(d === 'asc') {
            return a < b ? true : b;
        } else if(d === 'desc') {
            return a > b ? true : b;
        }
        return false;
    };
    
    // 缓存
    var l = arr.length;
    var flag;
    
    // 遍历数组进行比较
    for(var i=0;i<l;i++){
        // 遍历所有非当前项进行比较
        for(var k=0;k<l-1;k++){
            flag = compare(arr[k],arr[k+1],dir);
            // 位置交换处理
            if(flag !== true) {
                arr[k+1] = arr[k];
                arr[k] = flag;
            }
        }
    }
    
    return arr;
    
};

var myArr = [1,3,5,7,9,2,4,6,8,10];
console.log(bubbleSort(myArr));
console.log(bubbleSort(myArr, 'asc'));
console.log(bubbleSort(myArr, 'desc'));