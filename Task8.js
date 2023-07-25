function SecondSmallest(arr) {
    if (arr.length < 2) {
      return "The array must have at least 2 elements.";
    }
  
    let smallest = Infinity;
    let secondSmallest = Infinity;
  
    for (const num of arr) {
      if (num < smallest) {
        secondSmallest = smallest;
        smallest = num;
      } else if (num < secondSmallest && num !== smallest) {
        secondSmallest = num;
      }
    }
  
    if (secondSmallest === Infinity) {
      return "Could not find the second smallest element inside this array.";
    }
  
    return secondSmallest;
  }
  
 
  const numbers = [9, 5, 1, 7, 3, 6];
  console.log( SecondSmallest(numbers));
  