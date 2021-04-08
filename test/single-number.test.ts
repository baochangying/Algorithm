import { SingleNumber } from "../src/single-number";

const nums = [2, 2, 1 ,3 ,1];

describe('只出现一次的数字', () => {
  it('位运算', () => {
    expect(SingleNumber.bitOperation(nums));
  })
}) 