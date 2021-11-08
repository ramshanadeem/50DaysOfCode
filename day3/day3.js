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

const Repeated = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return arr.length - 1;
      }
    }
  }
};
console.log(Repeated([2, 3, 5, 1, 1, 1]));

var moveZeroes = function (nums) {
  var i, temp;

  for (i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      temp = nums.splice(i, 1);
      nums.push(temp[0]);
    }
  }
  return nums;
};
console.log(moveZeroes([0, 1, 0, 2]));
