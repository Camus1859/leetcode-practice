// Keys and Values to Object
// https://leetcode.com/problems/keys-and-values-to-object/

function createObject(keysArr: JSONValue[], valuesArr: JSONValue[]): Record<string, JSONValue> {

    const returnObj: { [key: string]: JSONValue } = {}

    for (let i = 0; i < keysArr.length; i++) {

        if (returnObj[String(keysArr[i])] === undefined) {
            returnObj[String(keysArr[i])] = valuesArr[i]
        }

    }
    return returnObj
};

// Test cases
console.log(createObject(["a", "b", "c"], [1, 2, 3]));
// Expected: {"a": 1, "b": 2, "c": 3}

console.log(createObject(["1", 1, false], [4, 5, 6]));
// Expected: {"1": 4, "false": 6}

