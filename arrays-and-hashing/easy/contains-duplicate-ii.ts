function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const container: { [key: string]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    if (container[nums[i]] === undefined) {
      container[nums[i]] = i;
    } else {
      const number =
        container[nums[i]] - i < 0
          ? (-1) * (container[nums[i]] - i)
          : container[nums[i]] - i;


      if (number <= k) {
        return true;
      }
    }
  }
  return false;
}

// Test case
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)); // false
