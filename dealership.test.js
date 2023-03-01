const {Dealership} = require('./dealership');
const {Car} = require('./Car');

let A1, A2, gWagon;
let dealership;
let stock;

beforeEach(() => {

    dealership = new Dealership ("CarsRUs", 300, []);
    A1 = new Car("Lambourgini","Urus",250000,"V8");
    A2 = new Car("BMW", "M1", 75000, "Dino V8");
    gWagon = new Car ("Mercedes", "gWagon", 260000, "V8");

})

describe ('testing dealership stock methods', () => {
    test ('can count cars in stock', () => {
        const expected = 0;
        const actual = dealership.countCars();
        expect(actual).toBe(expected);
    });

    test ('can add car to stock', () => {
        dealership.addCarToStock(gWagon);
        const expected = 1;
        const actual = dealership.countCars();
        expect(actual).toBe(expected);
    });

    test ('can get manufacturer of cars', () => {
        dealership.addCarToStock(A1);
        dealership.addCarToStock(A2);
        const expected = ["Lambourgini", "BMW"];
        const actual = dealership.manufacturerForEachCar();
        expect(actual).toEqual(expected);
    });
    
    test ('can search stock by price', () => {
        dealership.addCarToStock(A1);
        const expected = [A1];
        const actual = dealership.findCarByProperty("price", 250000);
        expect(actual).toEqual(expected);
    });  

    test ('can search stock by model', () => {
        dealership.addCarToStock(A1);
        const expected = [A1];
        const actual = dealership.findCarByProperty("model","Urus");
        expect(actual).toEqual(expected);
    });

    test ('can calculate total value of stock', () => {
        dealership.addCarToStock(A1);
        dealership.addCarToStock(A2);
        const expected = 325000;
        const actual = dealership.totalStockValue();
        expect(actual).toEqual(expected);
    });  

});