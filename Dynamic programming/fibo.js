const fibo = (n) =>{
  if(n === 1 || n === 2){
    return 1;
  }else{
    return fibo(n - 1) + fibo(n - 2);
  }
}

const fiboBun = (n, memo=[]) =>{
  if(memo[n] !== undefined){
    return memo[n];
  }
  
  if(n <= 2){
    return 1;
  }

  let res = fiboBun(n-1, memo) + fiboBun(n-2, memo);
  memo[n] = res;
  return res;
}

console.log(fiboBun(60));