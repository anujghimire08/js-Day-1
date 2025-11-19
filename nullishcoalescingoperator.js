let value = true;

let result = value || "default value";
console.log(result); // Output: true

let v = null;
let r = v ?? "default value";
console.log(r); // Output: "default value"

/*
The nullish coalescing operator (??) is used to assign a default value when a variable is null or undefined. It’s very useful to avoid unexpected null or undefined errors.
The nullish coalescing operator (??) returns the right-hand value only if the left-hand value is null or undefined.
*/
