function repeatStr(n, s) {
  let counter = "";
  for (let i = 0; i < n; i++) {
    counter += s;
  }
  return counter;
}

console.log(repeatStr(5, "ha "));

// repeatStr = (n, s) => s.repeat(n);