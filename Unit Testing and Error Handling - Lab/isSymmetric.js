describe('isSymmetric', () => {
    it('Should return true for symmetric array', () => {
        expect(isSymmetric([1,2,2,1])).to.be.true;
    }),
    it('Should return false for non-symmetric array', () => {
        expect(isSymmetric(['z', 1,2,3,4])).to.be.false
    });
    it('should return false if for an argument we have non-array', () => {
        expect(isSymmetric({name: 'Gosho'})).to.be.false;
    });
    it('should be false if we have a number argument', () => {
        expect(isSymmetric(1)).to.be.false;
    });
    it('should be false if we have a string argument', () => {
        expect(isSymmetric('panic')).to.be.false;
    });
    it('should be false if we have a boolean argument', () => {
        expect(isSymmetric(true)).to.be.false;
    });
    it('should return true for an empty array', () => {
        expect(isSymmetric([])).to.be.true;
    })
    it('should return true if argument is like this', () => {
        expect(isSymmetric([[1,2], 2, [1,2]])).to.be.true;
    })
})
