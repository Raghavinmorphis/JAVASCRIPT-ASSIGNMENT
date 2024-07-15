

// // 1. Write a JavaScript program that accept two integers and display the larger.

// // let a = prompt("enter any number1");
// // let b = prompt("enter any number2");
// // if (a<b){
// //     console.log(`number2 : ${b} is greater than number1 : ${a}.`)
// // }
// // else if(a>b){
// //     console.log(`number1 : ${a} is greater than number2 : ${b}.`)
// // }
// // else{
// //     console.log("wrong input")
// // }

// // 2. Write a JavaScript conditional statement to find the sign of product of three 
// // numbers. Display an alert box with the specified sign.   
// // Sample numbers : 3, -7, 2  
// // Output : The sign is -  

// // let a = prompt("enter any number1");
// // let b = prompt("enter any number2");
// // let c = prompt("enter any number3");
// // let product = a*b*c;
// // if(product<0){
// //     alert("The Sign is -ve")
// // }
// // else if(product>0){
// //     alert("The Sign is +ve")
// // }
// // else{
// //     alert("Wrong Input")
// // }

// // 3. Write a JavaScript conditional statement to sort three numbers. Display an 
// // alert box to show the result.   
// // Sample numbers : 0, -1, 4  
// // Output : 4, 0, -1 

// // let a = prompt("enter any number1");
// // let b = prompt("enter any number2");
// // let c = prompt("enter any number3");

// // let first,second,third;
// // if(a>b && a>c){
// //     first=a;
// //     if(b>c){
// //         second=b
// //         third=c
// //     }
// //     else{
// //         second=c
// //         third=b
// //     }
// // }
// // else if(b>a && b>c){
// //     first=b;
// //     if(a>c){
// //         second=a
// //         third=c
// //     }
// //     else{
// //         second=c
// //         third=a
// //     }
// // }
// // else if(c>a && c>b){
// //     first=c;
// //     if(a>b){
// //         second=a
// //         third=b
// //     }
// //     else{
// //         second=b
// //         third=a
// //     }
// // }
// // else{
// //     alert("Wrong Input")
// // }
// // alert(`Sorted Numbers: ${first} , ${second} , ${third}`)


// // 4. Write a JavaScript conditional statement to find the largest of five numbers. 
// // Display an alert box to show the result.  
// // Sample numbers : -5, -2, -6, 0, -1  
// // Output : 0 

// // let a = prompt("enter any number1");
// // let b = prompt("enter any number2");
// // let c = prompt("enter any number3");
// // let d = prompt("enter any number4");
// // let e = prompt("enter any number5");

// // if(a>b && a>c && a>d && a>e){
// //     alert(`The Largest Number in Given Number is a : ${a}`)
// // }
// // else if(b>a && b>c && b>d && b>e){
// //     alert(`The Largest Number in Given Number is b : ${b}`)
// // }
// // else if (c>a && c>b && c>d && c>e){
// //     alert(`The Largest Number in Given Number is c : ${c}`)
// // }
// // else if(d>a && d>b && d>c && d>e){
// //     alert(`The Largest Number in Given Number is d : ${d}`)
// // }
// // else if(e>a && e>b && e>c && e>d){
// //     alert(`The Largest Number in Given Number is e : ${e}`)
// // }
// // else{
// //     alert("Wrong Input")
// // }

// // 5. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it 
// // will check if the current number is odd or even, and display a message to the 
// // screen.   
// // Sample Output :  
// // "0 is even"  
// // "1 is odd"  
// // "2 is even"

// // for (let i = 0; i <= 15; i++) {
// //     if (i % 2 ==+ 0) {
// //         alert(`${i} is even`);
// //     } else {
// //         alert(`${i} is odd`);
// //     }
// // }

// // 6. Write a JavaScript program which compute, the average marks of the following 
// // students Then, this average is used to determine the corresponding grade. 

// // let David =80;
// // let Vinoth = 77;
// // let Divya = 88;
// // let Ishitha = 95;
// // let Thomas = 68;
// // let AverageMarks =David+Vinoth+Divya+Ishitha+Thomas/5;
// // if (AverageMarks < 60) {
// //     alert(`The Average Marks of the Students: ${AverageMarks} The Grade is : F`);
// // } 
// // else if (AverageMarks < 70) {
// //     alert(`The Average Marks of the Students: ${AverageMarks} The Grade is : D`);
// // }
// // else if (AverageMarks < 80) {
// //     alert(`The Average Marks of the Students: ${AverageMarks} The Grade is : C`);
// // } 
// // else if (AverageMarks < 90) {
// //     alert(`The Average Marks of the Students: ${AverageMarks} The Grade is : B`);
// // } 
// // else {
// //     alert(`The Average Marks of the Students: ${AverageMarks} The Grade is : B`);
// // }


// // 7. Write a JavaScript program which iterates the integers from 1 to 100. But for 
// // multiples of three print "Fizz" instead of the number and for the multiples of five 
// // print "Buzz". For numbers which are multiples of both three and five print 
// // "FizzBuzz".

// // for (let i = 1; i <= 100; i++) {

// //     if (i % 3 === 0 && i % 5 === 0) {
// //         console.log("FizzBuzz");
// //     } 
// //     else if (i % 3 === 0) {
// //         console.log("Fizz");
// //     } 
// //     else if (i % 5 === 0) {
// //         console.log("Buzz");
// //     } 
// //     else {
// //         console.log(i);
// //     }
// // }


// // 10. Write a JavaScript program to construct the following pattern, using a nested 
// // for loop.  
// // *   
// // * *   
// // * * *   
// // * * * *   
// // * * * * * 


// // for (let i = 1; i <= 5; i++) {
// //     let pattern = '';
// //     for (let j = 1; j <= i; j++) {
// //         pattern += '* ';
// //     }
// //     console.log(pattern);
// // }


// // 11. Write a JavaScript program to compute the greatest common divisor (GCD) 
// // of two positive integers.   

// // let a = prompt("enter any number1");
// // let b = prompt("enter any number2");
// // let gcd;
// // let smaller = (a<b) ? a : b;
// // for (let i = 1; i <= smaller; i++) {
// //     if (a % i === 0 && b % i === 0) {
// //         gcd = i; 
// //     }
// // }
// // alert(`The GCD of ${a} and ${b} is: ${gcd}`);

// // 12. Write a JavaScript program to sum the multiples of 3 and 5 under 1000. 

// // let sum = 0;
// // for (let i = 1; i < 1001; i++) {
// //     if (i % 3 === 0 || i % 5 === 0) {
// //         sum += i; 
// //     }
// // }
// // console.log("The sum of multiples of 3 and 5 under 1000 is:", sum);
// // -----------------------------------------------------------------------------------------------------------
// // JavaScript DOM  
// // -----------------------------------------------------------------------------------------------------------
// // 1. Here is a sample html file with a submit button. Now modify the style of the 
  
// // Sample HTML file : 
// // 1. <!DOCTYPE html>   
// // 2. <html><br><head>   
// // 3. <meta charset=utf-8 />   
// // 4. <title>JS DOM paragraph style</title>   
// // 5. </head>    
// // 6. <body>   
// // 7. <p id ='text'>JavaScript Exercises - w3resource</p>    
// // 8. <div>   
// // 9. <button id="jsstyle"   
// // 10. onclick="js_style()">Style</button>   
// // 11. </div>   
// // 12. </body>   
// // 13. </html>   
// // Clicking on the button the font, font size, and color of the paragraph text will be 
// // changed. 

// // <!DOCTYPE html>
// // <html>
// // <head>
// //   <meta charset="utf-8">
// //   <title>JS DOM paragraph style</title>
// //   <script>
// //     function js_style() {
// //  
// //       var paragraph = document.getElementById('text');
      
// //      
// //       paragraph.style.fontFamily = 'Arial, sans-serif';
// //       paragraph.style.fontSize = '20px';
// //       paragraph.style.color = 'blue';
// //     }
// //   </script>
// // </head>
// // <body>
// //   <p id="text">JavaScript Exercises - w3resource</p>
// //   <div>
// //     <button id="jsstyle" onclick="js_style()">Style</button>
// //   </div>
// // </body>
// // </html>


// // 2. Write a JavaScript function to get the values of First and Last name of the 
// // following form. 
// // Sample HTML file : 

// // 1. <!DOCTYPE html>   
// // 2. <html><head>   
// // 3. <meta charset=utf-8 />   
// // 4. <title>Return first and last name from a form - w3resource</title>   
// // 5. </head><body>   
// // 6. <form id="form1" onsubmit="getFormvalue()">   
// // 7. First name: <input type="text" name="fname" value="David"><br>   
// // 8. Last name: <input type="text" name="lname" value="Beckham"><br>   
// // 9. <input type="submit" value="Submit">   
// // 10. </form>   
// // 11. </body>   
// // 12. </html>  



// // <!DOCTYPE html>
// // <html>
// // <head>
// //   <meta charset="utf-8">
// //   <title>Return first and last name from a form - w3resource</title>
// //   <script>
// //     function getFormvalue() {
// //       
// //       var form = document.getElementById('form1');
      
// //      
// //       var firstName = form.fname.value;
// //       var lastName = form.lname.value;
      
// //       
// //       alert("First Name: " + firstName + "\nLast Name: " + lastName);
      
// //       
// //       return false;
// //     }
// //   </script>
// // </head>
// // <body>
// //   <form id="form1" onsubmit="return getFormvalue()">
// //     First name: <input type="text" name="fname" value="David"><br>
// //     Last name: <input type="text" name="lname" value="Beckham"><br>
// //     <input type="submit" value="Submit">
// //   </form>
// // </body>
// // </html>


// // 3. Write a JavaScript program to set the background color of a paragraph. 


// // <!DOCTYPE html>
// // <html>
// // <head>
// //   <meta charset="utf-8">
// //   <title>Set Background Color of Paragraph - DOM Example</title>
// //   <script>
// //     
// //     function setBackgroundColor() {
// //       
// //       var paragraph = document.getElementById('text');
      
// //       
// //       paragraph.style.backgroundColor = 'lightblue';
// //     }
// //   </script>
// // </head>
// // <body>
// //   <p id="text">This is a paragraph.</p>
// //   <button onclick="setBackgroundColor()">Set Background Color</button>
// // </body>
// // </html>

 
// // 4. Here is a sample html file with a submit button. Write a JavaScript function to 
// // get the value of the href, hreflang, rel, target, and type attributes of the specified 
// // link.  

// // 1. <!DOCTYPE html>   
// // 2. <html><head>   
// // 3. <meta charset=utf-8 />   
// // 4. </head>   
// // 5. <body>   
// // 6. <p><a id="w3r" type="text/html" hreflang="en
// // us" rel="nofollow" target="_self" href="http://www.w3resource.com/">w3reso
// //  urce</a></p>   
// // 7. <button onclick="getAttributes()">Click here to get  attributes value</but
// //  ton>   
// // 8. </body></html>  


// // <!DOCTYPE html>
// // <html>
// // <head>
// //   <meta charset="utf-8">
// //   <title>Get Attributes of a Link - JavaScript Example</title>
// //   <script>
// //     
// //     function getAttributes() {
// //       
// //       var link = document.getElementById('w3r');
      
// //       
// //       var hrefValue = link.getAttribute('href');
// //       var hreflangValue = link.getAttribute('hreflang');
// //       var relValue = link.getAttribute('rel');
// //       var targetValue = link.getAttribute('target');
// //       var typeValue = link.getAttribute('type');
      
// //       
// //       alert("href: " + hrefValue + "\nhreflang: " + hreflangValue + "\nrel: " + relValue + "\ntarget: " + targetValue + "\ntype: " + typeValue);
// //     }
// //   </script>
// // </head>
// // <body>
// //   <p><a id="w3r" type="text/html" hreflang="en-us" rel="nofollow" target="_self" href="http://www.w3resource.com/">w3resource</a></p>
// //   <button onclick="getAttributes()">Click here to get attributes value</button>
// // </body>
// // </html>

// // 5. Write a JavaScript function to add rows to a table.  
// // Sample HTML file : 

// // 1. <!DOCTYPE html>   
// // 2. <html><head><br><meta charset=utf-8 />   
// // 3. <title>Insert row in a table - w3resource</title>   
// // 4. </head><body>   
// // 5. <table id="sampleTable" border="1">   
// // 6. <tr><td>Row1 cell1</td>   
// // 7. <td>Row1 cell2</td></tr>   
// // 8. <tr><td>Row2 cell1</td>   
// // 9. <td>Row2 cell2</td></tr>   
// // 10. </table><br>   
// // 11. <input type="button" onclick="insert_Row()" value="Insert row">    
// // 12. </body></html>   


// // <!DOCTYPE html>
// // <html>
// // <head>
// //   <meta charset="utf-8">
// //   <title>Insert Row in a Table - JavaScript Example</title>
// //   <script>
// //     
// //     function insert_Row() {
// //       
// //       var table = document.getElementById('sampleTable');
      
// //       
// //       var newRow = table.insertRow();
      
// //      
// //       var cell1 = newRow.insertCell(0);
// //       var cell2 = newRow.insertCell(1);
      
// //       
// //       cell1.innerHTML = 'New Row cell1';
// //       cell2.innerHTML = 'New Row cell2';
// //     }
// //   </script>
// // </head>
// // <body>
// //   <table id="sampleTable" border="1">
// //     <tr><td>Row1 cell1</td><td>Row1 cell2</td></tr>
// //     <tr><td>Row2 cell1</td><td>Row2 cell2</td></tr>
// //   </table>
// //   <br>
// //   <input type="button" onclick="insert_Row()" value="Insert Row">
// // </body>
// // </html>


// // 8. Write a JavaScript program to remove items from a dropdown list.  
// // Sample HTML file : 

// // 1. <!DOCTYPE html>   
// // 2. <html><head>   
// // 3. <meta charset=utf-8 />   
// // 4. <title>Remove items from a dropdown list</title>   
// // 5. </head><body><form>   
// // 6. <select id="colorSelect">   
// // 7. <option>Red</option>   
// // 8. <option>Green</option>   
// // 9. <option>White</option>   
// // 10. <option>Black</option>   
// // 11. </select>   
// // 12. <input type="button" onclick="removecolor()" value="Select and Remove"><br
// //  ></form></body></html>  


// // <!DOCTYPE html>
// // <html>
// // <head>
// //   <meta charset="utf-8">
// //   <title>Remove Items from a Dropdown List - JavaScript Example</title>
// //   <script>
// //     
// //     function removecolor() {
// //       
// //       var selectElement = document.getElementById('colorSelect');
      
// //       
// //       var selectedOptions = selectElement.selectedOptions;
      
// //       
// //       for (var i = selectedOptions.length - 1; i >= 0; i--) {
// //         selectElement.remove(selectedOptions[i].index);
// //       }
// //     }
// //   </script>
// // </head>
// // <body>
// //   <form>
// //     <select id="colorSelect">
// //       <option>Red</option>
// //       <option>Green</option>
// //       <option>White</option>
// //       <option>Black</option>
// //     </select>
// //     <br>
// //     <input type="button" onclick="removecolor()" value="Select and Remove">
// //   </form>
// // </body>
// // </html>

// // 9. Write a JavaScript program to count and display the items of a dropdown list, 
// // in an alert window.  
// // Sample HTML file : 

// // 1. <!DOCTYPE html>   
// // 2. <html><head>   
// // 3. <meta charset=utf-8 />   
// // 4. <style type="text/css">   
// // 5. body {margin: 30px;}   
// // 6. </style>      
// // 7. <title>Count and display items of a dropdown list - w3resource</title>   
// // 8. </head><body><form>   
// // 9. Select your favorite Color :   
// // 10. <select id="mySelect">   
// // 11. <option>Red</option>   
// // 12. <option>Green</option>   
// // 13. <option>Blue</option>   
// // 14. <option>White</option>   
// // 15. </select>   
// // 16. <input type="button" onclick="getOptions()" value="Count and Output all it
// //  ems">   
// // 17. </form></body></html>  

// // <!DOCTYPE html>
// // <html>
// // <head>
// //   <meta charset="utf-8">
// //   <title>Count and Display Items of a Dropdown List - JavaScript Example</title>
// //   <script>
// //     
// //     function getOptions() {
// //       var selectElement = document.getElementById('mySelect');
// //       var numOptions = selectElement.options.length;
// //       var message = "Number of items: " + numOptions + "\n\n";
// //       message += "Items:\n";
// //       for (var i = 0; i < numOptions; i++) {
// //         message += (i + 1) + ". " + selectElement.options[i].text + "\n";
// //       }
      
// //       alert(message);
// //     }
// //   </script>
// // </head>
// // <body>
// //   <form>
// //     Select your favorite Color :
// //     <select id="mySelect">
// //       <option>Red</option>
// //       <option>Green</option>
// //       <option>Blue</option>
// //       <option>White</option>
// //     </select>
// //     <br>
// //     <input type="button" onclick="getOptions()" value="Count and Output all items">
// //   </form>
// // </body>
// // </html>


// // 11. Write a JavaScript program to display a random image (clicking on a button) 
// // from the following list.  
// // Sample Image information : 
// // "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg", width: 
// // "240", height: "160" 
// // "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg", width: "320", 
// // height: "195" 
// // "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg", width: "500", 
// // height: "343"


// // <!DOCTYPE html>
// // <html>
// // <head>
// //   <meta charset="utf-8">
// //   <title>Display Random Image - JavaScript Example</title>
// //   <script>
// //     var images = [
// //       { url: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg", width: "240", height: "160" },
// //       { url: "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg", width: "320", height: "195" },
// //       { url: "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg", width: "500", height: "343" }
// //     ];
    
// //     function displayRandomImage() {
// //       var randomIndex = Math.floor(Math.random() * images.length);
// //       var randomImage = images[randomIndex];
// //       var imgElement = document.createElement('img');
// //       imgElement.src = randomImage.url;
// //       imgElement.width = randomImage.width;
// //       imgElement.height = randomImage.height;
// //       var imageContainer = document.getElementById('imageContainer');
// //       imageContainer.innerHTML = '';
// //       imageContainer.appendChild(imgElement);
// //     }
// //   </script>
// // </head>
// // <body>
// //   <button onclick="displayRandomImage()">Display Random Image</button>
// //   <div id="imageContainer"></div>
// // </body>
// // </html>

// -----------------------------------------------------------------------------------
// JAVASCRIPT Validation With Regular
// -----------------------------------------------------------------------------------

// //Write a JavaScript program to test the first character of a string is uppercase or not.


// function isFirstCharUppercase(str) {
//     // Check if the string is not empty
//     if (str.length > 0) {
//         // Get the first character of the string
//         var firstChar = str.charAt(0);
//         // Compare with its uppercase version
//         return firstChar === firstChar.toUpperCase();
//     }
//     // Return false if the string is empty
//     return false;
// }

// console.log(isFirstCharUppercase("Hello"));  


// //Write a JavaScript function to check whether a given value is alpha numeric or not

// function isAlphaNumeric(value) {
//     // Regular expression to match alphanumeric characters
//     var regex = /^[a-zA-Z0-9]+$/;

//     // Test the value against the regex and return true if it matches, false otherwise
//     return regex.test(value);
// }

// console.log(isAlphaNumeric("abc123")); // Output: true


// //Write a JavaScript function to check whether a given value is time string or not.

// function isValidTimeString(value) {
//     // Regular expression to match time in HH:MM format (24-hour)
//     var regex = /^([01]\d|2[0-3]):([0-5]\d)$/;

//     // Test the value against the regex and return true if it matches, false otherwise
//     return regex.test(value);
// }

// console.log(isValidTimeString("12:30")); 
// console.log(isValidTimeString("23:59")); 


// //Write a JavaScript function to check whether a given value is US zip code or not.

// function isValidUSZipCode(value) {
//     // Regular expression to match US zip codes (5 digits or 5 digits + hyphen + 4 digits)
//     var zipRegex = /^\d{5}(?:-\d{4})?$/;

//     // Test the value against the regex and return true if it matches, false otherwise
//     return zipRegex.test(value);
// }

// console.log(isValidUSZipCode("12345"));
// console.log(isValidUSZipCode("12345-6789"));

// //Write a JavaScript function to check whether a given value is UK Post Code or not

// function isValidUKPostcode(postcode) {
//     // Regular expression for UK postcode validation
//     var postcodeRegex = /^[A-Z]{1,2}[0-9]{1,2}[A-Z]?\s?[0-9][A-Z]{2}$/i;
    
//     // Check if the provided postcode matches the regex pattern
//     return postcodeRegex.test(postcode.trim());
// }

// var postcode1 = "SW1A 1AA";
// var postcode2 = "12345";

// console.log(isValidUKPostcode(postcode1)); 
// console.log(isValidUKPostcode(postcode2));



// function isValidCanadaPostalCode(postalCode) {
//     // Regular expression for Canadian postal code validation
//     var postalCodeRegex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
    
//     // Check if the provided postal code matches the regex pattern
//     return postalCodeRegex.test(postalCode.trim());
// }

// var postalCode1 = "A1A 1A1";
// var postalCode2 = "B3H 4R2";
// var postalCode3 = "K1A-0B1"; 
// var postalCode4 = "123456"; 

// console.log(isValidCanadaPostalCode(postalCode1)); 
// console.log(isValidCanadaPostalCode(postalCode2)); 
// console.log(isValidCanadaPostalCode(postalCode3)); 
// console.log(isValidCanadaPostalCode(postalCode4)); 


// //Write a JavaScript function to check whether a given value is a social security number or not.

// function isValidSSN(ssn) {
//     // Regular expression for SSN validation (XXX-XX-XXXX format)
//     var ssnRegex = /^\d{3}-\d{2}-\d{4}$/;
    
//     // Check if the provided SSN matches the regex pattern
//     return ssnRegex.test(ssn.trim());
// }

// var ssn1 = "123-45-6789";


// console.log(isValidSSN(ssn1)); 

// //Write a JavaScript function to check whether a given value is a social security number or not.

// function isValidSSN(ssn) {
//     // Regular expression for SSN validation (XXX-XX-XXXX format)
//     var ssnRegex = /^\d{3}-\d{2}-\d{4}$/;
    
//     // Check if the provided SSN matches the regex pattern
//     return ssnRegex.test(ssn.trim());
// }

// var ssn1 = "123-45-6789";


// console.log(isValidSSN(ssn1)); 

// //Write a JavaScript function to check whether a given value is hexadecimal value or not.

// function isHexadecimal(value) {
//     // Regular expression for hexadecimal validation
//     var hexRegex = /^[0-9a-fA-F]+$/;
    
//     // Check if the provided value matches the regex pattern
//     return hexRegex.test(value);
// }

// var hexValue1 = "1aF";   
// console.log(isHexadecimal(hexValue1)); 


// //Write a JavaScript function to check whether a given value is hexcolor value or not

// function isHexColor(value) {
//     // Regular expression for hexadecimal color validation
//     var hexColorRegex = /^#?([0-9a-fA-F]{3}){1,2}$/;
    
//     // Check if the provided value matches the regex pattern
//     return hexColorRegex.test(value);
// }

// var color1 = "#f0f";  

// console.log(isHexColor(color1)); // true

// //Write a JavaScript function to check whether a given value represents a domain or not

// function isDomain(value) {
//     // Regular expression for domain validation
//     var domainRegex = /^(?!:\/\/)([a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9]\.)+[a-zA-Z]{2,6}$/;
    
//     // Check if the provided value matches the regex pattern
//     return domainRegex.test(value.toLowerCase());
// }

// var domain1 = "example.com";      

// console.log(isDomain(domain1)); 

// //Write a JavaScript function to check whether a given value is html or not.


// function isHTML(value) {
//     // Regular expression for HTML tags
//     var htmlRegex = /<[a-z][\s\S]*>/i;
    
//     // Check if the provided value matches the regex pattern
//     return htmlRegex.test(value);
// }

// var html1 = "<div>Hello, world!</div>"; 

// console.log(isHTML(html1)); 


// //Write a JavaScript program to check a credit card number.

// function isValidCreditCardNumber(cardNumber) {
//     // Remove any spaces or dashes from the card number
//     cardNumber = cardNumber.replace(/\s/g, '').replace(/-/g, '');

//     // Check if the card number is numeric and of a valid length
//     if (!/^\d{13,16}$/.test(cardNumber)) {
//         return false;
//     }

//     return true;
// }

// console.log(isValidCreditCardNumber("4111 1111 1111 1111"));  

// //Write a JavaScript function to check whether a given value is an valid url or not

// function isValidURL(url) {
//     // Basic regex to match URLs with protocols (http, https, ftp, ftps)
//     var urlRegex = /^(ftp|http|https|ftps):\/\/\S+$/i;

//     return urlRegex.test(url);
// }

// console.log(isValidURL("https://www.example.com")); // Output: true

// //Write a JavaScript function to count the number of vowels in a given string

// function countVowels(inputString) {
//     // Define a regular expression to match vowels (case insensitive)
//     var vowelRegex = /[aeiou]/gi; // 'g' flag for global match, 'i' flag for case insensitive
    
//     // Use match method to find all vowels in the string
//     var matches = inputString.match(vowelRegex);
    
//     // Return the number of vowels found
//     return matches ? matches.length : 0;
// }

// var text = "Hello, how are you today?";
// console.log("Number of vowels:", countVowels(text)); 

// //Write a JavaScript program to count number of words in string.

// function countWords(inputString) {
//     // Remove leading and trailing whitespace
//     var trimmedString = inputString.trim();

//     // Replace multiple spaces with a single space
//     var normalizedString = trimmedString.replace(/\s+/g, ' ');

//     // Split the string into words based on spaces and count them
//     var wordsArray = normalizedString.split(' ');
    
//     // Filter out empty strings (caused by extra spaces)
//     wordsArray = wordsArray.filter(function(word) {
//         return word !== '';
//     });

//     // Return the number of words
//     return wordsArray.length;
// }

// var text = "  Hello   world!   How are you today?  ";
// console.log("Original:", text);
// console.log("Number of words:", countWords(text)); 

// -----------------------------------------------------------------------
// JAVASCRIPT Array
// -----------------------------------------------------------------------

// /*Write a JavaScript function to check whether an `input` is an array or not.
// Test Data :
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// true*/

// function is_array(input)
// {
//     return Array.isArray(input);
// }

// let a = "w3resource";
// let res = is_array(a);
// console.log(res);


// //Write a JavaScript program to find the sum of squares of a numeric vector.

// function sumOfSquares(arr) {
//     let sum = 0;
    
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i] * arr[i]; // Square each element and add to sum
//     }
    
//     return sum;
// }

// let vector = [1, 2, 3, 4, 5];
// let result = sumOfSquares(vector);
// console.log("Sum of squares:", result); 


// //Write a JavaScript program to compute the sum and product of an array of integers.

// function sumAndProduct(arr) {
//     let sum = 0;
//     let product = 1; // Initialize product to 1 since multiplying by 0 would result in 0
    
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];      // Calculate sum
//         product *= arr[i];  // Calculate product
//     }
    
//     return { sum: sum, product: product };
// }

// let a = [1,2,3,4,5,6];
// let res = sumAndProduct(a);
// console.log(res);


// //Write a JavaScript program to add items in an blank array and display items

// let arr=[];
// function addElem(add)
// {
    
//     arr.push(add);

// }
// function display()
// {
//     for(let i =0; i<arr.length; i++)
//         {
//             console.log("Element "+ i + " is " + arr[i]);
//         }   
// }
// display(10);
// display(11);
// display(12);


// /* We have the following arrays :
// color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// o = ["th","st","nd","rd"]
// Write a JavaScript program to display the colors in the following way :
// "1st choice is Blue ."
// "2nd choice is Green."
// "3rd choice is Red."
// */

// let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// let o = ["th","st","nd","rd"];
// function ordinalNumber(number)
// {
//     if (number % 100 >= 11 && number % 100 <= 13) {
//         return "th";
//     }

//     // General case handling
//     switch (number % 10) {
//         case 1:
//             return "st";
//         case 2:
//             return "nd";
//         case 3:
//             return "rd";
//         default:
//             return "th";
//     }
// }

// for (let i = 0; i < color.length && i < o.length; i++) {
//     let ordinalSuffix = ordinalNumber(i + 1);
//     console.log(`${i + 1}${ordinalSuffix} choice is ${color[i].trim()}.`);
// }


// //Find the leap years in a given range of years

// function leapYearRange(year1, year2){
//     const now = new Date();

//     for(let i=year1; i<year2; i++)
//     {
//         if(i % 4 == 0)
//             {
//                 console.log(i + " : Leap Year");
//             }
//             else if(i % 100 != 0 & i % 400 == 0)
//             {
//                 console.log(i+ " : Leap Year");
//             }
//     }

    
// }
// let a = 2020;
// let b = 2030;
// console.log(leapYearRange(a,b));


// //Write a JavaScript program to shuffle an array

// function shuffleArray(array)
// {
//     for (var i = array.length - 1; i > 0; i--) { 
  
//         // Generate random number 
//         var j = Math.floor(Math.random() * (i + 1));
                   
//         var temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//     }
       
//     return array;
// }

// function show() {
//     var arr = [1, 2, 3, 4, 5, 6, 7];
//     var arr1 = shuffleArray(arr);
//     console.log(arr1);
// }

// show();


// /*Write a JavaScript program to perform a binary search.
// Note : A binary search or half-interval search algorithm finds the position of a 
// specified input value within an array sorted by key value.
// Sample array :
// var items = [1, 2, 3, 4, 5, 7, 8, 9];
// Expected Output :
// console.log(binary_Search(items, 1)); //0
// console.log(binary_Search(items, 5)); //4
// */

// function binSearch(arr, num)
// {
//     let low = 0;
//     let high = arr.length;

   

//     while(low<=high)
//     {
//         let mid = Math.floor((low+high)/2);
//         if(arr[mid] == num)
//         {
//             return mid;
//         }
//         else if(arr[mid]>num)
//         {
//             high = mid-1;
//         }
//         else
//         {
//             low = mid+1;
//         }
//     }
//     return -1;
// }

// let a = [1,20, 34, 45, 2, 3];
// let b = 2;
// let res = binSearch(a,b);
// console.log(res);

// /*Display date and time 
// Sample Output : Today is : Friday.
// Current time is : 4 PM : 50 : 22  */

// function getDateGiven()
// {
//     const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//     const now = new Date();

//     const day = days[now.getDay()];  //to take out the day from given list of days
//     const min = now.getMinutes();    //to take out the minutes
//     const sec = now.getSeconds();    //to take out the seconds
//     let hr = now.getHours();         //to take out the hours required

//     let Pd = "PM";

//     if(hr>=12){           //condition to calculate AM or PM for Hour
//         Pd = "PM"; 
//         if (hr > 12) {
//             hr = hr - 12;
//         }
//     }

//     const currT = `${hr} ${Pd} : ${min} : ${sec}`;
//     const output = `Today is : ${day} \nCurrent time is : ${currT}`
//     console.log(output);
    
// }
// getDateGiven();

// /*Write a JavaScript 
// program to calculate multiplication and division of two numbers (input from 
// user).*/

// function calc()
// {
//     let Num1 = parseInt(prompt("Enter 1st Number"));
//     let Num2 = parseInt(prompt("Enter 2nd Number"));

//     function multi()
//     {
//         console.log(Num1*Num2);
//     }
    
//     function div()
//     {
//         console.log(Num1/Num2);
//     }
    
// }
// calc();

// /*Write a JavaScript program to convert temperatures to and from celsius, 
// fahrenheit. [ Formula : c/5 = (f-32)/9 [ where c = temperature in celsius and f = 
// temperature in fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C*/

// function celsiusToFahrenheit(celsius) {
//     const fahrenheit = (celsius * 9/5) + 32;
//     return `${celsius}°C is ${fahrenheit}°F`;
// }

// function fahrenheitToCelsius(fahrenheit) {
//     const celsius = (fahrenheit - 32) * 5/9;
//     return `${fahrenheit}°F is ${celsius}°C`;
// }

// console.log(celsiusToFahrenheit(60)); 
// console.log(fahrenheitToCelsius(45)); 

// //Write a JavaScript program to get the website URL (loading page). 

// function getURL()
// {
//     const webURL = window.location.href;
//     console.log(webURL);
// }
// getURL();

// //Write a JavaScript program to print the contents of the current window.

// function printCurrent(){
//     window.print();
// }

// /*Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
// */

// function getCurrentDate(format) {
//     const currentDate = new Date();

//     let dd = currentDate.getDate();
//     let mm = currentDate.getMonth() + 1; // January is 0, so we add 1
//     let yyyy = currentDate.getFullYear();

//     if (dd < 10) {
//         dd = '0' + dd;
//     }
//     if (mm < 10) {
//         mm = '0' + mm;
//     }

//     // Determine the desired format
//     switch (format) {
//         case 'mm-dd-yyyy':
//             return `${mm}-${dd}-${yyyy}`;
//         case 'mm/dd/yyyy':
//             return `${mm}/${dd}/${yyyy}`;
//         case 'dd-mm-yyyy':
//             return `${dd}-${mm}-${yyyy}`;
//         case 'dd/mm/yyyy':
//             return `${dd}/${mm}/${yyyy}`;
//     }
// }

// console.log("mm-dd-yyyy format:", getCurrentDate('mm-dd-yyyy'));
// console.log("mm/dd/yyyy format:", getCurrentDate('mm/dd/yyyy'));
// console.log("dd-mm-yyyy format:", getCurrentDate('dd-mm-yyyy'));
// console.log("dd/mm/yyyy format:", getCurrentDate('dd/mm/yyyy'));

// //Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

// function calcAreaOfTriangle(){

//     const a = 5;
//     const b = 6;
//     const c = 7;

//     let s = (a+b+c)/2;
//     let area = Math.sqrt(s*(s-a)*(s-b)*(s-c));

//     console.log(area);
// }
// calcAreaOfTriangle();


// /*Write a JavaScript program to rotate the string 'w3resource' in right direction 
// by periodically removing one letter from the end of the string and attaching it to 
// the front.
// */

// function rotateString()
// {
//     let s = "";
//     let s1 = "w3resource";

//     for(let i=0; i<=s1.length; i++)
//     {
//         s = s+ s1.charAt(s1.length-i);
//     }
//     console.log(s);
// }
// rotateString();


// /*Write a JavaScript program to determine whether a given year is a leap year in 
// the Gregorian calendar.
// In the Gregorian calendar, a leap year is determined by the following rules:
// A year is a leap year if it is divisible by 4.
// However, if the year is divisible by 100, it is not a leap year, unless:
// The year is also divisible by 400, in which case it is a leap year.
// */

// function leapYear(){
//     const now = new Date();

//     let year = now.getFullYear();

//     if(year % 4 == 0)
//     {
//         console.log("Leap Year");
//     }
//     else if(year % 100 != 0 & year % 400 == 0)
//     {
//         console.log("Leap Year");
//     }
//     else{
//         console.log("Not a Leap Year");
//     }
// }
// leapYear();


// //Write a JavaScript program to find 1st January be a Sunday between 2014 and 2050.

// function findDay(){
//     for (let year = 2014; year <= 2050; year++) {
        
//         let date = new Date(year, 0, 1); // Month is 0-based (0 for January)

//         if (date.getDay() === 0) {
//             console.log(`January 1st, ${year} is a Sunday.`);
//         }
//     }
// }
// findDay();


// /* Write a JavaScript program where the program takes a random integer 
// between 1 to 10, the user is then prompted to input a guess number. If the user 
// input matches with guess number, the program will display a message "Good 
// Work" otherwise display a message "Not matched". */

// function match()
// {
//     let number = Math.random()*10+1;
//     const prompt = require('prompt-sync')();
//     var userNum = prompt("Enter a number");
//     var u = parseInt(userNum);

//     if(number === userNum)
//     {
//         console.log("Good Work");
//     }
//     else{
//         console.log("Not matched");
//     }
// }

// match();


// //Write a JavaScript program to calculate days left until next Christmas.

// function calcDaysToChristmas(){

//     const date = new Date();
//     const chrisDate = new Date(date.getFullYear(), 11, 25);

//     const currDate = date.getDate();
//     let c =0;

//     const difference = chrisDate.getTime() - date.getTime();

//     // Convert the difference from milliseconds to days
//     const daysLeft = Math.ceil(difference / (1000 * 3600 * 24));

//     console.log(`The days from current date to next christmas are ${daysLeft}` );
// }
// calcDaysToChristmas();


// ----------------------------------------------------------------------------------------
// JAVASCRIPT DATE AND Time
// ----------------------------------------------------------------------------------------


// //Write a JavaScript function to check whether an `input` is a date object or not.

// function isDate(input) {
//     // Check if input is an instance of Date
//     return input instanceof Date;
// }

// console.log(isDate(new Date()));  // true
// console.log(isDate('2024-07-12'));  // false


// //Write a JavaScript function to calculate 'yesterday day'.

// function yesterdayDay(date)
// {
//     let d = new Date(date);

//     d.setDate(d.getDate()-1);

//     return d;
// }
// let a = "Nov 15, 2014";
// console.log(yesterdayDay(a));


// //Write a JavaScript function to get the maximum date from an array of dates.

// function getMaxDate(dates)
// {
//     if (!Array.isArray(dates) || dates.length === 0) {
//         return null; // Handle edge case of empty array or non-array input
//     }

//     // Initialize maxDate with the first date in the array
//     let maxDate = new Date(dates[0]);

//     // Iterate through the array starting from the second element
//     for (let i = 1; i < dates.length; i++) {
//         let currentDate = new Date(dates[i]);

//         // Compare currentDate with maxDate
//         if (currentDate > maxDate) {
//             maxDate = currentDate; // Update maxDate if currentDate is greater
//         }
//     }

//     return maxDate;

// }
// let datesArray = ["2023-04-15", "2023-05-20", "2023-03-10", "2023-06-01"];
// console.log(getMaxDate(datesArray));

// //Write a JavaScript function to get the minimum date from an array of dates.

// function getMinDate(dates)
// {
//     if (!Array.isArray(dates) || dates.length === 0) {
//         return null; // Handle edge case of empty array or non-array input
//     }

//     // Initialize minDate with the first date in the array
//     let minDate = new Date(dates[0]);

//     // Iterate through the array starting from the second element
//     for (let i = 1; i < dates.length; i++) {
//         let currentDate = new Date(dates[i]);

//         // Compare currentDate with maxDate
//         if (currentDate < minDate) {
//             minDate = currentDate; // Update maxDate if currentDate is greater
//         }
//     }

//        return minDate;

// }
// let datesArray = ["2023-04-15", "2023-05-20", "2023-03-10", "2023-06-01"];
// console.log(getMinDate(datesArray));

// //Write a JavaScript function that will return the number of minutes in hours and minutes.

// function returnMin()
// {
//     let h = new Date();
//     let hrs = h.getHours();
//     let min = h.getMinutes();

//     return `Time in minutes is ${min} and time in hrs is ${hrs}`;

// }
// console.log(returnMin());

// //Write a JavaScript function to get the amount of days of a year.

// function daysOfYear(year)
// {
//     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//         return 366; // Leap year has 366 days
//     } else {
//         return 365; // Common year has 365 days
//     }
// }
// let a = 2024;
// console.log(daysOfYear(a));

// //Write a JavaScript function to get the quarter (1 to 4) of the year.

// function quarterOfYear(date)
// {
//     let d = new Date(date);

//     let month = d.getMonth() + 1; // Adding 1 to convert from 0-indexed to 1-indexed

//     if (month >= 1 && month <= 3) {
//         return 1; // First quarter
//     } else if (month >= 4 && month <= 6) {
//         return 2; // Second quarter
//     } else if (month >= 7 && month <= 9) {
//         return 3; // Third quarter
//     } else {
//         return 4; // Fourth quarter (months 10-12)
//     }
// }
// let a = "2024-07-15";
// console.log(quarterOfYear(a));

// //Write a JavaScript function to count the number of days passed since beginning of the year.

// function noOfDaysPassed(date)
// {
//     let currD = new Date(date);
//     let start = new Date(currD.getFullYear(),0,1);
//     let diffInMs = currD - start;

//     let daysPassed = Math.floor(diffInMs/(1000*60*60*24));
//     return daysPassed+1;
// }

// let d = "2024-07-15";
// console.log(noOfDaysPassed(d));

// //Write a JavaScript function to convert a Unix timestamp to time

// function unixTimestampToTime(timestamp) {
//     // Convert Unix timestamp to milliseconds
//     let unixTimestamp = timestamp * 1000;

//     // Create a new Date object
//     let dateObject = new Date(unixTimestamp);

//     // Get hours, minutes, and seconds from the Date object
//     let hours = dateObject.getUTCHours().toString().padStart(2, '0');
//     let minutes = dateObject.getUTCMinutes().toString().padStart(2, '0');
//     let seconds = dateObject.getUTCSeconds().toString().padStart(2, '0');

//     // Return the time in HH:mm:ss format
//     return `${hours}:${minutes}:${seconds}`;
// }

// let timestamp = 1626150183; 
// console.log(unixTimestampToTime(timestamp));


// //Write a JavaScript program to calculate age.

// function calculateAge(birthDate) {
//     // Parse the birth date input into a Date object
//     let birth = new Date(birthDate);
//     let current = new Date();

//     // Calculate the difference in years
//     let age = current.getFullYear() - birth.getFullYear();

//     // Adjust the age based on the month and day of birth
//     if (current.getMonth() < birth.getMonth() ||
//         (current.getMonth() === birth.getMonth() && current.getDate() < birth.getDate())) {
//         age--;
//     }

//     return age;
// }

// let birthDate = "1990-12-15"; // YYYY-MM-DD format
// console.log(`Age: ${calculateAge(birthDate)}`); 

// //Write a JavaScript function to get the day of the month, 2 digits with leading zeros.

// function getTwoDigitDay() {
//     // Create a new Date object for the current date
//     let currentDate = new Date();

//     // Get the day of the month (1-31)
//     let dayOfMonth = currentDate.getDate();

//     // Convert to a string and pad with leading zeros if necessary
//     let twoDigitDay = dayOfMonth.toString().padStart(2, '0');

//     return twoDigitDay;
// }

// console.log(getTwoDigitDay()); 

// //Write a JavaScript function to get the current date

// function getCurrentDate(separator) {
//     let now = new Date();
//     let year = now.getFullYear();
//     let month = now.getMonth() + 1;
//     let day = now.getDate();

//     // Ensure month and day are two digits
//     if (month < 10) {
//         month = "0" + month;
//     }
//     if (day < 10) {
//         day = "0" + day;
//     }

//     return `${year}${separator}${month}${separator}${day}`;
// }

// console.log(getCurrentDate('/'));  
// console.log(getCurrentDate('-')); 

// //Write a JavaScript function to get a textual representation of a day (three letters, Mon through Sun).

// function getShortDayName() {
//     // Create a new Date object for the current date
//     let currentDate = new Date();

//     // Array of three-letter day names starting from "Sun" (index 0)
//     let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

//     // Get the numeric day of the week (0-6)
//     let dayOfWeekIndex = currentDate.getDay();

//     // Return the three-letter representation of the day
//     return daysOfWeek[dayOfWeekIndex];
// }

// console.log(getShortDayName()); 
// //Write a JavaScript function to get a full textual representation of the day of the week (Sunday through Saturday)

// function getDayName() {
//     // Create a new Date object for the current date
//     let currentDate = new Date();

//     // Array of three-letter day names starting from "Sun" (index 0)
//     let daysOfWeek = ['Sunday', 'Monday', 'Tueday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//     // Get the numeric day of the week (0-6)
//     let dayOfWeekIndex = currentDate.getDay();

//     // Return the three-letter representation of the day
//     return daysOfWeek[dayOfWeekIndex];
// }

// console.log(getDayName()); 

// //Write a JavaScript function to get ISO-8601 numeric representation of the 
// //day of the week (1 (for Monday) to 7 (for Sunday)).

// function getNumericDayName() {
//     // Create a new Date object for the current date
//     let currentDate = new Date();

//     // Array of three-letter day names starting from "Sun" (index 0)
//     //let daysOfWeek = ['0', '1', '2', '3', '4', '5', '6'];

//     // Get the numeric day of the week (0-6)
//     let dayOfWeekIndex = currentDate.getDay();

//     // Return the three-letter representation of the day
//     return dayOfWeekIndex;
// }

// console.log(getNumericDayName()); 
// //Write a JavaScript function to get English ordinal suffix for the day of the 
// //month, 2 characters (st, nd, rd or th.)

// function getOrdinalSuffix(day) {
//     // Ensure day is within valid range (1 to 31)
//     if (day < 1 || day > 31) {
//         throw new Error('Day must be between 1 and 31');
//     }

//     // Determine the ordinal suffix based on the last digit of the day
//     let suffix;
//     switch (day % 10) {
//         case 1:
//             suffix = (day % 100 === 11) ? 'th' : 'st';
//             break;
//         case 2:
//             suffix = (day % 100 === 12) ? 'th' : 'nd';
//             break;
//         case 3:
//             suffix = (day % 100 === 13) ? 'th' : 'rd';
//             break;
//         default:
//             suffix = 'th';
//             break;
//     }

//     return suffix;
// }

// console.log(getOrdinalSuffix(1));  

// //Write a JavaScript function to get a numeric representation of a month, with leading zeros (01 through 12).

// function getNumericMonth(date) {
//     // Create a new Date object based on the input date (or current date if not provided)
//     let d = date ? new Date(date) : new Date();

//     // Get the month number (0-11) from the Date object
//     let monthNumber = d.getMonth() + 1; // Adding 1 to convert from 0-indexed to 1-indexed

//     // Convert to a string and pad with leading zeros if necessary
//     let numericMonth = monthNumber.toString().padStart(2, '0');

//     return numericMonth;
// }

// console.log(getNumericMonth()); 
// console.log(getNumericMonth("2024-02-15")); 


// //Write a JavaScript function to get a full numeric representation of a year (4 digits)

// function getFullNumericYear(date) {
//     // Create a new Date object based on the input date (or current date if not provided)
//     let d = date ? new Date(date) : new Date();

//     // Get the full numeric representation of the year (4 digits) using getFullYear()
//     let fullYear = d.getFullYear();

//     return fullYear;
// }

// console.log(getFullNumericYear()); 
// console.log(getFullNumericYear("2000-01-01"));


// //Write a JavaScript function to get a two digit representation of a year

// function getTwoDigitYear(date) {
//     // Create a new Date object based on the input date (or current date if not provided)
//     let d = date ? new Date(date) : new Date();

//     // Get the full year (4 digits) using getFullYear()
//     let fullYear = d.getFullYear();

//     // Extract the last two digits using modulo and convert to string
//     let twoDigitYear = ('' + fullYear).slice(-2);

//     return twoDigitYear;
// }

// console.log(getTwoDigitYear()); 
// console.log(getTwoDigitYear("2000-01-01")); 

// //Write a JavaScript function to get the number of days in a month.

// function getDaysInMonth(month, year) {
//     // JS months are zero-based (0=January, 1=February, ...)
//     // Use 0 for the day argument to get the last day of the previous month
//     return new Date(year, month, 0).getDate();
// }

// console.log(getDaysInMonth(1, 2024)); 

// //Write a JavaScript function to get lowercase Ante meridiem and Post meridiem

// function getMeridiemStrings() {
//     return {
//         am: 'ante meridiem',
//         pm: 'post meridiem'
//     };
// }

// let meridiems = getMeridiemStrings();
// console.log(meridiems.am); 
// console.log(meridiems.pm); 

// //Write a JavaScript function to get uppercase Ante meridiem and Post meridiem

// function getMeridiemStrings() {
//     return {
//         am: 'ANTE MERIDIEM',
//         pm: 'POST MERIDIEM'
//     };
// }

// let meridiems = getMeridiemStrings();
// console.log(meridiems.am); 
// console.log(meridiems.pm); 


// //Write a JavaScript function to get 12-hour format of an hour with leading zeros.

// function get12HourFormatWithLeadingZeros(date) {
//     // Create a new Date object based on the input date (or current date if not provided)
//     let d = date ? new Date(date) : new Date();

//     // Get the hour from the Date object
//     let hour = d.getHours();

//     // Convert hour to 12-hour format
//     let hour12 = hour % 12;
//     if (hour12 === 0) {
//         hour12 = 12; // 0 should be represented as 12 in 12-hour format
//     }

//     // Format hour12 with leading zeros if necessary
//     let formattedHour = hour12.toString().padStart(2, '0');

//     return formattedHour;
// }

// console.log(get12HourFormatWithLeadingZeros()); 
// console.log(get12HourFormatWithLeadingZeros("2024-07-16T15:30:00")); 


// //Write a JavaScript function to get minutes with leading zeros (00 to 59).

// function getMinuteswithZero(date)
// {
//     let d = date ? new Date(date) : new Date();

//     let min = d.getMinutes().toString().padStart(2, '0');;

//     return min;
// }
// console.log(getMinuteswithZero()); 
// console.log(getMinuteswithZero("2024-07-16T15:30:00")); 

// //Write a JavaScript function to get seconds with leading zeros (00 through 59)

// function getSecondswithZeros(date)
// {
//     let d = date ? new Date(date) : new Date();

//     let sec = d.getSeconds().toString().padStart(2, '0');

//     return sec;
// }
// console.log(getSecondswithZeros()); 
// console.log(getSecondswithZeros("2024-07-16T15:30:05"));

// //Write a JavaScript function to get Timezone.

// function getTimezone() {
//     // Get the current date object
//     let date = new Date();

//     // Get the timezone offset in minutes
//     let timezoneOffset = date.getTimezoneOffset();

//     // Convert the offset to hours and minutes
//     let hours = Math.floor(Math.abs(timezoneOffset) / 60);
//     let minutes = Math.abs(timezoneOffset) % 60;

//     // Determine the direction of the timezone (UTC+ or UTC-)
//     let sign = timezoneOffset > 0 ? '-' : '+';

//     // Format the timezone string
//     let timezone = `UTC${sign}${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

//     return timezone;
// }

// console.log(getTimezone()); 

// //Write a JavaScript function to get time differences in hours between two dates.

// function getTimeDifferenceInHours(date1, date2) {
//     // Calculate the difference in milliseconds
//     let differenceMs = Math.abs(date2.getTime() - date1.getTime());

//     // Convert milliseconds to hours
//     let differenceHours = differenceMs / (1000 * 60 * 60);

//     return differenceHours;
// }

// let startDate = new Date('2024-07-13T12:00:00'); 
// let endDate = new Date('2024-07-13T15:30:00'); 

// let hoursDifference = getTimeDifferenceInHours(startDate, endDate);
// console.log('Time difference in hours:', hoursDifference);

// //Write a JavaScript function to get time differences in days between two dates.

// function getTimeDifferenceInDays(date1, date2) {
//     // Convert both dates to UTC
//     let utc1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
//     let utc2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());

//     // Calculate the difference in milliseconds
//     let differenceMs = utc2 - utc1;

//     // Convert milliseconds to days
//     let differenceDays = Math.floor(differenceMs / (1000 * 60 * 60 * 24));

//     return differenceDays;
// }

// let startDate = new Date('2024-07-13'); 
// let endDate = new Date('2024-07-18'); 

// let daysDifference = getTimeDifferenceInDays(startDate, endDate);
// console.log('Time difference in days:', daysDifference);

// //Write a JavaScript function to compare dates (i.e. greater than, less than or equal to).

// function compareDates(date1, date2)
// {
//     let d1 = new Date(date1);
//     let d2 = new Date(date2);

//     if (d1 > d2) {
//         return `${date1} is greater than ${date2}`;
//     } else if (d1 < d2) {
//         return `${date2} is greater than ${date1}`;
//     } else {
//         return `${date1} and ${date2} are equal`;
//     }
// }

// let a = "11/14/2013 00:20";
// let b = "11/14/2013 00:00";
// console.log(compareDates(a,b));

// //Write a JavaScript function to add specified minutes to a Date object

// function addMinutes(date, min)
// {
//     let d = new Date(date);

//     d.setMinutes(d.getMinutes()+min);
//     return d;
// }

// let a = "2013-11-14T00:00:00";
// console.log(addMinutes(a,30));

// //Write a JavaScript function to test whether a date is a weekend.

// function getWeekend(date)
// {
//     let d = new Date(date);

//     let day = d.getDay();

//     if(day == "6" || day == "7")
//     {
//         return `${day} It is a weekend.`;
//     }
//     else
//     {
//         return `${day} It is not a weekend.`;
//     }
// }

// let a = "July 13, 2024";
// console.log(getWeekend(a));

// //Write a JavaScript function to get difference between two dates in days.


// function getDifference(date1, date2)
// {
//     let d1 = new Date(date1);
//     let d2 = new Date(date2);

//     let timeDiff = d1.getTime()-d2.getTime();
//     let diff_In_Days = Math.abs(Math.floor(timeDiff / (1000 * 3600 * 24)));

//     return diff_In_Days;
// }
// let a = "04/02/2014";
// let b = "11/04/2014";
// console.log(getDifference(a,b));

// ---------------------------------------------
// JAVASCRIPT FUNCTIONS 
// ------------------------------------------------------
// /* Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output : 34223 
// */

// function reverseNum()
// {
//     let n = parseInt(prompt("Enter a number"));
//     let rn = n.toString().split('').reverse().join('');
//     console.log(rn);
// }

// reverseNum();


// //Write a JavaScript function which returns the n rows by n columns identity matrix

// function matrix(n)
// {
//     let matrix = [];
//     for(let i =0; i<n; i++)
//     {
//         return matrix[i];
//         for(let j = i; j<n; j++)
//         {
//             return matrix[j];
//         }  
//         return " ";
//     }
// }
// let a = matrix(4);
// console.log(a);


// /* Write a JavaScript function which will take an array of numbers stored and 
// find the second lowest and second greatest numbers, respectively.
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4
// */

// function arrayLowGreatest(arr)
// {
//     let s = arr.sort();
//     let l = arr.length;
//     let low = arr[0];
//     let secGreat = arr[l-1];

//     return `${low}, ${secGreat}`;
    
// }
// let a = [1, 2, 3, 4];
// let res = arrayLowGreatest(a);
// console.log(res);

// // Write a JavaScript function which says whether a number is perfect.

// function perfectNumber(number)
// {
//     let div = [];

//     for(let i =0; i<=number; i++)
//     {
//         if(number%i==0)
//         {
//             div.push(i);
//         }
//     }
//     let sumDiv = 0;
//     let avDiv = 0;
//     for(let i =0; i<div.length; i++)
//     {
//         sumDiv = sumDiv+div[i];
//         avDiv = sumDiv/2;
//     }

//     let c = 0;
//     if(sumDiv == number || avDiv == number)
//     {
//         c = 1;
//     }

//     if(c==1)
//     {
//         return "Perfect Number";
//     }
//     else{
//         return "Not a Perfect Number";
//     }

// }
// let a = 27;
// let divi = perfectNumber(a);
// console.log(divi);

// //Write a JavaScript function to compute the factors of a positive integer

// function factors(num)
// {
//     let div = [];

//     for(let i =0; i<=num; i++)
//     {
//         if(num%i==0)
//         {
//             div.push(i);
//         }
//     }

//     return div;
// }
// let a = 27;
// let divi = factors(a);
// console.log(divi);

// /* Write a JavaScript function to compute the value of bn where n is the 
// exponent and b is the bases. Accept b and n from the user and display the 
// result.
// */

// function exponent(b, n)
// {
//     let res = Math.pow(b,n);

//     let bs = parseInt(prompt("Enter base value"));
//     let ns = parseInt(prompt("Enter value of exponent"));

//     return res;
// }
// let a = exponent(b,n);
// console.log(a);

// /* Write a JavaScript function to extract unique characters from a string.
// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"
// */

// function uniqueCharacters(str)
// {
//     let UniqueChar = '';
    
//     for( let i =0; i<str.length; i++)
//     {
//             if(UniqueChar.indexOf(str[i]) == -1)
//             {
//                 UniqueChar = UniqueChar + str[i];
//             }
        
//     }
//     return UniqueChar;
// }
// let a = "thequickbrownfoxjumpsoverthelazydog";
// let res = uniqueCharacters(a);
// console.log(res);




// //Write a JavaScript function to get the number of occurrences of each letter in specified string.

// function occurrences(str)
// {
//     str = str.toLowerCase();
//     let occLetter = {};

//     for(let i =0; i<str.length; i++)
//     {
//         let ch = str.charAt(i);

//         if (/^[a-z]$/.test(ch)) {
//             if (occLetter[ch]) {
//                 occLetter[ch]++;
//             } else {
//                 occLetter[ch] = 1;
//             }
//         }
//     }
//     return occLetter;
// }
// let a = "Hello World";
// let res = occurrences(a);
// console.log(res);


// //Write a JavaScript function that returns array elements larger than a number

// function ElemLargerThanNum(arr,num)
// {
//     let result = [];

//     for(let i  =0; i<arr.length; i++)
//     {
//         if(arr[i]> num)
//         {
//             result.push(arr[i]);
//         }
//     }

//     return result;
// }

// let a = [1,3,18,5,2];
// let b = 4;
// let res = ElemLargerThanNum(a,b);
// console.log(res);


// /*Write a JavaScript function that checks whether a passed string is palindrome 
// or not?
// A palindrome is word, phrase, or sequence that reads the same backward as 
// forward, e.g., madam or nurses run.
// */

// function Palindrome()
// {
//     let s = prompt("Enter a string");
    
//     let s1 = s.split('').reverse().join('');
//     let c =0;

//     for(let i =0; i<s.length; i++)
//     {
//         if(s.charAt(i) == s1.charAt(i))
//         {
//             c=1;
//         }
//         else{
//             c=0;
//         }
//     }

//     if(c==1)
//     {
//         console.log("Palindrome");
//     }
//     else{
//         console.log("Not Palindrome");
//     }
// }
// Palindrome();

// /* Write a JavaScript function that generates a string id (specified length) of 
// random characters.
// Sample character list : 
// "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
// */

// function createRandomId(n)
// {
//     let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//     let result = "";

//     for(let i =0; i<n; i++)
//     {
//         let rand = Math.floor(Math.ceil(Math.random()*char.length));
//         result += char.charAt(rand);
//     }
//     return result;
// }
// let a = 10;
// let res = createRandomId(a);
// console.log(res);



// //Write a JavaScript function to get the function name.

// function funcName(func)
// {
//     return func.name;
// }
// function example()
// {
//     //body
// }
// let a = funcName(example);
// console.log(a);

// /* Write a JavaScript function that returns a passed string with letters in 
// alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string
// */

// function alphabeticalOrder()
// {
//      let s = "webmaster";
//      let s1 = s.split('').sort().join('');
//      console.log(s1);
// }
// alphabeticalOrder();

// /* Write a JavaScript function that accepts a string as a parameter and converts 
// the first letter of each word of the string in upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '
// */

// function Upper()
// {
//     let s = prompt("Enter a string");
//     let l = s.length;
//     s = s.charAt(0).toUpperCase();
//     let w = s.split('');

//     let cword = [];
    
//     for(let i =0; i<l; i++)
//     {
//         let cwords = s[i].charAt(0).toUpperCase() + s[i].slice(1);
//         cwords.push(cword);
//     }
//     let result = cwords.join('');
//     console.log(result);
// }
// Upper();


// /* Write a JavaScript function that accepts a string as a parameter and find the 
// longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'
// */

// function longestWord(str)
// {
//     let s1 = str.split(' ');
//     var longWord = "";
//     var maxLength = 0;

//     for(let i =0; i<s1.length; i++)
//     {
//         if(s1[i].length>maxLength)
//         {
//             maxLength = s1[i].length;
//             longWord = s1[i];
//         }
//     }
//     return longWord;
// }
// let long = "Web Development Tutorial";
// const longest = longestWord(long);
// console.log(longest);

// /* Write a JavaScript function that accepts a string as a parameter and counts 
// the number of vowels within the string.
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do 
// not count 'y' as vowel here.
// Example string : 'The quick brown fox'
// Expected Output : 5

// */

// function vowelsInString(words)
// {

//     let c = 0;

//     for(let i = 0; i<words.length; i++)
//     {
//         if(words.charAt(i) == 'a' || words.charAt(i) == 'e' || words.charAt(i) == 'i' || words.charAt(i) == 'o' || words.charAt(i) == 'u' || 
//             words.charAt(i) == 'A' || words.charAt(i) == 'E' || words.charAt(i) == 'O' || words.charAt(i) == 'U' || words.charAt(i) == 'I')
//             {
//                 c++;
//             }
//     }
//     return c;
// }

// const s = "The quick brown fox";
// const vov = vowelsInString(s);
// console.log(vov);

// /*
// Write a JavaScript function that accepts a number as a parameter and check 
// the number is prime or not.
// Note : A prime number (or a prime) is a natural number greater than 1 that has 
// no positive divisors other than 1 and itself.
// */

// function prime(number)
// {
//     if(number<=1)
//     {
//         return ("Not Prime");
//     }
//     else if(number == 2)
//     {
//         return ("Prime");
//     }

//     else if(number % 2 == 0)
//     {
//         return ("Not Prime");
//     }
//     else{
//         return ("Prime");
//     }
// }
// let a = prime(43);
// console.log(a);


// /* Write a JavaScript function which accepts an argument and returns the type.
// Note : There are six possible values that typeof returns: object, boolean, function, 
// number, string, and undefined.
// */

// function typeOfInput(word)
// {
//     return typeof(word);
// }
// let a = typeOfInput(5);
// console.log(a);
// let b = typeOfInput("s");
// console.log(b);

// ---------------------------------------------------------------
// JAVASCRIPT IMPORTANT QUESTION
// ---------------------------------------------------------------

// let favoriteMovie = {
//     title: "Puff the Magic Dragon",
//     duration: 30,
//     stars: ["Puff", "Jackie", "Living Sneezes"]
// };

// function printMovieInfo(movie) {
//     let starsList = movie.stars.join(', ');
//     console.log(`${movie.title} lasts for ${movie.duration} minutes. Stars: ${starsList}.`);
// }

// printMovieInfo(favoriteMovie); 




//  // Array of book objects
//  let books = [
//     { title: "The Hobbit", author: "J.R.R. Tolkien", alreadyRead: true },
//     { title: "The Lord of the Rings", author: "J.R.R. Tolkien", alreadyRead: false },
//     { title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", alreadyRead: true },
//     { title: "To Kill a Mockingbird", author: "Harper Lee", alreadyRead: false }
// ];

// books.forEach(function(book) {
//     console.log(`${book.title} by ${book.author}`);

//     if (book.alreadyRead) {
//         console.log(`You already read "${book.title}" by ${book.author}`);
//     } else {
//         console.log(`You still need to read "${book.title}" by ${book.author}`);
//     }
// });


// let favoriteRecipe = {
//     title: "Mole",
//     servings: 2,
//     ingredients: ["cinnamon", "cumin", "cocoa"]
// };

// console.log(favoriteRecipe.title);
// console.log(`Serves: ${favoriteRecipe.servings}`);
// console.log("Ingredients:");
// favoriteRecipe.ingredients.forEach(ingredient => {
//     console.log(ingredient);
// });



// function calculateAge(birthYear, currentYear) {
//     let year = new Date().getFullYear();

//     let age1 = year - birthYear;
//     let age2 = age1 - 1;

//     console.log(`You are either ${age1} or ${age2}`);
// }

// calculateAge(1990, 2024); 
// calculateAge(1985, 2024); 
// calculateAge(2000, 2024); 



// function calculateSupply(age, amountPerDay) {
//     // Constant maximum age
//     const maxAge = 100;

//     // Calculate total amount needed
//     let amountPerYear = amountPerDay * 365.25; // Consider leap years
//     let yearsRemaining = maxAge - age;
//     let totalAmountNeeded = Math.round(amountPerYear * yearsRemaining);

//     // Output the result
//     console.log(`You will need ${totalAmountNeeded} to last you until the ripe old age of ${maxAge}`);
// }
// calculateSupply(30, 2.5); 
// calculateSupply(25, 3);  
// calculateSupply(40, 1.5); 



// function celsiusToFahrenheit(celsius) {
//     var fahrenheit = (celsius * 9/5) + 32;
//     console.log(celsius + "°C is " + fahrenheit + "°F");
// }

// function fahrenheitToCelsius(fahrenheit) {
//     var celsius = (fahrenheit - 32) * 5/9;
//     console.log(fahrenheit + "°F is " + celsius + "°C");
// }


// --------------------------------------------------------------------------------------------------
// JAVASCRIPT Object
// --------------------------------------------------------------------------------------------------

// //Write a JavaScript program to list the properties of a JavaScript object.

// function listObjectProperties(obj) {
//     return Object.keys(obj);
// }

// const car = {
//     brand: 'Toyota',
//     model: 'Camry',
//     year: 2022,
//     color: 'Silver'
// };

// console.log(listObjectProperties(car));

// //Write a JavaScript function to print all the methods in an JavaScript object.

// function printMethods(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] === 'function') {
//             console.log(key);
//         }
//     }
// }

// const obj = {
//     name: 'John',
//     age: 30,
//     greet: function() {
//         console.log(`Hello, my name is ${this.name}`);
//     },
//     calculate: function(x, y) {
//         return x + y;
//     }
// };

// printMethods(obj);


// //Write a JavaScript program to delete the rollno property from the following 
// //object. Also print the object before or after deleting the property.


// function listObjectProperties(obj) {
//     const properties = [];
//     for (let prop in obj) {
//         if (obj.hasOwnProperty(prop)) {
//             properties.push(prop);
//         }
//     }
//     return properties;
// }

// console.log(listObjectProperties(car));


// //Write a JavaScript program to get the length of an JavaScript object

// function getObjectLength(obj) {
//     return Object.keys(obj).length;
// }

// const car = {
//     brand: 'Toyota',
//     model: 'Camry',
//     year: 2022,
//     color: 'Silver'
// };

// console.log(getObjectLength(car)); 


// //Write a JavaScript program to display the reading status 
// //(i.e. display book name, author name and reading status) of the following books.

// let library = [
//     {
//         title: 'The Hobbit',
//         author: 'J.R.R. Tolkien',
//         readingStatus: true  // true means book has been read
//     },
//     {
//         title: 'To Kill a Mockingbird',
//         author: 'Harper Lee',
//         readingStatus: false  // false means book has not been read
//     },
//     {
//         title: '1984',
//         author: 'George Orwell',
//         readingStatus: true
//     }
// ];

// function displayReadingStatus(books) {
//     books.forEach(book => {
//         console.log(`Book title: ${book.title}`);
//         console.log(`Author: ${book.author}`);
//         console.log(`Reading Status: ${book.readingStatus ? 'Already read' : 'Not yet read'}`);
//         console.log('-----------------------------');
//     });
// }

// displayReadingStatus(library);



// /* Write a JavaScript program to get the volume of a Cylinder with four decimal 
// places using object classes.
// Volume of a cylinder : V = πr2h
// where r is the radius and h is the height of the cylinder.
// */

// class Cylinder {
//     constructor(radius, height) {
//         this.radius = radius;
//         this.height = height;
//     }

//     getVolume() {
//         const volume = Math.PI * Math.pow(this.radius, 2) * this.height;
//         return volume.toFixed(4); // Return volume rounded to 4 decimal places
//     }
// }

// const cylinder1 = new Cylinder(3, 5);
// console.log(`Volume of Cylinder 1: ${cylinder1.getVolume()} cubic units`);

// const cylinder2 = new Cylinder(4.5, 7.2);
// console.log(`Volume of Cylinder 2: ${cylinder2.getVolume()} cubic units`);


// /* Write a Bubble Sort algorithm in JavaScript.
// Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping 
// through the list to be sorted,
// Sample Data : [6,4,0, 3,-2,1]
// Expected Output : [-2, 0, 1, 3, 4, 6]
// */

// function bubbleSort(arr) {
//     const n = arr.length;
//     for (let i = 0; i < n - 1; i++) {
//         for (let j = 0; j < n - 1 - i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }

// const data = [6, 4, 0, 3, -2, 1];
// console.log("Original Array:", data);
// console.log("Sorted Array:", bubbleSort(data.slice())); 


// //Write a JavaScript program which returns a subset of a string.

// class SubsetGenerator {
//     constructor(str) {
//         this.str = str;
//         this.result = {};
//         this.generateSubsets();
//     }

//     generateSubsets() {
//         const len = this.str.length;
//         // Outer loop for starting index
//         for (let i = 0; i < len; i++) {
//             // Inner loop for ending index
//             for (let j = i + 1; j <= len; j++) {
//                 // Get substring from index i to j
//                 const subset = this.str.slice(i, j);
//                 this.result[subset] = true; // Store subset in object to ensure uniqueness
//             }
//         }
//     }

//     getSubsets() {
//         return Object.keys(this.result);
//     }
// }

// const subsetGenerator = new SubsetGenerator('dog');
// console.log(subsetGenerator.getSubsets());




// class Clock {
//     constructor() {
//         this.updateTime();  // Initialize the clock with current time
//         setInterval(() => this.updateTime(), 1000);  // Update time every second
//     }

//     updateTime() {
//         const now = new Date();
//         const hours = this.formatTime(now.getHours());
//         const minutes = this.formatTime(now.getMinutes());
//         const seconds = this.formatTime(now.getSeconds());

//         const timeString = `${hours}:${minutes}:${seconds}`;
//         console.log(timeString);  // Replace with your preferred way of displaying the time
//     }

//     formatTime(time) {
//         return time < 10 ? `0${time}` : time;  // Add leading zero if needed
//     }
// }

// // Create an instance of Clock to start the clock
// const clock = new Clock();


// //Write a JavaScript program to calculate the area and perimeter of a circle.

// class Circle {
//     constructor(radius) {
//         this.radius = radius;
//     }

//     // Method to calculate the area of the circle
//     calculateArea() {
//         return Math.PI * this.radius ** 2;
//     }

//     // Method to calculate the perimeter (circumference) of the circle
//     calculatePerimeter() {
//         return 2 * Math.PI * this.radius;
//     }
// }
// const radius = parseFloat(prompt("Enter the radius of the circle:"));

// if (isNaN(radius) || radius <= 0) {
//     console.log("Invalid input. Please enter a valid positive number.");
// } else {
//     const circle = new Circle(radius);
//     const area = circle.calculateArea();
//     const perimeter = circle.calculatePerimeter();

//     console.log(`Radius: ${radius}`);
//     console.log(`Area: ${area.toFixed(2)}`);
//     console.log(`Perimeter (Circumference): ${perimeter.toFixed(2)}`);
// }


// ------------------------------------------------------------------------------------------------------
// JAVASCRIPT RECURSION
// --------------------------------------------------------------------------------------------------

// /* Write a JavaScript program to calculate the factorial of a number.
// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the 
// product of all positive integers less than or equal to n. For example, 5! = 5 x 4 x 3 
// x 2 x 1 = 120
// */

// function factorial(n)
// {
//     if(n==0 || n==1)
//     {
//         return 1;
//     }
//     else{
//         return n*factorial(n-1);
//     }
// }
// let a = 4;
// let res = factorial(a);
// console.log(res);


// /*Write a JavaScript program to find the greatest common divisor (gcd) of two 
// positive numbers.*/

// function gcd(a,b)
// {
//     if(b==0)
//     {
//         return a;
//     }

//     return gcd(b,a%b);
// }
// let a = 4;
// let b = 8;
// let res = gcd(a,b);
// console.log(res);



// /* Write a JavaScript program to get the integers in range (x, y).
// Example : range(2, 9)
// Expected Output : [3, 4, 5, 6, 7, 8]
// */

// function rangeOutput(x,y)
// {
//     if (x >= y - 1) {
//         return [];
//     }
//     else
//     {
//         return [x+1, ...rangeOutput(x+1,y)];
//     }
// }
// let a = 4;
// let b = 8;
// let res = rangeOutput(a,b);
// console.log(res);


// /* Write a JavaScript program to compute the sum of an array of integers.
// Example : var array = [1, 2, 3, 4, 5, 6]
// Expected Output : 21
// */

// function sumArray(arr)
// {
//     if(arr.length == 0)
//     {
//         return 0;
//     }
//     return arr[0] + sumArray(arr.slice(1));
// }
// let a = [1,2,3,4,5,6,7];
// let res = sumArray(a);
// console.log(res);


// /* Write a JavaScript program to compute the exponent of a number.
// Note : The exponent of a number says how many times the base number is used 
// as a factor.
// 8^2 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent.
// */

// function expo(b,n)
// {
//     if(n == 0)
//     {
//         return 1;
//     }

//     return b*expo(b,n);
// }
// let x = 8;
// let y = 2;
// let res = expo(x,y);
// console.log(res);



// /* . Write a JavaScript program to get the first n Fibonacci numbers.
// Note : The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 
// 21, 34, . . . Each subsequent number is the sum of the previous two.
// */

// function fibo(n)
// {
//     if(n==1)
//     {
//         return [0,1];
//     }

//     let f = fibo(n-1);

//     f.push(f[f.length-1]+ f[f.length-2]);

//     return f;
// }
// let A = 10;
// let res= fibo(A);
// console.log(res.join(' '));

// //Write a JavaScript program to check whether a number is even or not.

// function evenOrNot(n)
// {
//     if(n==0)
//     {
//         return true;
//     }
//     if(n==1)
//     {
//         return false;
//     }
//     else{
//         return evenOrNot(n-2);
//     }
// }
// let a = 5; 
// let res = evenOrNot(a);
// console.log(res);

// /* Write a JavaScript program for binary search.
// Sample array : [0,1,2,3,4,5,6]
// console.log(l.br_search(5)) will return '5'
// */

// function binarySearchUsingRecursion(arr,x,low, high)
// {


//     let mid =  Math.floor((high+low)/2);

//     if(arr[mid]==x)
//     {
//         return mid;
//     }

//     else if(arr[mid]>x)
//     {
//         return binarySearchUsingRecursion(arr,x, low, mid-1);
//     }
//     else{
//         return binarySearchUsingRecursion(arr,x, mid+1, high);
//     }
    
// }

// function binarySearchFinal(arr, x)
// {
//     return binarySearchUsingRecursion(arr, x, 0, arr.length-1);
// }
// let a = [1,2,3,4,5];
// let res = binarySearchFinal(a,4);
// console.log(res);

// ---------------------------------------------------------------------------------------
// JAVASCRIPT STRINGS 
// ---------------------------------------------------------------------------------------
// //Write a JavaScript function to check whether an `input` is a string or not.

// function isString(input)
// {
//    return typeof input == "string";
// }

// console.log(isString("A"));

// //Write a JavaScript function that takes a string which has lower and upper 
// //case letters as a parameter and converts upper case letters to lower case, and 
// //lower case letters to upper case

// function swapCase(str) {
//     let swapped = '';
//     for (let i = 0; i < str.length; i++) {
//         let char = str.charAt(i);
//         if (char === char.toUpperCase()) {
//             swapped += char.toLowerCase();
//         } else {
//             swapped += char.toUpperCase();
//         }
//     }
//     return swapped;
// }

// console.log(swapCase("Hello World")); 
// console.log(swapCase("JavaScript")); 
// console.log(swapCase("123ABC")); 


// //Write a JavaScript function to convert a string into camel case.

// function toCamelCase(str) {
//     // Split the string by spaces or dashes
//     let words = str.split(/[ \-]/);
    
//     // Capitalize the first letter of each word after the first
//     for (let i = 1; i < words.length; i++) {
//         words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//     }
    
//     // Concatenate the words and return
//     return words.join("");
// }

// console.log(toCamelCase("hello world")); 
// console.log(toCamelCase("foo-bar-baz")); 
// console.log(toCamelCase("the_quick_brown_fox")); 


// //Write a JavaScript function to uncamelize a string.

// function uncamelize(str, separator = ' ') {
//     let result = '';
    
//     for (let char of str) {
//         if (char === char.toUpperCase() && result.length > 0) {
//             result += separator; // Add separator before uppercase letters
//         }
//         result += char.toLowerCase(); // Add the current character in lowercase
//     }

//     return result;
// }

// console.log(uncamelize("helloWorld")); 
// console.log(uncamelize("fooBarBaz", "_")); 
// console.log(uncamelize("someCamelCaseText", "-")); 


// // Write a JavaScript function to concatenates a given string n times (default is 1)

// function concatenateNTimes(str, n = 1) {
//     let result = '';
//     for (let i = 0; i < n; i++) {
//         result += str;
//     }
//     return result;
// }

// console.log(concatenateNTimes("hello", 3));
// console.log(concatenateNTimes("abc")); 
// console.log(concatenateNTimes("123", 5)); 


// //Write a JavaScript function to insert a string within a string at a particular position (default is 1).

// function insertString(originalString, stringToInsert, position = 1) {
//     return originalString.slice(0, position) + stringToInsert + originalString.slice(position);
// }

// console.log(insertString("Hello world", "beautiful ", 6)); 
// console.log(insertString("This is a test", "small ", 11)); 
// console.log(insertString("JavaScript", "awesome ")); 


// //Write a JavaScript function to humanized number (Formats a number to a 
// //human-readable string.) with the correct suffix such as 1st, 2nd, 3rd or 4th.

// function humanizeNumber(num) {
//     if (!Number.isFinite(num) || !Number.isInteger(num)) {
//         return num;
//     }

//     let suffix;
//     const lastDigit = num % 10;
//     const lastTwoDigits = num % 100;

//     if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
//         suffix = 'th'; 
//     } else if (lastDigit === 1) {
//         suffix = 'st';
//     } else if (lastDigit === 2) {
//         suffix = 'nd';
//     } else if (lastDigit === 3) {
//         suffix = 'rd';
//     } else {
//         suffix = 'th';
//     }

//     return num + suffix;
// }

// console.log(humanizeNumber(1)); 
// console.log(humanizeNumber(22)); 
// console.log(humanizeNumber(333)); 
// console.log(humanizeNumber(104)); 
// console.log(humanizeNumber(1000)); 


// function truncateString(str, maxLength, ellipsis = '…') {
//     // Check if the string length is greater than the maxLength
//     if (str.length > maxLength) {
//         // Return the truncated string with ellipsis
//         return str.slice(0, maxLength) + ellipsis;
//     } else {
//         return str;
//     }
// }

// console.log(truncateString("Hello world", 5)); 
// console.log(truncateString("JavaScript is awesome", 15)); 
// console.log(truncateString("This is a long sentence", 20, '...')); 
// console.log(truncateString("Short", 10)); 




// function chopString(str, chunkLength) {
//     if (chunkLength <= 0) {
//         return [str]; // Return the whole string as a single chunk if chunkLength is zero or negative
//     }

//     let chunks = [];
//     for (let i = 0; i < str.length; i += chunkLength) {
//         chunks.push(str.slice(i, i + chunkLength));
//     }
    
//     return chunks;
// }

// console.log(chopString("Hello world", 3)); 
// console.log(chopString("JavaScript is awesome", 5)); 
// console.log(chopString("1234567890", 2)); 



// function countSubstringOccurrences(str, substr) {
//     if (!str || !substr) {
//         return 0; // Handle edge cases where either input is empty or undefined
//     }

//     let count = 0;
//     let position = str.indexOf(substr); // Find the first occurrence of substr

//     // Loop until substr is not found anymore
//     while (position !== -1) {
//         count++; // Increment count for each occurrence found
//         position = str.indexOf(substr, position + 1); // Search for the next occurrence starting from position + 1
//     }

//     return count;
// }

// console.log(countSubstringOccurrences("hello world hello hello", "hello")); 
// console.log(countSubstringOccurrences("ababababab", "ab"));
// console.log(countSubstringOccurrences("javascript is awesome", "Python")); 



// //Write a JavaScript function to check whether a string is blank or not.

// function isBlank(str) {
//     // Remove leading and trailing whitespace characters
//     var trimmedStr = str.trim();
    
//     // Check if the trimmed string is empty
//     return trimmedStr.length === 0;
// }

// console.log(isBlank(" "));

// function repeatString(str, times) {
//     let repeatedString = '';
//     for (let i = 0; i < times; i++) {
//         repeatedString += str;
//     }
//     return repeatedString;
// }

// console.log(repeatString("hello", 3)); 
// console.log(repeatString("abc", 5)); 

// function getStringAfterCharacter(str, char) {
//     let index = str.indexOf(char);

//     if (index === -1) {
//         return '';
//     }

//     return str.slice(index + 1); 
// }

// console.log(getStringAfterCharacter("Hello world", "o")); 
// console.log(getStringAfterCharacter("JavaScript is awesome", "i")); 

// function trimString(str) {
//     return str.trim();
// }

// console.log(trimString("   Hello world   ")); 
// console.log(trimString("   JavaScript is awesome   ")); 

// function truncateStringToWords(str, numWords) {
//     let words = str.split(' ');

//     if (numWords >= words.length) {
//         return str;
//     }

//     return words.slice(0, numWords).join(' ') + '...';
// }

// console.log(truncateStringToWords("This is a sample sentence for testing purposes", 4));



// function alphabetizeString(str) {
//     let chars = str.split('');

//     let sortedChars = chars.sort();
//     let sortedString = sortedChars.join('');

//     return sortedString;
// }

// console.log(alphabetizeString("hello"));


// function removeFirstOccurrence(str, searchStr) {
//     return str.replace(searchStr, "");
// }

// console.log(removeFirstOccurrence("hello world hello", "hello")); 

// //Write a JavaScript function to convert a string in abbreviated form

// function truncate_string(str, num) {
//     return str.substring(0, num);
// }

// console.log(truncate_string("Nitya Bansal", 4));

// //Write a JavaScript function to hide email addresses to protect from unauthorized user

// function protect_email(email) {
//     const [user, domain] = email.split('@');
//     const hiddenUser = user.slice(0, user.length / 2) + '...';
//     return `${hiddenUser}@${domain}`;
// }

// console.log(protect_email("nitya_bansal@example.com")); 

// //Write a JavaScript function to parameterize a string.

// function parameterizeString(str) {
//     var parameterized = str.toLowerCase();
//     parameterized = parameterized.replace(/\s+/g, '-');
//     parameterized = parameterized.replace(/[^\w\-]+/g, '');

//     return parameterized;
// }

// console.log(parameterizeString("Robin Singh from USA."));


// //Write a JavaScript function to capitalize the first letter of a string.

// function capitalizeFirstLetter(str) {
//     if (str.length === 0) {
//         return "";
//     }

//     return str.charAt(0).toUpperCase() + str.slice(1);
// }

// console.log(capitalizeFirstLetter("hello"));


// ----------------------------------------------------------------------------
// JAVASCRIPT VALIDATION 
// ----------------------------------------------------------------------------


// //Write a JavaScript function to validate whether a given value type is boolean or not.

// function isBoolean(value) {
//     return typeof value === 'boolean';
// }

// console.log(isBoolean(true));  
// console.log(isBoolean(false)); 

// //Write a JavaScript function to check whether given value types are same or not

// function areSameType(value1, value2) {
//     return typeof value1 === typeof value2;
// }


// console.log(areSameType(5, 10));        // true (both numbers)
// console.log(areSameType('hello', 'world')); // true (both strings)


// //Write a JavaScript function to validate whether a given value type is null or not.

// function isNull(value)
// {
//     return typeof value == null;
// }

// console.log(isNull(null));       
// console.log(isNull(undefined))

// //Write a JavaScript function to validate whether a given value is number or not.

// function isNumber(value)
// {
//     return typeof value == "number";
// }

// console.log(isNumber(23));

// //Write a JavaScript function to validate whether a given value is object or not.

// function isObject(value)
// {
//     return typeof value == 'object' && value !== null;
// }
// console.log(isObject({}));



// //Write a JavaScript function to validate whether a given value type is pure json object or not.

// function isJSONObject(value) {
//     // Check if value is an object and not null
//     if (typeof value === 'object' && value !== null) {
//         // Check if value is not an array and not a Date object
//         return !Array.isArray(value) && !(value instanceof Date);
//     }
//     return false;
// }

// console.log(isJSONObject({}));                
// console.log(isJSONObject({ key: 'value' }));  

// //Write a JavaScript function to validate whether a given value is RegExp or not.

// function isRegExp(value) {
//     return value instanceof RegExp;
// }

// console.log(isRegExp(/test/));   
// console.log(isRegExp(new RegExp('test'))); 

// //Write a JavaScript function to validate whether a given value type is char or not.

// function isChar(value)
// {
//     return typeof value == "string";
// }

// console.log(isChar("A"));