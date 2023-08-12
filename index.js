// Test 1
function receivesAFunction(callback) {
    callback();
}

// Test 2
function returnsANamedFunction() {
    const namedFunction = () => console.log("Hi, I\'m John.");
    return namedFunction;
}

// Test 3
function returnsAnAnonymousFunction() {
    return () => console.log("Hi, John.");
}