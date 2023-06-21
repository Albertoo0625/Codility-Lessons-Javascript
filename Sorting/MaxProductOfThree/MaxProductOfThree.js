function solution(A) {
    let max1 = -1001;
    let max2 = -1001;
    let max3 = -1001;
    let min1 = 1001;
    let min2 = 1001;

    for (let i = 0; i < A.length; i++) {
        const num = A[i];

        if (num > max1) {
            max3 = max2;
            max2 = max1;
            max1 = num;
        } else if (num > max2) {
            max3 = max2;
            max2 = num;
        } else if (num > max3) {
            max3 = num;
        }

        if (num < min1) {
            min2 = min1;
            min1 = num;
        } else if (num < min2) {
            min2 = num;
        }
    }

    return Math.max(max1 * max2 * max3, max1 * min1 * min2);
}

// Example usage:
const example = [-3, 1, 2, -2, 5, 6];
console.log(solution(example)); // Output: 60
