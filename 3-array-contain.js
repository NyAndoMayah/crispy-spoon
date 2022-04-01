function arrayContain(array, number) {
  for (let i = 0; i < array.length; i++) {//8
    if (array[i] === number) {//4
      return true;//1 
    }
  }
  return false;//1
}

module.exports = { arrayContain };
/*
T3 = n(8+4+1+1)= 14n
si n tend vers +infini alors T3= infini, la complexité est donc O(n)
*/
