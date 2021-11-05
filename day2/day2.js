const arrayPush = () => {
  const arrPush = [1, 2, 3, 4];
  const newLength = arrPush.push(5, 6, 7);
  const Index = arrPush.indexOf(1);
  console.log(newLength);
  console.log(Index);
};
console.log(arrayPush());

//duplicate zeros
const duplicateZeroes = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 0, 0);
      i++;
      arr.pop();
    }
  }
  return arr;
};

let a = duplicateZeroes([1, 0, 2, 3, 0, 4, 5, 0]);
console.log(a);

//merge two array
function mergedTwoArrays(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}
console.log(mergedTwoArrays([1, 4, 3], [2, 0]));

//remove element
let removeElement = function (nums, val) {
  for (i = 1; i <= nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
    }
  }
  return nums.length;
};

let Updated = removeElement([3, 2, 2, 3], 3);
console.log(Updated);

//remove duplicate array

let RemoveDuplicate=(numbs)=>{

for(let i=1;i<=numbs.length;i++)
{
  const unique=[...new Set(numbs)]
   return unique;
}
  
}
console.log(RemoveDuplicate([1,2,4,5,5,5,6]));
