module.exports = function longestConsecutiveLength(array) {
  let count = 1, res = 1;
  if (array.length == 0) {
  res = 0;
  }
  for (let i = 0; i < array.length - 1; i++) {
  if (array[i] + 1 == array[i+1]) {
    count += 1;
  } else {
    if (count > res) {
      res = count;
    }
    count = 1;
  }
  }
  return res;
}
