// 存在重复元素
class ContainsDuplicate {
  static force(nums: number[]): boolean {
    if (nums == null || nums.length < 2) return false;

    const length = nums.length;
    for (let i = 0; i < length; i++) {
      for (let j = i + 1; j < length; j++) {
        if (nums[i] === nums[j]) {
          return true;
        }
      }
    }

    return false;
  }

  static sort(nums: number[]): boolean {
    if (nums == null || nums.length < 2) return false;

    const length = nums.length;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < length; i++) {
      if (nums[i] === nums[i + 1]) {
        return true;
      }
    }

    return false;
  }
}

export default ContainsDuplicate;