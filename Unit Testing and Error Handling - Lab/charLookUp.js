describe('charLookUp', () => {
    it('Should return undefined if the first parameter is not a string ', () => {
        expect(lookupChar([1,2,3], 1)).to.be.undefined
        expect(lookupChar({}, 1)).to.be.undefined
        expect(lookupChar(1, 1)).to.be.undefined
        expect(lookupChar(false, 1)).to.be.undefined
        expect(lookupChar(1.23, 1)).to.be.undefined
    });
    it('Should return undefined if the second parameter is not a integer number ', () => {
        expect(lookupChar('start', 1.23)).to.be.undefined
        expect(lookupChar('start', [1.23])).to.be.undefined
        expect(lookupChar('start', {})).to.be.undefined
        expect(lookupChar('start', '123')).to.be.undefined
        expect(lookupChar('start', true)).to.be.undefined
    });
    it('Should return Incorect index if the index is smaller than 0 and bigger than string length ', () => {
        expect(lookupChar('start', -10)).to.be.equal('Incorrect index')
        expect(lookupChar('start', 10)).to.be.equal('Incorrect index')
    });
    it('Should return the specified by the index char ', () => {
        expect(lookupChar('start', 1)).to.be.equal('t')
    });
})
