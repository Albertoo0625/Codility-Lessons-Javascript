function solution(A) {
    const N = A.length;
    let totalSum = 0;
  
    for (let i = 0; i < N; i++) {
      totalSum += A[i];
    }
  
    let leftSum = 0;
    let rightSum = totalSum;
    let minDifference = Number.MAX_SAFE_INTEGER;
  
    for (let p = 1; p < N; p++) {
      leftSum += A[p - 1];
      rightSum -= A[p - 1];
      const difference = Math.abs(leftSum - rightSum);
      minDifference = Math.min(minDifference, difference);
    }
  
    return minDifference;
  }

  solution([3, 1, 2, 4, 3]); // Output: 1
  