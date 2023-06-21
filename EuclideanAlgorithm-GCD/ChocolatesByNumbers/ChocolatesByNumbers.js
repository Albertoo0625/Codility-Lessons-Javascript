function gcd(a, b) {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  }
  
  function solution(N, M) {
    const numChocolates = gcd(N, M);
    return N / numChocolates;
  }
  
  const N = 10;
  const M = 4;
  console.log(solution(N, M)); // Output: 5
  