class Point {
    constructor(x, y) {
        [this.x, this.y] = [x, y];
    }
}

class Point3D {
    constructor(x, y, z) {
        [this.x, this.y, this.z] = [x, y, z];
    }
}

module.exports = {
    Point,
    Point3D
};
