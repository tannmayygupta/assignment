function removeDuplicatesByKey(arr, key) {
    const seen = new Set();
    return arr.filter(obj => {
      if (seen.has(obj[key])) return false;
      seen.add(obj[key]);
      return true;
    });
  }
  