let arr1 = [1,2,3,4,5];
let arr2 = [3,9,2,1,1];

let a = intersection(arr1,arr2) ;

console.log(a);

function intersection(arr1, arr2) {
    let set2 = new Set(arr2);
    let result = [];

    for (let num of arr1) {
        if (set2.has(num)) {
            result.push(num);
        }
    }

    return result;

}