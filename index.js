// Add answers here 




function namecity(city) {

     var three='';
     for(a=0;a<3;a++){
        three=three+city[a];
      
     }
     if((three.toLowerCase()==='new') || (three.toLowerCase()==='los')){
        
        return three;
     }
     else{
        console.log('Your city should begin with Los or New')
        return false
     }
 
}
var returnedcity=namecity('Newjersy')
console.log(returnedcity)



//isDivisible by 100
function isdivisble(int)
{
    var result=0;
    if(Number(int)%100===0)
    {

        return true;
       
    }else{
        return false;
    }
}
var res=isdivisble(200)
console.log(res)

// israining



function israining(val){
    val?  console.log('its raining you need umbrella'):console.log('Dry day ,Leave you umbrella at home')
}

var c=israining(false)
console.log(c)



//geomatricalsequence

function geomatricalsequence(){
    var con='1';
    var total=1;
    for(a=1;a<9;a++){
      total=total*2;
      con=String(con)+' '+ String(total);

    }
    console.log(con)
}

geomatricalsequence()



//multipleofthree


function multipleofthree(){
    var total=1;
    var con2='';
    for(a=1;a<=5;a++){
        total=3*a;
        con2=con2+' '+ total;
    }
    return con2;
}

var mult=multipleofthree();
console.log(mult)


//powerof 

function powerof(a){
    var result= Math.pow(Number(a),a);
  return result;
}

var res=powerof(2)
console.log(res)

//how many


function howmany(str){
    
    let str2=str.toLowerCase();
    let sword='';
      let countero=0;
      let counteri=0;
      let counteru=0;
      let countera=0;
      let countere=0;
      var retuned=0;
      sword=str2.split("")
    
      for(i=0;i<sword.length;i++){
        if(sword[i]==='o'){
          countero=countero+1;
        }
        if(sword[i]==='i'){
         counteri=counteri+1;
        }
        if(sword[i]==='u'){
          counteru=counteru+1;
        }
        if(sword[i]==='a'){
            countera=countera+1;
          }
          if(sword[i]==='e'){
            countere=countere+1;
          }
        
      }
      
     retuned=Number(countero)+Number(counteri)+Number(counteru)+Number(countera)+Number(countere);
     return retuned;
        
  }
  var how=howmany('hello');
  console.log(how)

// DO NOT EDIT below this line - This will result in an automatic fail
// module.exports = {nameOfCity, isDivisible, missingAngle, isRaining, geometricalSequence, multiplesOfThree, powerOf, vowelCount};

