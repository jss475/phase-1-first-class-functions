
function receivesAFunction(innerFunction){
    innerFunction();
}

function returnsANamedFunction(){
    let math = function receivesAFunction(){

    };
    return math;
}

function returnsAnAnonymousFunction(){
    return function(){

    }
}