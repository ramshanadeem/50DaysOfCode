let getEvenNumbers = (arr) => {
  //   let arr = [4, 5, 7, 8, 14, 45, 76];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      //   console.log(i);
      let a = arr[i] * arr[i];
      console.log(a);
    }
  }
};

getEvenNumbers([4, 5, 7, 8, 14, 45, 76]);
