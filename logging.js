#!/usr/bin/env node

function one(a) {
    return a;
}

function two(a, b) {
    return a * b;
}

function three(a, b, c) {
    return a * b * c;
}

function logify(f) {
    return function (...args) {
        const returnValue = f(...args);
        console.log(`${f.name}(${args}) => ${returnValue}`);

        return returnValue;
    }
}

//one = logify(one)
//two = logify(two)
//three = logify(three)

one(1);
two(2,2);
three(3,3,3);

