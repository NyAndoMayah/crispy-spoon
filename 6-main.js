const { slice } = require('./1-slice');
const { merge }= require('./2-merge');
const { generateUnorderedArray } = require('./4-generate-unordered-array');

function sort(array) {
  if (array.length <= 1) {//3
    return array;//1
  }
  const middle = Math.floor(array.length / 2);//5
  const left = slice(array, 0, middle);//1+n +2
  const right = slice(array, middle, array.length);//1+n+4
  return merge(sort(left), sort(right));//46n+nlog(n)+nlog(n)
}

const array = generateUnorderedArray(10);//14n**2+21n+1+1
console.log(array);//1
console.log(sort(array));//nlog(n)
/*
T6=3+1+5+1+n+2+1+n+4+46n+nlog(n)+nlog(n)+14n**2+21n+1+1+1+nlog(n)
quand n tend vers +infini alors T6 
*/
