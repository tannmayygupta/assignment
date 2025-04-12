function mostFrequent(arr) {
    const map = {};
    let maxCount = 0, mostFreq = null;
  
    for (let num of arr) {
      map[num] = (map[num] || 0) + 1;
      if (map[num] > maxCount) {
        maxCount = map[num];
        mostFreq = num;
      }
    }
    return mostFreq;
  }
  