const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(string) {
  if((typeof string) != 'string') return false;
  let sampleActiv = parseFloat(string);
  let t = ((Math.log(MODERN_ACTIVITY/sampleActiv)) * HALF_LIFE_PERIOD / 0.693);
  if(isNaN(t) || t < 0 || !isFinite(t)) return false;
  
  return Math.ceil(t);
};
