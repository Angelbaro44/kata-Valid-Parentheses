# kata-Valid-Parentheses

Description:
-
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples:

    "()"              =>  true
    ")(()))"          =>  false
    "("               =>  false
    "(())((()())())"  =>  true

Constraints:
``` js
0 <= input.length <= 100
```































Test Cases:
-
    Test.assertEquals(validParentheses( "()()((()" ), false);
    Test.assertEquals(validParentheses( "()" ), true);
    Test.assertEquals(validParentheses( "()()" ), true);
    Test.assertEquals(validParentheses( "(())" ), true);
    Test.assertEquals(validParentheses( ")" ), false);
    Test.assertEquals(validParentheses( "" ), true);
    Test.assertEquals(validParentheses( "())" ), false);
    Test.assertEquals(validParentheses( "((((()))))" ), true);
    Test.assertEquals(validParentheses( "()))" ), false);
    Test.assertEquals(validParentheses( "()()()())" ), false);
    Test.assertEquals(validParentheses( "(()()()())(())" ), true);
    Test.assertEquals(validParentheses( "((((((((" ), false);
    Test.assertEquals(validParentheses( "(())((()((()))))" ), true);
    Test.assertEquals(validParentheses( "())(" ), false);
    Test.assertEquals(validParentheses( ")()()()(" ), false);
    Test.assertEquals(validParentheses( "(()()))(" ), false);
    Test.assertEquals(validParentheses( ")()(" ), false);
    Test.assertEquals(validParentheses( "())(()" ), false);
    Test.assertEquals(validParentheses( "())(()" ), false);

    function validParenthesesReference(string){
       var tokenizer = /[()]/g, // ignores characters in between; parentheses are
           count = 0,           // pretty useless if they're not grouping *something*
           token;
       while(token = tokenizer.exec(string), token !== null){
          if(token == "(") {
             count++;
          } else if(token == ")") {
             count--;
             if(count < 0) {
                return false;
             }
          }
       }
       return count == 0;
    }

    function generator() {
      const len = randInt(1,20)*2
      let brackets = ""
      let rb=0
      for (let i=0;i<len;i++) 
        if (randInt(0,rb) == 0)  {
          brackets += "("
          rb+=5
        } else {
          brackets += ")"
          rb-=5
        } 
      return [brackets]
    }


    function randInt(a, b) { return Math.random() * (b - a + 1) + a | 0 }

    function randomAssertSimilar(generator, userSolution, referenceSolution, tests){
      tests = tests || 100;
      var user, reference, values;
      while( tests --> 0){
        values = generator();
        reference = referenceSolution.apply(this, values);
        user      = userSolution.apply(this,      values);
        Test.assertEquals(user, reference, "didn't work on the following argument array: " + values);
      }
    }

    describe("Random tests", function () {  
      randomAssertSimilar(generator, validParentheses, validParenthesesReference);
    });
