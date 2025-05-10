What is the use of the keyof keyword in TypeScript? Provide an example.
<br><br>
keyof is a powerful utility that gives you a union of all keys in a type.
type Person = {
  name: string;
  age: number;
};

type PersonKeys = keyof Person; // "name" | "age"

function getValue(obj: Person, key: keyof Person) {
  return obj[key];
}
This makes your code dynamic and type-safe when accessing properties.


2.How does TypeScript help in improving code quality and project maintainability?
Early bug detection during development

Better IDE support (autocomplete, hints)

Easy refactoring with confidence

Built-in documentation through types

Improved team collaboration on large projects