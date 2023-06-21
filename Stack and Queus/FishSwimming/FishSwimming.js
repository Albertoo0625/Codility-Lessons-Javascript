function solution(A, B) {
    const downstreamFishStack = [];
    let aliveFishCount = 0;
  
    for (let i = 0; i < A.length; i++) {
      if (B[i] === 0) {
        while (downstreamFishStack.length !== 0) {
          const downstreamFish = downstreamFishStack.pop();
  
          if (downstreamFish > A[i]) {
            downstreamFishStack.push(downstreamFish);
            break;
          }
        }
  
        if (downstreamFishStack.length === 0) {
          aliveFishCount++;
        }
      } else {
        downstreamFishStack.push(A[i]);
      }
    }
  
    return aliveFishCount + downstreamFishStack.length;
  }
  

const A = [4, 3, 2, 1, 5];
const B = [0, 1, 0, 0, 0];
console.log(solution(A, B));  // Output: 2
