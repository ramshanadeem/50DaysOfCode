// findMaxConsecutiveOnes
var findMaxConsecutiveOnes = function(nums) {
    let largestCount = 0;
    let currentCount = 0;
    for (let i = 0; i<nums.length; i++) {
        if (nums[i] === 0) {
            currentCount = 0;
        } else {
            currentCount++;
        };
        if (currentCount > largestCount) largestCount = currentCount;
    };
    return largestCount;
};
let res = findMaxConsecutiveOnes([1,0,1,1,0,1]);
console.log(res);

// numbers length even 
var findNumbers = function (nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i]%2=== 0) count++;
      
    }
    return count;


  };
  
  let res1 = findNumbers([555, 901, 482, 1771]);
  console.log(res1);
  

///sorted sqaure
  function sortSquares(arr)
  {
      let n = arr.length;

      for (let i = 0; i < n; i++)
          arr[i] = arr[i] * arr[i];
      arr.sort();
  }

  let arr = [ -6, -3, -1, 2, 4, 5 ];
  let n = arr.length;

  console.log("Before sort " + "<br/>");
  for (let i = 0; i < n; i++)
      console.log(arr[i] + " ");

  sortSquares(arr);
  console.log("" + "<br/>");
  console.log("After Sort " + "<br/>");
  for (let i = 0; i < n; i++)
  console.log(arr[i] + " ");
