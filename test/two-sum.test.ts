import { TwoSum } from "../src/two-sum";

const nums = [3,2,4];
const target = 6;

describe("两数之和", () => {
  it("暴力算法", () => {
    expect(TwoSum.force(nums, target));
  });

  it("贪心算法", () => {
    expect(TwoSum.greedy(nums, target));
  })
});