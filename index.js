let validParentheses = (str) => {
      let arr1=str.split('');
      console.log(`Init arr: ${arr1.join('')}`);
    
     for(let i =0;i<str.length;i++) {
  
    if(arr1[0]==='('){

        arr1.splice([0],1);
        arr1.includes(')')? arr1.splice( [ arr1.indexOf(')') ] ,1):arr1=[')'];
          }
            console.log(`Pass: ${i} =>${arr1.join('')}`);
      }
         return arr1.length == 0 ? true: false
    }