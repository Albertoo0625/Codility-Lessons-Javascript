function solution(A, B) {
    const N = A.length;
    let count = 0;
    let end = -1;

    for (let i = 0; i < N; i++) {
        if (A[i] > end) {
            count++;
            end = B[i];
        }
    }

    return count;
}


A = [1, 3, 7, 9, 9]
B = [5, 6, 8, 9, 10]

console.log(solution(A,B));