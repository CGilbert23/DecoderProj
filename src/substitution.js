// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  
  const real = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]



  function substitution(input, alphabet, encode = true) {
    let output=[]
    let result2=[]
    // your solution code here
   /* Check to see alphabet exists, is unique and has 26 instances*/
    if (!alphabet){
      return false
    }
    else if (alphabet.length != 26){
      return false
    }
    /* check unique characthers else if (alphabet.)*/
    else {
      for (let i=0; i<alphabet.length;i++){
        let value = alphabet[i]
        if (output.includes(value)){
          return false
        }
        else{
          output+=value
        }
      }
 
    }
/*code to switch between alphabets*/
    
      for (let i=0; i<input.length;i++){
        let val = input[i].toLowerCase()
        if (encode){
            if(real.includes(val)){
            let result= real.indexOf(val)
            result2 += alphabet[result]
          }
        
          else if (!real.includes(val)){
            result2+= val 
          } 
        }
      

      else{
        
          if(alphabet.includes(val)){
            let result = alphabet.indexOf(val)
            result2+= real[result]
          }
          else if(!alphabet.includes(val)){
            result2+= val
          }
        
      }
    }
       
        return result2
        
        
        }
      

  

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;



