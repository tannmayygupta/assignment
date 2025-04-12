function filterByConditions(arr, conditions) {
    return arr.filter(obj =>
      Object.entries(conditions).every(([key, value]) => obj[key] === value)
    );
  }
  