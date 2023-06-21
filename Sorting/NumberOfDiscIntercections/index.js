function solution(A) {
    const N = A.length;
    const starts = new Array(N);
    const ends = new Array(N);

    for (let i = 0; i < N; i++) {
        starts[i] = i - A[i];
        ends[i] = i + A[i];
    }

    starts.sort((a, b) => a - b);
    ends.sort((a, b) => a - b);

    let intersections = 0;
    let active = 0;
    let startIdx = 0;
    let endIdx = 0;

    while (startIdx < N) {
        if (starts[startIdx] <= ends[endIdx]) {
            intersections += active;
            active++;

            if (intersections > 10000000) {
                return -1;
            }

            startIdx++;
        } else {
            active--;
            endIdx++;
        }
    }

    return intersections;
}

const A = [1, 5, 2, 1, 4, 0];
console.log(solution(A)); // Output: 11
