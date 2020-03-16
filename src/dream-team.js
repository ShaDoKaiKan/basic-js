module.exports = function createDreamTeam(array) {
  let letters = [];
  if(!Array.isArray(array)) return false;
  let correct = [];

  for (let i = 0; i < array.length; i++) {
    if((typeof array[i]) === 'string') {
      correct.push(array[i]);
    } else continue;  
  }

  for (let i = 0; i < correct.length; i++) {
      correct[i] = correct[i].replace(/\s/g, '').toUpperCase();
      letters.push(correct[i][0]);
  }
  let name = letters.sort().join('');
  return name;
};