const swap = (arr, a, b) =>{
  [arr[a], arr[b]] = [arr[b], arr[a]];
}

const selectionSort = (arr) =>{
  let min;
  for(let i = 0; i<arr.length; i++){
    min = i;
    for(let j = i+1; j<arr.length; j++){
      if(arr[j] < arr[min]){
        min = j;
      }
    }
    swap(arr, i, min);
  }
  return arr;
}

// let a = 5;
// let b = 1;
// swap(a, b);
// console.log(a, b);

console.log(selectionSort([23, 2, 55, 34, 2, 77, 65]));