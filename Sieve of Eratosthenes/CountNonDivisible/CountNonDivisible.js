function solution(A) {
    const N = A.length;
    const freq = new Array(2 * N + 1).fill(0);
  
    // Count the occurrences of each number in A
    for (let num of A) {
      freq[num]++;
    }
  
    const result = [];
  
    for (let i = 0; i < N; i++) {
      const num = A[i];
      let nonDivisors = N; // Initialize with total elements in A
  
      // Iterate through all possible divisors
      for (let divisor = 1; divisor * divisor <= num; divisor++) {
        if (num % divisor === 0) {
          // Subtract the occurrences of the divisor and its pair
          nonDivisors -= freq[divisor];
          if (num / divisor !== divisor) {
            nonDivisors -= freq[num / divisor];
          }
        }
      }
  
      result.push(nonDivisors);
    }
  
    return result;
  }
  
  const A = [3, 1, 2, 3, 6];
  console.log(solution(A)); // Output: [2, 4, 3, 2, 0]
  