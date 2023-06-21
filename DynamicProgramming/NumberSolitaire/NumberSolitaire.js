function solution(A) {
    const N = A.length;
    const dp = new Array(N).fill(Number.MIN_SAFE_INTEGER);
    dp[0] = A[0];

    for (let i = 1; i < N; i++) {
        for (let j = 1; j <= 6 && i - j >= 0; j++) {
            dp[i] = Math.max(dp[i], dp[i - j] + A[i]);
        }
    }

    return dp[N - 1];
}

const A = [1, -2, 0, 9, -1, -2];
console.log(solution(A));
