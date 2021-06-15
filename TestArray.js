export default class TestArray {

  constructor(array) {
    this.arrayElements = array;
    this.checkDuplicated = () => {
      const sortedArray = this.arrayElements.sort();
      const repeatedNums = [];
      sortedArray.forEach((num, index) => {
        if (index !== 0 && num === sortedArray[index - 1]) {
          repeatedNums.push(num);
        };
      });
      return repeatedNums;
    };
  }

}

