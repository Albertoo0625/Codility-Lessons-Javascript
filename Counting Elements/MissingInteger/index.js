function solution(A) {
    const numbersSet = new Set();
  
    for (let i = 0; i < A.length; i++) {
      const num = A[i];
      if (num > 0) {
        numbersSet.add(num);
      }
    }
  
    for (let i = 1; i <= A.length + 1; i++) {
      if (!numbersSet.has(i)) {
        console.log(i);
        return i;
      }
    }
  
    const result = A.length + 1;
    console.log(result);
    return result;
  }
  
  // Example usage:
  const example1 = [1, 3, 6, 4, 1, 2];
  solution(example1); // Output: 5
  
  const example2 = [1, 2, 3];
  solution(example2); // Output: 4
  
  const example3 = [-1, -3];
  solution(example3); // Output: 1
  