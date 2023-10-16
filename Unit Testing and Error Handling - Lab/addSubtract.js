describe('createCalculator', () => {
    let calc; 

    beforeEach(function () {
        calc = createCalculator();
    })
    it('Should start the calculations from 0', () => {
        let value = calc.get();
        expect(value).to.be.equal(0);
    });
    it('Should sum value with numbers 2, 3 and give result 5', () => {
        calc.add(2);
        calc.add(3);
        let value = calc.get();
        expect(value).to.be.equal(5)
    });
    it('Should not sum value with string with numbers ', () => {
        calc.add('2.3df');
        let value = calc.get();
        expect(value).to.be.NaN
    });
    it('Should sum value with floating point numbers ', () => {
        calc.add(1.1);
        calc.add(3);
        let value = calc.get();
        expect(value).to.be.equal(4.1)
    });
    it('Should subtract value with numbers 2, 3 and give result -5', () => {
        calc.subtract(2);
        calc.subtract(3);
        let value = calc.get();
        expect(value).to.be.equal(-5)
    });
    it('Should not subtract value with string with numbers ', () => {
        calc.subtract('2.3df');
        let value = calc.get();
        expect(value).to.be.NaN
    });
    it('Should subtract value with floating point numbers ', () => {
        calc.subtract(1.1);
        calc.subtract(3);
        let value = calc.get();
        expect(value).to.be.equal(-4.1)
    });
    it('Should add and subtract and get the desired result ', () => {
        calc.add(3);
        calc.subtract(1)
        let value = calc.get();
        expect(value).to.be.equal(2)
    });
})
