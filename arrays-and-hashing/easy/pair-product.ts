function pairProduct(numbers: number[], targetProduct: number): number[] {
  const container: { [key: string]: number } = {};

  for (let i = 0; i < numbers.length; i++) {
    const lookingFor = targetProduct / numbers[i];

    if (container[lookingFor]) {
      return [container[lookingFor], i];
    } else {
      container[numbers[i]] = i;
    }
  }
  return [];
}

// Test case
const nums = [3, 2, 5, 4, 1];
const target = 8;
console.log(pairProduct(nums, target)); // Expected: [1, 3] (indices where 2 * 4 = 8)
