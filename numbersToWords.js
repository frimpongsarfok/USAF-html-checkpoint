var numbersToWords = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
  30: "thirty",
  40: "forty",
  50: "fifty",
  60: "sixty",
  70: "seventy",
  80: "eighty",
  90: "ninety"
};
var numbersToPlace = {
  10: "ten",
  100: "hundred",
  1000: "thousand",
  1000000: "million",
  1000000000: "billion",
  1000000000000: "trillion",
  1000000000000000: "quadrillion",
  1000000000000000000: "quintillion"
};
var decimalPlace = {
  1: "tenths",
  2: "hundredths",
  3: "thousandth",
  4: "ten-thousandths",
  5: "hundred-thousandths",
  6: "millionth",
  7: "ten-millionths",
  8: "hundred-millions",
  9: "biillionth",
  10: "ten-billionths",
  11: "hundred-billionths",
  12: "trillionth",
  13: "ten-trillionths",
  14: "hundred-trillionths",
  /*it can be continue  to hundred-quintillionths
    but just for the sack of just to pass this toy problem
    I will pause here...
  */
};

Number.prototype.toEnglish = function() {
  // return my value as english words
  let numberStr=""+this;
  let numbersWord="";
  if(this%1!==0){
     let part1Num=parseInt(this.toString().split('.')[0]);
     let part1=part1Num.toEnglish();
     let part2Num=parseInt(this.toString().split('.')[1]);
     let part2=part2Num.toEnglish();
    let floatwords=part1Num?part1+' and '+part2:part2;
    floatwords+=' '+decimalPlace[this.toString().split('.')[1].length];

     return floatwords;
  }
  while(numberStr.length){
    let numPlaceStr="1";
    numPlaceStr+=numberStr.split("").reduce((prev,curr)=>prev+="0");
    let numPlace=parseInt(numPlaceStr);
      
       if(numberStr.length<=2){
        
          let num=parseInt(numberStr);
          let mult=parseInt(num/10);
          //console.log(mult);
          let remainder=num%11;
          if(mult>1){
              mult*=10;
              numbersWord+=numbersToWords[mult]+"-";
          }else{
            if(num){
              numbersWord+=numbersToWords[num]+" ";
            }  
            break;
          }
  
       }else if(numberStr.length===3){
          let num=parseInt(numberStr);
          let mult=parseInt(num/100);
          if(mult){
            numbersWord+=(mult.toEnglish()+" "+numbersToPlace[100]+" ");
            numberStr=num.toString().slice(mult.toString().length);
            continue;
          }
      
       }
        else if(numberStr.length>3 && numberStr.length<7){
          let num=parseInt(numberStr);
          let mult=parseInt(num/1000);;
           if(mult){
                numbersWord+=mult.toEnglish()+" "+numbersToPlace[1000]+" ";
                numberStr=num.toString().slice(mult.toString().length);
               continue;
           }
        }else if(parseInt(numberStr.length)>=7 && parseInt(numberStr.length)<10){
          let num=parseInt(numberStr);
          let mult=parseInt(num/1000000);
           if(mult){
                numbersWord+=mult.toEnglish()+" "+numbersToPlace[1000000]+" ";
                numberStr=num.toString().slice(mult.toString().length);
                continue;
           }
        }else if(parseInt(numberStr.length)>=10 && parseInt(numberStr.length)<13){
          let num=parseInt(numberStr);
          let mult=parseInt(num/1000000000);;
           if(mult){
                numbersWord+=mult.toEnglish()+" "+numbersToPlace[1000000000]+" ";
                numberStr=num.toString().slice(mult.toString().length);
                continue;
              
           }
         
        }
        else if(parseInt(numberStr.length)>=13 && parseInt(numberStr.length)<16){
          let num=parseInt(numberStr);
          let mult=parseInt(num/1000000000000);;
           if(mult){
                numbersWord+=mult.toEnglish()+" "+numbersToPlace[1000000000000]+" ";
                numberStr=num.toString().slice(mult.toString().length);
                continue;       
                
           }
        }else if(parseInt(numberStr.length)>=16 && parseInt(numberStr.length)<19){
          let num=parseInt(numberStr);
          let mult=parseInt(num/1000000000000000);;
           if(mult){
                numbersWord+=mult.toEnglish()+" "+numbersToPlace[1000000000000000]+" ";
                numberStr=num.toString().slice(mult.toString().length);
                continue;
           }
        }else if(parseInt(numberStr.length)>=19 && parseInt(numberStr.length)<22){
          let num=parseInt(numberStr);
          let mult=parseInt(num/1000000000000000000);;
           if(mult){
                numbersWord+=mult.toEnglish()+" "+numbersToPlace[1000000000000000000]+" ";
                numberStr=num.toString().slice(mult.toString().length);

                continue;
           }
        }
        numberStr=numberStr.slice(1);  
    
  }
   if(!numbersWord.length){
       return numbersToWords[this];
   }else{
       return numbersWord.slice(0,-1);  
   }
 
};
//const toEnglish = Number.prototype.toEnglish;
//console.log(929424.072,"::",(929424.072).toEnglish());
//console.log(92943200324072,"::",(92943200324072).toEnglish());
console.log(92943200324072839,"::",(92943200324072839).toEnglish());
// 2022200000001000
// 1000000000000000
//   22200000001000
//    1000000000000
//     200000001000


//     1,000 -999,999
//     1,000,000-999,999,999
//     1,000,000,000 -999,999,999,999

