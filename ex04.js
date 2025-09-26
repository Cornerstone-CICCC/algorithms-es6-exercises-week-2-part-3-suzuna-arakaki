// Exercise 4: Recursion
// Instructions: Write a recursive function named `sumOfDigits` 
// that calculates the sum of the elements of a given array. 
// Test your function by calculating the sum of the array and logging the result to the console.

function sumOfDigits(n) {
  //if loop 
  //define the base case n.length === 0 rturn 0
  if (n.length === 0) {
    return 0;
  } else {
    //here we use recursive case
    //creat the sentence like -> first element of the array + rest of the array
    //first element n[0] + rest of the arrya n.slice(1) <-slice method returns new array whitout the first element
    //we call the function sumOfDigits with the rest of the array
    return n[0] + sumOfDigits(n.slice(1));
  }
}


console.log(sumOfDigits([1, 3, 7, 1, 8])); // 20
