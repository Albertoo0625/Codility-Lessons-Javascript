function solution(A) {
    const N = A.length;
    const completeSum = ((N + 1) * (N + 2)) / 2;
    let arraySum = 0;
  
    for (let i = 0; i < N; i++) {
      arraySum += A[i];
    }
  
    const missingElement = completeSum - arraySum;
    console.log(missingElement);
    return missingElement;
  }
  

solution([2, 3, 1, 5]); // Output: 4
