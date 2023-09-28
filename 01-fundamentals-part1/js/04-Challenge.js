// CHALLENGE #4
// Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

// Your tasks:

// Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed to use an if...else statement (if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).

// Print a string to the console containing the bill value, the tip, and the final value (bill + tip).

// Example: The bill was 275, the tip was 41.25, and the total value 316.25.

// Note: Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂

// TEST DATA: Test with different bill values: 275, 40, and 430

//BAD SOLUTION
// const price = 200
// price >=50 || price <= 300 ? console.log(`The price is $${price}, the tip is $${price * 0.15} , the total price is $${price +  price * 0.15}`):
// console.log(`The price is $${price}, the tip is $${price * 0.15} , the total price is $${price +  price * 0.20}`)

// Good Solution
const price = 600
let tip = price >= 50 && price <= 300 ?  price*0.15:
 price *0.2
console.log(`The price is $${price}, the tip is $${tip} and the total is $${price + tip}`)



// 👋 OPTIONAL: You can watch my solution in video format in the next lecture