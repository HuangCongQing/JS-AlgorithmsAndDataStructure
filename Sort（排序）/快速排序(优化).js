
function sort(arr, left, right) {
    if (left < right) {
        var x = arr[right], i = left - 1, tmp;
        for (var j = left; j <= right; j++) {
            if (arr[j] <= x) {
                i++;
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        sort(arr, left, i - 1);
        sort(arr, i + 1, right);
    }

    return arr;
}
var arr = [1, 3, 9, 7, 5, 14, 68, 123];
console.log(sort(arr, 0, arr.length - 1));