function classHierarchy() {
    class Figure {
        constructor (unit = 'cm') {
            this.units = unit;
        }
        changeUnits (value) {
            this.units = value;
        }
        toString() {
            return `Figures units: ${this.units}`
        }
        calculateUnits(unit) {
            switch(this.units) {
                case 'm': unit /= 10; break;
                case 'cm': unit *= 1; break;
                case 'mm': unit *= 10; break;
            }
            return unit;
        }
    }

    class Circle extends Figure {
        constructor (radius, units) {
            super (units);
            this._radius = radius;
            
        }
        get radius () {
            return super.calculateUnits(this._radius);
        }        
        get area() {
            return Math.PI * this.radius * this.radius;
            
        }
        toString() {
            return `${super.toString()} Area: ${this.area} - radius: ${this.radius}`
        }
    }

    class Rectangle extends Figure {
        constructor (width, height, units) {
            super (units);
            this._width = width;
            this._height = height;
        }
        get width () {
            return super.calculateUnits(this._width);
        }
        get height () {
            return super.calculateUnits(this._height);
        }
        get area () {
            return this.width * this.height;
         
        }
        toString() {
           return  `${super.toString()} Area: ${this.area} - width: ${this.width}, height: ${this.height}`
        }
    }
    return {
        Figure,
        Circle,
        Rectangle
    }
}
