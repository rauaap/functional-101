#!/usr/bin/env node

const {Point, Point3D} = require('./lib/points.js');

function sort(arr, func) {
    const a = [...arr];

    for (let i = 0; i < a.length; i++) {
        let minPos = i;
        for (let x = i; x < a.length; x++) {
            if (func(a[x], a[minPos]))
                minPos = x;
        }

        [ a[i], a[minPos] ] = [ a[minPos], a[i] ];
    }

    return a;
}

const numbers = [10, 0, 5, 100, 9];

const points = [
    new Point(10,10), 
    new Point(3,4), 
    new Point(100,100),
    new Point(21,21),
    new Point(1,1)
];

const threedeepoints = [
    new Point3D(10,10,10), 
    new Point3D(3,7,4), 
    new Point3D(100,100,100),
    new Point3D(13,17,14), 
    new Point3D(23,77,64), 
];

console.log(sort(numbers, (a,b) => a < b));
console.log(
    sort(points, (a, b) => (a.x + a.y) < (b.x + b.y)),
    sort(threedeepoints, (a, b) => (a.x + a.y + a.z) < (b.x + b.y + b.z))
);
