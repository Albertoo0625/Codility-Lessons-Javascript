function solution(K, A) {
    const N = A.length;
    let count = 0;
    let currentLength = 0;

    for (let i = 0; i < N; i++) {
        currentLength += A[i];

        if (currentLength >= K) {
            count++;
            currentLength = 0;
        }
    }

    return count;
}

const K = 4;
const A = [1, 2, 3, 4, 1, 1, 3];
console.log(solution(K, A));
