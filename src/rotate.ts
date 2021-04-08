// 旋转数组
function rotate(nums: number[], k: number) {
  const temp: number[] = [];
  const length = nums.length;

  for (let i = 0; i < length; i++) {
    temp[i] = nums[i];
  }

  for (let i = 0; i < length; i++) {
    nums[(i + k) % length] = temp[i];
  }
};