function solution(A) {
    const N = A.length;
    
    if (N % 2 === 0) {
      throw new Error("Array length must be odd");
    }
    
    const occurrenceMap = new Map();
    
    for (let i = 0; i < N; i++) {
      const value = A[i];
      const count = occurrenceMap.get(value) || 0;
      occurrenceMap.set(value, count + 1);
    }
    
    for (const [value, count] of occurrenceMap) {
      if (count % 2 !== 0) {
        console.log(value);
        return value;
      }
    }
    
    throw new Error("No unpaired element found");
  }


  const A = [9, 3, 9, 3, 9, 7, 9];
  solution(A);
  