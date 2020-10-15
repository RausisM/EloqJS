/*
Write a program that creates a string that represents
 an 8×8 grid, using new-line characters to separate lines.
  At each position of the grid there is either a space or
   a # character. The characters should form a chessboard.
*/

const size = 8; // lets you decide the width and height of the chessboard, 8 is the defined number by the exercise
let izvade = '';
for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    izvade += (x + y) % 2 === 0 ? '#' : ' ';
  }
  izvade += '\n';
}
console.log(izvade);


/*
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
*/