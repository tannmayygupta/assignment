
let arr = [4,3,3,2,2,1,1];

// let sortArr = arr.sort((a,b) => b - a); // 1 1 2 2 3 3 4 

let a = RemoveDuplicate(arr);

console.log(a);

function RemoveDuplicate(sortArr){
    let uniqueArr = [] ;

    for(let i = 0 ; i < sortArr.length  ; i++){

        if(sortArr[i] !== sortArr[i+1]){
            uniqueArr.push(sortArr[i]);
            if(i == sortArr.length - 2){
                uniqueArr.push(sortArr[i+1]);
            }
        }
    }
    return  uniqueArr;
}
