describe("FizzBuzz", function () {

  beforeEach(function() {
    fizzbuzz = new FizzBuzz();
  })

  describe("Numbers divisbile by 3", function () {
    it("returns true", function () {
      expect(fizzbuzz.isDivisibleByThree(3)).toEqual(true);
    });
  });
  describe("Numbers divisble by 5", function() {
    it("returns 'Buzz'", function() {
      expect(fizzbuzz.isDivisbleByFive(5)).toEqual(true);
    })
  })
});
