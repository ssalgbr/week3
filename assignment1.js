//#1a

let ages = [ 3, 9, 23, 64, 2, 8, 28, 93];
function whoKnows(a,b){
return ages[ages.length-1] - ages[0];
}
console.log(whoKnows())




//#1c
var total=0;
var average=0;
for (let i=0; i < ages.length; i++){
 total += ages[i];
average = total / ages.length;
}
console.log(average);


//#2 a
let namesArray = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
var nameLengths = [];

var length =0;
for (let i=0; i < namesArray.length; i++){
 length += namesArray[i].length;

 }
console.log(length / namesArray.length);

//#2b
var list="";
for (let i=0; i < namesArray.length; i++){
   list +=namesArray[i] + " ";
   }
console.log(list);



//#3  	How do you access the last element of any array?  You use .length[-1].  
//-1 because arrays are zero based, so minus one will give you the last position in an array using .length.


//#4  To get the first position in an array you would you [0] command to ask for the first item in the array.
//   It would look something like arrayName[0].

//#5  
for (let i=0; i < namesArray.length; i++){
    let temp=0;
    temp = namesArray[i].length;
    nameLengths.push (temp);
     }
     console.log(nameLengths);

//#6
let sum= 0;
for (let i=0; i < namesArray.length; i++){
sum += nameLengths[i];
 }
 console.log(sum);

 //#7
 function nameRepeat(word, n){
    let a="";  
    for (let i=0; i < n; i++){
      a = a + word;
    }
    return a;
  }
  
  console.log(nameRepeat("Hello",7));

  //#8
  function fullName(firstName, lastName){
    {
      return firstName + " " + lastName;
    }
    
  }
  
  console.log(fullName("Benjamin","Ironfist"));
    
  //#9
  let array = [8, 93];

function arrTruth(array){
    var arrTotal =0;
    for (let i=0; i < array.length; i++){
     arrTotal  += array[i];
    }
 if(arrTotal > 100)   {
      return true;
 }
 return false;
}
console.log(arrTruth(array))

//#10
var arr2 = [ 19, 17, 90, 80, 70, 1, 0, 11];
var arr1 = [ 10, 10, 10, 10, 10, 10, 10, 10];

function arrAvg (a){
    var total= 0;
    var avg= 0;
    for( let i=0; i < a.length; i++){
    total += a[i];
    }
    return total / a.length
}
console.log(arrAvg(arr2))

//#11
var arr1 = [ 0, 0, 0, 0, 0, 1, 0, 10];
var arr2 = [ 10, 10, 10, 10, 10, 10, 10, 10];
var arr3 = [ 30, 40, 130, 10, 60, 10, 10, 10];

 

function arrFirstGreater (a, b){
    var total1= 0;
    var total2= 0;
    var avg1  = 0;
    var avg2 = 0;
    
    for(let i=0; i < a.length; i++){
        total1 += a[i];
        avg1 = total1 / a.length;}

    for(let j=0; j < b.length; j++){
        total2 += b[j];
        avg2 = total2 / b.length;
      }
       if(avg1 > avg2){
         return true
       }
       return false
  }
 
console.log(arrFirstGreater(arr3,arr1))

//#12
let isHotOutside = true;
var moneyInPocket= 10.98

function willBuyDrink(isHot,money){
    if(isHot == true && money > 10.50){
      return true
    }
    return false
}
console.log(willBuyDrink(isHotOutside, moneyInPocket))


//#13 Make a function to average an array of student grades, and if the average of the array is equal or greater than 70 return "passing", if lower "failing".

let arr7= [60, 60, 60, 60];
let arr65= [70, 70, 70, 70];

function isPassing(grade){
  
  let total = 0;
  for(let i=0; i < grade.length; i++){
    total += grade[i];
  }
  if(total / grade.length >= 70){
    return "passing";
  }
  return "failing";
}
console.log(isPassing(arr7))




