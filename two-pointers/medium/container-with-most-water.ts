// 11. Container With Most Water
// https://leetcode.com/problems/container-with-most-water/

function maxArea(height: number[]): number {
  let start: number = 0;
  let end: number = height.length - 1;
  let maxArea: number = 0;
  let currentMaxArea: number = 0;

  for (let i = 0; i < height.length; i++) {
    currentMaxArea =
      Math.abs(start - end) * Math.min(height[start], height[end]);

    if (currentMaxArea > maxArea) {
      maxArea = currentMaxArea;
    }

    if (height[start] > height[end]) {
      end--;
    } else {
      start++;
    }
  }
  return maxArea;
}

// Test cases
const height1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height1)); // Expected: 49

const height2 = [1, 1];
console.log(maxArea(height2)); // Expected: 1

const height3 = [4, 3, 2, 1, 4];
console.log(maxArea(height3)); // Expected: 16