// Insert Interval
// https://leetcode.com/problems/insert-interval/

function insert(intervals: number[][], newInterval: number[]): number[][] {
  const calendar: number[][] = [];
  let i: number = 0;
  const meetings = [...intervals];
  const newMeeting = [...newInterval];

  while (i < meetings.length && meetings[i][1] < newMeeting[0]) {
    calendar.push(meetings[i]);
    i++;
  }

  while (
    i < meetings.length &&
    meetings[i][0] <= newMeeting[1] &&
    newMeeting[0] <= meetings[i][1]
  ) {
    newMeeting[0] = Math.min(newMeeting[0], meetings[i][0]);
    newMeeting[1] = Math.max(newMeeting[1], meetings[i][1]);
    i++;
  }
  calendar.push(newMeeting);

  while (i < meetings.length) {
    calendar.push(meetings[i]);
    i++;
  }
  return calendar;
}

// Test cases
console.log(insert([[1,3],[6,9]], [2,5]));
// Expected: [[1,5],[6,9]]

console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]));
// Expected: [[1,2],[3,10],[12,16]]
