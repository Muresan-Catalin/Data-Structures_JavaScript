const search = (str, val) =>{
  let count = 0;

  for(let i = 0; i<str.length; i++){
    let ok = 1;
    if(str[i] === val[0]){
      for(let j = 1; j<val.length; j++){
        if(str[i+j] !== val[j]){
          ok = 0;
          break;
        }
      }
      if(ok === 1){
        count++;
      }
    }
  }
  return count;
}

console.log(search('omfghomfjh', 'omf'));