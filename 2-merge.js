function merge(array1, array2) {
  let mergedArray = [];//1
  let i = 0;//1
  let j = 0;//1
  while (i < array1.length && j < array2.length) {//9
    if (array1[i] < array2[j]) {//5
      mergedArray.push(array1[i]);// 4
      i++;//2
    } else {
      mergedArray.push(array2[j]);//4
      j++;//2
    }
  }
  while (i < array1.length) {//4
    mergedArray.push(array1[i]);//4
    i++;//2
  }
  while (j < array2.length) {//4
    mergedArray.push(array2[j]);//4
    j++;//2
  }
  return mergedArray;//1
}

module.exports = { merge };
/*
T2 = n(9+5+4+2+4+2) +n(4+4+2)+n(4+4+2)+1=26n + 10n +10n= 46n
si n tend vers + infini alors T2=+infini donc la complexité est O(n).
*/
