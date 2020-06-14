//...................

// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”



// var city = prompt("your City  Name ", "Enter YOur city name ")
// var a = "karachi";
// if (city == a){
//     document.write("<h1>WELCOME TO KARACHI</h1>")
// }

// else {
//     document.write("  ")
// }



// var Gender = prompt("your Gender ", "Enter Your Gender ")
// var a = "male";
// var b = "female";
// if (Gender == a){
//     document.write("<h1>WELCOME SIr</h1>")
// }


// else if (Gender == b) {
//     document.write("<h1>Welcomde Ma'am</h1>  ")
// }





// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

// var a =  "<h1> Signal Color       Message </h1>"
// document.write(a)


// var c  =  "green" 
//  var   d =" yellow" 

// var signal =prompt("What is Your Signal Color : ","Enter Your Sinal Color ")
// var b = "red"
// if (signal == b){
//     document.write("<h1>Must Stop</h1>")
// }
//  else if (signal== c){
//     document.write("<h1>Ready to Move </h1>")

// }
// else if (signal==d ){
//     document.write("<h1>Move now</h1>")
// }





// 4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”

// var fuel=+prompt("Remaining Fuel ","litr")
// var a = 0.25

// if ( fuel< 0.25 ){
//     document.write(" Please refill the fuel in your car  ")

// }



// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
// a. var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }


//  var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
//  var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
//  var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
//  if (true){
// alert("True");
// }
// if (false){
//   alert("fales");
// }

//  if("car" < "cat"){
//     alert("car is smaller than cat");
//     }










// // 6. Write a program to take input the marks obtained in three
// // subjects & total marks. Compute & show the resulting
// // percentage on your page. Take percentage & compute
// // grade as per following table:
// // ........................
// // .........................



// var b = +prompt("English","Enter your English num" );
// var a = +prompt("Maths","Ennter Your Physics  ");
// var c = +prompt("physics","Ennter Your Physics Num ");

// var d = b+c+a;
// var e = 100* d/300;
// document.write( "<h1>Mark Sheet</h1>" )
// document.write( "<h1>TOTAL MARKS :300</h1>" )
// document.write( "Marks Obtaine "+" "+d+"<p> </p>" )
// document.write( "Percentage"+" "+e +"%"+"<p> </p>")


// if (e>80 ||e ==80){
//     document.write("<h1>GRADE: A One</h1>" ,"<h1>Remarks :Excellent</h1>")
// }
// else if (e>70 ||e ==70){
//     document.write("<h1>GRADE: A </h1>" ,"<h1>Remarks :Good</h1>")
// }
// else if (e>60 ||e ==60){
//     document.write("<h1>GRADE: B</h1>" ,"<h1>Remarks :you need to improve</h1>")
// }
// else sif (e<60){
//     document.write("<h1>GRADE: Fail</h1>" ,"<h1>Remarks :Sorry :try again</h1>")
// }

// // ........................
// // .........................

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.


// var b =+prompt("Your Num","Enter Your Secret Num")
// var a = 9;
// if (a ==b){
//     document.write("<h1>Bingo Correct</h1>")
// }
// else if (b ==8||b==10 ){
//       document.write (" <h1>Close Enough to Correct ans</h1>")
// }

// // ........................
// // ........................
// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

// var b =+prompt("Your Num","divided by 3")

// if (b%3===0){

// document.write("Your Ans is Divided by 3")
// }

// else {
//     document.write(b)
// }

// 9. Write a program that checks whether the given input is an
// even number or an odd number.


// var b =+prompt("Your Num","Enter Your  Num")

// if (b%2===0){

// document.write("Your Put in Odd num")
// }

// else {
//     document.write(Even num)
// }


// // ........................
// // ........................
// // ........................
// // ........................
// // // ........................
// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”
// // ........................

// var T=+prompt("Your Num","Enter Your  Num")

//  if (T>40){

//  document.write("It is too hot outside.")
//  }

// else  if (T>30){

//  document.write("The Weather today is Normal")
//  }

//  else if (T>20){

// document.write("Today’s Weather is cool")
//  }
//  else if (T>10){

//  document.write("OMG! Today’s weather is so Coo")
//  }



// // ........................
// // ........................

// // // ........................
// // 11. Write a program to create a calculator for +,-,*, / & %
// // using if statements. Take the following input:
// // a. First number
// // b. Second number
// // c. Operation (+, -, *, /, %)
// // Compute & show the calculated result to user

// var f =+prompt("First  Value","Enter Your First Value")


// var s =+prompt("Second  Value","Enter  Your Second Value")


// var o =prompt("Operation  Value","Enter Your Operator")

//  console.log(f+s+o)

// if (o ==='+'){
//     document.write(f+s) 
// }


// else if (o==='-'){
//     document.write(f-s) 
// }

// else if (o ==='*'){
//     document.write(f*s) 
// }

// else if (o==='%'){
//     document.write(f%s) 
// }




// else if (o==='/'){
//     document.write(f/s) 
// }


// // ........................
// // ........................
// // ........................
// // ........................
// // ........................
// // ........................
// // ........................
// // ........................


// var charc=+prompt("Enter Your value")


// if (charc>=65 && charc<=90){
//     document.write("upercase")
// }
// else if (charc>=97 && charc<=-1){
//     document.write("lowercase")
// }
// else if (charc>=48 && charc<=57){
//     document.write("its a numerical value")
// }



// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.


var a =+prompt("Enter  your First value")
var b =+prompt("Enter your Second value")
 if (a >b){
     document.write("First Value Is larger")
 }


 else if (a <b){
    document.write("Second Value Is larger")
}

else if  (a == b){
    document.write(" both are equal")
}





















// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// // browser:
// document.write("<h1> RESULT : </h1>"+" "+ "<p> </ p>");
// var a =10;
// document.write(" The value of a is: "+""+a+ "<p> </ p>");
// document.write(" ................................... "+"" +"<p> </ p>");
// var  b = ++a;
// document.write(" the value of ++a is : "+""+ b +"<p> </ p>");
// document.write("Now the of a is: "+""+ b +"<p> </p><br>");

// var c =a++;
// document.write(" the value of a++ is : "+""+ c +"<p> </ p>");
//     d = a;
// document.write("Now the of a is: "+""+ d +"<p> </p><br>");


// var e = --a ;
// document.write(" the value of --a is : "+""+ e+"<p> </ p>");
// var f = a;
// document.write("Now the of a is: "+""+ f+"<p> </p><br>");

// var g =a--;
// document.write(" The value of a-- is : "+""+ g +"<p> </ p>");

// var h = a;
// document.write("Now the of a is: "+""+ h+"<p> </p><br>");
// //...................
// //...................
//...................

// 2. What will be the output in variables a, b & result after
// execution of the following script:
 
//  var a = 2, b = 1;
//  document.write("the Result is : "+""+a +"<p> </p><br>");
//  document.write("the Result is : "+""+b  +"<p> </p><br>");
//  var result = --a - --b + ++b + b--;

//               //  1   1      2   3
//  document.write("the Result is : "+""+result  +"<p> </p><br>"); 
// // Explain the output at each stage:
// // --a= 1 ;
// --a -=0;
//  --b=1;
// - ++b= 2;
// + b-- =3;


// 3. Write a program that takes input a name from user &
// greet the user.

//  var a = prompt(" Your Name :","Enter Your Name :");
//  alert("Welcome",a);
//...................

//...................

// var num = +prompt("Enter num");


// if (num >1 ){
// var a = 4
// var b =a*num
//    alert("your num is "+""+ b )
// }

//   else if (num==" " ){
//     var z ="<h1>Table of 4  </h1>"
//  document.write(z);
//  var b =4 ;

//  var a = 1;

//  var c = b*a;
//  document.write ("4X1=" ,c +"<p> </p>");

//  var d = 2 ;

//  var    e = b*d;
// document.write ( "4X2=" , e +"<p> </p>") ;

//  var f = 3 ;
//  var g = b*f 

// document.write ( "4X3=" , g +"<p> </p>") ;
//  var  h = 4 ;
 
// var i = b*h;
// document.write ( "4X2=" , i +"<p> </p>") ;

// var  j  = 5;

// var k =b*j;
// document.write ( "4X2=" , k +"<p> </p>") ;
// var l = 6 ;
// var m =b*l 
// document.write ( "4X2=" , m +"<p> </p>") ;
// var n =7

// var o= b*n
// document.write ( "4X2=" , o +"<p> </p>") ;
// var p =8 

// var q =b*p
// document.write ( "4X2=" , q +"<p> </p>") ;
// var r =9 

// var s =b*r
// document.write ( "4X2=" , s +"<p> </p>") ;
// var t =10

// var u = b*t

// document.write ( "4X2=" , u +"<p> </p>") ;
 
//  }
//...................

//...................//...................

//...................//...................

//...................//...................

//...................//...................

//...................//...................

//...................//...................

//...................//...................

//...................

//  3. Write a program that takes input a name from user &
//  greet the user.
//  4.
//  5. Write a program to take input a number from user &
//  display it’s multiplication table on your browser. If user
//  does not enter a new number, multiplication table of 5
//  should be displayed by default.
//  6. Take
//  a) Take three subjects name from user and store them in 3
//  different variables.
//  b) Total marks for each subject is 100, store it in another
//  variable.
//  c) Take obtained marks for first subject from user and
//  stored it in different variable.
//  ALERTS | JAVASCRIPT
//  Page 3 of 3
//  d) Take obtained marks for remaining 2 subjects from user
//  and store them in variables.
//  e) Now calculate total marks and percentage and show the
//  result in browser like this.(Hint: user table)

//...................

//...................


//...................

//...................

// document.write("<h1>Subject  Total Mars Percentage  </h1>")



// var e="english";
//  var m =" maths ";
//  var p ="physics";
// var per =100;

// var o = 64;



// document.write(e+" "+"     "+"    "+" "+"     "+"    "+" "+"     "+"    "+per+"    "+"     " +" "+"     "+"    "+o+"    "+" "+"     "+"    "+o,"%"+"<p> </p>");


// document.write(m+" "+"     "+"    "+" "+"     "+"    "+" "+"     "+"    "+per+"    "+"     " +" "+"     "+"    "+o+"    "+" "+"     "+"    "+o,"%"+"<p> </p>");

// document.write(p+" "+"     "+"    "+" "+"     "+"    "+" "+"     "+"    "+per+"    "+"     " +" "+"     "+"    "+o+"    "+" "+"     "+"    "+o,"%"+"<p> </p>");

// var t =per*3;
// var ot = o*3;
// document.write(t+" "+"     "+"    "+" "+"     "+"    "+" "+"     "+"    "+ot+"    "+"     " +" "+"     "+"    "+""+"    "+" "+"     "+"    "+ot,"%"+"<p> </p>");





























// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.
// //chap5Q1,,,,,,,,,,,,

// // var a ="sum of ";
// // var b = 3;
// // var c = "and";
// // var d = 5;
// // var e ="is";
// // var f = b + d ;
// // document.write(a+" "+b+" "+c+" "+d+" "+e+" "+f);
// //...................
// //chap5Q2,,,,,,,,,,,,


// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.


// var a ="SUB of ";
// var b = 3;
// var c = "and";
// var d = 5;
// var e ="is";
// var f = b - d ;
// document.write(a+" "+b+" "+c+" "+d+" "+e+" "+f);



//...................




// var a ="DIVISION of ";
// var b = 3;
// var c = "and";
// var d = 5;
// var e ="is";
// var f = b/d ;
// document.write(a+" "+b+" "+c+" "+d+" "+e+" "+f);



// //...................

// var a ="MULTIPLICATION  of ";
// var b = 3;
// var c = "and";
// var d = 5;
// var e ="is";
// var f = b*d ;
// document.write(a+" "+b+" "+c+" "+d+" "+e+" "+f);



//...................
// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// //...................

// var a ="Cost of to ";
// var b = 600;
// var c = "Tickets a move ";
// var d = 5;
// var e ="is";

// var f = b*d ;
// var g = "PKR"
// document.write(a+" "+" "+c+" "+d+" "+e+" "+f+g);



//...................
// 5. Write a script to display multiplication table of any
// number in your browser. E.g


// var z ="<h1>Table of 4  </h1>"
//  document.write(z);
//  var b =4 ;

//  var a = 1;

//  var c = b*a;
//  document.write ("4X1=" ,c +"<p> </p>");

//  var d = 2 ;

//  var    e = b*d;
// document.write ( "4X2=" , e +"<p> </p>") ;

//  var f = 3 ;
//  var g = b*f 

// document.write ( "4X3=" , g +"<p> </p>") ;
//  var  h = 4 ;
 
// var i = b*h;
// document.write ( "4X2=" , i +"<p> </p>") ;

// var  j  = 5;

// var k =b*j;
// document.write ( "4X2=" , k +"<p> </p>") ;
// var l = 6 ;
// var m =b*l 
// document.write ( "4X2=" , m +"<p> </p>") ;
// var n =7

// var o= b*n
// document.write ( "4X2=" , o +"<p> </p>") ;
// var p =8 

// var q =b*p
// document.write ( "4X2=" , q +"<p> </p>") ;
// var r =9 

// var s =b*r
// document.write ( "4X2=" , s +"<p> </p>") ;
// var t =10

// var u = b*t

// document.write ( "4X2=" , u +"<p> </p>") ;






//...................
// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
 

// var a ="price of 1 item is";
// var b = 650;
// document.write("price of 1 item is", b +"<p></p>");
// // var c = "Quantity of item 1 is ";
// var d = 3 ;
// document.write("Quantity of item 1 is ",d +"<p></p>");
// // var e ="Price of item 2 is ";
// var f =  7;
// document.write("Price of item 2 is", 7 + "<p></p>");
// // var g = "Shipping chargs is ";
// var h = 100;
// document.write("Shipping chargs is",h + "<p> </p>");
// // var i = "Total price is ";
// var j=b*d*f*h;
// document.write("Total price is",j+"<p></ p>");


//...................
// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

// var a =980;
// document.write("Total Marks  is",+ " "+a+"<p></ p>");
// var b = 804 ;
// document.write(" Marks obtaind  is"+" "+b+"<p></ p>");
// var c = 100; 

// var d = b*c/980;
// document.write("Percentage   is"+" "+d+"<p></ p>");
//...................


// °
// //...................
// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)


// var a =28;

// var b = 25  ;

// var d = a*b;

// document.write("Total currency in PKR is "+" "+d+"<p></ p>");
 //...................
  //...................
   //...................

//    11. The Age Calculator: Forgot how old someone is?
//    Calculate it!
//    a. Store the current year in a variable.
//    b. Store their birth year in a variable.
//    c. Calculate their 2 possible ages based on the stored
//    values.
//    Output them to the screen like so: “They are either NN or NN
//    years old”.
// document.write("<h1>Age Calculator</h1> "+"<p></ p>") 
// var a = 2018;
// document.write("Current Year ", a +"<p></ p>")
// var b = 1992;
// document.write("Birth Year", b +"<p></ p>")
// var c = a-b; 
// document.write("your age is", c +"<p></ p>")

// .....................


// .....................
// document.write("<h1>The GeoMatrizer</h1> "+"<p></ p>") ;
// var a = 20;
 
//  var g =3.142;
//  var c = 2 ; 
//  var d = a*c*g;
// document.write("The Radius is  ", a +"<p> </ p>");
//  document.write("Cicumferrence",d+"<p></ p>");

// .....................


// // .....................
// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// // Output the result to the screen like so: “You will need
// // NNNN to last you until the ripe old age of NN”
// document.write("<h1>life Time supply Calculator</h1> "+"<p></ p>") ;
//  var a = 20;
// document.write("Current Age is "+""+a+"<p></ p>");
//  var g =65;
// document.write("Maximum Age is "+""+g+"<p></ p>");
//   var c = 2 ; 
//   var e = 365
// document.write("Amount Of snack pr day  is "+""+c+"<p></ p>");
// var d =c*e *g;
//  document.write(" Total life time Supply YOu need "+""+ d +"<p> </ p>");



// // .....................


