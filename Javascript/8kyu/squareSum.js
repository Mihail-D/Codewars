function squareSum(numbers) {
  let sum = 0;
  for (const i of numbers) {
    sum += i * i;
  }
  return sum;
}

console.log(squareSum([0, 3, 4, 5]));


/* function squareSum(numbers) {
  return numbers.reduce(function (sum, n) {
    return n * n + sum;
  }, 0);
} */