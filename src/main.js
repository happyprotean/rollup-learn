import { add, getVersion } from "utils";
import answer from 'the-answer'
import * as dayjs from 'dayjs'

function main() {
  console.log(add(1, 2))
  console.log('version -> ', getVersion())
  import('./dynamic.js').then(({ default: foo }) => {
    console.log('dynamic -> ', foo())
  })
  console.log('the answer is -> ', answer)
  console.log('dayjs -> ', dayjs().format())
}

main()
