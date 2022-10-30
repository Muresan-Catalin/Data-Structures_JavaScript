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

console.log(MergeSort([23, 1, 43, 69, 0, 20, 18, 99]));