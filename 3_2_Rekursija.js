/*
Zero is even.
One is odd.
For any other number N, its evenness is the same as N –2
*/



function irvienads(a) {
    if (a === 1) return false;
    if (a === 0) return true;
    if (a < 0){
         return irvienads(-a);
    }
    return irvienads(a - 2);
  }
  //test values for input
  console.log(irvienads(50));
  console.log(irvienads(15));
  console.log(irvienads(-5));
