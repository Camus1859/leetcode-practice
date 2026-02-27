const str: string = "racecarz";

const isPalindrome = (str: string): boolean => {
  let reversedStr: string = "";

  for (let i = str.length - 1; i >= 0; i--) {
    let char = str[i];

    reversedStr += char;
    console.log(i);
  }

  return reversedStr === str;
};

// console.log(isPalindrome(str));

const promise1 = Promise.resolve(3);

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 42);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  // console.log(values);
});

// Expected output: Array [3, 42, "foo"]

const createPromise = (arrOfPromises: Promise<any>[]): Promise<any[]> => {
  const res: any[] = [];
  let count = 0;

  return new Promise((resolve, reject) => {
    for (const item of arrOfPromises) {
      item.then((i) => {
        count++;
        res.push(i);
        if (count === arrOfPromises.length) {
          return resolve(res);
        }
      });
    }
  });
};
const ans = createPromise([promise1, promise2, promise3]);

ans.then((x) => {
  console.log(x);
});
