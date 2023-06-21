function solution(A) {
    let maxSum = A[0];
    let currentSum = A[0];
  
    for (let i = 1; i < A.length; i++) {
      currentSum = Math.max(A[i], currentSum + A[i]);
      maxSum = Math.max(maxSum, currentSum);
    }
  
    return maxSum;
  }

  
const A = [3, 2, -6, 4, 0];
console.log(solution(A)); // Output: 5

const B = [3, 3, -6, 4, 0];
console.log(solution(B)); // Output: 6
