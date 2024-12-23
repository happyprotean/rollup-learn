(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
})((function () { 'use strict';

  function add(x, y){
    return x + y
  }

  function main() {
    console.log(add(1, 2));
  }

  main();

}));
