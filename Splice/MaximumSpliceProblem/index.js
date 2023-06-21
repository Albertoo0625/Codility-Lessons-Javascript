function solution(A) {
    let minPrice = Infinity;
    let maxProfit = 0;
  
    for (let i = 0; i < A.length; i++) {
      if (A[i] < minPrice) {
        minPrice = A[i];
      } else {
        const profit = A[i] - minPrice;
        if (profit > maxProfit) {
          maxProfit = profit;
        }
      }
    }
  
    return maxProfit;
  }

  
const A = [23171, 21011, 21123, 21366, 21013, 21367];
console.log(solution(A)); // Output: 356


const B = [23171, 21011, 21123, 21366, 21013, 26000];
console.log(solution(B)); // Output: 4989
