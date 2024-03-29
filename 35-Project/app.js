// MAPS = key-value-pairs - can use ANY type as a key or a value

const map1 = new Map();

// Set Keys

const key1 = "some string";
(key2 = {}), (key3 = function () {});

// Set map values by key

map1.set(key1, "Value of key1");
map1.set(key2, "Value of key2");
map1.set(key3, "Value of key3");

// Get values by key

// console.log(map1.get(key1), map1.get(key2), map1.get(key3));

// Count values

// console.log(map1.size);

// Iterating maps

// Loop using for... of get keys and values

// for (let [key, value] of map1) {
//   console.log(`${key} = ${value}`);
// }

// Iterate keys only
// for (let value of map1.values()) {
//   console.log(value);
// }

// Loop with forEach

// map1.forEach(function (value, key) {
//   console.log(`${key} = ${value}`);
// });

// Convert to arrays

// Create an array of the key value pairs

// const keyValArr = Array.from(map1);
// console.log(keyValArr);

// Create an array of the values
// const ValArr = Array.from(map1.values());
// console.log(ValArr);

// Create an array of the keys
const keyArr = Array.from(map1.keys());
console.log(keyArr);
