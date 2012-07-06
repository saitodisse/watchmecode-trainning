describe("an example specification", function(){
  it("should be able to add 1 + 2", function(){
    var sum = add(1,2);
    expect(sum).toEqual(3);
  })
});

describe("must fail on error", function(){
  it("a + 1 should produce an error", function(){
    expect(getError).toThrow();
  })
});