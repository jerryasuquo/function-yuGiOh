function yuGiOh(number) {
  // An array to store the list of given numbers
  let array = [];
  // Looping through all the numbers entered
  for (let i = 1; i <= number; i++) {
    // if the number is divisible by 2, 3, and 5, write "yu-gi-oh"
    if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
      array.splice(i - 1, 1, "yu-gi-oh");
    } else if (i % 2 === 0) {
      // if the number is divisible by 2, write "yu"
      array.splice(i - 1, 1, "yu");
    } else if (i % 3 === 0) {
      // if the number is divisible by 3, write "gi"
      array.splice(i - 1, 1, "gi");
    } else if (i % 5 === 0) {
      // if the number is divisible by 5, write "oh"
      array.splice(i - 1, 1, "oh");
    } else {
      // otherwise, write just the number
      array.push(i);
    }
  }
  console.log(array);
  return array;
}
yuGiOh(100);
yuGiOh(50);
