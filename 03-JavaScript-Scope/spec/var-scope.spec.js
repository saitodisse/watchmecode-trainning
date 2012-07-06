describe("variables without 'var' are global", function(){
    it("without 'var' is global", function(){
        undefineFoo();
        defineFoo();
        expect(callFoo()).toEqual("I'm global!");
    })
    it("with 'var' is scoped", function(){
        undefineFoo();
        defineFooVar();
        expect(callFoo()).toEqual(undefined);
    })
});
