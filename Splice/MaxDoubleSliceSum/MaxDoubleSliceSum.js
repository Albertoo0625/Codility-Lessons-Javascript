function solution(A) {
  const N = A.length;
  const maxSumLeft = new Array(N).fill(0);
  const maxSumRight = new Array(N).fill(0);

  for (let i = 1; i < N; i++) {
    maxSumLeft[i] = Math.max(0, maxSumLeft[i - 1] + A[i]);
  }

  for (let i = N - 2; i >= 0; i--) {
    maxSumRight[i] = Math.max(0, maxSumRight[i + 1] + A[i]);
  }

  let maxDoubleSliceSum = 0;

  for (let i = 1; i < N - 1; i++) {
    maxDoubleSliceSum = Math.max(maxDoubleSliceSum, maxSumLeft[i - 1] + maxSumRight[i + 1]);
  }

  return maxDoubleSliceSum;
}


const A = [3, 2, 6, -1, 4, 5, -1, 2];
console.log(solution(A)); // Output: 17


const B = [3, 2, 6, -1, 4, 6, -1, 2];
console.log(solution(B)); // Output: 18
