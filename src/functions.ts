function printResult(num: number) {
  console.log(`Result: ${num}`);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(5, 12));

let combineValues: (a: number, b: number) => number;

combineValues = add;

addAndHandle(10, 20, (result) => {
  console.log(result);
});
