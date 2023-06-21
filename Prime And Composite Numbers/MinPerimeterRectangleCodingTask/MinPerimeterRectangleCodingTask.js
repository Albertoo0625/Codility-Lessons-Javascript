function solution(N) {
    let minPerimeter = Infinity;
    const sqrtN = Math.floor(Math.sqrt(N));
  
    for (let i = 1; i <= sqrtN; i++) {
      if (N % i === 0) {
        const j = N / i;
        const perimeter = 2 * (i + j);
        minPerimeter = Math.min(minPerimeter, perimeter);
      }
    }
  
    return minPerimeter;
  }

  
  console.log(solution(30)); // Output: 22
  console.log(solution(120)); // Output: 44
