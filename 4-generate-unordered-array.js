const { arrayContain } = require('./3-array-contain');

function generateUnorderedArray(size) {
  let array = [];//1
  for (let i = 0; i < size; i++) {//7
    let number = Math.floor(Math.random() * 100);//4
    while (arrayContain(array, number)) //14n+1+1
      number = Math.floor(Math.random() * 100);// 4
    }
    array.push(number);//3
  }
  return array;//1
}

module.exports = { generateUnorderedArray };
/*
T4 = 1+n(7+4+14n+1+1+4+3+1)= 1+n(21+14n)=14n**2+21n+1
quand n tend vers + infini alors T4= +infini
donc la complexité est O(n**2)
*/
