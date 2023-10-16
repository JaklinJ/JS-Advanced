describe('rgbToHexColor', () => {
    it('Should return color white', () => {
        expect(rgbToHexColor(255, 255, 255)).to.be.equal('#FFFFFF');
    });
    it('Should return black white', () => {
        expect(rgbToHexColor(0, 0, 0)).to.be.equal('#000000');
    });
    it('Should return color dark red', () => {
        expect(rgbToHexColor(131, 25, 25)).to.be.equal('#831919')
    });
    it('Should return undefined if red is smaller than 0, bigger than 255 or red is not a number', () => {
        expect(rgbToHexColor(-10, 255,255)).to.be.undefined;
        expect(rgbToHexColor(32445, 255,255)).to.be.undefined;
        expect(rgbToHexColor({}, 255,255)).to.be.undefined;
        expect(rgbToHexColor(true, 255,255)).to.be.undefined;
        expect(rgbToHexColor([32445], 255,255)).to.be.undefined;
        expect(rgbToHexColor(124.25, 255,255)).to.be.undefined;
        expect(rgbToHexColor('sarah', 255,255)).to.be.undefined;
    });
    it('Should return undefined if green is smaller than 0, bigger than 255 or red is not a number', () => {
        expect(rgbToHexColor(255, -123,255)).to.be.undefined;
        expect(rgbToHexColor(255, 23455,255)).to.be.undefined;
        expect(rgbToHexColor(255, [23455],255)).to.be.undefined;
        expect(rgbToHexColor(255, {} ,255)).to.be.undefined;
        expect(rgbToHexColor(255, false,255)).to.be.undefined;
        expect(rgbToHexColor(255, 234.3,255)).to.be.undefined;
        expect(rgbToHexColor(255, 'sarah',255)).to.be.undefined;
    });
    it('Should return undefined if blue is smaller than 0, bigger than 255 or red is not a number', () => {
        expect(rgbToHexColor(255, 255, -123)).to.be.undefined;
        expect(rgbToHexColor(255, 255, 23455)).to.be.undefined;
        expect(rgbToHexColor(255, 255, [23455])).to.be.undefined;
        expect(rgbToHexColor(255, 255, {})).to.be.undefined;
        expect(rgbToHexColor(255, 255, true)).to.be.undefined;
        expect(rgbToHexColor(255, 255 , 234.3)).to.be.undefined;
        expect(rgbToHexColor(255, 255, 'sarah')).to.be.undefined;
    });


})
