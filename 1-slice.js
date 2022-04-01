function slice(array, start, end) {
  let slicedArray = [];//1
  for (let i = start; i < end; i++) {//8
    slicedArray.push(array[i]);//4
  }
  return slicedArray;//1
}

module.exports = { slice };
/*
T1 =  1 + n (8+4+1)=1+13n
or pour n tend vers + infini, T1=+infini 
donc la complexité est O(n)
*/
