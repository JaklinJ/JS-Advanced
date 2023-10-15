describe('sum', () => {
    it('should sum all the numbers in array', () => {
        expect(sum([1,2,3])).to.be.equal(6);
    });

    it('should return 0 if we pass an empty array', () => {
        expect(sum([])).to.be.equal(0);
    });

    it('should return NaN if we pass a string in the array', () => {
        assert.isNaN(sum(['jaki', 1, '2']), 'NaN is NaN');
    });

   
})
