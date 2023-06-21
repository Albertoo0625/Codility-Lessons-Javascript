function solution(A) {
    const N = A.length;
    const peaks = [];
    let numPeaks = 0;
  
    for (let i = 1; i < N - 1; i++) {
      if (A[i] > A[i - 1] && A[i] > A[i + 1]) {
        peaks.push(i);
        numPeaks++;
      }
    }
  
    if (numPeaks === 0) {
      return 0;
    }
  
    let maxFlags = 0;
    let flags = 1;
  
    while (flags * (flags - 1) <= N) {
      let flagsPlaced = 1;
      let previousFlagIndex = peaks[0];
  
      for (let i = 1; i < numPeaks && flagsPlaced < flags; i++) {
        if (peaks[i] - previousFlagIndex >= flags) {
          flagsPlaced++;
          previousFlagIndex = peaks[i];
        }
      }
  
      if (flagsPlaced === flags) {
        maxFlags = flags;
        flags++;
      } else {
        break;
      }
    }
  
    return maxFlags;
  }

  
const A = [1, 5, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2];
console.log(solution(A)); // Output: 3

const B = [1,3,1,2,2,1,4,3];
console.log(solution(B)); // Output: 2
