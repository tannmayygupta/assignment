function mergeArraysByKey(arr1, arr2, key) {
    const map = new Map();
  
    [...arr1, ...arr2].forEach(obj => {
      const existing = map.get(obj[key]) || {};
      map.set(obj[key], { ...existing, ...obj });
    });
  
    return Array.from(map.values());
  }
  