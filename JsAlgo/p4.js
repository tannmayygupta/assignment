function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++)
      if (n % i === 0) return false;
    return true;
  }
  
  function primesUpTo(N) {
    return Array.from({ length: N }, (_, i) => i + 1).filter(isPrime);
  }
  