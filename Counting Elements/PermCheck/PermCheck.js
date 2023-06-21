function solution(A) {
    const elements = new Set();
    let maxValue = 0;
  
    for (let num of A) {
      elements.add(num);
      maxValue = Math.max(maxValue, num);
    }
  
    if (elements.size === A.length && maxValue === A.length) {
      return 1;
    }
  
    return 0;
  }

console.log(solution([4, 1, 3, 2])); // Output: 1
console.log(solution([4, 1, 3]));    // Output: 0
