function solution(A) {
    const N = A.length;
    A.sort((a, b) => a - b); // Sort the array in non-decreasing order
  
    for (let i = 0; i < N - 2; i++) {
      if (A[i] + A[i + 1] > A[i + 2]) {
        return 1; // Triangular triplet found
      }
    }
  
    return 0; // No triangular triplet found
  }
  
  // Example usage:
  const example1 = [10, 2, 5, 1, 8, 20];
  console.log(solution(example1)); // Output: 1
  
  const example2 = [10, 50, 5, 1];
  console.log(solution(example2)); // Output: 0

  const example3 = [1,2,3,4];
  console.log(solution(example3)); // Output: 0
  