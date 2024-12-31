import { add, getVersion } from "./util.js";
import answer from 'the-answer'

function main() {
  console.log(add(1, 2))
  console.log('version -> ', getVersion())
  import('./dynamic.js').then(({ default: foo }) => {
    console.log('dynamic -> ', foo())
  })
  console.log('the answer is -> ', answer)
}

main()
