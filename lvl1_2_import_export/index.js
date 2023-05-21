import { names, numbers } from "./data.js";
import { first } from "./function.js";
import { last } from "./function.js";
import { notfirst } from "./function.js";
import { notlast } from "./function.js";
import { removeword } from "./function.js";
import { removeNumbers } from "./function.js";

import { addNumbers } from "./function.js";

console.log(first(names))
console.log(first(numbers))

console.log(notlast(names))
console.log(notlast(numbers))

console.log(last([...names]))
const newNames = [...names]
console.log(newNames)

console.log(notfirst(names))

console.log(removeword(names, "simon"))
console.log(removeword(numbers, 6))

console.log(removeNumbers(numbers))

console.log(addNumbers(numbers))