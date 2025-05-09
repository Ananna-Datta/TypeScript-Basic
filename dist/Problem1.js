"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
{
    function formatString(input, toUpper) {
        if (toUpper === false) {
            return input.toLowerCase();
        }
        else {
            return input.toUpperCase();
        }
    }
    formatString("Hello");
    formatString("Hello", true);
    formatString("Hello", false);
    function filterByRating(items) {
        const x = items.filter((x) => x.rating >= 4);
        return x;
    }
    const books = [
        { title: "Book A", rating: 4.5 },
        { title: "Book B", rating: 3.2 },
        { title: "Book C", rating: 5.0 },
    ];
    filterByRating(books);
    function concatenateArrays(...arrays) {
        let result = [];
        for (const arr of arrays) {
            result = result.concat(arr);
        }
        return result;
    }
    concatenateArrays(["a", "b"], ["c"]); // Output: ["a", "b", "c"]
    concatenateArrays([1, 2], [3, 4], [5]); // Output: [1, 2, 3, 4, 5]
    class Vehicle {
        constructor(make, year) {
            this.make = make;
            this.year = year;
        }
        getInfo() {
            console.log(`Make: ${this.make}, Year: ${this.year}`);
        }
    }
    class Car extends Vehicle {
        constructor(make, year, model) {
            super(make, year);
            this.model = model;
        }
        getModel() {
            console.log(`Model: ${this.model}`);
        }
    }
    const myCar = new Car("Toyota", 2020, "Corolla");
    myCar.getInfo();
    myCar.getModel();
    function processValue(value) {
        if (typeof value === "string") {
            return value.length;
        }
        else {
            return value * 2;
        }
    }
    processValue("hello");
    processValue(10);
    function getMostExpensiveProduct(products) {
        if (products.length === 0)
            return null;
        const mostExpensive = products.reduce((max, item) => item.price > max.price ? item : max);
        return mostExpensive;
    }
    const products = [
        { name: "Pen", price: 10 },
        { name: "Notebook", price: 25 },
        { name: "Bag", price: 50 },
    ];
    getMostExpensiveProduct(products);
    let Day;
    (function (Day) {
        Day[Day["Monday"] = 0] = "Monday";
        Day[Day["Tuesday"] = 1] = "Tuesday";
        Day[Day["Wednesday"] = 2] = "Wednesday";
        Day[Day["Thursday"] = 3] = "Thursday";
        Day[Day["Friday"] = 4] = "Friday";
        Day[Day["Saturday"] = 5] = "Saturday";
        Day[Day["Sunday"] = 6] = "Sunday";
    })(Day || (Day = {}));
    function getDayType(day) {
        if (Day[day] === "Sunday") {
            return "Weekend";
        }
        else {
            return "Weekday";
        }
    }
    getDayType(Day.Monday);
    getDayType(Day.Sunday);
    function squareAsync(n) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (n < 0) {
                        reject(new Error("Negative number not allowed"));
                    }
                    else {
                        resolve(n * n);
                    }
                }, 1000);
            });
        });
    }
    squareAsync(4).then(console.log);
    squareAsync(-3).catch(console.error);
}
