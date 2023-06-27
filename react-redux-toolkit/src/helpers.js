
export const getTime = (timeStamp) => {
  const date = new Date(timeStamp);
  const addZero = (number) => {
    let string = number.toString()
    return string.length < 2 ? '0' + string : string
  }
  return date.toDateString() + ', ' + date.getHours() + ":" + addZero(date.getMinutes());
}