import ContainsDuplicate from "../src/contains-duplicate"


const nums = [1,2,3,3,4,5,5,6];
describe("存在重复元素", () => {
  it("暴力法", () => {
    expect(ContainsDuplicate.force(nums))
  })

  it("排序法", () => {
    expect(ContainsDuplicate.sort(nums))
  })
})