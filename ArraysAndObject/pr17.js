function countByProperty(arr, key) {
    return arr.reduce((acc, obj) => {
      acc[obj[key]] = (acc[obj[key]] || 0) + 1;
      return acc;
    }, {});
  }
  