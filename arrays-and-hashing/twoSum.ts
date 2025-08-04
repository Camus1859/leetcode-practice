function twoSum(nums: number[], target: number): number[] {

    const holdsNumbers: { [key: number]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    const currentNumber = nums[i];

    const seekingNumber = target - currentNumber;

    if (seekingNumber in holdsNumbers) {
      return [holdsNumbers[seekingNumber], i];
    } else {
      holdsNumbers[currentNumber] = i;

      console.log(holdsNumbers);
    }
  }
  return [];
}