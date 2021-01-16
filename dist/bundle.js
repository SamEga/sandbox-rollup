"use strict";

var Sandbox = /** @class */ (function () {
  function Sandbox() {}
  // test case
  Sandbox.prototype.sum = function (a, b) {
    return a + b;
  };
  return Sandbox;
})();
var sum = new Sandbox();
console.log(sum.sum(2, 2));
