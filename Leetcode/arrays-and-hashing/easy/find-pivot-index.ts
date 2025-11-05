// 724. Find Pivot Index
// https://leetcode.com/problems/find-pivot-index/

export = {}

function pivotIndex(nums: number[]): number {

    let leftPointer = 0
    let rightPointer = nums.length - 1
    let leftTotal = nums[0]
    let rightTotal = nums[nums.length - 1]

    while (nums[leftPointer + 1] !== nums[rightPointer - 1]) {

        if (leftPointer + 1 === rightPointer) {
            return - 1
        }

        if (nums[rightTotal] === 0 && nums[leftPointer - 1] === undefined) {
            return 0
        }

        if (leftTotal <= rightTotal) {
            leftPointer++
            leftTotal += nums[leftPointer]

        } else {
            rightPointer--
            rightTotal += nums[rightPointer]
        }
    }

      if (leftPointer  === 0 && rightPointer === nums.length - 1) {
            return - 1
        }else{

        
    return leftPointer + 1

        }
};

const nums1 = [1,7,3,6,5,6];
console.log(pivotIndex(nums1)); // Expected: 3

// const nums2 = [1,2,3];
// console.log(pivotIndex(nums2)); // Expected: -1

// const nums3 = [2,1,-1];
// console.log(pivotIndex(nums3)); // Expected: 0
