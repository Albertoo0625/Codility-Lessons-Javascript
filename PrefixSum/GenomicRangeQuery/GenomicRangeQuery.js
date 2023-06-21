function solution(S, P, Q) {
    const N = S.length;
    const prefixSumA = new Array(N + 1).fill(0);
    const prefixSumC = new Array(N + 1).fill(0);
    const prefixSumG = new Array(N + 1).fill(0);
    const prefixSumT = new Array(N + 1).fill(0);
  
    for (let i = 0; i < N; i++) {
      prefixSumA[i + 1] = prefixSumA[i] + (S[i] === 'A' ? 1 : 0);
      prefixSumC[i + 1] = prefixSumC[i] + (S[i] === 'C' ? 1 : 0);
      prefixSumG[i + 1] = prefixSumG[i] + (S[i] === 'G' ? 1 : 0);
      prefixSumT[i + 1] = prefixSumT[i] + (S[i] === 'T' ? 1 : 0);
    }
  
    const M = P.length;
    const result = [];
  
    for (let k = 0; k < M; k++) {
      const start = P[k];
      const end = Q[k];
  
      if (prefixSumA[end + 1] - prefixSumA[start] > 0) {
        result.push(1);
      } else if (prefixSumC[end + 1] - prefixSumC[start] > 0) {
        result.push(2);
      } else if (prefixSumG[end + 1] - prefixSumG[start] > 0) {
        result.push(3);
      } else {
        result.push(4);
      }
    }
  
    return result;
  }
  
  // Example usage:
  const S = 'CAGCCTA';
  const P = [2, 5, 0];
  const Q = [4, 5, 6];
  console.log(solution(S, P, Q)); // Output: [2, 4, 1]
  