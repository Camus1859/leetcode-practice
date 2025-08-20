const intersection = (a: number[], b: number[]) => {
  const newArr: number[] = [...a, ...b];
  const arr: number[] = [];

  const container: { [key: number]: number } = {};

  for (let i = 0; i < newArr.length; i++) {
    if (container[newArr[i]] === undefined) {
      container[newArr[i]] = 1;
    } else {
      container[newArr[i]] += 1;
    }
  }

  for (let key in container) {
    if (container[Number(key)] > 1) {
      arr.push(Number(key));
    }
  }
};


// Test case
const a = [4, 2, 1, 6];
const b = [3, 6, 9, 2, 10];
console.log(intersection(a, b)); // Expected: [2, 6]
