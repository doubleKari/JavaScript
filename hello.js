/*JavaScript labels*/
let i, j;

loop1: for (i = 0; i < 3; i++) {
  loop2: for (j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      break loop2;
    }
    console.log(`i = ${i}, j = ${j}`);
  }
}
