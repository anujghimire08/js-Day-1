function increment(num) {
  console.log(num + 1);
}
console.log("The final value is: " + increment(5));
// Output:
// The final value is: 5

function passwordLengthCheck(length) {
  if (length >= 8) {
    console.log("Length is sufficient");
  } else {
    console.log("Length is insufficient");
  }
}
let password = "p@$$word124";
passwordLengthCheck(password.length);
// Output:
// Length is sufficient