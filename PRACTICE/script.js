 console.log("Hello JS");
  console.log("JS is a programming language");
  
  //Variables
  let fullName="Palak Yadav";
  console.log(fullName);
  let age=18;
  console.log(age);

  //data types 
  let Age=18; //number
  let Name="Palak Yadav"; //string
  let isStudent=true; //boolean
  let hobbies=["Reading","Traveling","Cooking"];    //array
 
  //OBJECT
  let address={street:"123 Main St",
     city:"Anytown", 
     country:"USA"}; 
  
    console.log(Age);
    console.log(Name);
    console.log(isStudent);
    console.log(hobbies);
    console.log(address);
//we can get what type of data we have using typeof operator
console.log(typeof Age);
console.log(typeof Name);
console.log(typeof isStudent);
console.log(typeof hobbies);
console.log(typeof address);



//PRODUCT
const product={ 
    title:"Parker Pen",
    price:270,
    rating:5,
    offer:"5% off",
};
console.log(product);


//Practice Create an object
const profile={
    username:"Shraddha Khapra",
    followers:"569K",
    following:4,
    posts:150,
    bio:"Apna College | Ex microsoft , DRDO"
}
console.log(profile);



//ARITHEMETIC OPERATORS
let a=8;
let b=10;
console.log("a+b=",a+b);
console.log("a-b=",a-b);
console.log("a*b=",a*b);
console.log("a/b=",a/b);
console.log("a%b=",a%b);
//Exponeentiation
console.log(a**b); //a raised to the power of b

//UNARY OPERATORS
let c=5;
console.log("c=",c);
console.log("++c=",++c);//pre-increment
console.log("c++=",c++);//post-increment    
console.log("c=",c);//after post-increment c becomes 7


//COMPARISION OPERATORS
let x=99;
let y =77;
console.log("x==y",x==y);//false
console.log("x!=y",x!=y);//true
console.log("x>y",x>y);//true   
console.log("x<y",x<y);//false
console.log("x>=y",x>=y);//true
console.log("x<=y",x<=y);//false


//STRING AND NUMBER
let X="100";
let Y=100;
console.log("X===Y",X===Y);//false because === checks for value and type



//LOGICAL OPERATORS
let p=10;
let q=9;
console.log("p>q && p!=q",p>q && p!=q);//true //AND operator
console.log("p<15||q>10",p<15||q>10);//true //OR operator
console.log("!(p>q)",!(p>q));//false //NOT operator   



//CONDITIONAL STATEMENTS

//IF STATEMENT
let AGE=18;
if(AGE>=18){  
    console.log("You are eligible to vote");
}
if(AGE<18){
    console.log("You are not eligible to vote");
}




//IF ELSE STATEMENT

let marks=85;
if (marks>40){
    console.log("Passed");
}
else{console.log("Failed");}


//IF ELSE IF LADDER
let percentage=85;
let grade;
if(percentage>=90){
    grade="A+";
}
else if(percentage>=75){
    grade="A";}
    else if(percentage>=50){
        grade="B";
    }
    else {
        grade="Fail";
    }
    console.log("Grade:", grade);


    //TERNARY OPERATOR
    //SYNTAX: condition ? if true :if false
    let Mark=77;
    let result = Mark>=40?"Passed":"Failed";
    console.log("Result:",result);

    let age1=20;
    age1>=10?console.log("Adult"):console.log("Not adult");



    //ALERT ONE TIME POP UP
    alert("Welcome to JavaScript Programming!");

    //PROMPT TO TAKE INPUT FROM USER
    let yourName=prompt("Enter your name:");
    console.log("Hello, " + yourName + "!");

/*
    // Ques 1: Get user to input the number using prompt and check if it is divisible by 5 or not 

    let num=prompt("Enter number: ");
    if(num%5==0){
        console.log("Number is divisible.");
    }
    else{
        console.log("Not divisible.");
    }



    // Ques 2: WAC to calculate the grade of student wrt marks 
    let subMarks=prompt("Enter marks:");
    if(subMarks>=80){
        console.log("Grade is A");
    }
    else if(subMarks>=70){
        console.log("Grade is B");
    }
    else if(subMarks>=60){
        console.log("Grade is C");
    }
    else if(subMarks<=40){
        console.log("Grade is D");
    }
    else{
        console.log("Grade is F");
    }

*/


    //LOOPS IN JAVASCRIPT
    //FOR LOOP

    for(let i=1;i<=5;i++){
        console.log(i);
    }

    //WHILE LOOP
    let i=1;
    while(i<=4){
        console.log("*");
        i++;
    }

     //DO WHILE LOOP
   let j=1;
   do{
    console.log(j);
    j++;
   }while(j<=3);


   //FOR OF LOOP
   let colors=["Red","Green","Blue"];   
    for(let i of colors){
        console.log(i);
    }



    //create a game in which u start with a random game number and ask the user to keep guessing the number until he guesses it right
    let gameNumber=25;
   let userGuess= prompt("Guess the number :");
   while(userGuess!=gameNumber){
    userGuess=prompt("Try again! Guess the  number: ");
   }
console.log("Congratulations! You guessed the number.╰(*°▽°*)╯🥳");  


//STRING IN JS
//STRING IN JAVA SCRIPT ALSO HAS SOME IBUILT PROPERTIES AND METHODS THESE METHODS ALSO CALLED AS STRING FUNCTIONS

   //CREATE A STRING
   let str="HELLO EVERYONE!";

   //STRING index value print
   console.log(str[2]);

   //string length 
   console.log(str.length);


   //OBJECT CREATE
   let obj={
    item:"Laptop",
    price:100000,

   };
   console.log("The price of the ",obj.item, "is",obj.price ,"rupees.");

   //u can also write this using tempelate literals
   //a way to embed variables and expressions in a string is by using template literals which are enclosed by backticks ``
   //SYNTAX: `string text ${expression} string text`
   //to create string by doing substitution of placeholders //STRING INTERPOLATION

   console.log(`The price of this ${obj.item} is ${obj.price} rupees.`);

//NEXT LINE
console.log("Hello\nWorld!"); //\n is used to create a new line in the string
//TAB
console.log("Hello\tWorld!"); //\t is used to create a tab space in the string
//escape character taken as single character in length




//STRING METHODS OR FUNCTIONS
//method means it will do some work or we can say it will give an output

//UPPERCASE
let str1="Palak  Yadav";
let newStr=str1.toUpperCase();
console.log(newStr);

//LOWERCASE
let str2="ABES ENGINEERING COLLEGE";
let newStr2=str2.toLowerCase();
console.log(newStr2);

//TRIM
let str3="   Hello         World!   ";
let newStr3=str3.trim();
console.log(newStr3); 


//ARRAY IN JAVASCRIPT

let arr=["palak","bhoomika","yashasvi","bhoomi"];//collection of data of any type
console.log(arr);
console.log(arr.length); //length of array
console.log(arr[2]); //accessing element at index 


  