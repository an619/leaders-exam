
function edit() {
    let student = prompt("enter student name");
    let studentfb = prompt("enter student fb");
    let parent = prompt("enter student parent name");
    let parentfb = prompt("enter student facebook");
    let age = prompt("enter Group leader name");
    let Groupleader = prompt("enter leader name");

    let td1 = document.getElementById("td1");
    let td2 = document.getElementById("td2");
    let td3 = document.getElementById("td3");
    let td4 = document.getElementById("td4");
    let td5 = document.getElementById("td5");
    let td6 = document.getElementById("td6");

    td1.textContent = student;
    td2.textContent = studentfb;
    td3.textContent = parent;
    td4.textContent = parentfb;
    td5.textContent = age;
    td6.textContent = Groupleader;
};
