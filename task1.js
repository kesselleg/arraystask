const colors = ['red', 'green', 'blue', 'yellow', 'orange'];

//using join()

 const b = colors.join(" * ")
 console.log(b)

// Apply the splice() method to remove the second and third elements from the colors array and replace them with 'purple' and 'pink'.


// const v = colors.splice(2, 2, "purple", "pink");
// console.log(colors)


// Utilize the copyWithin() method to copy the elements from index 1 to index 3 within the colors array to index 0.



const c = colors.copyWithin(0,1,3)
console.log(c)


// Finally, transform all elements of the colors array to uppercase using the toUpperCase() method.

const color= "red, green, blue, yellow";

const x = color.toUpperCase();
console.log(x)


// Apply the find() method to find the first element in the colors array that starts with the letter 'b'.
const z = colors.find(colors=>item)


// Apply the slice() method to create a new array selectedColors containing the elements from index 1 to index 3 (inclusive) from the colors array.