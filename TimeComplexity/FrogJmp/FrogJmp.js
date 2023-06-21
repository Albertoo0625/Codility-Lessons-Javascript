function solution(X, Y, D) {
    const distance = Y - X;
    let jumps = Math.floor(distance / D);
  
    if (distance % D !== 0) {
      jumps += 1;
    }
  
    console.log(jumps);
    return jumps;
  }

  
solution(10, 85, 30); // Output: 3

