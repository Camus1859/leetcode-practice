// Merge Intervals
// https://leetcode.com/problems/merge-intervals/

function merge(intervals: number[][]): number[][] {

    intervals.sort((a, b) => a[0] - b[0])
    const merged: number[][] = [intervals[0]]

    for (let i = 1; i < intervals.length; i++) {

        if (intervals[i][0] <= merged[merged.length - 1][1]) {
            const rightNumber = Math.max(intervals[i][1], merged[merged.length - 1][1])
            const leftNumber = merged[merged.length - 1][0]

            merged[merged.length - 1][0] = leftNumber
            merged[merged.length - 1][1] = rightNumber

        } else {
            merged.push(intervals[i])
        }
    }
    return merged
};

// Test cases
console.log(merge([[1,3],[2,6],[8,10],[15,18]]));
// Expected: [[1,6],[8,10],[15,18]]
