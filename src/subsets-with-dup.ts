class SubsetsWithDup {}

function demo(nums: number[]): number[] {
  nums.sort((a ,b) => a-b);
  let t = [], answer = [];
  const dfs = (choosePre: boolean, current: number, nums: number[]) => {
    if (current === nums.length) {
      console.log(current === nums.length);
      
      answer.push(t.slice());
      return;
    }

    dfs(false, current + 1, nums);

    if (!choosePre && current > 0 && nums[current - 1] === nums[current]) {
      return;
    }

    t.push(nums[current]);
    dfs(true, current + 1, nums);
    t = t.slice(0, t.length - 1);
  }

  dfs(false, 0 ,nums);
  return answer;
}

const nums = [1, 2, 2];
console.log(demo(nums));

export {}