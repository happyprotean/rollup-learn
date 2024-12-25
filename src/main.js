import { add, getVersion } from "./util.js";

function main() {
  console.log(add(1, 2))
  console.log('version -> ', getVersion())
  import('./dynamic.js').then(({ default: foo }) => {
    console.log('dynamic -> ', foo())
  })
}

main()
