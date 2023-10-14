class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = innerLength;
    }

    increase(length) {
        this.innerLength += length;
        return;
    }
    decrease(length) {
        
        if(this.innerLength - length < 0) {
            this.innerLength = 0;
        } else {
            this.innerLength -= length;
        }
    }
    
    toString() {
        if(this.innerLength < this.innerString.length) {
            return this.innerString.substring(0, this.innerLength) + '...'
        } else {
            return this.innerString;
        }
    }
}
