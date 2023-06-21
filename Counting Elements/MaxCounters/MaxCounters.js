function solution(N, A) {
    const counters = new Array(N).fill(0);
    let maxCounter = 0;
    let lastMaxCounter = 0;
  
    for (let num of A) {
      if (num >= 1 && num <= N) {
        const counterIndex = num - 1;
        counters[counterIndex] = Math.max(counters[counterIndex], lastMaxCounter);
        counters[counterIndex]++;
        maxCounter = Math.max(maxCounter, counters[counterIndex]);
      } else if (num === N + 1) {
        lastMaxCounter = maxCounter;
      }
    }
  
    for (let i = 0; i < N; i++) {
      counters[i] = Math.max(counters[i], lastMaxCounter);
    }
  
    return counters;
  }

console.log(solution(5, [3, 4, 4, 6, 1, 4, 4])); // Output: [3, 2, 2, 4, 2]
  

