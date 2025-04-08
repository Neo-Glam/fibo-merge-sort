    /* iterative method */

function fibs(n) {
  const fibo = [0,1];
  if (n === 0) {
    return []
  }
  if (n === 1) {
    return [1];
  }
  for (let i = 2; i < n; i++) 
    fibo.push(fibo[i - 1] + fibo[i - 2]);

  return fibo;
}

/* recursive method */

function fibsRevursive(n) {
  const fibo = [];
  while (n > 0) {
    fibo.push(fibonacci(n));
    n--;
  }
  return fibo.reverse;
}

function fibonacci(n) {
  if (n <= 1) return 0;
  if (n == 2) return 1;
  else {
    return fibs(n - 1) + fibs(n - 2);
  }
}
