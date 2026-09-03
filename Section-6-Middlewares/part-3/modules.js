exports.myFunction = function add(a,b){
    return a+b;
}
function mul(a,b){
    return a*b;
}
function sub(a,b){
    return a-b;
}
function div(a,b){
    return a/b;
}

// 1. Named exports -> we can give different names to exports
// 2. Default Exports -> these exports do not have a name and there can only be 1 default export in one module.