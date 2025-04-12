function findMissingNumbers(arr) {
    const result = [];
    let min = Math.min(...arr);
    let max = Math.max(...arr);
  
    for (let i = min; i <= max; i++) {
      if (!arr.includes(i)) {
        result.push(i);
      }
    }
    return result;
}