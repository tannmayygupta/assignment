function maxByKey(arr, key) {
    return arr.reduce((max, obj) => obj[key] > (max[key] || 0) ? obj : max, {});
  }
  