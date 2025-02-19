let arr = [6,5,4,1,8] ;

let secMax = SecondLargestElement(arr);

console.log(secMax);

function SecondLargestElement(arr){
    let first = -Infinity ;
    let second = -Infinity ; 

    if(arr.length == 1){
        return -1 ;
    }
    else{
        for(let i = 0 ; i < arr.length ; i++ ){
            if(arr[i] > first){
                second = first ;
                first = arr[i];
            }
        }
        return second ;
    }
}

