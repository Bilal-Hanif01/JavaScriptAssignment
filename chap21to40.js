// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// var a= prompt("Enter Your First Name  ");
// var B = prompt("Enter Yoour Last Name")

//  document.write("Welcome "+" "+a +""+B )


// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser
 


// var fm =prompt("Enter Your Favorite Mobile ")
// document.write("Your Favorite Mobile "+" "+ fm+"<br>"+"Length Of String :"+fm.length)

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

// var string= ("pakistani");
// var index =string.indexOf("n");
// document.write("String Pakistan:"+"<br>"+"Index Of n:"+""+index)

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

// var string= ("HELLO WORLD ");
// var index =string.lastIndexOf("L");
// document.write("String HELLO WORLD:"+"<br>"+"LastIndex Of n:"+""+index)




// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.



//  var string= ("pakistani");
//  var index =string.charAt(3);
//  document.write("String Pakistan:"+"<br>"+"Index of 3rd:"+""+index)








// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.
// // 
// var city = ["hyder", "to" , "Islam"] 
// var si= 0;
// var ne= 2;
// city.splice(si,ne,"hyderabd","islamabad")
// console.log(city)


// 8. Write a program to replace all occurrences of “and” in the
// // string with “&” and display the result in your browser.
// // var message = “Ali and Sami are best friends. They play cricket and
// // football together.”;
// var p = "Ali and Sami are best friends. They play cricket and football together"
//  var b=/and/g;
// document.write(p.replace(b,  '&'));

// // 9. Write a program that converts a string “472” to a nu

// var  value="470"
// // var val = 470
// var valu1 =  parseInt(value,10)

// console.log(" Value : "+valu1+"<br>"+"Type of :"+"String+"<br>"+"Value:"+valu1+"<br>")



// 10. Write a program that takes user input. Convert and
// show the input in capital letters

// var convert= prompt("Your Word ","Enter Your value in lower case ")

// convert = convert.toUpperCase(convert)

// document.write(convert)

// 11. Write a program that takes user input. Convert and
// show the input in title case

// var convert= prompt("Your Word ","Enter Your value in lower case ")
// document.write("User Input:"+convert+"<br>")
//  var convert1=convert.slice(0,1);
//  var convert2=convert.slice(1);
//  var convert1=convert1.toUpperCase() 
// var  convert2 = convert2.toLowerCase()
// var convert =convert1+convert2
//  document.write("TiTle Case  :"+convert);


// 12. Write a program that converts the variable num to
// string.
//  let  num = 35.36 ;
//  let num2=num.toString()
// document.write("Number :"+num+"<br>"+"String"+num2)


// 13. Write a pr'ogram to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .


// var keycode=+prompt("Enter")




// if (( keycode <= 57) || (keycode >= 65 && keycode <= 90) || (keycode >= 97 && keycode <= 122)) {

//    document.write(keycode)

// }

// else  {
//     alert("Sorry You can not insert Special Character");
  
// }



// 4. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:



// var a1 =prompt("Enter Your Order")
// // var c1 =a1.slice(0,1);
// // var c2 =a1.slice(1);
// // c1=  c1.toUpperCase()
// // c2=  c2.toLowerCase()
// // a1 =c1+c2 ;
// var A = ["cake", "apple pie", "cookie", "chips", "patties"]

// for (var i=0 ;i<A.length;i++)
// {

// if (a1===A[i]){
//     
//     console.log("value of a",a1)
//     break;
// } else { console.log("your put wrong order ")
// }
//  }




 


// var a=prompt("Enter Password ")

// if (a==" "){
//     alert("Pease do not useSpace")
   
// }
//   else  if (a.length < 6){
//    alert("Please Input atlest 6 character ") 

// }
//    else if (a.length > 10){
//    alert("Please Input atlest 6 character ") 
   
// } 

//   else if 
//   (a.match(/[A-Z]/) && a.match(/[a-z]/) && a.match(/[0-9]/))
//   {
//   document.write("YOur Password is "+a)
// //   }
// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

// var a="University of karachi "
// var b=a.split('',21)
//  for (i=0;i<b.length;i++)
//     document.write(b[i]+"<br>")


// 17. Write a program to display the last character of a user
// input.
// var a =prompt("Enter Your Word ")
// var b=a.slice(-1)
// // document.write("User Input: "+a+"<br>"+"Last Character :"+b)
// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

// var a1 = "The quick brown fox jumps over thelazy dog";
// var c1 =a1.slice(0,-1);
//  c1=c1.toLowerCase()
 

// var count = (a1.match(/the/g)).length;
// console.log(count);


// chapter 26to30
// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var a =3.41256
// document.write("Number is :"+a+"<br>")
// b =Math.round(a)
// document.write("Round of :"+b+"<br>")
// c=Math.floor(a)
// document.write("Floor Of :"+c+"<br>")
// d=Math.ceil(a)
// document.write("Ceil of :"+d+"<br>")



// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var a =-2.674
// document.write("Number is :"+a+"<br>")
// b =Math.round(a)
// document.write("Round of :"+b+"<br>")
// c=Math.floor(a)
// document.write("Floor Of :"+c+"<br>")
// d=Math.ceil(a)
// document.write("Ceil of :"+d+"<br>")



// 3. Write a program that displays the absolute value of a
// number.
// // E.g. absolute value of -4 is 4 & absolute value of 5 is 5
// var a = -4
// var b =Math.abs(a)
// document.write("The Absulote value of :"+a+" "+"is"+"  "+b)


// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:
// var a =Math.random()*6
// var b =Math.round(a)
// document.write("Random num of DIce is :"+b+"<br>")
// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser
// var headuser= prompt("Enter your value " )
// var tailuser=prompt("Enter Your Value ")
// var toss =Math.random()*2
// var floor=Math.floor(toss)
// if (floor===0){
//     document.write(floor+"<br>"+"Head"+" "+headuser+"Win")
// }else {
//     document.write(floor+"<br>"+"Tail"+" "+tailuser+"win")
// }


// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.
// var a=prompt("Emter Your Number")
// var b=Math.random()*10
// var c=Math.round(b)
// if (c===a){
//     alert("Won")
// }
// else{
//     alert("Sorry Try Again")
// }


// chap31to35//////////////////////////////////////
// // 1. Write a program that displays current date and time in
// // your browser.
// var a =new Date()
// document.write(a)
// 2. Write a program that alerts the current month in words.
// For example December.
//  var a=new Date()
//  var  b = a.toString()

//  var c =b.slice(4,7) 
//  document.write("your current Month is "+" "+c)


// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.
//  var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//  var now = new Date();
//   var theDay = now.getDay();
//  var nameOfToday = dayNames[theDay];
//  document.write("today is :"+""+nameOfToday)

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.
//   var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//   var now = new Date();
//    var theDay = now.getDay();
//    if(theDay==0 || theDay==6 ){
//        document.write("Today is funday")
//    }
//    else{
//        document.write("Mind your own Buiesness")
//    }

// // 5. Write a program that shows the message “First fifteen
// // days of the month” if the date is less than 16th of the month
// // // else shows “Last days of the month”.
// // var now = new Date();
// // var theDay = now.getDate();
// // if(theDay<16 ){
// //            document.write("First fifteen days ")
// //         }
// //         else{
// //             document.write("Last days of the month")
// //     }

// // 6. Write a program that determines the minutes since
// // midnight, Jan. 1, 1970 and assigns it to a variable that
// // hasn't been declared beforehand. Use any variable you like
// // // to represent the Date object.
// // var now = new Date();
// // document.write("Current Date"+" "+now+"<br>")
// // var since =now.getTime()
// // document.write("ELAPSED milisecond since 1 jan 1970:"+""+since+"<br>")
// // var currentminutes = now.getTime()/1000/59/59

// // document.write("ELAPSED Minutes since 1 jan 1970:"+""+currentminutes+"<br>")

// // 7. Write a program that tests whether it's before noon and
// // alert “Its AM” else “its PM”.
// // var d = new Date();
// // var c=  d.setHours( );
// // if(c <=12 ){
// //     document.write("its am")

// // }

// // else{

// // document.write("Its pm")}


// // 8. Write a program that creates a Date object for the last day
// // of the last month of 2020 and assigns it to variable named
// // laterDate.

// // var a =new Date("Dec,31,2020")
// // document.write("Later Date "+""+a)

// // 9. Create a date object of the starting date of this Ramadan
// // and alert the number of days past since 1st Ramadan?
// // // Note: 1st Ramadan was on June 18, 2015
// //  var Ramdan =new Date("jan,18,2015")
// //  var RamdanS=Ramdan.getTime();
// //  var now =new Date()
// //  var now1=now.getTime()
// //  var total=now1 - RamdanS
// //  var totalday=total/(1000*60*60*24)


// //  var totalday1=Math.round(totalday)
// //  console.log(totalday1+" "+"days has Passed Since Ramdan ,2015")



// // 10. Write a program that displays in your browser the
// // seconds that elapsed between the reference date and the
// // beginning of 2015.



// var elapsed =new Date("jan,01,2015")
// var elapsedS=elapsed.getTime();
// var now =new Date()
// console.log(now)
// var now1=now.getTime()
// var total=now1 - elapsedS
// var totalday=total/(1000*60)


//  var totalday1=Math.round(totalday)
// console.log(totalday1+" "+"second has Passed Since  ,2015")



// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.
// var Current =new Date()
// document.write("Current Date :"+" "+Current+"<br>")
// var future=new Date("jan 27, 2020 6:25:00")
// document.write("1 hours ago :"+" "+future)


// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

// var Current =new Date()
// alert("Current Date :"+" "+Current+)
// var future=new Date("jan 27, 1920 6:25:00")
// alert("100 year ago :"+" "+future)

// // 14. Write a program to generate your K-Electric bill in your
// // browser. All the amounts should be rounded off to 2
// // decimal places. Display the following fields:

// document.write("<h1>K-ELECTRIC BILL</h1>")
// var name ="Abc Costume "
// document.write("Costumer Name"+""+name+"<br>")
// var month ="February "
// document.write("Month:"+" "+month+"<br>")
// var numberofunit =416
// document.write("Number Of Unit"+" "+numberofunit+"<br>")
// var chargesperunit =25
// document.write("Charges Per unit"+chargesperunit+"<br>")
// var netamount =numberofunit*chargesperunit
// document.write("Net Amount Payable due date:"+" "+netamount+"<br>")
// var letcharges=350
// document.write("Let Charges"+" "+letcharges+"<br>")
// var gross=numberofunit*chargesperunit+letcharges
// document.write("Gross Amount After Due Date "+" "+gross+"<br>")


// chap35to40/////////////////////
// . Write a function that displays current date & time in your
// browser.

//  function tellTime() {
//      var now = new Date();
    
//      document.write("Current time: "+  ":" + now);
//      }
// //      tellTime();


// 2. Write a function that takes first & last name and then it
// greets the user using his full name.

// 2. Write a function that takes first & last name and then it
// greets the user using his full name
// function name(){
//     var fnam="Bilal"
//     var lnam="Hanif"
//     alert("My Name Is  :      "+ " "+fnam+""+lnam)
// }
// name();

// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.
// function addnum( ){
//     var a =+prompt("Enter num 1 ");
//     var b =+prompt("Enter num 2");
//     var c =a+b;
//     return c;

// }
// var d =addnum();
// alert(d)


// 4. Calculator:
// Write a function that takes three arguments num1, num2
// // & operator & compute the desired operation. Return and
// // show the desired result in your browser.

// function calc(num1,opr,num2){


//   if (opr==="-"){
//       return num1 - num2;
//   }
//  else if (opr==="+"){
//     return num1 + num2;
// }
// else if (opr==="*"){
//     return num1 * num2;
//  }

// else {
//   return "Incorrect";
  
// }

// }
// var result=calc(4,"-",5)
// var result1=calc(7,"+",8)
// var result2=calc(2,"*",9)

// document.write(result+"<br>")
// document.write(result1+"<br>")
//  document.write(result2+"<br>")

// 5. Write a function that squares its argument.
// function bial(a,b){

// var c = a*b
//  return c;
// }
// var c =(5*2)
// // console.log(c)

// 7. Write a function that take start and end number as inputs
// & display counting in your browser.

// function number( ){
//     for (i =0;i<=10;i++)
//     document.write(i+"<br>")

// }
// number()


// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// // Hypotenuse2 = Base2 + Perpendicular2
// function triangle(){
//     var base =+prompt("enter your base value")
//     var per =+prompt("Enter Your hypothenius valus")
// function hypo(){
//     var hypeoth= base*2+per*2
//     return hypeoth
// }
//  var hypothenius=hypo( )
//  document.write("Your Hypothenius is"+hypothenius)
// }
// triangle()



// 9. Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables
// function rectangle(width,height){
//   var a =width*height;
//   return a;
// }
// var b=rectangle(5,6)
// document.write("Rectangle Area is :"+b)

// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'
// function upr(){
//     var a ="the quick brown fox"
//     var b =a.slice(0,1)
//     var c =a.slice(1)
//    b= b.toUpperCase()
//    c=c.toLowerCase()
//    a =b+c
//    document.write(a)

// }
// upr()



// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'


function circum(){
    var pie =3.142
    var r  =2 
    var area=pie*r*2
    var circumference =2*pie*r;
    document.write("Your area is :"+area+"<br>"+"Your Circumference is Equal :"+"<br>"+circumference)

}
circum()