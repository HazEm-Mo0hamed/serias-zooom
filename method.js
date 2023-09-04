var text = "10"
 console.log(+"10");
 
 

 var candies={
  choclate:10,
  lollipops:null,
  sourStrips:undefined,
  jellyBeans:8,

 }
 var gummyBears=1


 console.log(candies.lollipops?? gummyBears);

  
 function getShawrma(name,age) {
  console.log(` ${name}  ${age}`);
  if (age >=20) {
    console.log("shawrma.meat");
    
   } else{
    console.log("shwemara.chick");
   }  
  
 }

 


 getShawrma("hazem",21)
 getShawrma("hazem",18)




 


 function calcalte(num1,num2,method) {
 if (method==="sum") {
  var result = num1 + num2
  console.log(result);
 } else if (method==="sub") {
  var result= num1- num2
  console.log(result);
 } else if (method==="multi") {
  var result= num1 * num2
  console.log(result);
  
 } else if (method==="divid") {
  var result =num1 / num2
  console.log(result);
  
 } else{
  console.log("Unknown Method, Try Agin");
 }
 }  
   

 calcalte(10,5,"sum")
 calcalte(10,5,"sub")
 calcalte(10,5,"multi")
calcalte(10,5,"divid")
calcalte(10,5,"calma")


var degree=4

switch (degree) {
  case 1:
    console.log("pass");
    break;
  case 2:
    console.log("good");
    break;
  case 3:
    console.log("very good");
    break;
  case 4:
    console.log("excellent");
    break;

  default:
    console.log("with out degree");

}

/**
 * sunday=10
 * sutrday=9
 * monday=9
 * tusday=8
 * wenstday=8
 * thusrsday=7
 * friday=7
 */


var alrams =8
switch (alrams) {
    case 10:
        console.log("sunday");
        break;
    case 9:
        console.log("sutrady & monady" );
        break;
    case 8:
        console.log("tudsay & wensday");
        break;
    case 7:
        console.log("thursday& friday");
        break;

    default:
      console.log("unkown time");
        break;
}


var hero= {
    name:"hazem",
    age:30,
    genrade:"male"
}

hero.name==="hazem"?console.log("al zamalky"):console.log("ahlawy");
var result2 =hero.name==="hazem"?" al zamalky":"ahlawy";

console.log(` hola ${result2} ${hero.name}`);

    
 hero.age<20
 ?console.log("baby")
 :hero.age>20 && hero.age<40
 ?console.log("youth")
 :console.log("old");   

    
 /**
  * end
  */
