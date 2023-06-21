function solution(A, K) {
    const N = A.length;
  
    // Handle edge cases
    if (N === 0 || K === 0 || K % N === 0) {
      return A;
    }
  
    // Adjust K if it's larger than N
    const rotations = K % N;
  
    // Perform the rotations
    for (let i = 0; i < rotations; i++) {
      const lastElement = A.pop(); // Remove the last element
      A.unshift(lastElement); // Insert it at the beginning
    }
  
    return A;
  }

  
console.log(solution([3, 8, 9, 7, 6], 3)); // Output: [9, 7, 6, 3, 8]
console.log(solution([0, 0, 0], 1)); // Output: [0, 0, 0]
console.log(solution([1, 2, 3, 4], 4)); // Output: [1, 2, 3, 4]
