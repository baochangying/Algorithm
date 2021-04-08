export class TwoSum {

  // 暴力算法
   static force(nums: number[], target: number): number[] {
    if (nums === null || nums.length < 2) {
      return [];
    }

    const length = nums.length;
    for (let i = 0; i < length; ++i) {
      for (let j = i + 1; j < length; ++j) {
        if ((nums[i] == target - nums[j])) {
          return [i, j];
        }
      }
    }
  }

  // 贪心算法
  static greedy(nums: number[], target: number): number[] {
    if (nums === null || nums.length < 2) {
      return [];
    }

    const temp = nums.slice();
    nums.sort((a, b) => a - b);
    let r = nums.length - 1;
    let l = 0;
  
    while (l < r) {
      if (nums[l] + nums[r] === target) break;
      else if (nums[l] + nums[r] < target) l++;
      else r--;
    }
    
    const arr: number[] = [];
    
    for (let i = 0; i < temp.length; i++) {
      if (temp[i] === nums[l]) {
        arr.push(i);
        continue;
      }
      if (temp[i] === nums[r]) {
        arr.push(i);
        continue;
      }
    }
    return arr;
  }
}
