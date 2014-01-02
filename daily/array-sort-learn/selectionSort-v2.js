/**
 * 1. 比较当前项与数组其他所有项
 * 2. 找到比较结果中较小的项并与当前项交换
 * 3. 重复比较，交换直到达成目标
 */
var selectionSort = function(arr, dir) {
    // 检查参数合法性
    if(!Array.isArray(arr)) {
        throw Error('参数非法');
    }
    
    // 获取排序方式
    // 如果不提供排序方式则默认按升序排列
    var dir = dir || 'asc';
    // 比较方式
    var compare = function(a, b, d) {
        if(d === 'asc') {
            return a < b ? true : b;
        } else if(d === 'desc') {
            return a > b ? true : b;
        } else {
            return false;
        }
    };
    // 缓存数组长度
    var l = arr.length;
    // 缓存较小数字索引
    var minIndex;
    // 遍历数组项
    for (var i=0;i<l;i++) {
        // 假设当便是较小的项
        minIndex = i;
        // 检查紧邻当前项的其他项
        for(var k=i+1;k<l;k++) {
            // 发现更小的元素之后价格其索引缓存起来
            if(compare(arr[k], arr[minIndex], dir) === true) {
                minIndex = k;
            }
        }
        
        // 发现更小的元素之后进行交换操作
        if(minIndex !== i) {
            var temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    
    return arr;
    
};

var myArr = [1,3,5,7,9,2,4,6,8,10];
console.log(selectionSort(myArr));
console.log(selectionSort(myArr,'asc'));
console.log(selectionSort(myArr,'desc'));