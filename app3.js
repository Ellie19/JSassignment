//CHAPTER 38-42

//1. Write a custom function power ( a, b ), to calculate the value of a raised to b.
/*
var a = +prompt("ENTER NUMBER: ", "2");
var b = +prompt("ENTER POWER: ", "4");
var value = power(a, b);
document.write(value);

function power(a, b) {

    var value = a;
    for (var i = 1; i < b; i++) {
        value = value * a;
    }
    return value;
}

//2. Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not.

var a = +prompt("ENTER YEAR: ", "2020");
var result = leap(a);
if (result == 1)
    document.write(a + " is a leap year");
else
    document.write(a + " is not a leap year");


function leap(a) {
    var i = 0;
    if ((a % 4 && a % 100 && a % 400) == 0)
        i = 1;
    else
        i = 0;
    return i;
}

//3. If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle is given by area = S(S − a)(S − b)(S − c)
  where, S = ( a + b + c ) / 2 Calculate area of triangle using 2 functions */
/*
var a = +prompt("ENTER SIDE ONE: ", "2");
var b = +prompt("ENTER SIDE TWO: ", "1");
var c = +prompt("ENTER SIDE THREE: ", "3");
var result = tarea(a, b, c);
document.write(result);

function tarea(a, b, c) {
    var s = cals(a, b, c);
    var result = s * (s - a) * (s - b) * (s - c);
    return result;

}

function cals(a, b, c) {
    return ((a + b + c) / 2);
}

//4. Write a function that receives marks received by a student in 3 subjects and returns the average and percentage of these marks.there should be 3 functions one is the mainFunction
and other are for average and percentage.Call those functions from mainFunction and display result in mainFunction.

var a = +prompt("ENTER MARKS OF FIRST SUBJECT: ", "80");
var b = +prompt("ENTER MARKS OF SECOND SUBJECT: ", "90");
var c = +prompt("ENTER MARKS OF THIRD SUBJECT: ", "85");
var averageResult = average(a, b, c);
var percentageResult = percentage(a, b, c);
document.write("PERCENTAGE : " + percentageResult + "<br> AVERAGE : " + averageResult);

function average(a, b, c) {
    return ((a + b + c) / 3);
}

function percentage(a, b, c) {
    var a = ((a + b + c) / 300) * 100
    return a;
}

//5. You have learned the function indexOf. Code your own custom function that will perform the same functionality.You can code
    for single character as of now.

var collection = ['5', '4', '3', '2', '1'];
var target = '1';
var index = myIndexOf(collection, target);
document.write(index);

function myIndexOf(collection, target) {
    for (var val = 0; val < collection.length; val++) {
        if (collection[val] === target) {
            return val;
        }
    }
}

//6. Write a function to delete all vowels from a sentence. Assume that the sentence is not more than 25 characters long.

var str = prompt("ENTER STRING : ", "HELLO WORLD");
str = removeVowels(str);
document.write(str);

function removeVowels(str) {
    return str.replace(/[aeiou]/gi, '');
}

//7. Write a function with switch statement to count the number of occurrences of any two vowels in succession in a line of text.
For example, in the sentence “Pleases read this application and give me gratuity”
Such occurrences are ea, ea, ui.

function findOccurrences(str) {
    var count = 0;
    let haveSeenVowel = false;

    for (const letter of str.toLowerCase()) {
        switch (letter) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                {
                    if (haveSeenVowel) {
                        count++;
                        haveSeenVowel = false;
                    } else {
                        haveSeenVowel = true;
                    }
                    break;
                }
            default:
                haveSeenVowel = false
        }
    }

    return count
}
var str = prompt("Enter String");
var a = findOccurrences(str);
document.write(a);

//8. The distance between two cities (in km.) is input through the keyboard. Write four functions to convert and print this 
      distance in meters, feet, inches and centimeters.

var a = +prompt("ENTER DISTANCE BETWEEN TWO CITIES IN KM : ", "28");
var meter = toMeter(a);
var feet = toFeet(a);
var inch = toInch(a);
var cm = toCm(a);
document.write("IN KM : " + a + "<br>IN METER : " + meter + "<br> IN FEET : " + feet + " <br> IN INCHES : " + inch + "<br>IN CENTIMETER : " + cm);


function toMeter(a) {
    return (a * 1000);
}

function toFeet(a) {
    return (a * 3280.84);
}

function toInch(a) {
    return (a * 39370.1);
}

function toCm(a) {
    return (a * 100000);
}

//9. Write a program to calculate overtime pay of employees. Overtime is paid at the rate of Rs. 12.00 per hour for every hour
     worked above 40 hours. Assume that employees do not work for fractional part of an hour. 

var hours = +prompt("INPUT HOURS WORKED: ", "45");
var salary = calSalary(hours);
document.write("TOTAL SALARY: " + salary);

function calSalary(hours) {
    if (hours > 40) {
        var overtime = (hours - 40);
        var sal = (40 * 10);
        var osal = calOvertimeSalary(overtime);
        var totalSalary = (sal + osal);
        return totalSalary;
    } else if (hours <= 40)
        return (hours * 10);

}

function calOvertimeSalary(overtime) {
    return (overtime * 12);
}

//10. A cashier has currency notes of denominations 10, 50 and 100. If the amount to be withdrawn is input through the
keyboard in hundreds, find the total number of currency notes of each denomination the cashier will have to give to the withdrawer. 

var amount = +prompt("ENTER AMOUNT TO WITHDRAW : ", "470");
notes(amount);

function notes(amount) {
    document.write("Required notes of Rs. 100  :  " + Math.floor((amount / 100)));
    document.write("<br>Required notes of Rs. 50  :  " + Math.floor(((amount % 100) / 50)));
    document.write("<br>Required notes of Rs. 10  :  " + Math.floor((((amount % 100) % 50) / 10)));
    document.write("<br>Amount still remaining Rs. :  " + Math.floor((((amount % 100) % 50) % 10)));
}


//CHAPTER# 43-48

//1. Show an alert box on click on a link. (in html file) 

//2. Display some Mobile images in browser. On click on an image Show the message in alert to user.

function thanksUser() {
    alert('Thanks for purchasing a phone from us');
}

//3. Display 10 student records in table and each row should contain a delete button.
 If you click on a button to delete a record, entire row should be deleted. 

 
function SomeDeleteRowFunction(o) {
    var p = o.parentNode.parentNode;
    p.parentNode.removeChild(p);
}

//4. Display an image in browser. Change the picture on mouseover and set the
first picture on mouseout.

function changePic(image) {
    image.src = "baby.jpg";
}

function returnPic(image) {
    image.src = "anahita.jpg";
}

//5. Show a counter in browser. Counter should increase on click on increase button and 
     decrease on click on decrease button. And show updated counter value in browser.


var button = document.getElementById("increase");
count = 0;
button.onclick = function() {
    count += 1;
    para.innerHTML = count;

}
var button = document.getElementById("decrease");

button.onclick = function() {
    count -= 1;
    para.innerHTML = count;

}

//CHAPTER# 49-52

//1.Create a signup form and display form data in your web page on submission.

function myFunction() {

    var x = document.getElementById("myForm").elements.length;

    for (var i = 0; i < x; i++) {
        alert(document.getElementById("myForm").elements[i].value);
    }

}
//2. Suppose in your webpage there is content area in which you have entered your item details, but user can only see
     some details on first look. When user clicks on “Read more” button, full detail of that particular item will be displayed.

function readFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var linkTxt = document.getElementById("myLink");
    if (dots.style.display === "none") {
        dots.style.display === "inline";
        linkTxt.innerHTML = "Read More";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        linkTxt.innerHTML = "Read Less";
        moreText.style.display = "inline";
    }
       var name = document.getElementById("fname").value;
    var num = document.getElementById("num").value;
    var email = document.getElementById("email").value;
}

//3.Create a form whichtakes student’ s details and show each student detail in table.Each row of table
     must contain a delete button and an edit button.On click on delete button entire row should 
    be deleted.On click on edit button, a hidden form will appear with the values of that row.
    
var table = document.getElementById("myTable");
table.className = "gridtable";

function add() {

    var namess = document.getElementById("names");
    var grade = document.getElementById("grade");

    var tr = document.createElement("TR");
    tr.setAttribute("id", "myTr");
    table.appendChild(tr);

    var td = document.createElement("TD");
    var td2 = document.createElement("TD");
    var td3 = document.createElement("TD");
    var td4 = document.createElement("TD");


    tr.appendChild(td);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);


    var tdText = document.createTextNode(namess.value);
    var tdText2 = document.createTextNode(grade.value);
    td.appendChild(tdText);
    td2.appendChild(tdText2);
    namess.value = "";
    grade.value = "";
    //DELETE BUTTON
    delBtn = document.createElement("button");
    delText = document.createTextNode("Delete");
    delBtn.setAttribute("class", "btn")
    delBtn.setAttribute("onclick", "deleteItem(this)")
    delBtn.appendChild(delText);
    //EDIT BUTTON
    editBtn = document.createElement("button");
    editText = document.createTextNode("Edit");
    editBtn.setAttribute("class", "btn")
    editBtn.setAttribute("onclick", "editItem(this)")
    editBtn.appendChild(editText);
    td3.appendChild(editBtn);
    td4.appendChild(delBtn);

    console.log(table);

}

function deleteItem(e) {
    e.parentNode.parentNode.remove();
}

function deleteAll() {
    table.innerHTML = "";
}

function editItem(e) {
    var val = prompt("Enter name: ", e.parentNode.parentNode.firstChild.innerHTML)

    var val2 = prompt("Enter Roll Number: ", e.parentNode.parentNode.firstChild.nextSibling.innerHTML)
    e.parentNode.parentNode.firstChild.innerHTML = val;
    e.parentNode.parentNode.firstChild.nextSibling.innerHTML = val2;

} 

//CHAPTER# 52-57

//1. Show Images in MODAL

function showImage(e) {

    var modalImage = document.getElementById("modalImage");
    modalImage.src = e.src;
}

//2.Create paragraphand 2 buttonsof zoom in zoom out 
function zoomin() {
    var computeFontSize = window.getComputedStyle(document.getElementById("myp")).fontSize;
    var x = parseInt(computeFontSize);
    document.getElementById("myp").style.fontSize = (x + 10 + 'px');
}

function zoomout() {
    var computeFontSize = window.getComputedStyle(document.getElementById("myp")).fontSize;
    var x = parseInt(computeFontSize);
    document.getElementById("myp").style.fontSize = (x - 10 + 'px');
}

//CHAPTER# 58-67

//1.Consider code snippet

var div = document.getElementById("main-content");
var children = div.childNodes;
var elements = [];
for (var i = 0; i < div.childNodes.length; i++) {
    var child = div.childNodes[i];
    if (child.nodeType == 1) {
        elements.push(child)
    }
}
document.write("<h3>All child elements of “main-content”</h3>");
for (var i = 0; i < elements.length; i++)
    document.write(elements[i] + "<br>");

var y = document.getElementsByClassName("render");
for (var i = 0; i < y.length; i++)
    document.write(y[i].innerHTML + "<br>");

document.getElementById("firstname").value = "elma";
document.getElementById("last-name").value = "rizwan";
document.getElementById("email").value = "elma.rizwan12@gmail.com";

//2.use HTML code of question 1 and show the result on browser.

var x = document.getElementById("form-content").nodeType;
document.write("Node type of form-content = " + x + "<br>");

var y = document.getElementById("lastName").nodeType;
var z = document.getElementById("lastName").childNodes;

document.write("Node type of lastName = " + y + "<br>Child Node of lastName" + z);
z.values = "update";
var child1 = document.getElementById("main-content").firstElementChild.innerHTML;
var child2 = document.getElementById("main-content").lastElementChild.innerHTML;
document.write("<br><br>First Child = " + child1 + "<br>Second Child = " + child2);

var prevSib = document.getElementById("lastName").previousElementSibling.innerHTML;
var nextSib = document.getElementById("lastName").nextElementSibling.innerHTML;

document.write("<br><br>PREVIOUS SIBLING OF LastName = " + prevSib + "<br>NEXT SIBLING= " + nextSib);

var parent1 = document.getElementById("email").parentNode;
var parentName = parent1.nodeName;
var parentType = parent1.nodeType;
document.write("<br>PARENT NAME = " + parentName + "<br> PARENT NODE TYPE = " + parentType);*/