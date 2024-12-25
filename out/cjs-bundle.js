'use strict';

var version = "1.0.0";

function add(x, y){
  return x + y
}

function getVersion() {
  return version
}

function main() {
  console.log(add(1, 2));
  console.log('version -> ', getVersion());
}

main();
