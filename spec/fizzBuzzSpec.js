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
  })
})
;
