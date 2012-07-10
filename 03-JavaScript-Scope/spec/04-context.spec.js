describe("(04) scopes again", function () {
    var foo = function(){
        var bar = "baz"
        var quux = function (){
            return(bar);
        }
        return quux();
    }

    it("'var bar' is at foo function scope", function () {
        expect(typeof bar).toEqual('undefined');
    });
    it("when 'foo' call 'quux' that has closured 'bar'", function () {
        expect(foo()).toEqual("baz");
    });
});

describe("(04) context of 'this' changes how you call", function () {

    var foo = function () {
        var bar = "baz"
        this.quux = function () {
            return(bar);
        }
        return this.quux();
    };

    it("you call foo as a function", function () {
        expect(foo()).toEqual("baz");
    });
    it("quux became available globally", function () {
        expect(quux()).toEqual("baz");
    });
    it(".. or you call with new keyword", function () {
        var fooInstance = new foo();
        expect(fooInstance.quux()).toEqual('baz');
    });
});

