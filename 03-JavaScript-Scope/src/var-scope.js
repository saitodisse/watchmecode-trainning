function defineGlobalFoo(){
    foo = "I'm global!";
}

function callFoo(){
    return foo;
}

function deleteGlobalFoo(){
    delete foo;
}

function defineFooWithVar(){
    var foo = "I'm global!";
}



function hoistedTrueFooVar(){
    if(true){
        var fooHoisted = "fooHoisted";
    }
    return fooHoisted;
}
function hoistedFalseFooVar(){
    if(false){
        var fooHoisted = "fooHoisted";
    }
    return fooHoisted;
}


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

