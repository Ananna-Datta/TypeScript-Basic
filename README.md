1.What is the use of the keyof keyword in TypeScript? Provide an example.
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

✅ Early Bug Detection: Compile-time checks reduce runtime errors.

💡 Enhanced IDE Support: Autocompletion, hover info, and real-time suggestions.

🔄 Safe Refactoring: Rename and update variables/functions confidently.

📚 Self-Documenting Code: Types explain the code, reducing the need for external docs.

🤝 Better Team Collaboration: Clearly defined contracts help developers work efficiently on large-scale