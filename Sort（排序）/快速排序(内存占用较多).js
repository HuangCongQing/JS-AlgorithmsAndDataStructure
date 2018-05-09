// 快速排序 - 是对冒泡排序的一种改进。 由C.A.R.Hoare在1962年提出。
// 它的基本思想是： 通过一趟排序将要排序的数据分割成独立的两部分， 其中一部分的所有数据都比另外一部分的所有数据都要小，
// 然后再按此方法对这两部分数据分别进行快速排序， 整个排序过程可以递归进行， 以此达到整个数据变成有序序列。
// - 快速排序应该算是在冒泡排序基础上的递归分治法。
// - 下例内部运用了二分查找， 二分查找的基本思想是将n个元素分成大致相等的两部分（ 也就是除以2）， 取a[n / 2] 与x做比较

function quickSort(arr) //传入数组参数,例如[ 55,23,1,28,16,3,-5,99 ]
{

     /*
      * 创建len保存数组的长度，每次获取数组的长度都要实时查询不利于性能；
      * num作为保存取到的中间值；
      * numValue保存比较参照物；
      * left、right作为子数组的容器；
      */
    if (arr.length <= 1) {
        return arr;
    }

    var num = Math.floor(arr.length / 2); //二分查找,num作为保存取到的中间值；
    var numValue = arr.splice(num, 1);

    var left = [];
    var right = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < numValue) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([numValue], quickSort(right)); //递归
}

console.log(quickSort([3, 4, 1, 2, 7, -12, 5, 6])); //-12,1,2,3,4,5,6,7