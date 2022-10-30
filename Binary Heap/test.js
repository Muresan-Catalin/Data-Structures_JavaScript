const swap = (arr, i, j) =>{
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const Pivot = (arr, start, end) =>{
  let pivot = arr[start];
  let swapindex = start;

  for(let index = start+1; index < arr.length; index++){
    if(pivot > arr[index]){
      swapindex++;
      swap(arr, index, swapindex);
      
    }
  }
  swap(arr, start, swapindex);

  return swapindex;
}

const QuickSort = (arr, left = 0, right = arr.length - 1) =>{
  if(left < right){
    let pivotIndex = Pivot(arr, left, right);

    QuickSort(arr, left, pivotIndex - 1);
    QuickSort(arr, pivotIndex + 1, right);
  }

  return arr;
}

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

const Merge = (arr1, arr2) =>{
  let i = 0;
  let j = 0;
  let newArr = [];

  while(i < arr1.length && j < arr2.length){
    if(arr1[i] <= arr2[j]){
      newArr.push(arr1[i]);
      i++;
    }else{
      newArr.push(arr2[j]);
      j++;
    }
  }

  while(i < arr1.length){
    newArr.push(arr1[i]);
      i++;
  }
  while(j < arr2.length){
    newArr.push(arr2[j]);
      j++;
  }
  return newArr;
}

const MergeSort = (arr) =>{
  if(arr.length <= 1){
    return arr;
  }

  let mid = Math.floor(arr.length/2);
  let left = MergeSort(arr.slice(0, mid));
  let right = MergeSort(arr.slice(mid));

  return Merge(left, right);
}

let a = Array(50).fill().map(() => Math.round(Math.random() * 40));

console.time('label');

a = MergeSort(a);

console.timeEnd('label');
console.log(a);