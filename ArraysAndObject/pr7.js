console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 2)); 
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7 ,8], 4)); 


function chunkArray(arr, size) {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
}
