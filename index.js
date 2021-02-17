

//This was my first run at this but its a bit too messy for my liking

let validParentheses = (str) => {
      //First turn the string into an array
      let arr1 = str.split('');
      console.log(`Init arr: ${arr1.join('')}`);

      for (let i = 0; i < str.length; i++) {
            // We will only check for '(' at [0] since 
            // anything else would be false.
            if (arr1[0] === '(') {

                  // Now we check for and remove the pair. 
                  // If there is no ')' to match the '(' then we 
                  // override the array with ) resuting in false result.
                  arr1.splice([0], 1);
                  arr1.includes(')') ? arr1.splice([arr1.indexOf(')')], 1) : arr1 = [')'];
            };
            console.log(`Iteration: ${i} =>${arr1.join('')}`);
      };
      return arr1.length == 0 ? true : false;
};


//Test Cases
console.log('Result: ' + validParentheses("()()((()")); //Expected Result: false
console.log('Result: ' + validParentheses("()")); //Expected Result: true
console.log('Result: ' + validParentheses("()()")); //Expected Result: true
console.log('Result: ' + validParentheses("(())")); //Expected Result: true
console.log('Result: ' + validParentheses(")")); //Expected Result: false
console.log('Result: ' + validParentheses("")); //Expected Result: true
console.log('Result: ' + validParentheses("())")); //Expected Result: false






//Alt Solution

// This is a cleaner and more simple solution to this problem.
// P.S. the '!' on the return statment returns a boolean not the length,
// the use of '!' on the return is equal to using str.length == 0 ? true: false;
// Also, the array method returns -1 when no match is made.
//   ↓        ↓         ↓        ↓         ↓         ↓

let validParenthesesAlt = (str) => {
      while (str.indexOf('()') != -1) {
            str = str.replace('()', '');
      }
      return !str.length;
};


//Test Cases
console.log(validParenthesesAlt("()()((()") + ' Alt'); //Expected Result: false
console.log(validParenthesesAlt("()") + ' Alt'); //Expected Result: true
console.log(validParenthesesAlt("()()") + ' Alt'); //Expected Result: true
console.log(validParenthesesAlt("(())") + ' Alt'); //Expected Result: true
console.log(validParenthesesAlt(")") + ' Alt'); //Expected Result: false
console.log(validParenthesesAlt("") + ' Alt'); //Expected Result: true
console.log(validParenthesesAlt("())") + ' Alt'); //Expected Result: false
