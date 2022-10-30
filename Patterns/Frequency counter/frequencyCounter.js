const validAnagram = (str1, str2) =>{
  if(str1.length != str2.length){
    return false;
  }

  let freqC1 = {};
  let freqC2 = {};

  for(let val of str1){
    freqC1[val] = (freqC1[val] || 0) + 1;
  }
  for(let val of str2){
    freqC2[val] = (freqC2[val] || 0) + 1;
  }

  for(let key in freqC1){
    if(!(key in freqC2)){
      return false;
    }

    if(!(freqC1[key] === freqC2[key])){
      return false;
    }
  }

  return true;
}

console.log(validAnagram('texttwisttime', 'timetwisttext'));