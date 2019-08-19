//main function where user is asked to pick a number and is given a message
function main() {
    let userInput = "";

//will loop through main function until q is entered
    while (userInput !== "q") {
        userInput = prompt("Please enter 1, 2, or 3. Or enter 'q' to quit.");
        if (userInput === "1") {
            alert("Challenge goes here");
            console.log(abc());
        } else if (userInput === "2") {
            alert("2");
        } else if (userInput === "3") {
            alert("Hello World");
        } else if (userInput === "q") {
            alert("Goobye");
        } else {
            alert(`INVALID ENTRY
Please enter a listed option`);
        }
    }
}

//secondary function that is referred to in the 1 case in the main function
function abc() {
    let input1 = prompt("Enter a, b, or c.");
    if (input1 === "a") {
        alert("A");
        return "A";
    } else if (input1 === "b") {
        alert("B");
        return "B";
    } else if (input1 === "c") {
        alert("C");
        return "C";
    } else {
        alert("INVALID ENTRY");
    }
}

main();

//The abc function runs twice when I go through main function
// DEBUG TEST: ran abc(); alone and it doesn't loop. Extra loop must be in main function
//RESOLVED: had abc function running both alone and in the console log on line 10