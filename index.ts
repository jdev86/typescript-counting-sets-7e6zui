function countSetsOfThree(numbers: number[], max: number): number {
  let nLen: number = numbers.length,
    temp: number[] = [],
    combSumsArr: number[] = [];

  const recursiveFunc = (start: number, threshold_: number): void => {
    if (threshold_ === 0) {
      const sum = temp.reduce((a, b) => {
        return a + b;
      }, 0);
      combSumsArr.push(sum);
    } else {
      for (let i = start; i <= nLen - threshold_; i++) {
        temp.push(numbers[i]);
        recursiveFunc(i + 1, threshold_ - 1);
        temp.pop();
      }
    }
  };
  recursiveFunc(0, 3);

  return combSumsArr.filter((x) => x <= max).length;
}

append(`countSetsOfThree([1,2,3,4], 7)`, countSetsOfThree([1, 2, 3, 4], 7), 2);
append(`countSetsOfThree([4,1,3,2], 7)`, countSetsOfThree([4, 1, 3, 2], 7), 2);
append(`countSetsOfThree([1,2,3,9], 7)`, countSetsOfThree([1, 2, 3, 9], 7), 1);
append(`countSetsOfThree([2,2,2,2], 7)`, countSetsOfThree([2, 2, 2, 2], 7), 4);
append(`countSetsOfThree([3,3,3,3], 7)`, countSetsOfThree([3, 3, 3, 3], 7), 0);
append(
  `countSetsOfThree([1,2,3,4,5], 7)`,
  countSetsOfThree([1, 2, 3, 4, 5], 7),
  2
);

function append(description: string, actual: number, expected: number) {
  const item = document.createElement('div');
  item.textContent = `${description}. Expected: ${expected}. Actual: ${actual}.`;
  document.querySelector('#results').append(item);
}
