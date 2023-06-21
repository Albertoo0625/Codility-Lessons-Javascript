function solution(A) {
    const N = A.length;
    A.sort((a, b) => a - b); // Sort array A in non-decreasing order

    let left = 0;
    let right = N - 1;
    let minAbsSum = Infinity;

    while (left <= right) {
        const absSum = Math.abs(A[left] + A[right]);

        if (absSum < minAbsSum) {
            minAbsSum = absSum;
        }

        if (Math.abs(A[left]) > Math.abs(A[right])) {
            left++;
        } else {
            right--;
        }
    }

    return minAbsSum;
}

const A1 = [1, 4, -3];
console.log(solution(A1)); // Output: 1

const A2 = [-8, 4, 5, -10, 3];
console.log(solution(A2)); // Output: 3
