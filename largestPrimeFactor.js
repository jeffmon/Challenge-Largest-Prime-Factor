exports.largestPrimeFactor = function(n){
  var isPrime = function(num){//isPrime function start
    for(var i = 2; i < num; i++){
      if(num % i === 0){
        return false;
      }
    }
    return true;
  };//isPrime function end

  var primeNumber = 0;//greatest prime factor
  var newArr1 = [];
  var newArr2 = [];

  for(var i = 0; i < n; i++){
    if(isPrime(i) && i > 1){
      newArr1.push(i);
    }
  }

  for(var j = 0; j < newArr1.length; j++){
    if(n % newArr1[j] === 0){
      newArr2.push(newArr1[j]);
    }
  }

  primeNumber = newArr2[newArr2.length - 1];
  return primeNumber;
};




