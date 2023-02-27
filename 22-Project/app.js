// Arrow Function Practice
const sayHello1 = () => {
  console.log("Hello World");
};
sayHello1();

// One line func
const sayHello2 = () => console.log("Hello");
sayHello2();

// One line return
const sayHello3 = () => "Hello";
console.log(sayHello3());

// Return object
const sayHello4 = () => ({ msg: "Hello" });
console.log(sayHello4());

// Single param does not need ()
const sayHello5 = (name) => console.log(`Hello ${name}`);
sayHello5("Brad");

// Multiple params need ()
const sayHello6 = (firstName, lastName) =>
  console.log(`Hello ${firstName} ${lastName}`);
sayHello6("Brad", "Traversy");

//
const users = ["Nathan", "John", "Brad"];
const nameLengths = users.map((name) => {
  return name.length;
});
console.log(nameLengths);

// Shorter
const nameLengths2 = users.map((name) => name.length);
console.log(nameLengths2);
