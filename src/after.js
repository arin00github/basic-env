"use strict";

function testBefore() {
  var arraynumber = [1, 2, 3, 4, 5];
  arraynumber.map(function (n) {
    return n + 2;
  });
}

testBefore();
