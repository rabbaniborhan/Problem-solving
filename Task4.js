function findTwoElement(arr, targetValue) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  for (; leftIndex < rightIndex; ) {
    const currentSum = arr[leftIndex] + arr[rightIndex];

    if (currentSum === targetValue) {
      return [leftIndex, rightIndex];
    } else if (currentSum > targetValue) {
        rightIndex--;
    } else {
        leftIndex++;
    }
  }
  return [];
}

const Array =[1, 3, 6, 8, 11, 15];
const targetValue = 9;
console.log(findTwoElement(Array, targetValue));
