describe('isOddOrEven', () => {
    it('Should return even if the string argument is of even length ', () => {
        expect(isOddOrEven('even')).to.be.equal('even')
    });
    it('Should return odd if the string argument is of odd length ', () => {
        expect(isOddOrEven('odd')).to.be.equal('odd');
    });
    it('Should return undefinded if the argument is a number ', () => {
        expect(isOddOrEven(1)).to.be.undefined
    });
    it('Should return undefined if the argument is array ', () => {
        expect(isOddOrEven(['true'])).to.be.undefined
    });
    it('Should return even for multiple strings in a row ', () => {
        expect(isOddOrEven('have to say sorry!')).to.be.equal('even')
    });
})
