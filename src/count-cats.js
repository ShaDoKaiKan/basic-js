module.exports = function countCats(array) {

  let count = 0;
  let newArr = array.join().split(',');

  for (let i = 0; i < newArr.length; i++) {
    if(newArr[i] == '^^') count++;
  }
  
  if(count === 0) return 0;
  
  return count;
}


