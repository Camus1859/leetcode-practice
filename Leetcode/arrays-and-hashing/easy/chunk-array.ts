// 2677. Chunk Array
// https://leetcode.com/problems/chunk-array/

type Obj = Record<string, any>;

function chunk(arr: Obj[], size: number): Obj[][] {

    if (arr.length === 0) return []

    const numOfSubArr = arr.length / size < 1 ? 1 : Math.ceil(arr.length / size)
    let pointer = 0
    const arrayOuter = Array.from({ length: numOfSubArr }, () => [])

    for (let i = 0; i < arr.length; i++) {

        if (arrayOuter[pointer].length < size) {
            arrayOuter[pointer].push(arr[i])
        } else {
            pointer++
            arrayOuter[pointer].push(arr[i])
        }
    }

    return arrayOuter

};

// Test cases
console.log(chunk([1, 2, 3, 4, 5], 1)); // [[1],[2],[3],[4],[5]]

