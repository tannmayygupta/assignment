function arrayToMap(arr, key) {
    return arr.reduce((acc, obj) => {
      acc[obj[key]] = obj;
      return acc;
    }, {});
  }
  