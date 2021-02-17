

//This was my first run at this but its a bit too messy for my liking

let validParentheses = (str) => {
      //First turn the string into an array
      let arr1=str.split('');
      console.log(`Init arr: ${arr1.join('')}`);
    
     for(let i =0;i<str.length;i++) {
    // We will only check for '(' at [0] since 
    // anything else would be false.
    if(arr1[0]==='('){
      
    // Now we check for and remove the pair. 
    // If there is no ')' to match the '(' then we 
    // override the array with ) resuting in false result.
        arr1.splice([0],1);
        arr1.includes(')')? arr1.splice( [ arr1.indexOf(')') ] ,1):arr1=[')'];
          };
            console.log(`Pass: ${i} =>${arr1.join('')}`);
      };
         return arr1.length == 0 ? true: false;
    };

//Test Cases
console.log(validParentheses( "()()((()" ) ); //Expected Result: false
console.log(validParentheses( "()" ) ); //Expected Result: true
console.log(validParentheses( "()()" ) ); //Expected Result: true
console.log(validParentheses( "(())" ) ); //Expected Result: true
console.log(validParentheses( ")" ) ); //Expected Result: false
console.log(validParentheses( "" ) ); //Expected Result: true
console.log(validParentheses( "())" ) ); //Expected Result: false