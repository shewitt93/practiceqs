// / Make a function called hasMatchingParentheses that takes in a string and returns an boolean (true or false) that tells us if the string has matched brackets */
// Write your function here
// const hasMatchingParentheses = (string) => {
//   var left = [];
//   for (let i = 0; i < string.length; i++) {
//     const letter = string[i];
//     if (letter == "(") {
//       left.push(letter);
//     } else {
//       let bracket = left.pop().length == letter.length;
//       console.log(bracket);
//     }
//     if (left.length > 0) {
//       return false;
//     }
//   }
//   return true;
// };
// if (left.pop() + letter !== "()") {
//   return false;
// }
// console.log(hasMatchingParentheses("()")); /*=> true */
// console.log(hasMatchingParentheses("()(")); /*=> false */
// console.log(hasMatchingParentheses("()((()))")); /*=> true */
// console.log(hasMatchingParentheses(")(")); /*=> false */
// console.log(hasMatchingParentheses(")()(")); /*=> false */

// // /* Bonus: Extend to handle these */
// // // console.log(hasMatchingParentheses("((){[]})")) /*=> true */
// // // console.log(hasMatchingParentheses("((){[]}{)")) /*=> false */
// // console.log(hasMatchingParentheses("({[]}){)}{()}")) /*=> false */

// // Make a function called sentenceChecker that takes in an input and returns a boolean stating if the input is a valid sentence or not. */

// // Write your code here
// // function sentenceChecker(sentence) {
// //   //establish first char is capital
// //   const first_char = sentence[0];

// //   //gather then middle of the sentence, check for lowercase chars and commas, disallow anything else.
// //   const sentence_middle = sentence.substring(1, sentence.length - 1);
// //   console.log(sentence_middle);
// //   //check to see the last item in string is a fullstop, excalamation mark or question mark
// //   const last_char = sentence[sentence.length - 1];

// //   //return boolean after testing the above
// //   if (
// //     /[A-Z]/.test(first_char) &&
// //     /[a-z]/.test(sentence_middle) &&
// //     (last_char == "." || last_char == "!" || last_char == "?")
// //   ) {
// //     return true;
// //   } else {
// //     return false;
// //   }
// // }

// // /* Uncomment these one by one and hit 'Run' to test your code!: */
// // // console.log(sentenceChecker("Hello, world!")); /*=> true */
// // // console.log(sentenceChecker("Hello, w!orld")); /*=> false */
// // // console.log(sentenceChecker("hello world")); /*=> false */
// // // console.log(sentenceChecker("Hello world.")); /*=> true */
// // console.log(sentenceChecker("H11.")); /*=> false */
// // // console.log(sentenceChecker("hello world!")); /*=> false */

// /* Hit 'Fork' above to make your own copy!

// Given a string input indicating a starting co-ordinate and a set of instruction steps, output the ending co-ordinate.

// The grid is 6 x 6
// Directions are NSEW (North, South, East, West)

// Instruction steps are formed of 2 characters, a positive or neutral number and a capital letter eg:
// - 2N means 2 steps North
// - 0W means 0 steps East

// 1,4,2N3E4S means start at x=1, y=4 and take 2 steps North, 3 steps East and 4 steps South
// The ending co-ordinate for these instructions would be 4,2
// */

// // Write your code here
// const gridTraverse = (instructions) => {
//   let co_ord = instructions.split(",");
//   //   return co_ord;
//   let next_move;
//   let x_value = parseInt(co_ord[0]);
//   let y_value = parseInt(co_ord[1]);

//   let movement = co_ord[2].split("");

//   movement.forEach((element, idx) => {
//     if (idx % 2 == 0) {
//       next_move = parseInt(element);
//     } else if (idx % 2 !== 0) {
//       switch (element) {
//         case "N":
//           y_value = y_value + next_move;
//           if (x_value > 6 || y_value > 6 || y_value < 0 || x_value < 0) {
//             console.log("invalid");
//           }
//           break;
//         case "S":
//           y_value = y_value - next_move;
//           break;
//         case "W":
//           x_value = x_value - next_move;
//           break;
//         case "E":
//           x_value = x_value + next_move;
//           break;
//         default:
//           console.log("hi");
//       }
//     }
//   });
//   return [x_value, y_value];
// };

// //take in gridTraverse values
// //add values to grid
// //use first 2 values as matrix points maybe use for each to seperate
// //establish that N is ++y , S is Y--, E is x++, W is x--?
// //

// /* Uncomment these one by one and hit 'Run' to test your code!: */
// console.log(gridTraverse("1,4,2N3E4S")); /*=> [4,2] */
// console.log(gridTraverse("2,2,2W1S5E1S5W")); /*=> [0,0] */
// console.log(gridTraverse("3,2,2E5N3W4S")); /*=> throw error */

// We want to create a minimum viable application that can receive telemetry of the current National Grid frequency, and send alerts to IoT devices if the frequency is becoming unstable. We also need to be able to query the application to get the average frequency over the last x readings.

// We don’t know how the telemetry will be sent to us yet (e.g. it could be REST, it could be from a Kafka topic etc), and we don’t have any devices to dispatch alerts to either, so we just need to build the core of the application. However, it should be built in an extensible way, so we can easily improve it later. We’re looking for well structured and well tested code, but actually delivering a working product is the most important thing.

// The API should be as follows:

// A method to receive frequency telemetry, which will be a single floating point number (e.g. 50.1). If the current frequency and the previous frequency are either both above or both below 50, this signifies instability and would trigger the alert message to devices. For this exercise, the application should print “Alert” to the console instead.
// A method to request the average frequency over the past x readings, which will return a floating point number
// To show that it is working, we need a demonstration of the application running as follows:

// Send frequency of 50.0
// Send frequency of 51.0
// Send frequency of 52.0
// —> “Alert” printed to the console
// Send frequency of 49.0
// Send frequency of 49.0
// —> “Alert” printed to the console
// Request average of last 4 readings
// —> Receive answer of 50.25
// let dataRelay = [];
// function nationalGridFrequency(point) {
//   let data_point = point;

//   dataRelay.push(data_point);
//   console.log(dataRelay);
//   console.log(dataRelay[dataRelay.length - 1]);
//   console.log(dataRelay[dataRelay.length - 2]);

//   if (
//     (dataRelay[dataRelay.length - 1] < 50 &&
//       dataRelay[dataRelay.length - 2] < 50) ||
//     (dataRelay[dataRelay.length - 1] > 50 &&
//       dataRelay[dataRelay.length - 2] > 50)
//   ) {
//     return console.log("Alert!");
//   } else {
//     return data_point;
//   }

//   //   nationalGridFrequency.push(data_point);
// }

// function averageTelemetry(requestAverageReadings) {
//   dataRelay.slice(
//     dataRelay - requestAverageReadings,
//     dataRelay[dataRelay - 1]
//   )() / requestAverageReadings;
// }
// console.log(nationalGridFrequency(50.0));
// console.log(nationalGridFrequency(50.1));
// console.log(nationalGridFrequency(50.2));
// console.log(nationalGridFrequency(52.0));

// console.log(nationalGridFrequency(5));
//get data
// let relay = []
//check for value1 && value 2 < 50 || check for value 1 && value 2 < 50
// print alert

//fizzbuzz
function fizzbuzz() {}
