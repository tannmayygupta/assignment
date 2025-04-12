function groupBy(arr, key) {
    return arr.reduce((acc, obj) => {
      const val = obj[key];
      acc[val] = acc[val] || [];
      acc[val].push(obj);
      return acc;
    }, {});
  }
  