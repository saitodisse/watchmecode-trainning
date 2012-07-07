describe("variables declaration: ", function () {
    it("without 'var', even inside a function, is global", function () {
        function defineGlobalFoo(){
            foo = "I'm global!";
        }

        function callFoo(){
            return foo;
        }

        defineGlobalFoo();
        expect(callFoo()).toEqual("I'm global!");
    })

    it("but with 'var', is scoped to the function", function () {
        delete foo;
        function defineFooWithVar(){
            var foo = "I'm global!";
        }
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
        function hoistedTrueFooVar(){
            if(true){
                var fooHoisted = "fooHoisted";
            }
            return fooHoisted;
        }
        expect(hoistedTrueFooVar()).toEqual("fooHoisted");
    })
    it("...even if not reached in runtime", function () {
        function hoistedFalseFooVar(){
            if(false){
                var fooHoisted = "fooHoisted";
            }
            return fooHoisted;
        }
        expect(hoistedFalseFooVar()).toEqual(undefined);
    })
});

describe("closures:", function () {

    function outerScope(mustCall){
        var outerVar = "outerVar";
        function innerScope(){
            outerVar = "closure variable";
        }
        if(mustCall){
            innerScope();
        }
        return outerVar;
    }

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


describe("immediate functions:", function () {
    it("you can point your function to a variable", function () {
        var myFunc = function(){
            var a = 1;
            expect(a).toEqual(1);
        };
        myFunc();
    })
    it("but, to be immediate you have to call it", function () {
        (function(){
            var a = 1;
            expect(a).toEqual(1);
        })();
    })
});