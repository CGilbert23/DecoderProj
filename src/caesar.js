// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {

    


function caesar(input, shift, encode = true) {
  let array =[]
   
  /*adjust encode and see if shift is meeting specs*/
  if(!encode){
    shift *= -1
  }
  else if(shift>25 || shift==0 || shift<-25 || !shift){
    return false
  }
  /*turn letters to numbers*/
  /*push the transformed letter and the original space!*/

  input = input.toUpperCase()
  for (let i=0; i<input.length; i++){
    let x = input[i]
    let asci = x.charCodeAt(0)
      if (asci >= 65 && asci<=90){
          let newValue = asci + shift
          if (newValue>90){
              newValue = newValue-26
          }
          else if (newValue<65){
            newValue = newValue+26
          }
          let asci2 = String.fromCharCode(newValue)
    
    
          array.push(asci2)
      }
   else{
       array.push(x)
   }
  
  }
  
/*join and format the string*/
  
  array=array.join("").toLowerCase()
  return array

}
  

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;




