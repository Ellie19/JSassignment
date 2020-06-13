  // CHAPTER# 1:

  //--------TASK 1---------

  window.alert("Hola! G’day mate!");


  //--------TASK 2--------


  window.alert("Error! Please enter a valid password.");


  //-------TASK 3---------

  window.alert("Welcome to JS Land.. \n Happy Coding");


  //--------TASK 4--------


  window.alert("Welcome to JS Land..");
  window.alert("Happy Coding\n ");



  //--------TASK 5--------



  console.log(alert("hello.. I can run JS through my web browser's console"));


  //--------TASK 6--------

  window.alert("Your Order has been placed.")


  //-------TASK 7----------
  //Done practicing in html file attached.



  // CHAPTER# 2:


  //--------TASK 1---------

  var username = " ";


  //  --------TASK 2---------


  var myName = "Elma Rizwan";


  // --------TASK 3---------


  var message;
  message = " Hello World";
  alert(message);


  // --------TASK 4---------


  var a = "Jhone Doe";
  var b = "15 years old";
  var c = "Certified mobile application developer";
  alert(a);
  alert(b);
  alert(c);

  // --------TASK 5---------



  var a = "pizza\npizz\npiz\npi\np";
  alert(a);


  // --------TASK 6---------


  var email = "elma.rizwan12@gmail.com";
  window.alert("My email address is " + email);


  //  --------TASK 7---------

  var book = "A smarter way to learn JavaScript";
  window.alert("I am trying to learn from the Book " + book);


  // --------TASK 8---------


  document.write("Yah! I can write HTML content through JavaScript");


  //  --------TASK 9---------


  window.alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬ ");
  document.write("“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬” ");


  //CHAPTER # 3:

  //  --------TASK 1---------

  var age = 21;
  window.alert("I am " + age + " years old");

  // --------TASK 2---------

  var N = 1;
  window.alert("You have visited this site" + N + "time");

  //  --------TASK 3---------

  var birthYear = 1999;
  document.write("My birth year is \n" + birthYear + "<br>" + "Data type of my declared variable is number");


  // --------TASK 4---------


  var name = prompt("Please enter your name", "Elma Rizwan");
  var product = prompt("Please enter Product title", "T-shirt(s)");
  var quantity = prompt("Please enter quantity you want to order", "5");
  document.write(name + " ordered " + quantity + " " + product + " on XYZ Clothing store");


  //CHAPTER # 4:

  //  --------TASK 1---------

  var variable1 = "Hello",
      variable2 = "beautiful",
      variable3 = 404;


  //  --------TASK 2---------

  //legal variables:

  var a,
      _elma,
      _404error,
      temp,
      $sss;

  //illegal variables:

  ?
  /* var & virus,
    3 lma,
    404e rror, -sss,
    @halo;
*/
  //    --------TASK 3---------

  document.write("<h1>Rules for naming JS variables</h1>");
  document.write("Variable names can only contain numbers ,$ and _ . For example : $my_1stVariable <br>");
  document.write("Variable must begin with a letter ,$ or _. For example : $name, _name or name <br> ");
  document.write("Variable names are case sensitie <br>");
  document.write("Variable names should not be JS keywords");


  //CHAPTER # 5: 

  //   --------TASK 1---------

  var a = +prompt("Please enter first number");
  var b = +prompt("Please enter second number");
  var c = a + b;
  document.write("Sum of " + a + " and " + b + " is " + c);

  //   --------TASK 2---------


  var a = +prompt("Please enter first number");
  var b = +prompt("Please enter second number");
  var c = prompt("Please select operation", "* / -");
  if (c == "*") {
      var result = a * b;
      document.write("Product of " + a + " and " + b + " is " + result);
  }
  if (c == "/") {
      var result = a / b;
      document.write("Quotient of " + a + " and " + b + " is " + result);
  }
  if (c == "-") {
      var result = a - b;
      document.write("Difference of " + a + " and " + b + " is " + result);
  }


  //    --------TASK 3---------

  var Akkee;
  document.write("Value after variable declaration is: " + Akkee);
  Akkee = 404;
  document.write("<br> Initial value: " + Akkee);
  ++Akkee;
  document.write("<br> Value after increment is: " + Akkee);
  Akkee = Akkee + 7;
  document.write("<br> Value after addition is: " + Akkee);
  --Akkee;
  document.write("<br> Value after decrement is: " + Akkee);
  Akkee = Akkee / 3;
  document.write("<br> The Remainder is: " + Akkee);

  //    --------TASK 4---------

  var ticketPrice = 600;
  document.write("The total cost to buy 5 tickets to a movie is " + 5 * ticketPrice + "PKR");

  //   --------TASK 5---------

  var n = +prompt("Please enter number");
  document.write("Table of " + n + "<br>")
  for (var i = 1; i <= 10; ++i)
      document.write(n + " x " + i + " = " + n * i + "<br>");


  //    --------TASK 6--------- 

  var C = 25;
  var F = 70;

  var CtoF = (C * 9 / 5) + 32;
  var FtoC = (F - 32) * 5 / 9;
  document.write(C + "C is " + CtoF + "F" + "<br>");
  document.write(F + "F is " + FtoC + "C");


  //   --------TASK 7---------


  document.write("<h1> Shopping cart </h1>")
  var item1Price = 650;
  var item2Price = 100;
  var shipingCharges = 100;
  var n1 = +prompt("Please enter quantity of item1");
  var n2 = +prompt("Please enter quantity of item2");
  document.write("Price of item 1 is " + item1Price + "<br>" + "Quantity of item 1 is " + n1 + "<br>");
  document.write("Price of item 2 is " + item2Price + "<br>" + "Quantity of item 2 is " + n2 + "<br>")
  document.write("Shipping Charges " + shipingCharges + "<br><br>");
  var a = n1 * item1Price;
  var b = n2 * item2Price;
  var totalCost = a + b + shipingCharges;
  document.write("Total cost of your order is " + totalCost);

  //   --------TASK 8---------

  var totalMarks = +prompt("Please enter total marks ");
  var marksObtained = +prompt("Please enter  marks obtained by student ");
  var percentage = (marksObtained / totalMarks) * 100;
  document.write("Total Marks : " + totalMarks + "<br>");
  document.write("Marks Obtained :" + marksObtained + "<br>");
  document.write("Percentage : " + percentage + "%");


  //   --------TASK 9---------


  document.write("<h1> Currency to PKR </h1>");
  document.write("1 United States Dollar equals 164.07 Pakistani Rupee <br>");
  document.write("1 Saudi Riyal equals  43.73 Pakistani Rupee <br> ");
  document.write("10 US dollars & 25 Saudi Riyals <br> ");
  var a = 10 * 164.07 + 25 * 43.73;
  document.write("Total Currency in PKR: " + a);


  //    --------TASK 10---------

  var EA = 4;
  EA = ((EA + 5) * 10) / 2;
  document.write(EA);


  //    --------TASK 11---------

  document.write("<h1> Age Calculator </h1>");
  var currentYear = +prompt("Please enter the current year: ");
  var birthYear = +prompt("Please enter  birth year ");
  document.write("Current Year: " + currentYear + "<br>");
  document.write("Birth Year: " + birthYear + "<br>");
  document.write("Your Age is either : " + (currentYear - birthYear - 1) + " or " + (currentYear - birthYear));



  //    --------TASK 12---------

  document.write("<h1>The Geometrizer </h1>");
  var radius = +prompt("Please enter radius of the circle");

  document.write("Radius of the circle is : " + radius + "<br>");
  document.write("The circumference is : " + (2 * 3.142857 * radius) + "<br>");
  document.write("The area is : " + (3.142857 * radius * radius) + "<br>");


  //  --------TASK 13---------

  document.write("<h1>The Lifetime Supply Calculator </h1>");
  var favSnack = prompt("Please enter your favorite snack", "chocolate chip");
  var currentAge = +prompt("Please enter your current age ", "15");
  var maxAge = +prompt("Please enter a maximum age", "65");
  var amountPerDay = +prompt("Please enter average amount of snack per day ", "3");

  document.write("Favorite Snack : " + favSnack + "<br>");
  document.write("Current Age : " + currentAge + "<br>");
  document.write("Estimated Maximum Age : " + maxAge + "<br>");
  document.write("Amount of snack per Day : " + amountPerDay + "<br>");
  document.write("You will need " + ((maxAge - currentAge) * amountPerDay) + "  " + favSnack + " to last you until the ripe old age of " + maxAge);


  //CHAPTER # 6-9:


  //    --------TASK 1---------

  var a = +prompt("Please enter a number", "10");
  document.write("RESULT: <br> The value of a is : " + a + "<br>...................................... " + "<br>");
  document.write("The value of ++a is : " + (++a) + "<br>");
  document.write("Now the value of a is : " + a + "<br> <br>");
  document.write("The value of a++ is : " + (a++) + "<br>");
  document.write("Now the value of a is : " + a + "<br> <br>");
  document.write("The value of --a is : " + (--a) + "<br>");
  document.write("Now the value of a is : " + a + "<br> <br>");
  document.write("The value of a-- is : " + (a--) + "<br>");
  document.write("Now the value of a is : " + a);

  //   --------TASK 2---------


  var a = 2,
      b = 1;
  document.write("Initial value of a is " + a + "<br>");
  document.write("Initial value of b is " + b + "<br>");
  var temp = --a;
  document.write("--a :   " + temp + "<br>");
  temp = temp - --b;
  document.write("--a - --b :   " + temp + "<br>");
  temp = temp + ++b;
  document.write("--a - --b + ++b :   " + temp + "<br>");
  temp = temp + b--
      document.write("--a - --b + ++b + b-- :   " + temp + "<br>");
  a = 2,
      b = 1;
  var result = --a - --b + ++b + b--;
  document.write("a is : " + a + "<br>" + "b is : " + b + "<br>");
  document.write("result is : " + result);


  //   --------TASK 3---------

  var name = prompt("Please Enter Your Good Name", "ELMA RIZWAN ");
  document.write(" <h1>HI THERE  " + name + " ❤️");

  //no task 4
  //  --------TASK 5---------


  var n = +prompt("Please enter number", "5");
  if (n == 0) {
      n = 5;
  }
  document.write("<h1> Table of " + n + "<br>")
  for (var i = 1; i <= 10; ++i)
      document.write(n + " x " + i + " = " + n * i + "<br>");



  //    --------TASK 6---------

  var sbj1 = prompt("Enter subject 1 ", "English");
  var sbj2 = prompt("Enter subject 2 ", "Math");
  var sbj3 = prompt("Enter subject 3 ", "Urdu");
  var maxMarks = 100,
      TOTAL = 300;
  var sbj1Marks = +prompt("Enter " + sbj1 + " marks");
  var sbj2Marks = +prompt("Enter " + sbj2 + " marks");
  var sbj3Marks = +prompt("Enter " + sbj3 + " marks");
  var totalMarksObtained = (sbj1Marks + sbj2Marks + sbj3Marks);
  document.write("<table> <th> Subject </th> <th> Total Marks </th> <th>Obtained Marks</th> <th> Percentage</th><tr> <td>" + sbj1 + "</td>" + "<td>" +
      maxMarks + "</td>" + "<td>" + sbj1Marks + "</td>" + "<td>" + sbj1Marks / maxMarks * 100 + "% </td> </tr> <tr> <td>" + sbj2 + "</td>" + "<td>" +
      maxMarks + "</td>" + "<td>" + sbj2Marks + "</td>" + "<td>" + sbj2Marks / maxMarks * 100 + "% </td> </tr> <tr> <td>" + sbj3 + "</td>" + "<td>" +
      maxMarks + "</td>" + "<td>" + sbj3Marks + "</td>" + "<td>" + sbj3Marks / maxMarks * 100 + "% </td> </tr> <tfoot><tr> <td colspan='2'>" + TOTAL + "</td> <td>" + totalMarksObtained + "</td><td>" + totalMarksObtained / TOTAL * 100 + "% </table>");


  //CHAPTER # 9-11:


  //   --------TASK 1---------

  var city = prompt("Enter your City name ", "Karachi");
  city = city.toLocaleLowerCase();
  if (city === "karachi") {
      document.write("<h1> Welcome to the city of lights ❤️</h1>");
  }


  //   --------TASK 2---------


  var gender = prompt("Enter your Gender ", "female");
  gender = gender.toLocaleLowerCase();
  if (gender === "male")
      document.write("Good Morning Sir!");
  else
      document.write("Good Morning Ma'am 😊");


  //     --------TASK 3---------


  var color1 = prompt("Enter traffic signal color 1 ", "RED");
  var color2 = prompt("Enter traffic signal color 3 ", "YELLOW");
  var color3 = prompt("Enter traffic signal color 3 ", "GREEN");
  document.write("<table border=1> <th> SIGNAL COLOR </th> <th> MESSAGE </th> <tr> <td>" + color1 + "</td> <td> MUST STOP </td> </tr><tr> <td> " + color2 + " </td> <td>READY TO MOVE </td> </tr> <tr> <td> " + color3 + " </td> <td> MOVE NOW </td> </tr> ");



  //    --------TASK 4---------

  var fuel = +prompt("Enter remaining fuel in car (in litres)", "0.24");
  if (fuel < 0.25)
      document.write("Please refill the fuel in your car, Thankyou!");



  //     --------TASK 5---------

  var a = 4;
  if (++a === 5) { alert("given condition for variable a is true"); } // TRUE_AlertShown


  var b = 82;
  if (b++ === 83) { alert("given condition for variable b is true"); } // FALSE_AlertnotShown

  var c = 12;
  if (c++ === 13) { alert("condition 1 is true"); }
  if (c === 13) { alert("condition 2 is true"); }
  if (++c < 14) { alert("condition 3 is true"); }
  if (c === 14) { alert("condition 4 is true"); } // Condition 2 and condition 4 is TRUE



  var materialCost = 20000;
  var laborCost = 2000;
  var totalCost = materialCost + laborCost;
  if (totalCost === laborCost + materialCost) { alert("The cost equals"); } //ALERTSHOWN.... THE_COST_EQUALS


  if (true) { alert("True"); }
  if (false) { alert("False"); } //AlertShown_TRUE

  if ("car" < "cat") { alert("car is smaller than cat"); } //ALERTSHOWN_car is smaller than cat




  //     --------TASK 6---------


  var N1 = +prompt("Enter total marks of subject 1 ");
  var n1 = +prompt("Enter obtained marks of subject 1 ");
  var N2 = +prompt("Enter total marks of subject 2 ");
  var n2 = +prompt("Enter obtained marks of subject 2 ");
  var N3 = +prompt("Enter total marks of subject 3 ");
  var n3 = +prompt("Enter obtained marks of subject 3 ");
  var totalMarks = N1 + N2 + N3;
  var obtainedMarks = n1 + n2 + n3;
  var percentage = Math.round(obtainedMarks / totalMarks * 100);
  var grade = " ",
      remarks = " ";
  if (percentage >= 80) {
      grade = "A-one";
      remarks = "Exellent";
  }
  if (percentage < 80 && percentage >= 70) {
      grade = "A";
      remarks = "Good";
  }
  if (percentage < 70 && percentage >= 60) {
      grade = "B";
      remarks = "You need to improve";
  }
  if (percentage < 60) {
      grade = "Fail";
      remarks = "Sorry";
  }
  document.write("<h1> Mark Sheet </h1> <br>");
  document.write("Total Marks : " + totalMarks + "<br>" + "Marks Obtained : " + obtainedMarks + "<br>" + "Percentage : " + percentage + "% <br>" + " Grade : " + grade + " <br> " + " Remarks : " + remarks);


  //      --------TASK 7---------


  var secretNumber = 6;
  var guess = +prompt("Guess the number between 1 to 10 hideen in secret number");
  if (secretNumber == guess)
      alert("Bingo! Correct answer!");
  if (secretNumber == guess + 1)
      alert("Close enough to the correct answer!");



  //      --------TASK 8---------

  var a = +prompt("Enter a number", "3");
  if (a % 3 === 0)
      alert("THE NUMBER IS DIVISIBLE BY 3");



  //      --------TASK 9---------

  var a = +prompt("Enter a number", "3");
  if (a % 2 === 0)
      alert("THE NUMBER IS EVEN");
  else alert("THE NUMBEER IS ODD");


  //    --------TASK 10---------


  var t = +prompt("Enter The temperature", "30");
  if (t > 40)
      alert("It is too hot outside.");
  if (t >= 30 && t <= 40)
      alert("The Weather today is Normal.");
  if (t >= 20 && t < 30)
      alert("Today’s Weather is cool.");
  if (t >= 10 && t < 20)
      alert("OMG! Today’s weather is so Cool. ");


  //      --------TASK 11---------


  var a = +prompt("Enter First Number", "3");
  var b = +prompt("Enter Second Number", "2");
  var c = prompt("Enter Operation", "-");
  var result = 0;
  if (c == "*") {
      result = a * b;
      document.write("Product of " + a + " and " + b + " is " + result);
  }
  if (c == "/") {
      result = a / b;
      document.write("Quotient of " + a + " and " + b + " is " + result);
  }
  if (c == "-") {
      result = a - b;
      document.write("Difference of " + a + " and " + b + " is " + result);
  }
  if (c == "+") {
      result = a + b;
      document.write("Sum of " + a + " and " + b + " is " + result);
  }



  //CHAPTER # 12-13:




  //     --------TASK 1---------


  var a = prompt("Enter Character/Number", "a");

  if (a >= 'A' && a <= 'Z') alert(" UPPERCASE LETTER");
  if (a >= 'a' && a <= 'z') alert("LOWERCASE LETTER");

  else
      alert("it's a number");



  //     --------TASK 2---------


  var n1 = +prompt("Enter First Number", "9");
  var n2 = +prompt("Enter Second Number", "6");
  if (n1 > n2) alert("First Number is Greater");
  if (n2 > n1) alert("Second Number is Greater");
  if (n1 == n2) alert("BOTH ARE EQUAL");


  //     --------TASK 3---------


  var n1 = +prompt("Enter a Number", "9");
  if (n1 > 0) alert(" NUMBER IS POSITIVE");
  if (n1 < 0) alert("NUMBER IS NEGATIVE");
  if (n1 == 0) alert("NUMBER IS EQUAL TO 0");



  //     --------TASK 4---------


  var ch = prompt("Enter Character", "a");
  ch = ch.toLowerCase();
  if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u")
      alert("THE ENTERED CHARACTER IS A VOWEL ! ");
  else alert(" IT'S A CONSONANT");



  //     --------TASK 5---------


  var password1 = "oxford";
  var password2 = prompt("Enter Your Password ");
  if (password2 == 0)
      alert(" Please enter your password");
  if (password2 === password1)
      alert("“Correct! The password you entered matches the original password");
  if (password2 !== password1)
      alert("“Incorrect password” ");



  //     --------TASK 6---------


  var greeting;
  var hour = 13;
  if (hour < 18)
      greeting = "Good day";
  else greeting = "Good evening"; //correction of brackets resolved



  //      --------TASK 7---------


  var time = +prompt("Inpur time in 24 hours clock format like: 1900 = 7pm.");
  if (time >= 0000 && time < 1200) alert("GOOD MORNING!");
  if (time >= 1200 && time < 1700) alert("GOOD AFTERNOON!");
  if (time >= 17000 && time < 2100) alert("GOOD EVENING!");
  if (time >= 2100 && time < 2359) alert("GOOD NIGHT!");



  //CHAPTER # 14-16:


  //      --------TASK 1---------


  var names = [];


  //      --------TASK 2---------

  var name = new Array();


  //      --------TASK 3---------


  var names = ["Elma", "Rizwan", "Hassan"];


  //     --------TASK 4---------


  var numbers = [1, 2, 3, 4];


  //    --------TASK 5---------


  var booleanArray = [true, false, false, true];


  //     --------TASK 6---------

  var mixedArray = [1, "two", "three", 4]

  //    --------TASK 7---------

  var q = [" ", "SSC", "HSC", "BSC", "BS", "BCOM", "MS", "M.Phil", "PhD"];
  document.write("<h1>Qualification </h1>");
  for (var i = 1; i < q.length; i++) {
      document.write(i + ") " + q[i] + "<br>");
  }

  //     --------TASK 8---------


  var students = [];
  var score = [];
  var size = 3; //Maximum Array size

  for (var i = 0; i < size; i++) {

      students[i] = prompt('Enter Student Name ' + (i + 1));
  }

  for (var i = 0; i < size; i++) {

      score[i] = +prompt('Enter Student Score ' + (i + 1));
  }
  for (var i = 0; i < size; i++) {
      document.write("Score of " + students[i] + " is " + score[i] + ". Percentage : " + score[i] / 500 * 100 + " % <br>");
  }




  //     --------TASK 9--------


  var colors = ["black", "white", "red", "purple", "green", "yellow"];
  document.write("<h2> Initially:    " + colors + "<br>");
  console.log(colors);
  var addFront = prompt(" what color you wants to add to the beginning?");
  colors.unshift(addFront);
  document.write("After addition to the beginning: " + colors + "<br>");
  var addEnd = prompt(" what color you wants to add to the END?");
  colors.push(addEnd);
  document.write("After addition to the end: " + colors + "<br>");

  colors.unshift("maroon", "teal");
  document.write("After adding 2 more colors to the front: " + colors + "<br>");
  colors.shift();
  document.write("After deleting 1st color name: " + colors + "<br>");
  colors.pop();
  document.write("After deleting last color name: " + colors + "<br>");

  var ind = +prompt(" At which index you wants to add a color?");

  var clrToBeAdded = prompt(" Which color you want to add?");
  colors[ind] = clrToBeAdded;
  document.write("After Adding color to the desired index : " + colors + "<br>");
  ind = +prompt(" At which index you wants to delete color(s) ");
  var n = +prompt("how many colors he / she wants to delete ? ");

  colors.splice(ind, n);
  document.write("After Deleting color(s) from the desired index : " + colors);




  //   --------TASK 10---------


  var score = [];

  var size = 4;
  for (var i = 0; i < size; i++) {

      score[i] = +prompt('Enter Student Score ' + (i + 1));
  }

  document.write("Score of students : ");

  for (var i = 0; i < size; i++)
      document.write(score[i] + " ,");

  document.write("Ordered Score of students : ");
  score.sort();

  for (var i = 0; i < size; i++)
      document.write(score[i] + " ,");


  //   --------TASK 11---------


  var cities = ["Karachi", "Lahore", "Peshawar", "Quetta", "Islamabad"];
  var selectedCities = cities.slice(2, 4);
  document.write("Cities List: <br>" + cities + "<br>");
  document.write("Selected Cities : <br> " + selectedCities);


  //    --------TASK 12---------

  var arrr = ["This", "is ", "my", "cat"];
  arrr = arrr.join(" ");
  document.write(arrr);



  //   --------TASK 13---------


  var arr = [];
  arr.push("keyboard");
  arr.push("mouse");
  arr.push("printer");
  arr.push("monitor");

  document.write("Device: <br>" + arr + "<br>");

  for (var i = 0; i < 4; i++) document.write("Out: <br> " + arr.shift() + "<br>");




  //   --------TASK 14--------- 


  var arr = [];
  arr.push("keyboard");
  arr.push("mouse");
  arr.push("printer");
  arr.push("monitor");

  document.write("Device: <br>" + arr + "<br>");

  for (var i = 0; i < 4; i++) document.write("Out: <br> " + arr.pop() + "<br>");


  //     --------TASK 15---------


  var manufacturers = ["Apple ", "Samsung ", " Motorola ", " Nokia ", "Sony ", "Haier "];
  document.write("<select>");
  for (vari = 0; i < manufacturers.length; i++)
      document.write("<option> " + manufacturers[i] + " </option>")
  document.write("</select>");





  //CHAPTER # 17-20:



  //     --------TASK 1---------


  var Arr = [
      [1, 2],
      [3, 4],
      [5, 6]
  ];


  //     --------TASK 2---------


  //defining 2d array
  var rows = 3;
  var cols = 4;
  var geek = new Array(rows);
  for (var i = 0; i < rows; i++)
      geek[i] = new Array(cols);

  //takig input
  for (var i = 0; i < rows; i++)
      for (var j = 0; j < cols; j++)
          geek[i][j] = prompt("Enter");

  //display

  for (var i = 0; i < rows; i++) {
      for (var j = 0; j < cols; j++) {
          document.write(geek[i][j]);
      }
      document.write("<br>");
  }



  //     --------TASK 3---------


  for (var i = 1; i <= 10; i++)
      document.write(i + "<br>");




  //     --------TASK 4---------


  var a = +prompt("Enter a number to show its multiplication table", "2");
  var b = +prompt("Enter length of multiplication table", "15");
  document.write("Multiplicaton table of " + a + "<br> Length " + b);
  for (var i = 1; i <= b; i++)
      document.write(a + " x " + i + " = " + a * i + " <br>");


  //    --------TASK 5---------


  var fruits = ["apple", "banana", "mango", "orange ", "strawberry"];
  for (var i = 0; i < fruits.length; i++)
      document.write(fruits[i] + "<br>");

  for (var i = 0; i < fruits.length; i++)
      document.write("Element at index " + i + " is " + fruits[i] + "<br>");



  //    --------TASK 6---------

  var i = 0;
  document.write("<h1> COUNTING: </h1>") for (i = 1; i <= 15; i++)
      document.write(i + " , ");

  document.write("<h1> REVERSE COUNTING: </h1>") for (i = 10; i >= 1; i--)
      document.write(i + " , ");

  document.write("<h1> EVEN: </h1>") for (i = 0; i <= 20; i += 2)
      document.write(i + " , ");


  document.write("<h1> ODD: </h1>") for (i = 1; i <= 19; i += 2)
      document.write(i + " , ");


  document.write("<h1> SERIES: </h1>") for (i = 2; i <= 20; i += 2)
      document.write(i + "k, ");



  //    --------TASK 7---------


  var A = ["cake", "apple pie", "cookie", "chips", "patties"];
  var B = prompt("Welcome to ABC Bakery , what do you want to order?", "apple pie");
  B = B.toLocaleLowerCase();
  for (var i = 0; i < A.length; i++) {
      if (A[i] === B)
          document.write(A[i] + " is available at index " + i + " in our bakery!");
  }



  //   --------TASK 8--------


  var a = [24, 53, 78, 91, 12];
  document.write("Array Items: " + a);
  a = a.sort();

  document.write("<br> The Largest number is : " + a.pop());



  //     --------TASK 9--------


  var a = [24, 53, 78, 91, 12];
  document.write("Array Items: " + a);
  a = a.sort();

  document.write("<br> The Smallest number is : " + a[0]);


  //    --------TASK 10---------


  for (var i = 1; i <= 20; i++)
      document.write(5 * i + " ");