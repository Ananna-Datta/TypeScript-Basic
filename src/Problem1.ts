{
  function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === false) {
      return input.toLowerCase();
    } else {
      return input.toUpperCase();
    }
  }

  formatString("Hello");
  formatString("Hello", true);
  formatString("Hello", false);

  function filterByRating(
    items: { title: string; rating: number }[]
  ): { title: string; rating: number }[] {
    const x = items.filter((x) => x.rating >= 4);
    return x;
  }

  const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
  ];

  filterByRating(books);

  function concatenateArrays<T>(...arrays: T[][]): T[] {
    let result: T[] = [];
    for (const arr of arrays) {
      result = result.concat(arr);
    }
    return result;
  }

  concatenateArrays(["a", "b"], ["c"]); // Output: ["a", "b", "c"]
  concatenateArrays([1, 2], [3, 4], [5]); // Output: [1, 2, 3, 4, 5]

  class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number) {
      this.make = make;
      this.year = year;
    }
    getInfo() {
      console.log(`Make: ${this.make}, Year: ${this.year}`);
    }
  }

  class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string) {
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

  function processValue(value: string | number): number {
    if (typeof value === "string") {
      return value.length;
    } else {
      return value * 2;
    }
  }

  processValue("hello");
  processValue(10);

  interface Product {
    name: string;
    price: number;
  }

  function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) return null;

    const mostExpensive = products.reduce((max, item) =>
      item.price > max.price ? item : max
    );
    return mostExpensive;
  }

  const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 },
  ];

  getMostExpensiveProduct(products);

  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  function getDayType(day: Day): string {
    if (Day[day] === "Sunday") {
      return "Weekend";
    } else {
      return "Weekday";
    }
  }

  getDayType(Day.Monday);
  getDayType(Day.Sunday);

  async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (n < 0) {
          reject(new Error("Negative number not allowed"));
        } else {
          resolve(n * n);
        }
      }, 1000);
    });
  }

  squareAsync(4).then(console.log);
  squareAsync(-3).catch(console.error);
}
