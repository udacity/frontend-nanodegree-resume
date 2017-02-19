// Statements : or, "instructions" are separated by semicolon (;)
  var x = 100;
  document.write(x); //outputs '100' in the browser

// Print to browser console
  console.log("string") //returns "string"

/* Variables: containers for storing data values
  - The value of a variable can change throughout the program
  Naming rules:
  - first character must be a letter, underscore (_), or a dollar sign ($) - no numbers
  - subsequent letters can be letters, digits, underscores, or dollar signs
  - cannot include mathematical or logical operator (e.g. 2*2 or this+that), spaces, special symbols, or JavaScript reserved words */
  var varName = varValue; // creates a variable named varName w/ a value of varValue

// Data Types: types of values with which a program can work
  var undefinedValue = ; // creates a value of "undefined" -  a value can be provided later
  var string = "string"; // strings are used to store or manipulate text
    var backslashEscape = "she said \"hi\"" // turns special characters in strings to string characters
  var boolean = true; // booleans: used when there can only be one of two values (true or false) like yes/no, on/off, true/false
  var number = 1; // numbers can be written with or without decimals
  var array = ["value1","value2","value3",...]; // arrays: special variable that can hold one or more value
    var select = arrayName[0];   // selects value1 from arrayName

  // Data Types: truthy/falsy
  true / false
  non-zero numbers / 0
  "strings" / ""
  objects / undefined
  arrays / null
  functions / NaN (Not a Number)

// Operators
  // Math Operators (+,-,*,/,%,++,--)
  var addition = 10 + 20; // =30
  var subtraction = 20 - 10; // =10
  var multiplication = 10 * 20; // =2
  var division = 20 / 10; // =2
  var modulus = 10 % 3; // =1 modulus: division remainder, or what is left over
  /* increments and decrements either increase or decrease the value of the operand by 1
  - when placed after the operand, it returns the original value and then increments/decrements the operand
  -  when placed before the operand, it returns the incremented/decremented value */
  var increment1 = 0; var increment2 = 10;
    var increment1 = increment2++; // increment1=10 and increment2=11
    var increment1 = ++increment2; // increment1=11 and increment2 = 11
  var decrement1 = 0; var decrement2 = 10;
    var decrement 1 = decrement2-- // decrement1=10 and decrement2=9
    var decrement 1 = --decrement2 // decrement1=9 and decrement2=9

  // Assignment Operators: assign values to variables (=,+=,-=,*=,/=,%=) - see math operators for more info
    var x = y; // x=y
    var x += y; // x=x+y
    var x -= y; // x=x-y
    var x *= y; // x=x*y
    var x /= y; // x=x/y
    var x %= y; // x=x%y

  /* Comparison Operators: used in logical statements to determine equality or difference between variables or values (==,===,!=,!===,>,>=,<,<=)
    - they return true or false
    - arguments should be of same data type */
    var x = 5; var y = 10;
    x == y // equal to: false
    x === y // identical (equal and of same type): false
    x != y // not equal to: true
    x !=== y // not identical: true
    x > y // greater than: false
    x >= y // greater than or equal to: false
    x < y // less than: true
    x <= y // less than or equal to: true

  /* Logical (Boolean) Operators: evaluate the expression and return true or false (&&,!!,!) */
    var x = 4 > 2, var y = 10 < 15;
    x && y // AND: returns true if both operands are true: true
    x !! y // OR: returned true if one of the operands is true: true
    x ! y // NOT: returns true if the operand is false or false if the operand is true: false

  // Conditional (Ternary) Operators: assigns a value to a variable based on some condition (?)
    variable = (condition) ? value1 : value2
    var isAdult = (age < 18) ? "too young" : "old enough"; // e.g. if the variable is < 18, return too young, otherwise return old enough

  // String Operators: concatenation (+) can be used to build strings by joining together multiple strings or joining strings with other types
    var string1 = "my name is";
    var string2 = "Jared";
    document.write(string1 + string2); // e.g. my name is Jared

// Conditionals: perform different actions based on different conditions
  // if, else if, and else statements
  if (condition) {
    statements
  } // if statements: specify a block of code that will be executed if a specified condition is true
  else if (condition) {
    statements
  } // else if statements: specify a new condition if the proceeding are false - can write as many of these as needed
  else {
    statements
  } // else statements: executes if condition is false

  /* switch statements: used to perform different actions based on different conditions
  - the value of the expression is compared with the values of each case - if there is a match, the associated block of code is executed */
  switch (expression) {
    case n1:
      statements
      break;
    case n2:
      statements
      break;
    default: // specifies the code to run if there is no case to match - can be ommitted if there is no need to handle the case when no match is found
      statements
  }

// Loops: execute a block of code a number of times
  // For Loops:
  for (initialization; condition; mutator) { // if the condition returns true, the loop will start over again - if not, it ends
    doSomething(
      if (...) {
        break; // break statements jump out of a loop and continues executing the code after the loop
      }
    );
  }

  // while loops: do action > if condition is true, do action again, if not, exit loop
  while (condition) {
    doSomething();
  }

   // do...while loops: execute code block once before checking if the condition is true, then repeat as long as the condition is true
   do {
     code block
   }
   while (condition);

 // Functions: blocks of code designed to perform a particular task and can be used many times with different arguments to produce different results

  function functionName(param1, param2, ...) {
    //code to be executed
    return; // return statements are optional and are used to return a value from the function - when a return statement is reached, the function stops executing
  } // define the function - function parameters are the names listed in the function's definition
  functionName("param1value", "param2value", ...); // call a function so it can be executed by using the name of the function with the value (argument) provided - you can define a single function and pass different parameter values to it

    // if a function is called with missing arguments, the missing values are set to "undefined" which indicates that a variable has not been assigned a value

// Objects: variables that contain list of properties written as name:value pairs
  // Object Literal Notation
    var objectName { //this creates a single object
      propertyName1: "value1",
      propertyName2: 2,
      ...
    }; // define an object and its properties
    objectName['propertyName1']; // access an object's properties
    objectName.propertyName2; // dot syntax another way to access an object's properties
    objectName.methodName(); // object method: a property that contains a function definition
      document.write ('some text'); // e.g. the 'write' function is a method of the document object
  // Object Constructors can be used to create an Object Type, which can be used to create a number of objects of a single type
    function objectConstructor (parameter1,parameter2,...) {
      this.parameter1 = value1; // 'this' is a keyword that refers to the current object
      this.parameter2 = value2;
      this.methodName : function () {
        // some code
      } // Method: functions that are stored as object properties
    }
    var object2 = new objectConstructor (value1,value2,...); // once you have an object constructor, you can use the 'new' keyword to create new objects of the same type
      document.write(object2['parameter1']); // outputs value1


/* JSON: JavaScript Object Notation
- Use linters like jsonlint.com to analyze code for syntax errors
- It is a data structure in the same format as JavsScript objects that gives us a way to store and access data  */
  var varName = {
    "propertyName1":"propertyValue1", // all names use quotes in JSON
    "nestedObject": {"propertyName2":"propertyValue2","propertyName3": "propertyValue3",...},
    "array": ["HTML5", "CSS3", "JavaScript"] // no comma on last property
  };
  // or, an array you can loop through:
  var varArrayName = [{
    "group1Property1":"group1Value1",
    "group1Property2":"group1Value2",
    ...
  },
  {
    // group 2, and so on
  }];
