function solution(A, B, K) {
  const divisibleNumbersFromZero = Math.floor(B / K);
  const divisibleNumbersFromA = Math.floor((A - 1) / K);
  const count = divisibleNumbersFromZero - divisibleNumbersFromA;

  return count;
}

// Example usage:
const A = 6, B = 11, K = 2;
console.log(solution(A, B, K)); // Output: 3
