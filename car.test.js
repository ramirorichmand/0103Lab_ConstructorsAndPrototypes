const {Car} = require('./Car');

let A1, A2;

beforeEach(()=> {
    A1 = new Car("Lambourgini","Urus",250000,"V8");
    A2 = new Car("BMW", "M1", 75000, "Dino V8");

});

describe("testing properties", () => {
    test('has a manufacturer property', () => {
        const expected = 'Lambourgini'
        const actual = A1.manufacturer;
        expect(actual).toBe(expected);
    });

    test('has a model property', () => {
        const expected = 'M1'
        const actual = A2.model;
        expect(actual).toBe(expected);
    });

    test('has a price property', () => {
        const expected = 250000
        const actual = A1.price;
        expect(actual).toBe(expected);
    });

    test('has a engineType property', () => {
        const expected = "Dino V8"
        const actual = A2.engine;
        expect(actual).toBe(expected);
    });


});