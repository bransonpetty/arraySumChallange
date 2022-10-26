function reduce(prev, curr, index, arr) {
    if (index == arr.length) {
        return prev
    }
    return reduce(prev+curr, arr[index+1], index+1, arr)
}


arr1 = [3, 4, 16, -1, 10]   //all
arr2 = [12, 8, 4, 2, 3]     //two
arr3 = [20, 15, 4, 2, 1]    //three
arr4 = [19, 14, 13, 1, -2]  //not possible

function sumChallange(arr) {
    arr.sort(function(a, b){return a-b})
    let largest = arr.pop()
    let total = 0
    for (let i=0; i<arr.length; i++) {
            total += arr[i];
        }
        if (total == largest) {
            return true
        }
        for (let i=0; i<arr.length; i++) {
            let copyArr = Object.assign([], arr);
            copyArr.splice(copyArr.indexOf(copyArr[i]), 1)
            total = reduce(copyArr[0], copyArr[1], 1, copyArr)
            if (total == largest) {
                return true
            }
        }
        
        
        for (let i=0; i<arr.length; i++) {
            for (let j=i+1; j<arr.length; j++) {
                let copyArr = Object.assign([], arr);
                copyArr.splice(copyArr.indexOf(arr[i]), 1);
                copyArr.splice(copyArr.indexOf(arr[j]), 1);
                total = reduce(copyArr[0], copyArr[1], 1, copyArr)
                if (total == largest) {
                    return true
                }
            }
        }
        return false
}

console.log(sumChallange(arr1))
console.log(sumChallange(arr2))
console.log(sumChallange(arr3))
console.log(sumChallange(arr4))