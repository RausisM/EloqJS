/*Write a program that uses console.log to print all
 the numbers from 1 to 100, with two exceptions. For
  numbers divisible by 3, print "Fizz" instead of the number,
   and for numbers divisible by 5 (and not 3), print "Buzz" instead.
   */
  for (let i = 1; i <= 100; i++) {

    let izvade = '';
    if (i % 3 === 0) izvade += 'Fizz';
    if (i % 5 === 0) izvade += 'Buzz';

    console.log(izvade || i);
  }