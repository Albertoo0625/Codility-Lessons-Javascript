function solution(H) {
    const stack = [];
    let blockCount = 0;
  
    for (let i = 0; i < H.length; i++) {
      const h = H[i];
  
      while (stack.length > 0 && stack[stack.length - 1] > h) {
        stack.pop();
      }
  
      if (stack.length === 0 || stack[stack.length - 1] !== h) {
        stack.push(h);
        blockCount++;
      }
    }
  
    return blockCount;
  }
  

const H = [8, 8, 5, 7, 9, 8, 7, 4, 8];
console.log(solution(H));  // Output: 7
