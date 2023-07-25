function FrequentElement(arr) {
    const Counts = {};
  
    for (const number of arr) {
      if (Counts[number]) {
        Counts[number]++;
      } else {
        Counts[number] = 1;
      }
    }
  
    let mostFrequent;
    let highest = 0;
  
    for (const number in Counts) {
      if (Counts[number] > highest) {
        mostFrequent = number;
        highest = Counts[number];
      }
    }
  
    return mostFrequent;
  }
  

  const array = [3, 5, 2, 5, 3, 3, 1, 4, 5] ;
  console.log(FrequentElement(array)); 
  