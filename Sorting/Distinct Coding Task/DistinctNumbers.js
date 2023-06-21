function solution(A) {
    const distinctValues = new Set(A);
    return distinctValues.size;
  }
  
  // Example usage:
  const example = [2, 1, 1, 2, 3, 1];
  console.log(solution(example)); // Output: 3
  