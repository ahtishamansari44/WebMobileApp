// #######################################################
// #---- Name : Ahtisham Ansari -- Roll No : WM1808 ---- #
// #######################################################
// #--------------- Assignment No : 6 -------------------#
// #######################################################

//#################
//# chapter 21-25 #
//#################

//Tasks

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


//#################
//# chapter 26-30 #
//#################

// Tasks

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


//#################
//# chapter 31-34 #
//#################

// Tasks

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


//#################
//# chapter 35-38 #
//#################

//Tasks

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