function solution(A) {
  let candidate = -1;
  let count = 0;

  // Find the potential dominator
  for (let i = 0; i < A.length; i++) {
    if (count === 0) {
      candidate = A[i];
      count++;
    } else {
      if (A[i] === candidate) {
        count++;
      } else {
        count--;
      }
    }
  }

  // Count the occurrences of the candidate
  let dominatorCount = 0;
  let dominatorIndex = -1;

  for (let i = 0; i < A.length; i++) {
    if (A[i] === candidate) {
      dominatorCount++;
      dominatorIndex = i;
    }
  }

  if (dominatorCount > A.length / 2) {
    return dominatorIndex;
  } else {
    return -1;
  }
}


const A = [3, 4, 3, 2, 3, -1, 3, 3];
console.log(solution(A));  // Output: 0, 2, 4, 6, or 7

const B = [3, 4, 3, 2, 3];
console.log(solution(B));  // Output: 0, 2, 4, 6, or 7


