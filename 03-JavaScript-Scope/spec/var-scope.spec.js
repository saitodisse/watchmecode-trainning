describe("variables declaration: ", function () {
    it("without 'var', even inside a function, is global", function () {
        defineGlobalFoo();
        expect(callFoo()).toEqual("I'm global!");
    })

    it("but with 'var', is scoped to the function", function () {
        deleteGlobalFoo();
        defineFooWithVar();
        // does not exist at all
        expect(window['foo']).toBeUndefined();
    })

    it("this is how to check not defined variables", function () {
        // http://stackoverflow.com/questions/858181/how-to-check-a-not-defined-variable-in-javascript
        expect(typeof thisNotExist).toEqual('undefined');
        expect(window['thisNotExist']).toBeUndefined();
    })
});

describe("hoisting:", function () {
    it("variables are always moved to the top", function () {
        hoistedTrueFooVar();
        expect(hoistedTrueFooVar()).toEqual("fooHoisted");
    })
    it("...even if not reached in runtime", function () {
        hoistedFalseFooVar();
        expect(hoistedFalseFooVar()).toEqual(undefined);
    })
});

describe("closures:", function () {
    it("without calling inner the var not change", function () {
        expect(outerScope(false), "outerVar");
    })
    it("but calling inner function, change outer variable", function () {
        expect(outerScope(true), "closure variable");
    })
    it("that is not global. Does not exist outside", function () {
        expect(typeof outerVar).toEqual('undefined');
    })
});
