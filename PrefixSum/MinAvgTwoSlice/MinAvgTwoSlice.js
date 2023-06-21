function solution(A) {
    const N = A.length;
    let minAvg = Infinity;
    let minIndex = 0;
  
    for (let i = 0; i < N - 1; i++) {
      const avg2 = (A[i] + A[i + 1]) / 2;
      if (avg2 < minAvg) {
        minAvg = avg2;
        minIndex = i;
      }
  
      if (i < N - 2) {
        const avg3 = (A[i] + A[i + 1] + A[i + 2]) / 3;
        if (avg3 < minAvg) {
          minAvg = avg3;
          minIndex = i;
        }
      }
    }
  
    return minIndex;
  }
  
  // Example usage:
  const A = [4, 2, 2, 5, 1, 5, 8];
  console.log(solution(A)); // Output: 1
  