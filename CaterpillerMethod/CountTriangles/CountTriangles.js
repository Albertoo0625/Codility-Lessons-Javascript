function solution(A) {
    const N = A.length;
    A.sort((a, b) => a - b); // Sort array A in non-decreasing order

    let count = 0;

    for (let i = 0; i < N - 2; i++) {
        let k = i + 2;

        for (let j = i + 1; j < N - 1; j++) {
            while (k < N && A[i] + A[j] > A[k]) {
                k++;
            }

            count += k - j - 1;
        }
    }

    return count;
}


const A = [10, 2, 5, 1, 8, 12];
console.log(solution(A)); // Output: 4
