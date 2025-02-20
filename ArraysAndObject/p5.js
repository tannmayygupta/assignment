// let arr1 = [1, 3, 5, 7];
// let arr2 = [2, 3, 6, 7, 8]
// let a = union(arr1 , arr2);
// let c = a.sort((a,b) => a - b);
// let b = RemoveDuplicate(c);
// console.log(b);

// function union(arr1 , arr2){
//     for(let i = 0 ; i < arr2.length ; i++){
//         arr1.push(arr2[i]);
//     }
//     return arr1;
// }

// function RemoveDuplicate(sortArr){
//     let uniqueArr = [] ;

//     for(let i = 0 ; i < sortArr.length  ; i++){

//         if(sortArr[i] !== sortArr[i+1]){
//             uniqueArr.push(sortArr[i]);
//             if(i == sortArr.length - 2){
//                 uniqueArr.push(sortArr[i+1]);
//             }
//         }
//     }
//     return  uniqueArr;
// }

let arr1 = [1, 3, 5, 7];
let arr2 = [2, 3, 6, 7, 8];


function union(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])].sort((a, b) => a - b); // here the 1) [...arr1 , ...arr2] merege two array
                                                                             //2) Set([mergeArr]) removes duplicate element
}



let u = union(arr1, arr2);
console.log(u);
