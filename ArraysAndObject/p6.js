let arr = [4,2,3,1,11] ;

for(let i = 0 ; i < arr.length ; i++){
    for(let j = 0 ; j < arr.length ; j++ ){
        if(arr[j] > arr[j+1]){
            let a = arr[j] ;
            arr[j] = arr[j+1] ;
            arr[j+1] = a ;
        }
    }
}

console.log(arr);

