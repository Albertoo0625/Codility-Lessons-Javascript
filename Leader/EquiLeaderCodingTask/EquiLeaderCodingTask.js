function solution(A) {
    let dominator = -1;
    let count = 0;
  
    // Find the dominator
    for (let i = 0; i < A.length; i++) {
      if (count === 0) {
        dominator = A[i];
        count++;
      } else {
        if (A[i] === dominator) {
          count++;
        } else {
          count--;
        }
      }
    }
  
    // Count the occurrences of the dominator
    let dominatorCount = 0;
    for (let i = 0; i < A.length; i++) {
      if (A[i] === dominator) {
        dominatorCount++;
      }
    }
  
    let equiLeaderCount = 0;
    let leftDominatorCount = 0;
  
    for (let i = 0; i < A.length - 1; i++) {
      if (A[i] === dominator) {
        leftDominatorCount++;
      }
  
      const leftSubarraySize = Math.floor((i + 1) / 2);
      const rightSubarraySize = Math.floor((A.length - i - 1) / 2);
  
      if (
        leftDominatorCount > leftSubarraySize &&
        dominatorCount - leftDominatorCount > rightSubarraySize
      ) {
        equiLeaderCount++;
      }
    }
  
    return equiLeaderCount;
  }

const A = [4, 3, 4, 4, 4, 2];
console.log(solution(A));  // Output: 2


const B = [4, 3, 4, 4, 4, 2,4, 4];
console.log(solution(B));  // Output: 2
