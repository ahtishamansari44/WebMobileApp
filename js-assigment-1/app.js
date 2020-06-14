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


//#############
//# chapter 4 #
//#############

//Tasks

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
