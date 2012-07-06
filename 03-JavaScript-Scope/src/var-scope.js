function undefineFoo(){
    foo = undefined;
}

function defineFoo(){
    foo = "I'm global!";
}

function defineFooVar(){
    var foo = "I'm global!";
}

function callFoo(){
    return foo;
}
