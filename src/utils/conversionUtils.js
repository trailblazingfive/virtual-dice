export const convertRollArrayToString = (arr) => {
  let str = ''
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}, `
  }
  return str.slice(0, -2)
}