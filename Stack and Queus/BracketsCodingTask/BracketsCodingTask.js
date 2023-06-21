function solution(S) {
    const stack = [];
  
    for (let i = 0; i < S.length; i++) {
      const char = S[i];
      if (char === '(' || char === '{' || char === '[') {
        stack.push(char);
      } else if (char === ')' || char === '}' || char === ']') {
        if (stack.length === 0) {
          return 0;
        }
  
        const openingBracket = stack.pop();
  
        if (
          (char === ')' && openingBracket !== '(') ||
          (char === '}' && openingBracket !== '{') ||
          (char === ']' && openingBracket !== '[')
        ) {
          return 0;
        }
      }
    }
  
    return stack.length === 0 ? 1 : 0;
  }
  

console.log(solution("{[()()]}"));  // Output: 1
console.log(solution("([)()]"));   // Output: 0
