class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    get diameter() {
        return 2 * this.radius;
    }
    set diameter(x) {
        this.radius = x /2;
    }
    get area() {
        return Math.PI * (this.radius ** 2);
    }
}
