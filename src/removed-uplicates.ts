// 删除排序数组中的重复项

function removeDuplicates(nums: number[]): number {
  // 排序是为了修正不连续的数组无法正确匹配的问题
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    while (nums[i] == nums[i + 1]) {
      nums.splice(i + 1, 1);
    }
  }

  return nums.length;
}

let nums = [1, 4, 3, 4, 2];
console.log(removeDuplicates(nums));
