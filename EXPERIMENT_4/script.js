function calculate(){

let n = Number(document.getElementById("subjects").value);

if(n <= 0){
    alert("Enter valid number of subjects");
    return;
}

let total = 0;

for(let i = 1; i <= n; i++){
    let marks = Number(prompt("Enter marks for subject " + i));
    total += marks;
}

let percentage = total / n;

let grade, result;

if(percentage >= 90){
    grade = "A+";
    result = "Pass";
}
else if(percentage >= 75){
    grade = "A";
    result = "Pass";
}
else if(percentage >= 60){
    grade = "B";
    result = "Pass";
}
else if(percentage >= 50){
    grade = "C";
    result = "Pass";
}
else{
    grade = "F";
    result = "Fail";
}

document.getElementById("total").innerHTML = "Total Marks: " + total;
document.getElementById("percentage").innerHTML = "Percentage: " + percentage.toFixed(2);
document.getElementById("grade").innerHTML = "Grade: " + grade;
document.getElementById("result").innerHTML = "Result: " + result;

}