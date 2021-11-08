let getEvenNumbers = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      //   console.log(i);
      let a = arr[i] * arr[i];
      console.log(a);
    }
  }
};

getEvenNumbers([4, 5, 7, 8, 14, 45, 76]);

const replace = (arr) => {
  let n = arr.length;
  let max = arr[n - 1];

  arr[n - 1] = -1;
  for (let i = n - 2; i >= 0; i--) {
    let temp = arr[i];
    arr[i] = max;
    if (max < temp) max = temp;
  }
  return arr;
};
console.log(replace([2, 8, 5, 1]));
