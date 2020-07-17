// #######################################################
// #---- Name : Ahtisham Ansari -- Roll No : WM1808 ---- #
// #######################################################
// #--------------- Assignment No : 6 -------------------#
// #######################################################

//Chapters 1 to 67


// #############
// # chapter 1 #
// #############

//Tasks

(1)
alert("Welcome to our website");

//(2)
alert("Error! Please enter a valid password");

//(3)
alert("welcome to JS land...\nHappy Coding");

//(4)
confirm("Happy Coding!");

//(5)
console.log("Hello... I can run JS through my web brower's console");


// #############
// # chapter 2 #
// #############

//Tasks

(1)
var userName;
//(2)
var myName = "ahtisham ansari";
//(3)
var msg = "Hello World";
alert(msg);
//(4)
userName = "Jhone Doe";
var age = 15;
var course = "Certified Mobile Application Developoment";
alert(userName);
alert(age+"years old");
alert(course);
//(5)
var p = "P";
var i = "I";
var z = "Z";
var z = "Z";
var a = "A";
alert(p+i+z+z+a+"\n"+p+i+z+z+"\n"+p+i+z+"\n"+p+i+"\n"+p);
//(6)
var email = "example@example";
alert("My email address is "+email);
//(7);
var bookName = "A smarter way to learn javascript";
alert("I am trying to learn from the Book "+bookName);
//(8)
document.write("Yah! I can write HTML content through javascript");
//(9)
var line = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(line);


// #############
// # chapter 3 #
// #############

//Tasks

//(1)
var age = 15;
alert("You are "+age+" years old");
//(2)
var visitNo = 14;
alert("You have visited this site "+visitNo+" times");
//(3)
var birthYear = 1996;
document.write("My birth year is "+birthYear+"<br>");
//(4)
var visitorName = "John Doe";
var productTitle = "T-shirt";
var quantity = 5;
document.write(visitorName+" ordered "+quantity+" "+productTitle+"(s) on XYZ Clothing store");


// #############
// # chapter 4 #
//#############

Tasks

//(1)
var variable1,variable2,variable3;
//(2)
var variable1, variable_2, _variable3, variableNo4, $variable5;
// var 1variable, variable 2, alert, Variable4, 1234;
//(3)
document.write("<h2>Rules for naming js variable</h2><br>");
document.write("Variable names can only contain, number, $ and _ For example $my_1stVariable"+"<br>");
document.write("Variables must begin with a later, $, and _  For example $name, _name or name"+"<br>")
document.write("Variable names are case sensitive"+"<br>");
document.write("Variable names should not be JS keyword");


// #############
// # chapter 5 #
// #############

//Tasks

//(1)
var no1 = 3;
var no2 = 5;
var sum = no1+no2;
document.write("Sum of "+no1+" and "+no2+" is "+sum+"<br>");
//(2)
var sub = no1-no2;
var multi = no1*no2;
var div = no1/no2;
var modulus = no1%no2;
document.write(no1+" - "+no2+" = "+sub+"<br>");
document.write(no1+" x "+no2+" = "+multi+"<br>");
document.write(no1+" / "+no2+" = "+div+"<br>");
document.write(no1+" % "+no2+" = "+modulus+"<br>");
//(3)
var no;
document.write("Value after variable declaration is "+no+"<br>");
no = 5;
document.write("Initial value "+no+"<br>");
document.write("Value after increment is "+(++no)+"<br>");
no = 13;
document.write("Value after additional value is "+no+"<br>");
document.write("Value after decrement is "+(--no)+"<br>");
document.write("Value remainder is "+(no%3)+"<br>");
//(4)
var ticketPrice = 600;
var ticketQuantity = 5;
var totalPrice = ticketPrice*ticketQuantity;
document.write("Total cost to buy "+ticketQuantity+" tickets to a movie is "+totalPrice+"PKR"+"<br>")
//(5)
var tableNo = 4;
for(var i=1; i<=10; i++){
    document.write(tableNo+" x "+i+" = "+tableNo*i+"<br>");
}
//(6)
var cTemp = 25;
var cToFahr = cTemp * 9 / 5 + 32;
var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
document.write(message+"<br>");

var fTemp = 70;
var fToCel = (fTemp - 32) * 5 / 9;
var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
document.write(message+"<br>");

//(7)
var item1 = 650;
var item2 = 100;
var quantityItem1 = 3;
var quantityItem2 = 7;
var shipping = 100;
var totalCost = (item1*quantityItem1)+(item2*quantityItem2)+shipping;
document.write("Total cost of your order is "+totalCost);
//(8)
var tMarks = 980;
var obtMarks = 804;
var per = obtMarks/tMarks*100
document.write("Total marks: "+tMarks+"<br>");
document.write("Marks Obtained: "+obtMarks+"<br>");
document.write("Percentage: "+per+"<br>");
//(9)
var dollar = 104.80;
var riyal = 28;
var cTotal = (dollar*10)+(riyal*25);
document.write("Total Currency in PKR: "+cTotal+"<br>");
//(10)
var task10 = (5*10)/25;
document.write(task10+"<br>");
//(11)
var cYear = 2016;
var bYear = 1992;
var tAge = cYear-bYear;
document.write("Your age is "+tAge+"<br>");
//(12)
var radius = 20;
var circumference = Math.PI * 2*radius;
var area = Math.PI * radius*radius;
document.write("Radius of a circle "+radius+"<br>");
document.write("The circumference is " + circumference.toFixed(2)+"<br>");
document.write("The area is " + area.toFixed(2)+"<br>");
//(13)
var snack = "chocolate chip"
var currentAge = 15;
var mAge = 65;
var perDay = 3;
var eatTotal = (65-15)*3;
document.write("Favoutite Snack: "+snack+"<br>");
document.write("Current age: "+currentAge+"<br>");
document.write("Estimated maximum age: "+mAge+"<br>");
document.write("Amount of snecks per day: "+eatTotal+"<br>");
document.write("You will need "+eatTotal+" "+snack+" to last you until the ripe old age of "+mAge+"<br>");


// ###############
// # chapter 6-9 #
// ###############

//Tasks

//(1)
var re = 10;
document.write("Result:"+"<br>"+"The value of result "+re+"<br>");
document.write("<br>"+"The value of ++a is: "+(++re)+"<br>");
document.write("Now the value of a is: "+re+"<br>");
document.write("<br>"+"The value of a++ is: "+(re++)+"<br>");
document.write("Now the value of a is: "+re+"<br>");
document.write("<br>"+"The value of --a is: "+(--re)+"<br>");
document.write("Now the value of a is: "+re+"<br>");
document.write("<br>"+"The value of a-- is: "+(re--)+"<br>");
document.write("Now the value of a is: "+re+"<br>");
//(2)
var a = 2, b = 1, result2;
document.write("<br>"+"The value of a is: "+(a)+"<br>");
document.write("The value of b is: "+(b)+"<br>");
document.write("<br>"+"Now the value of --a is: "+(--a)+"<br>");
document.write("Now the value of a is: "+a+"<br>");
result2 = --a - --b;
document.write("<br>"+"The value of result --a - --b  is: "+result2+"<br>");
document.write("Now the value of result is: "+result2+"<br>");
result2 = --a - --b + ++b;
document.write("<br>"+"The value of result --a - --b + ++b  is: "+result2+"<br>");
document.write("Now the value of result is: "+result2+"<br>");
result2 = --a - --b + ++b + b--;
document.write("<br>"+"The value of result --a - --b + ++b + b--  is: "+result2+"<br>");
document.write("Now the value of result is: "+result2+"<br>");
//(3)
var name = prompt("Enter your name");
document.write("Hell0 "+name+"<br>");
//(4)
var table = +prompt("Enter table no","4");
for(var i=1; i<=10; i++){
        document.write(table+" x "+i+" = "+table*i+"<br>");
    }
//(5)
var sub1 = prompt("Enter your fisrt subject name");
var sub2 = prompt("Enter your second subject name");
var sub3 = prompt("Enter your third subject name");
var obMarks1 = +prompt(sub1+" obtained marks");
var obMarks2 = +prompt(sub2+" obtained marks");
var obMarks3 = +prompt(sub3+" obtained marks");
var maxMark = 100;
var subPer1 = obMarks1/maxMark*100;
var subPer2 = obMarks2/maxMark*100;
var subPer3 = obMarks3/maxMark*100;
var maxMark2 = 300;
var totalMarks = obMarks1 + obMarks2 + obMarks3;
var totalPer = totalMarks/maxMark2*100;
document.write("<br>"+"Subject TotalMarks ObtainedMarks Percentage"+"<br>");
document.write(sub1+" ==== "+maxMark+" ==== "+obMarks1+" ====== "+subPer1+"<br>");
document.write(sub2+" ==== "+maxMark+" ==== "+obMarks2+" ====== "+subPer2+"<br>");
document.write(sub3+" ==== "+maxMark+" ==== "+obMarks3+" ====== "+subPer3+"<br>");
document.write(" ==== "+" ==== "+maxMark2+" ==== "+totalMarks+" ====== "+totalPer+"<br>");


// ################
// # chapter 9-11 #
// ################

//Tasks

//(1)
var city = prompt("Enter city name", "karachi");
if(city==="karachi"){
    alert("Welcome to city of light");
}
//(2)
var gender = prompt("Enter your gender", "male");
if(gender==="male"){
    alert("Good Morning Sir");
}
else if(gender==="female"){
    alert("Good Morning Ma’am");
}
else {
    alert("Please enter your gender");
}
//(3)
var signalColor = prompt("Enter one color name of traffic signal", "green");
if(signalColor==="green"){
    alert("Move now");
}
else if(signalColor==="Yellow"){
    alert("Ready to move");
}
else if(signalColor==="red"){
    alert("Must Stop");
}
else {
    alert("Please enter right traffic signal color name");
}
//(4)
var fuel = parseFloat(prompt("Enter remaining fuel"));
if(fuel <= 0.25 ){
    alert("Please refill the fuel in your car");
}
else{
    alert("No need to refill fuel");
}
//(5)
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){
alert("True");
}
if (false){
alert("False");
}
if("car" < "cat"){
alert("car is smaller than cat");
}
(6)
var eng = +prompt("Enter your obtained marks of english");
var urdu = +prompt("Enter your obtained marks of urdu");
var math = +prompt("Enter your obtained marks of math");
var totalObtMarks = eng + urdu + math;
var maxMarks = 300;
var perGrade = totalObtMarks/maxMarks*100;
document.write("Total Marks: "+maxMarks+"<br>");
document.write("Obtaind Marks: "+totalObtMarks+"<br>");
document.write("Percentage: "+perGrade.toFixed(1)+"<br>");
if(perGrade>80 && perGrade<=100){
   document.write("Grade : A1 <br>");
   document.write("Remarks : Excellent <br>");
}
else if(perGrade>=70 && perGrade<80){
    document.write("Grade : A <br>");
    document.write("Remarks : Good <br>");
 }
else if(perGrade>=60 && perGrade<70){
    document.write("Grade : B <br>");
    document.write("Remarks : You need to improve <br>");
 }
else{
    document.write("Grade : F <br>");
    document.write("Remarks : Sorry <br>");
}
(7)
var guess = +prompt("Guess the secret number");
if(guess===4){
    alert("Bingo! Correct answer");
}
else if(guess===3){
    alert("Close enough to the correct answer");
}
else if(guess===5){
    alert("Close enough to the correct answer");
}
else{
    alert("Sorry try again ");
}
//(8)
var userNo = +prompt("Enter your number");
if(userNo%3==0){
    alert("Your number is divisible by 3");
}
else{
    alert("Number is not divisible by 3");
}
//(9)
var userNo2 = +prompt("Enter your number");
if(userNo2%2==0)
{
alert("Your number is even");
}
else
{
alert("Your number is odd");
}
//(10)
var tempNo = +prompt("Enter temperature");
if(tempNo>40){
  alert("It is too hot outside");
}
else if(tempNo>30){
    alert("The Weather today is Normal");
  }
else if(tempNo>20){
    alert("Today’s Weather is cool");
  }
else if(tempNo>10){
    alert("OMG! Today’s weather is so Cool");
  }
//(11)
var no1 = +prompt("Enter first number");
var no2 = +prompt("Enter second number");
var opt = prompt("Enter operator");
if(opt=="+"){
  var result = no1 + no2;
  alert("Addition is "+result);
}
else if(opt=="-"){
  var result = no1 - no2;
  alert("Subtraction is "+result);
}
else if(opt=="*"){
  var result = no1 * no2;
  alert("Multiplication is "+result);
}
else if(opt=="/"){
  var result = no1 / no2;
  alert("Division is "+result);
}
else if(opt=="%"){
  var result = no1 % no2;
  alert("Mudolus is "+result);
}


// #################
// # chapter 12-13 #
// #################

//Tasks

//(1)
var userInput = prompt("Enter a character");
if(userInput.charCodeAt() >= 65 && userInput.charCodeAt() <= 90){
    alert("Upper case letter");
}
else if(userInput.charCodeAt() >= 97 && userInput.charCodeAt() <= 122){
    alert("Lower case letter");
}
else{
    alert("Please enter character")
}
//(2)
var user1 = +prompt("Enter first number");
var user2 = +prompt("Enter Second number");
if(user1>user2){
    alert("Your first number is greater than is sencond number")
}
else if(user1<user2){
    alert("Your second number is greater than is first number")
}
else if(user1==user2){
    alert("Your first number is equal than is sencond number")
}
//(3)
var no = +prompt("Enter first number");
if(no>0){
    alert("You number is positive");
}
else if(no<0){
    alert("You number is negative");
}
else if(no==0){
    alert("You number is zero");
}
//(4)
var vowel1 = prompt("Enter a character");
if(vowel1==="a" || vowel1==="A"){
    alert("It is a vowel")
}
else if(vowel1==="e" || vowel1==="E"){
    alert("It is a vowel")
}
else if(vowel1==="i" || vowel1==="I"){
    alert("It is a vowel")
}
else if(vowel1==="o" || vowel1==="O"){
    alert("It is a vowel")
}
else if(vowel1==="u" || vowel1==="U"){
    alert("It is a vowel")
}
else{
    alert("It is a consonant")
}
//(5)
var pwd = 123456;
var inputPwd = +prompt("Enter password");
if(inputPwd===pwd){
    alert("Correct!");
}
else if(inputPwd==" "){
    alert("Please enter your password");
}
else{
    alert("Wrong password");
}
(6)
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else{
greeting = "Good evening";
}
//(7)
var time = +prompt("Enter number in 24 hours clock format like: 1900");
if(time>=000 && time<100){
    alert("12AM");
}
else if(time>=100 && time<200){
    alert("1AM");
}
else if(time>=200 && time<300){
    alert("2AM");
}
else if(time>=300 && time<400){
    alert("3AM");
}
else if(time>=400 && time<500){
    alert("4AM");
}
else if(time>=500 && time<600){
    alert("5AM");
}
else if(time>=600 && time<700){
    alert("6AM");
}
else if(time>=700 && time<800){
    alert("7AM");
}
else if(time>=800 && time<900){
    alert("8AM");
}
else if(time>=900 && time<1000){
    alert("9AM");
}
else if(time>=1000 && time<1100){
    alert("10AM");
}
else if(time>=1100 && time<1200){
    alert("11AM");
}
else if(time>=1200 && time<1300){
    alert("12PM");
}
else if(time>=1300 && time<1400){
    alert("1PM");
}
else if(time>=1400 && time<1500){
    alert("2PM");
}
else if(time>=1500 && time<1600){
    alert("3PM");
}
else if(time>=1600 && time<1700){
    alert("4PM");
}
else if(time>=1700 && time<1800){
    alert("5PM");
}
else if(time>=1800 && time<1900){
    alert("6PM");
}
else if(time>=1900 && time<2000){
    alert("7PM");
}
else if(time>=2000 && time<2100){
    alert("8PM");
}
else if(time>=2100 && time<2200){
    alert("9PM");
}
else if(time>=2200 && time<2300){
    alert("10PM");
}
else if(time>=2300 && time<2400){
    alert("11PM");
}


// #################
// # chapter 14-16 #
// #################

//Tasks

//(1)
var arr = [];
//(2)
var arrStr = ['string'];
//(3)
var arrNum = [123456];
//(4)
var arrBoolean = [0.2];
//(5)
var arrMix = ['string', 123456, 0.2];
//(6)
var arrEdu = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M.Phill.', 'PhD'];
document.write("Qualifications:"+"<br><br>")
for(var i=0; i<arrEdu.length; i++){
    document.write((i+1)+") "+arrEdu[i]+"<br>");
}
//(7)
arr[0] = "Hamza";
arr[1] = "Huzaifa";
arr[2] = "Bilal";
var arrMarks = [350, 400, 440];
for(var i=0; i<arr.length; i++){
    for(var a=0; a<arrMarks.length; a++){
        if(a==i){
            var stdResult = arrMarks[a]/500*100;
            document.write("Score of "+arr[i]+" is "+arrMarks[a]+". Percentage: "+stdResult+"%<br>");
            
        }
    }
}
//(8)
var color = [];
var inputColor = prompt("Enter color name that you want to add");
document.write("color: <br><br>");
color.unshift(inputColor);
document.write(color+"<br>");
var inputColor2 = prompt("Enter color 2 name that you want to add to the end");
color.push(inputColor2);
document.write(color+"<br>");
var inputColor3 = prompt("Enter color 3 name that you want to add to the begining");
var inputColor4 = prompt("Enter color 4 name that you want to add to the begining");
color.splice(0,0,inputColor3,inputColor4);
document.write(color+"<br>");
document.write("First color name deleted"+"<br>");
color.shift();
document.write(color+"<br>");
document.write("Last color name deleted"+"<br>");
color.pop;
document.write(color+"<br>");
var inputColor5 = prompt("Enter color 5 name that you want to add to the begining");
var inputColor6 = +prompt("Enter color position which index you want to add ");
color.splice(inputColor6-1,0,inputColor5);
document.write(color+"<br>");
var inputColor7 = +prompt("Enter color position which index you want to delete ");
color.splice(inputColor7-1,1);
document.write(color+"<br>");
(9)
var stdScores = [320, 330, 480, 120];
document.write("Scores of Students: "+stdScores+"<br>");
document.write("Ordered Scores of Students: "+stdScores.sort()+"<br>");
//(10)
var cityName = ['karachi', 'Lahore', 'islamabad', 'Quetta', 'peshawar'];
document.write("Cities List:"+"<br>");
document.write(cityName+"<br>");
var slectedCities = cityName.slice(2,4);
document.write("Selected Cities: "+slectedCities+"<br>");
//(11)
var arr2 = ['This', 'is', 'my', 'cat'];
document.write("Array: "+"<br>"+arr2+"<br>");
document.write("String: "+"<br>"+arr2.join(" ")+"<br>");
//(12)
var devices = ['keyboard', 'mouse', 'printer', 'monitor'];
document.write("Devices: "+"<br>"+devices+"<br>");
var device = [];
device.unshift('keyboard');
document.write("Out: "+"<br>"+device+"<br>");
device.shift();
device.unshift('mouse');
document.write("Out: "+"<br>"+device+"<br>");
device.shift();
device.unshift('printer');
document.write("Out: "+"<br>"+device+"<br>");
device.shift();
device.unshift('monitor');
document.write("Out: "+"<br>"+device+"<br>");
device.shift();
//(13);
var devices = ['keyboard', 'mouse', 'printer', 'monitor'];
document.write("Devices: "+"<br>"+devices+"<br>");
var device = [];
device.push('monitor');
document.write("Out: "+"<br>"+device+"<br>");
device.pop();
device.push('printer');
document.write("Out: "+"<br>"+device+"<br>");
device.pop();
device.push('mouse');
document.write("Out: "+"<br>"+device+"<br>");
device.pop();
device.push('keyboard');
document.write("Out: "+"<br>"+device+"<br>");
device.pop();
//(14)
var mobile = ['nokia', 'samsung', 'Motorola', 'Sony']
document.write("<select>");
for(var i=0; i<mobile.length; i++){
    document.write("<option>"+mobile[i]+"</option>");
}
document.write("<select>");

// #################
// # chapter 17-20 #
// #################

//Tasks

(1)
var mArr = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];
//(2)
for(var i=0; i<mArr.length; i++){
    for(var a=0; a<mArr[i].length; a++){
    document.write(mArr[i][a]);
    }
    document.write("<br>");
}
//(3)
for(var i=1; i<=10; i++){
    document.write(i+"<br>");
}
(4)
var tableN = +prompt("Enter a number to show its multiplication table");
for(var i=1; i<=15; i++){
    document.write(tableN+" x "+i+" = "+tableN*i+"<br>");
}
//(5)
var fruit = ['apple', 'banana', 'mango', 'orange', 'strawberry'];
for(var i=0; i<fruit.length; i++){
    document.write(fruit[i]+"<br>");
}
for(var i=0; i<fruit.length; i++){
    document.write("Element at index "+i+" is "+fruit[i]+"<br>");
}
//(6)
document.write("Counting: <br>");
for(var i=1; i<=10; i++){
        document.write(i+" ");
    }
document.write("<br>Reverse counting:<br>");
for(var i=10; 1<=i; i--){
        document.write(i+" ");
    }
document.write("<br>Even: <br>");
for(var i=0; i<=20; i+=2){
        document.write(i+" ");
    }
document.write("<br>Odd: <br>");
for(var i=1; i<=20; i+=2){
        document.write(i+" ");
    }
document.write("<br>Series: <br>");
for(var i=20; i<=100; i+=10){
        document.write(i+"k ");
    }
//(7)
var search = prompt("Welcome to ABC bakery. what do you want to order sir/ma'am?")
var bakery = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
var check = true;
for(var i=0; i<=bakery.length; i++){
    if(bakery[i]===search){
        document.write("<br>"+search+" is available at index "+i+" in our bakery <br>");
        check= false;
    }
}
if(check){
    document.write("<br>"+"We are sorry "+search+" is not available in our bakery <br>");
}
//(8)
var a =  [24, 53, 78, 91, 12];
var largestNo = a[0];
for(var i=0; i<=a.length; i++){
    if(a[i]>largestNo){
        largestNo = a[i];
    }
}
document.write("Array Items: "+a+"<br>");
document.write("The largest number is "+largestNo+"<br>");
//(9)
var b =  [24, 53, 78, 91, 12];
var lowestNo = b[0];
for(var i=0; i<=b.length; i++){
    if(b[i]<lowestNo){
        lowestNo = b[i];
    }
}
document.write("Array Items: "+b+"<br>");
document.write("The lowest number is "+lowestNo+"<br>");
(10)
for(var i=1; i<=20; i++){
    document.write(5*i+" ");
}


// //#################
// //# chapter 21-25 #
// //#################

// //Tasks

//(1)
var userF = prompt("Enter your first name");
var userL = prompt("Enter your last name");
alert("Hi, "+userF+" "+userL);
//(2)
var mobModel = prompt("Enter your favorite mobile phone model")
var mobLenght = mobModel.length;
document.write("My favorite monbile is : "+mobModel+"<br>"+"Lenght of string: "+mobLenght+"<br>")
//(3)
var a = "Pakistani";
var checkIndex = a.indexOf('n');
document.write("String : "+a+"<br>"+"Index of 'n' : "+checkIndex+"<br>")
//(4)
var helloWorld = "Hello World";
var checkLastIndex = helloWorld.lastIndexOf('l');
document.write("String : "+helloWorld+"<br>"+"Last index of 'l' : "+checkLastIndex+"<br>")
//(5)
var b = "Pakistan";
for(var i=0; i<=b.length; i++){
    if(b.slice(i,i+1)==="i"){
        document.write("String : "+b+"<br>"+"Character at index 'i' : "+i+"<br>")
        break;
    }
}
//(6)
var userF = prompt("Enter your first name");
var userL = prompt("Enter your last name");
var useConcat = userF.concat(userL);
document.write("Hi, "+useConcat+"<br>");
//(7)
var cityName = "Hyderabad";
document.write("City : "+cityName+"<br>");
for(var i=0; i<=cityName.length; i++){
    if(cityName.slice(i,i+5)==="Hyder"){
        cityName = "Islam"+cityName.slice(i+4);
        document.write("After replacement : "+cityName+"<br>");
        break;
    }
}
//(8);
var msg ="Ali and Sami are best friends. They play cricket and football together";
document.write("Message : "+msg+"<br>");
msg = msg.replace(/and/g, '&');
document.write("After replacement : "+msg+"<br>");
//(9)
var strNo = "472";
document.write("Value : "+strNo+"<br>"+"Type : "+typeof(strNo)+"<br>");
var intNo = parseInt(strNo);
document.write("Value : "+intNo+"<br>"+"Type : "+typeof(intNo)+"<br>");
//(10)
var str1 = prompt("Enter text");
document.write("User input : "+str1+"<br>"+"Upper case : "+str1.toUpperCase()+"<br>");
//(11)
var str2 = prompt("Enter course name");
var upperStr = str2.slice(0,1).toUpperCase();
var lowerStr = str2.slice(1,str2.length).toLowerCase();
document.write("User input : "+str2+"<br>");
document.write("Title case : "+upperStr+lowerStr+"<br>");
//(12)
var num = 35.36;
var num2 = num.toString();
document.write(num2.replace('.', '')+"<br>");
//(13)
var userNa = prompt("Enter your name")
for (var i=0; i<userNa.length; i++) {
     if (userNa.charCodeAt(i)==33 || userNa.charCodeAt(i)==44 || userNa.charCodeAt(i)==46 || userNa.charCodeAt(i)==64){
        alert("Please enter a valid username");
        break;
     }
}    
//(14)
var bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt("Welcome to ABC bakery. wHAT do you want to order sir/ma'am?").toLowerCase();
var check = true;
for(var i=0; i<=bakery.length; i++){
        if(bakery[i]===search){
            document.write(search+" is available at index "+i+" in our bakery <br>");
            check = false;
        }
}
if(check){
    document.write("We are sorry. "+search+" is not available in our bakery <br>");
}
//(15)
var userPwd = prompt("Enter your password");
var valid1 =  /^[A-Za-z](?=.*\d)\w{6,16}$/;
var valid2 = /^[0-9A-Za-z]\w{6,16}$/;
document.write("Entered password : "+userPwd+"<br>");
if(userPwd.match(valid1)) 
{ 
document.write("Correct! <br>");
}
else if(userPwd.match(valid2)){
   document.write("Password can not begin a number <br>");
}
else{
    document.write("Please enter a valid password");
}
// (16)
var str3 = "University of Karachi";
var splitStr = str3.split("");
for(var i=0; i<splitStr.length; i++){
        document.write(splitStr[i]+" <br>");
}
// (17)
var cityNa = prompt("Enter your city name");
var cityIndex = cityNa.length;
document.write("User input : "+cityNa+"<br>");
document.write("Last character of input : "+cityNa.charAt(cityIndex-1)+"<br>");
//(18)
var text1 = "The quick brown fox jumps over the lazy dog";
var string = text1.toLowerCase();
var count = string.split('the').length-1;
document.write("Text : "+text1+"<br>");
document.write("There are "+count+" occurrences(s) of word 'the'<br>");


// //#################
// //# chapter 26-30 #
// //#################

// // Tasks

//(1)
var no1 = +prompt("Enter a positive number","3.45214");
var round = Math.round(no1);
var floor = Math.floor(no1);
var ceil = Math.ceil(no1);
document.write("Number : "+no1+"<br>");
document.write("Round of value : "+round+"<br>");
document.write("Floor of value : "+floor+"<br>");
document.write("Ceil of value : "+ceil+"<br>s");
//(2)
var no1 = parseFloat(prompt("Enter a negative floating number","-2.673"));
var round = Math.round(no1);
var floor = Math.floor(no1);
var ceil = Math.ceil(no1);
document.write("Number : "+no1+"<br>");
document.write("Round of value : "+round+"<br>");
document.write("Floor of value : "+floor+"<br>");
document.write("Ceil of value : "+ceil+"<br>s");
//(3)
var no2 = -4;
var no3 = -5;
document.write("The absolute value of "+no2+" is "+Math.abs(no2)+"<br>");
document.write("The absolute value of "+no3+" is "+Math.abs(no3)+"<br>");
//(4)
var random = Math.ceil(Math.random()*6);
document.write("Random dice value is "+random+"<br>");
//(5)
var random2 = Math.ceil(Math.random()*2);
if(random2==2){
    document.write(random2+"<br>")
    document.write("Random coin value is : Heads"+"<br>");
}
else{
    document.write(random2+"<br>")
    document.write("Random coin value is : Tails"+"<br>");
}
//(6)
var random = Math.ceil(Math.random()*100);
document.write("Random number between 1 and 100 : "+random+"<br>");
//(7)
var weight = prompt("Enter user weight");
var weight2 = parseFloat(weight.replace(/[^\d\.]*/g, ''));
document.write("The weight of user is : "+weight2+" kilograms"+"<br>");
//(8)
var userGuess = +prompt("Enter a number between 1 to 10");
var guess = Math.ceil(Math.random()*10);
if(userGuess==guess){
    document.write("congratulate <br>");
}
else{
    document.write("Try again!");
}


// //#################
// //# chapter 31-34 #
// //#################

// // Tasks

//(1)
var todayDate = new Date();
document.write(todayDate+"<br>");
//(2)
var now = new Date();
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var currMon = now.getMonth();
alert("Current months : "+months[currMon]);
//(3)
var now = new Date();
var weekDays = ['Sun','Mon','Tue','Wed','Thu','Fri','sat'];
var today = now.getDay();
alert("Today is : "+weekDays[today]);
//(4)
var now = new Date();
var weekDays = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
var today = now.getDay();
if(weekDays[today]=='Sun' || weekDays[today]=='Sat'){
    alert("It's Fun day")
}
//(5)
var now = new Date();
var date = now.getDate();
if(date<16){
    alert("First fifteendays of the month");
}
//(6)
var now = new Date();
var milliSecond = now.getTime();
var minutes = milliSecond/(1000*60*60); 
document.write(now+"<br>");
document.write(milliSecond+"<br>");
document.write(minutes+"<br>");
//(7)
var now = new Date();
var hours = now.getHours();
if(hours>12){
    document.write("It's PM <br>");
}
else{
    document.write("It's AM <br>");
}
//(8)
var laterDate = new Date('Dec 31, 2020');
document.write(laterDate+"<br>");
//(9)
var currentDate = new Date();
var ramdanDate = new Date('Apr 24, 2020');
var msCurDate = currentDate.getTime();
var msRamdan = ramdanDate.getTime();
var msDiff = msCurDate - msRamdan;
var dDiff = msDiff/(1000*60*60*24);
document.write(Math.floor(dDiff)+" days have passed since 1st Ramdan, 2020<br>");
//(10)
var refDate = new Date('Jun 16, 2020');
var yearStartDate = new Date('Jan 1, 2020');
var msRefDate = refDate.getTime();
var msRearStartDate = yearStartDate.getTime();
var msDiff = msRefDate - msRearStartDate;
var dDiff = msDiff/1000;
document.write("On reference date "+refDate+"<br>");
document.write(+Math.floor(dDiff)+" seconds had passed since beginning of 2020 <br>");
//(11)
var currentDate = new Date();
var beforHourseDate = new Date('Jun 16, 2020 16:8:24');
var msCD = currentDate.getTime();
var msBHD = beforHourseDate.getTime();
var msDiff = msCD - msBHD;
var dDiff = msDiff/(1000*60*60);
document.write("Current date : "+currentDate+"<br>");
document.write(+Math.floor(dDiff)+" hours aga, it was "+beforHourseDate+"<br>");
//(12)
var currentDate = new Date();
var year = currentDate.getFullYear()-100;
document.write("Current date : "+currentDate+"<br>")
currentDate.setFullYear(year);
document.write("100 year back, it was "+currentDate+"<br>")
//(13)
var currentDate = new Date();
var birthDate = new Date('Aug 10, 1996');
var msCD = currentDate.getTime();
var msBD = birthDate.getTime();
var msDiff = msCD - msBD;
var dDiff = msDiff/(1000*60*60*24*31*12);
document.write("Our age is "+Math.floor(dDiff)+"<br>");
document.write("Your birth year is "+birthDate.getFullYear()+"<br>");
//(14)
var now = new Date();
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var cusName = "ABC Customer";
var curMon = months[now.getMonth()];
var totalUnit = 410;
var unitPrice = 16;
var netAmount = totalUnit*unitPrice;
var surcharge = 350;
var grossAmount = netAmount+surcharge;

document.write("Customer Name : "+cusName+"<br>");
document.write("Month : "+curMon+"<br>");
document.write("Number of units : "+totalUnit+"<br>");
document.write("Charges per units : "+unitPrice+"<br><br>");
document.write("Net Amount Payable (within Due Date) : "+netAmount+"<br>");
document.write("Late payment surcharge : "+surcharge+"<br>");
document.write("Gross Amount Payable : "+grossAmount+"<br>");


// //#################
// //# chapter 35-38 #
// //#################

// //Tasks

//(1)
function currentDateTime(){
    var now = new Date();
    document.write(now+"<br>");
}
currentDateTime();
//(2)
function greetUser(fName, lName){
    document.write("Hello, "+fName+" "+lName);
}
var fNa = prompt("Enter first name");
var lNa = prompt("Enter last name");
greetUser(fNa, lNa);
//(3)
function sum(no1, no2){
    return no1+no2;
}
var no1 = +prompt("Enter first number");
var no2 = +prompt("Enter second number");
var sum = sum(no1, no2);
document.write("Sum is "+sum+"<br>");
//(4)
function calc(no1, no2, operator){
    if(operator==='+'){
        return no1+no2;
    }
    else if(operator==='-'){
        return no1-no2;
    }
    else if(operator==='*'){
        return no1*no2;
    }
    else if(operator==='/'){
        return no1/no2;
    }
    else if(operator==='%'){
        return no1%no2;
    }
}
var no1 = +prompt("Enter first number");
var opt = prompt("Enter operator");
var no2 = +prompt("Enter first number");
var cal = calc(no1, no2, opt)
document.write("Calculated value is "+cal+"<br>");
//(5)
function square(sqNo){
    return sqNo*sqNo;
}
var sqNo = +prompt("Enter number");
var re = square(sqNo);
document.write("Square is "+re);
//(7)
function displayCounting(startNo, endNo){
    if(startNo<endNo){
        for(startNo; startNo<=endNo; startNo++){
            document.write(startNo+"<br>");
        }
    }
    else if(startNo>endNo){
        for(startNo; startNo>=endNo; startNo--){
            document.write(startNo+"<br>");
        }
    }
}
var sNo = +prompt("Enter counting start number");
var eNo = +prompt("Enter counting end number");
displayCounting(sNo, eNo);
//(8)
function calcHypotenus(base,  perp) {
    var hypotenus = base*base  + perp*perp;
    document.write("Outer function: Calculated hypotenus value is "+hypotenus+"<br>");
    function hypotenusSq(){
         return hypotenus*hypotenus;
    }
    return hypotenusSq();
}
var baseNo = +prompt("Enter base number");
var perpNo = +prompt("Enter Perpendicular number");
 var hypo = calcHypotenus(baseNo, perpNo);
 document.write("Inner function: Calculated hypotenus Square value is "+hypo+"<br>");
//(9)
function calcRectangle(width, height){
    result = width * height;
    return result;
}
var width = +prompt("Enter reactangle width");
var height = +prompt("Enter reactangle hieght");
var calcRect = calcRectangle(width, height);
 document.write("Calculated rectangle area is "+calcRect+"<br>");
//(10)
function palindromeCheck(str1){
    var palindrome = str1.toLowerCase().split('').reverse().join('');;
    if(str1.toLowerCase()=== palindrome){
        document.write(palindrome+" is palindrom word <br>");
    }
    else{
        document.write("Not palindrome word <br>");
    }
}
palindromeCheck('madam');
//(11)
function latterUpperCase(str){
    var arr = str.split(' ');
    var arr2 = [];
    for(var i=0; i<arr.length; i++){
        arr2.push(arr[i].charAt(0).toUpperCase()+arr[i].slice(1));
    }
    document.write(arr2.join(' ')+"<br>");
}
latterUpperCase("the quick brown fox");
//(12)
function longestWord(str){
    var arr = str.split(' ');
    var arr2 = arr[0];
    for(var i=1; i<arr.length; i++){
        if(arr2.length<arr[i].length){
            arr2 = arr[i];
        }
    }
    document.write(str+"<br>");
    document.write(arr2+"<br>");
}
longestWord("Web Development Tutorial");
//(13)
function checkOccurrences(str, latter){
    var count = 0;
    for(var i=0; i<str.length; i++){
        if(str.toLowerCase().charAt(i)==latter.toLowerCase()){
            count++;
        }
    }
    document.write(count+"<br>");
}
checkOccurrences('JSResourceS.com', 'o');
//(14)
function calcCircumference(radius){
    var circumference = 2*Math.PI*radius;
    document.write("Circumference : "+circumference.toFixed(2)+"<br>")
}
function calcArea(radius){
    var area = Math.PI*radius*radius;
    document.write("Area : "+area.toFixed(2)+"<br>");
}
calcCircumference(30);
calcArea(32);


//#################
//# chapter 38-42 #
//#################

//Tasks

//(1)
function Power(a, b){
    var res = 1;
    var i=0;
    while(i<b){
        res = res*a;
        i++;
    }
    return res;
}
var a = +prompt('Enter first number');
var b = +prompt('Enter second number');
document.write("Custom power function result : "+Power(a, b)+"<br>");

//(2)
function LeapYear(year){
    switch(year % 100 === 0){
        case false :
          document.write(year+" is a leap year <br>");
          break;
        case true :
          document.write(year+" is a not leap year <br>");
          break;
      }
}
var leapYear = +prompt('Enter year');
LeapYear(leapYear);

//(3)
var triSide1 = +prompt('Enter triangle length of side 1'); 
var triSide2 = +prompt('Enter triangle length of side 2');
var triSide3 = +prompt('Enter triangle length of side 3');
var s = (triSide1 + triSide2 + triSide3)/2;
var area =  Math.sqrt(s*((s-triSide1)*(s-triSide2)*(s-triSide3)));
document.write("Area of triangle : "+area.toFixed(2)+"<br>");

//(4)
function Average(total){
    var avg = total/3;
    return avg;
}
function Percentage(total){
    var per = (total/300)*100;
    return per;
}
function MainFunction(sub1, sub2, sub3){
    var total = sub1+sub2+sub3;
    document.write('Obtained Marks : '+total+'<br>');
    document.write('Obtained Average : '+Average(total).toFixed(0)+'<br>');
    document.write('Percentage Marks : '+Percentage(total).toFixed(0)+'%<br>'); 
}
var fSub = +prompt('Enter first subject mark'); 
var sSub = +prompt('Enter second subject mark');
var tSub = +prompt('Enter third subject mark');
MainFunction(fSub, sSub, tSub);

//(5)    
var i=0;
function ChkIndex(text, ind){
do{
    if(text.slice(i,i+1)==ind){
            return i;
            break;
            }
    i++
}while(i<text.length)
}
var string = 'pakistan';
document.write("Custom function like indexOf <br>");    
document.write("String : "+string+"<br>");
document.write("Index of n : "+ChkIndex(string, 'n')+"<br>");

//(6)
function DeleteAllVowel(str) {
    var arr = str.toLowerCase().split("");
    var count = 0;
    var arr2 = [];

    for(var i = 0; i < arr.length - 1; i++) {
      var vowel1 = arr[i];
      var vowel2 = arr[i + 1];

      if(ChkVowel(vowel1)) {
        count++
      }
      else{
        arr2 += arr[i];
      }
    }
    
    return arr2;
  }
function ChkVowel(vowel) {
    switch (vowel) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        return true;
      default:
        return false;
    }
  }
var str = "Pleases read this application and give me gratuity";
var found = DeleteAllVowel(str);
document.write("String : "+str+"<br>")
document.write("Delete all vowels : "+found+"<br>")

//(7)
function ChkVowelOccurrences(str) {
    var arr = str.toLowerCase().split("");
    var count = 0;

    for(var i = 0; i < arr.length - 1; i++) {
      var vowel1 = arr[i];
      var vowel2 = arr[i + 1];

      if(ChkVowel(vowel1) && ChkVowel(vowel2)) {
        count++
      }
    }
    
    return count;
  }
function ChkVowel(vowel) {
    switch (vowel) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        return true;
      default:
        return false;
    }
  }
var str = "Pleases read this application and give me gratuity";
var found = ChkVowelOccurrences(str);
document.write("String : "+str+"<br>")
document.write("Number of occurrences of any two vowels : "+found+"<br>")

//(8)
function Meter(km){
    return km*1000;
}
function Feet(km){
    return km*3280.84;
}
function Inches(km){
    return km*39370.08;
}
function Centimeter(km){
    return km*1000*100;
}
var kilometer = +prompt('Enter distance in kilometers')
document.write("The distance in Meter : "+Meter(kilometer)+"<br>");
document.write("The distance in Feet : "+Feet(kilometer)+"<br>");
document.write("The distance in Inches : "+Inches(kilometer)+"<br>");
document.write("The distance in Centimeters : "+Centimeter(kilometer)+"<br>");

//(9)
function GetOvertimePay(WH){
    var overTime, overtimePay;
    if(WH>40){
        overTime = WH-40;
        overtimePay = overTime*12;
        document.write("Total overtime pay : "+overtimePay+"<br>")
    }
    else{
        document.write("You have to work for more than 40 hours to get over time pay <br>")
    }
}
var WH = +prompt("Enter the working hours");
document.write("Overtime pay after 40 working hours <br>");
document.write("Overtime pay Rs 12 per hour<br>");
document.write("Your working hours "+WH+"<br>");
GetOvertimePay(WH);

(10)
function CurrencyNote(n){
    var hd = n/100;
    var fifty = (n % 100) / 50;
    var ten = (((n % 100) % 50) / 10);
    document.write("You will have "+Math.floor(hd)+" hundred notes "+Math.floor(fifty)+" fifty notes "+Math.floor(ten)+" ten notes <br>");
}
var wAmount = +prompt("Enter amount to withdraw");
CurrencyNote(wAmount);


//#################
//# chapter 43-48 #
//#################

//Tasks

//(1)
function Link(){
    alert("Hello World")
}

//(2)
function Msg(){
    alert("Thanks for purchasing a phone from us")
}

//(3)
function Delete(s){
    var std = s.parentNode.parentNode;
    std.remove();
}

//(4)
function NightImg(){
    img = document.getElementById('myImg');
    img.src = "images/night.jpg"
}
function DayImg(){
    img = document.getElementById('myImg');
    img.src = "images/day.jpg"
}

//(5)
function Inc(){
    var inc = document.getElementById('counter');
    var count = inc.value;
    inc.value = ++count;
}
function Dec(){
    var dec = document.getElementById('counter');
    var count = dec.value;
    dec.value = --count;
}

//#################
//# chapter 49-52 #
//#################

//Tasks

//(1)
function UserDetail(){
    var na = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var num = document.getElementById('num').value;
    var pwd = document.getElementById('pwd').value;
    document.getElementById('userDetail').innerHTML = "<h3>User Detail</h3><p>"+na+"</p><p>"+email+"</p><p>"+num+"</p><p>"+pwd+"</p>"
    document.getElementById('name').value="";
    document.getElementById('email').value="";
    document.getElementById('num').value="";
    document.getElementById('pwd').value="";
}

//(2)
function TextDetail(){
    var p = "Slow lorises are a group of several species of trepsirrhine primates whichmake up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time. Slow lorises have a toxic bite, a rare trait among mammals.";
    document.getElementById("txtDetail").innerHTML = p;
}

//(3)
var id = 1;
function StudentDetail(){   
    var stdName = document.getElementById('stdName').value;
    var stdFNa = document.getElementById('stdFNa').value;
    var stdClass = document.getElementById('stdClass').value;
    var stdAdd = document.getElementById('stdAdd').value;
    document.getElementById('stdDetail').innerHTML += "<tr id=s"+id+"><td>s"+id+"</td><td>"+stdName+"</td><td>"+stdFNa+"</td><td>"+stdClass+"</td><td>"+stdAdd+"</td><td><button onclick=StdEdite(this)>Edite</button><td><td><button onclick=StdDelete(this)>Delete</button><td></tr>";  
    id++;
    console.log(id)
    document.getElementById('stdName').value="";
    document.getElementById('stdFNa').value="";
    document.getElementById('stdClass').value="";
    document.getElementById('stdAdd').value="";
}
function StdDelete(s){
    var std = s.parentNode.parentNode;
    std.remove();
}
function StdEdite(s){
    var std = s.parentNode.parentNode;
    var sId = std.getAttribute('id')
    console.log()
    document.getElementById('stdName').value = std.childNodes[1].innerText;
    document.getElementById('stdFNa').value = std.childNodes[2].innerText;
    document.getElementById('stdClass').value = std.childNodes[3].innerText;
    document.getElementById('stdAdd').value = std.childNodes[4].innerText;
    console.log(std.childNodes[1].innerText)
    document.getElementById('btnSub').style.display = "none";
    var btnUpdate = document.getElementById('btnUpdate');
    btnUpdate.setAttribute('myId', sId);
    btnUpdate.style.display = "block";
}
function UpdateDetail(){
    var sId = document.getElementById('btnUpdate').getAttribute('myId');
    var eElem = document.getElementById(sId);
    eElem.childNodes[1].innerText = document.getElementById('stdName').value;
    eElem.childNodes[2].innerText = document.getElementById('stdFNa').value;
    eElem.childNodes[3].innerText = document.getElementById('stdClass').value;
    eElem.childNodes[4].innerText = document.getElementById('stdAdd').value;
    document.getElementById('btnSub').style.display = "block";
    document.getElementById('btnUpdate').style.display = "none";
    document.getElementById('stdName').value = "";
    document.getElementById('stdFNa').value = "";
    document.getElementById('stdClass').value = "";
    document.getElementById('stdAdd').value = "";
}


//#################
//# chapter 53-58 #
//#################

//Tasks

//(1)
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
function OpenModel(img){
  modal.style.display = "block";
  modalImg.src = img.src;
  console.log(img.src)
}
function CloseModel() { 
  modal.style.display = "none";
}

//(2)
var myText = document.getElementById('myText');
var plus = 18;
function ZoomIn(){
    
    myText.style.fontSize = ++plus+'px';
}
function ZoomOut(){
    
    myText.style.fontSize = --plus+'px';
    
}


//#################
//# chapter 58-67 #
//#################

//Tasks

//(1)
var mainContent = document.getElementById('main-content');
console.log(mainContent.childNodes)
var render = document.getElementsByClassName('render');
for(var i=0; i<render.length; i++){
    document.getElementById("myContent").innerHTML += render[i].innerHTML+"<br><br>" ;
}
document.getElementById('first-name').value = 'john';
document.getElementById('last-name').value = 'mark';
document.getElementById('email1').value = 'johnmark@gmail.com';

//(2)
var formContent = document.getElementById('form-content').nodeType;
var lastName1 = document.getElementById('lastName');
document.write('id form-content element nodetype : '+ formContent+"<br>")
document.write('id lastName element nodetype : '+ lastName1.nodeType+"<br>")
document.write('id lastName child node nodetype ; '+ lastName1.childNodes[0].nodeType)
document.getElementById('lastName').innerText="update"
var firstChild = mainContent.firstChild;
console.log(firstChild);
var lastChild = mainContent.lastChild;
console.log(lastChild);
var nextSibling = document.getElementById('lastName').nextSibling;
console.log(nextSibling);
var preSibling = document.getElementById('lastName').previousSibling;
console.log(preSibling);
var email2 = document.getElementById('email1');
var parent1 = email2.parentNode; 
console.log(parent1);
var email2NodeType = email2.nodeType;
console.log(email2NodeType);

