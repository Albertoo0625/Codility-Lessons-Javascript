function solution(N) {
    let count = 0;
    const sqrtN = Math.floor(Math.sqrt(N));
  
    for (let i = 1; i <= sqrtN; i++) {
      if (N % i === 0) {
        count += 2;
      }
    }
  
    if (sqrtN * sqrtN === N) {
      count -= 1;
    }
  
    return count;
  }
  

  console.log(solution(24)); // Output: 8
  console.log(solution(2)); // Output: 2
