class Sandbox {
  // test case
  sum(a: number, b: number): number {
    return a + b;
  }
}
const sum = new Sandbox();
console.log(sum.sum(2, 2));
