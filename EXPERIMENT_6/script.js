let fontSize = 18;

function changeHeading(){
    let text = document.getElementById("newHeading").value;
    if(text !== "")
        document.getElementById("heading").innerHTML = text;
}

function changeColor(){
    let colors = ["#ffe4e6","#e0f2fe","#dcfce7","#fef9c3","#f3e8ff"];
    let random = colors[Math.floor(Math.random()*colors.length)];
    document.getElementById("page").style.backgroundColor = random;
}

function increaseFont(){
    fontSize += 2;
    document.getElementById("demo").style.fontSize = fontSize + "px";
}

function decreaseFont(){
    fontSize -= 2;
    document.getElementById("demo").style.fontSize = fontSize + "px";
}

function changeFontColor(){
    let colors = ["red","blue","green","purple","orange"];
    let random = colors[Math.floor(Math.random()*colors.length)];
    document.getElementById("demo").style.color = random;
}

function togglePara(){
    let p = document.getElementById("demo");

    if(p.style.display === "none")
        p.style.display = "block";
    else
        p.style.display = "none";
}

function resetPage(){
    document.getElementById("heading").innerHTML = "Welcome to JavaScript Lab";
    document.getElementById("page").style.backgroundColor = "#e5e7eb";
    document.getElementById("demo").style.display = "block";
    document.getElementById("demo").style.color = "black";

    fontSize = 18;
    document.getElementById("demo").style.fontSize = "18px";
    document.getElementById("newHeading").value = "";
}