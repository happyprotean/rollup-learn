import { version } from '../package.json'

export function add(x, y){
  return x + y
}

export function notUse() {
  return 'not use'
}

export function getVersion() {
  return version
}
