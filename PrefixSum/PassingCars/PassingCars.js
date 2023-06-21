function solution(A) {
    let eastCars = 0; // Number of cars traveling east
    let passingCars = 0; // Total number of passing cars
  
    for (let i = 0; i < A.length; i++) {
      if (A[i] === 0) {
        eastCars++;
      } else {
        passingCars += eastCars;
      }
  
      if (passingCars > 1000000000) {
        return -1; // Exceeded the limit
      }
    }
  
    return passingCars;
  }
  
  // Example usage:
  const example = [0, 1, 0, 1, 1];
 solution(example); // Output: 5
  