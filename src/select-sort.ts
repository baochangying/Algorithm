function selectSort(nums: number[]): number[] {
  const arr: number[] = [];
  let length = nums.length;
  for (let i = 0; i < length; i++) {
    let minNummIndex = getMinNum(nums);
    arr.push(nums[minNummIndex]);
    nums.splice(minNummIndex, 1);
  }
  return arr;
}

function getMinNum(nums: number[]): number {
  let length = nums.length;
  let minNum = nums[0];
  let minNumIndex = 0;

  for (let i = 1; i < length; i++) {
    if (minNum > nums[i]) {
      minNumIndex = i;
      minNum = nums[i];
    }
  } 
  return minNum;

}

const num = [8,2,3,4,5];
console.log(selectSort(num));
