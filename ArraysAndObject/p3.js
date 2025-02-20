
let arr = [[1,2,3],[4,5,6],[7,8,9]] ;

let a = flattenArr(arr);

console.log(a);

function flattenArr(arr) {

        // brute force 
        // let flat = [];
        // for(let i = 0 ; i < arr.length ; i++ ){
        //     for(let j = 0 ; j < arr[i].length ; j++ ){
        //         flat.push(arr[i][j]);
        //     }
        // }

        // using recursion 
        let flat = [];
    
        function flatten(subArr) {
            for (let i = 0; i < subArr.length; i++) {
                if (Array.isArray(subArr[i])) {
                    flatten(subArr[i]); 
                } else {
                    flat.push(subArr[i]); 
                }
            }
        }
        flatten(arr);
        return flat;
}