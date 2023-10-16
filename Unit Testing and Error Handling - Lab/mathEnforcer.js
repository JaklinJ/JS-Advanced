describe('mathEnforcer', () => {
    it('Should return undefined if the parameter of addFive is not a number ', () => {
        expect(mathEnforcer.addFive([1,23])).to.be.undefined;
        expect(mathEnforcer.addFive({})).to.be.undefined;
        expect(mathEnforcer.addFive('cheresha')).to.be.undefined;
        expect(mathEnforcer.addFive(true)).to.be.undefined;
        expect(mathEnforcer.addFive()).to.be.undefined;
        expect(mathEnforcer.addFive('5')).to.be.undefined;
    });
    it('Should return result by the addFive function ', () => {
        expect(mathEnforcer.addFive(1)).to.be.equal(6);
        expect(mathEnforcer.addFive(-1)).to.be.equal(4)
        expect(mathEnforcer.addFive(0)).to.be.equal(5)
        expect(mathEnforcer.addFive(1.25)).to.be.equal(1.25+5)
    });
    it('Should return undefined if the parameter of subtractTen is not a number ', () => {
        expect(mathEnforcer.subtractTen([1,23])).to.be.undefined;
        expect(mathEnforcer.subtractTen({})).to.be.undefined;
        expect(mathEnforcer.subtractTen('cheresha')).to.be.undefined;
        expect(mathEnforcer.subtractTen(true)).to.be.undefined;
        expect(mathEnforcer.subtractTen()).to.be.undefined;
        expect(mathEnforcer.subtractTen('5')).to.be.undefined;
    });
    it('Should return 0 by the subtractTen function ', () => {
        expect(mathEnforcer.subtractTen(10)).to.be.equal(0)
        expect(mathEnforcer.subtractTen(0)).to.be.equal(-10)
        expect(mathEnforcer.subtractTen(-15)).to.be.equal(-25)
        expect(mathEnforcer.subtractTen(10.10)).to.be.equal(10.10-10)
    });
    it('Should return undefined if num1 is not a number ', () => {
        expect(mathEnforcer.sum('start', 1)).to.be.undefined;
        expect(mathEnforcer.sum(['start'], 1)).to.be.undefined;
        expect(mathEnforcer.sum({}, 1)).to.be.undefined;
        expect(mathEnforcer.sum(1)).to.be.undefined;
        expect(mathEnforcer.sum()).to.be.undefined;
        expect(mathEnforcer.sum('1', 1)).to.be.undefined;
        expect(mathEnforcer.sum(true, 1)).to.be.undefined;
    });
    it('Should return undefined if num2 is not a number ', () => {
        expect(mathEnforcer.sum(1, [1])).to.be.undefined;
        expect(mathEnforcer.sum(1, 'jega')).to.be.undefined;
        expect(mathEnforcer.sum(1, {})).to.be.undefined;
        expect(mathEnforcer.sum(1)).to.be.undefined;
        expect(mathEnforcer.sum()).to.be.undefined;
        expect(mathEnforcer.sum(1, '1')).to.be.undefined;
        expect(mathEnforcer.sum(1, false)).to.be.undefined;
    });
    it('Should return the sum to num1 and num2 ', () => {
        expect(mathEnforcer.sum(1,2)).to.be.equal(3);
        expect(mathEnforcer.sum(1.23, 1.23)).to.be.equal(1.23 + 1.23);
        expect(mathEnforcer.sum(1, 1.2)).to.be.equal(2.2);
        expect(mathEnforcer.sum(0, 1)).to.be.equal(1)
    });
