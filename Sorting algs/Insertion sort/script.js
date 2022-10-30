const InsertionSort = (arr) =>{
  for(let i = 1; i<arr.length; i++){
    let currentVal = arr[i];
    let j = i-1;
    while(j >= 0 && arr[j] > currentVal){
      arr[j+1] = arr[j];
      j--;
    }
    arr[j+1] = currentVal;
  }
  
  return arr;
}

console.log(InsertionSort([23, 5, 33, 78, 1, 19]));