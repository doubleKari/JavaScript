const summation = (num) => {
  const numsArray = [];
  for (let i = 0; i <= num; i++) {
    numsArray.push(i);
  }

  let total = 0;
  for (i of numsArray) {
    total += i;
  }
  return total;
};

console.log(summation(20));
