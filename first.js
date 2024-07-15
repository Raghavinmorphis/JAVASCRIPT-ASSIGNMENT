// let a= prompt("enter your age")
// if(a>10 && a<20){
//     console.log("good")
// }
// prompt("dfsadfasdafds")

// 1. Write a JavaScript program that accept two integers and display the larger.

// let a = prompt("enter any number1");
// let b = prompt("enter any number2");
// if (a<b){
//     console.log(`number2 : ${b} is greater than number1 : ${a}.`)
// }
// else if(a>b){
//     console.log(`number1 : ${a} is greater than number2 : ${b}.`)
// }
// else{
//     console.log("wrong input")
// }

// 2. Write a JavaScript conditional statement to find the sign of product of three 
// numbers. Display an alert box with the specified sign.   
// Sample numbers : 3, -7, 2  
// Output : The sign is -  

// let a = prompt("enter any number1");
// let b = prompt("enter any number2");
// let c = prompt("enter any number3");
// let product = a*b*c;
// if(product<0){
//     alert("The Sign is -ve")
// }
// else if(product>0){
//     alert("The Sign is +ve")
// }
// else{
//     alert("Wrong Input")
// }

// 3. Write a JavaScript conditional statement to sort three numbers. Display an 
// alert box to show the result.   
// Sample numbers : 0, -1, 4  
// Output : 4, 0, -1 

// let a = prompt("enter any number1");
// let b = prompt("enter any number2");
// let c = prompt("enter any number3");

// let first,second,third;
// if(a>b && a>c){
//     first=a;
//     if(b>c){
//         second=b
//         third=c
//     }
//     else{
//         second=c
//         third=b
//     }
// }
// else if(b>a && b>c){
//     first=b;
//     if(a>c){
//         second=a
//         third=c
//     }
//     else{
//         second=c
//         third=a
//     }
// }
// else if(c>a && c>b){
//     first=c;
//     if(a>b){
//         second=a
//         third=b
//     }
//     else{
//         second=b
//         third=a
//     }
// }
// else{
//     alert("Wrong Input")
// }
// alert(`Sorted Numbers: ${first} , ${second} , ${third}`)


// 4. Write a JavaScript conditional statement to find the largest of five numbers. 
// Display an alert box to show the result.  
// Sample numbers : -5, -2, -6, 0, -1  
// Output : 0 

// let a = prompt("enter any number1");
// let b = prompt("enter any number2");
// let c = prompt("enter any number3");
// let d = prompt("enter any number4");
// let e = prompt("enter any number5");

// if(a>b && a>c && a>d && a>e){
//     alert(`The Largest Number in Given Number is a : ${a}`)
// }
// else if(b>a && b>c && b>d && b>e){
//     alert(`The Largest Number in Given Number is b : ${b}`)
// }
// else if (c>a && c>b && c>d && c>e){
//     alert(`The Largest Number in Given Number is c : ${c}`)
// }
// else if(d>a && d>b && d>c && d>e){
//     alert(`The Largest Number in Given Number is d : ${d}`)
// }
// else if(e>a && e>b && e>c && e>d){
//     alert(`The Largest Number in Given Number is e : ${e}`)
// }
// else{
//     alert("Wrong Input")
// }

// 5. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it 
// will check if the current number is odd or even, and display a message to the 
// screen.   
// Sample Output :  
// "0 is even"  
// "1 is odd"  
// "2 is even"

// for (let i = 0; i <= 15; i++) {
//     if (i % 2 ==+ 0) {
//         alert(`${i} is even`);
//     } else {
//         alert(`${i} is odd`);
//     }
// }

// 6. Write a JavaScript program which compute, the average marks of the following 
// students Then, this average is used to determine the corresponding grade. 

// let David =80;
// let Vinoth = 77;
// let Divya = 88;
// let Ishitha = 95;
// let Thomas = 68;
// let AverageMarks =David+Vinoth+Divya+Ishitha+Thomas/5;
// if (AverageMarks < 60) {
//     alert(`The Average Marks of the Students: ${AverageMarks} The Grade is : F`);
// } 
// else if (AverageMarks < 70) {
//     alert(`The Average Marks of the Students: ${AverageMarks} The Grade is : D`);
// }
// else if (AverageMarks < 80) {
//     alert(`The Average Marks of the Students: ${AverageMarks} The Grade is : C`);
// } 
// else if (AverageMarks < 90) {
//     alert(`The Average Marks of the Students: ${AverageMarks} The Grade is : B`);
// } 
// else {
//     alert(`The Average Marks of the Students: ${AverageMarks} The Grade is : B`);
// }


// 7. Write a JavaScript program which iterates the integers from 1 to 100. But for 
// multiples of three print "Fizz" instead of the number and for the multiples of five 
// print "Buzz". For numbers which are multiples of both three and five print 
// "FizzBuzz".

// for (let i = 1; i <= 100; i++) {

//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } 
//     else if (i % 3 === 0) {
//         console.log("Fizz");
//     } 
//     else if (i % 5 === 0) {
//         console.log("Buzz");
//     } 
//     else {
//         console.log(i);
//     }
// }


// 10. Write a JavaScript program to construct the following pattern, using a nested 
// for loop.  
// *   
// * *   
// * * *   
// * * * *   
// * * * * * 


// for (let i = 1; i <= 5; i++) {
//     let pattern = '';
//     for (let j = 1; j <= i; j++) {
//         pattern += '* ';
//     }
//     console.log(pattern);
// }


// 11. Write a JavaScript program to compute the greatest common divisor (GCD) 
// of two positive integers.   

// let a = prompt("enter any number1");
// let b = prompt("enter any number2");
// let gcd;
// let smaller = (a<b) ? a : b;
// for (let i = 1; i <= smaller; i++) {
//     if (a % i === 0 && b % i === 0) {
//         gcd = i; 
//     }
// }
// alert(`The GCD of ${a} and ${b} is: ${gcd}`);

// 12. Write a JavaScript program to sum the multiples of 3 and 5 under 1000. 

// let sum = 0;
// for (let i = 1; i < 1001; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//         sum += i; 
//     }
// }
// console.log("The sum of multiples of 3 and 5 under 1000 is:", sum);
