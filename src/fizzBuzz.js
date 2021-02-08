class FizzBuzz {
  isDivisibleByThree = (n) => {
    return n % 3 === 0;
  };
  isDivisibleByFive = (n) => {
    return n % 5 === 0;
  };
  convert = (n) => {
    if (this.isDivisibleByFive(n) && this.isDivisibleByThree(n)) {
      return "FizzBuzz";
    }
    else if (this.isDivisibleByThree(n)) {
      return "Fizz";
    } else if (this.isDivisibleByFive(n)) {
      return "Buzz";
    }
    else return n;
  };
}
