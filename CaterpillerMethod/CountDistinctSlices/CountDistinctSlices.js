function solution(M, A) {
    const N = A.length;
    const distinct = new Set();
    let count = 0;
    let start = 0;
    let end = 0;

    while (end < N) {
        while (distinct.has(A[end])) {
            distinct.delete(A[start]);
            start++;
        }

        distinct.add(A[end]);
        count += distinct.size;

        if (count > 1000000000) {
            return 1000000000;
        }

        end++;
    }

    return count;
}


const M = 6;
const A = [3, 4, 5, 5, 2];
console.log(solution(M, A)); // Output: 9
