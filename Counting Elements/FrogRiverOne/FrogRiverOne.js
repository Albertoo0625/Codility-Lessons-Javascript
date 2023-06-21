function solution(X, A) {
    const positions = new Set();
  
    for (let time = 0; time < A.length; time++) {
      positions.add(A[time]);
  
      if (positions.size === X) {
        return time;
      }
    }
  
    return -1;
  }

console.log(solution(5, [1, 3, 1, 4, 2, 3, 5, 4])); // Output: 6
