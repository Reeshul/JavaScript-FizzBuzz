describe("FizzBuzz", function () {

  beforeEach(function() {
    fizzbuzz = new FizzBuzz();
  })

  describe("isDivisibleByThree", function () {
    it("returns true when given a number divisible by 3", function () {
      expect(fizzbuzz.isDivisibleByThree(3)).toEqual(true);
    });
    it("returns false when given a number not divisible by 3", function() {
      expect(fizzbuzz.isDivisibleByThree(1)).toEqual(false);
    })
  });
  describe("isDivisibleByFive", function() {
    it("returns true when given a number divisible by 5", function() {
      expect(fizzbuzz.isDivisibleByFive(5)).toEqual(true);
    })
    it("returns false when given a number not divisible by 5", function() {
      expect(fizzbuzz.isDivisibleByFive(1)).toEqual(false);
    })
  })
  describe("convert", function() {
    it("returns 'Fizz' when given a number divisible by 3", function() {
      expect(fizzbuzz.convert(3)).toEqual('Fizz');
    })
    it("returns the same number when given a number not divisble by 3 (or 5)", function() {
      expect(fizzbuzz.convert(4)).toEqual(4);
    })
    it("returns 'Buzz' when given a number divisble by 5 and not 3", function() {
      expect(fizzbuzz.convert(5)).toEqual('Buzz');
    })
    it("returns 'FizzBuzz' when given a number divisible by 15", function() {
      expect(fizzbuzz.convert(15)).toEqual('FizzBuzz');
    })
  })
});
