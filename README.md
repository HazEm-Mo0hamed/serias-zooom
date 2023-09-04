# What we will do at this fill 
# Topic
what a **property** we will use 

* Unarry Operators
* Nulish Operators
* funcation
* if & else if & else
* switch
* ternary operators
1. task 1
2. task 2 
3. task 3
4. task 4
5. task 5
6. task 6
___

# Example
**Unarry Operators**
``` javascript
var text = "10"
 console.log(+"10");
```
**Nulish opertaros**
```javascript
 var candies= {
  choclate:10,
  lollipops:null,
  sourStrips:undefined,
  jellyBeans:8,

 }
 var gummyBears=1


 console.log(candies.lollipops?? gummyBears);


```


**funcation**
```javascript
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


```

**if &else if & else**
```javascript
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

 ```
 **switch**
 ```javascript
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
    break;  
}
 ```

 **ternary operators**
 ```javascript


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

