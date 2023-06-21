function solution(N, P, Q) {
    const primes = findPrimes(N);
    const semiprimes = findSemiprimes(N, primes);
    
    const prefixSums = calculatePrefixSums(semiprimes);
    const result = [];
  
    for (let i = 0; i < P.length; i++) {
      const count = prefixSums[Q[i]] - prefixSums[P[i] - 1];
      result.push(count);
    }
  
    return result;
  }
  
  function findPrimes(N) {
    const primes = new Array(N + 1).fill(true);
    primes[0] = primes[1] = false;
  
    for (let i = 2; i * i <= N; i++) {
      if (primes[i]) {
        for (let j = i * i; j <= N; j += i) {
          primes[j] = false;
        }
      }
    }
  
    return primes;
  }
  
  function findSemiprimes(N, primes) {
    const semiprimes = new Array(N + 1).fill(false);
  
    for (let i = 2; i * i <= N; i++) {
      if (primes[i]) {
        for (let j = i; i * j <= N; j++) {
          if (primes[j]) {
            semiprimes[i * j] = true;
          }
        }
      }
    }
  
    return semiprimes;
  }
  
  function calculatePrefixSums(arr) {
    const prefixSums = new Array(arr.length).fill(0);
  
    for (let i = 1; i < arr.length; i++) {
      prefixSums[i] = prefixSums[i - 1] + (arr[i] ? 1 : 0);
    }
  
    return prefixSums;
  }
  
  const N = 26;
  const P = [1, 4, 16];
  const Q = [26, 10, 20];
  console.log(solution(N, P, Q)); // Output: [10, 4, 0]
  