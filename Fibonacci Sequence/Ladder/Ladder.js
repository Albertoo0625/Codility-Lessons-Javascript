function solution(A, B) {
    var f = new Array(A.length + 1);
    f[0] = 1;
    f[1] = 1;
    var MAX = 1 << 30;
  
    for (var i = 2; i < f.length; ++i) {
      f[i] = f[i - 1] + f[i - 2];
      f[i] = f[i] % MAX;
    }
  
    var res = new Array(A.length);
  
    for (var i = 0; i < A.length; ++i) {
      res[i] = f[A[i]] % (1 << B[i]);
    }
  
    return res;
  }
  
  const A = [4, 4, 5, 5, 1];
  const B = [3, 2, 4, 3, 1];

  
  console.log(solution(A, B));

  