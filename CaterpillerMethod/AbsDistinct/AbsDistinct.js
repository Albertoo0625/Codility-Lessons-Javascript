// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var nums = {}
    for (i of A) {
        nums[Math.abs(i)] = 1;
    }

    return Object.keys(nums).length;
}

const A = [-5, -3, -1, 0, 3, 6];
console.log(solution(A)); // Output: 5
