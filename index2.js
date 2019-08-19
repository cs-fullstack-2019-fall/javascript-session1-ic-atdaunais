//This code is functionally the same as my code in index.js.
//I just wanted to see if I could do it a different way for fun.

function main() {
    let userInput = "";

    //this switch case loop will test to see which condition has been met, similar to if/else.
    while (userInput !== "q") {
        userInput = prompt("Please enter 1, 2, or 3. Or enter 'q' to quit.");
        switch (userInput) {
            case "1":
                alert("Challenge goes here");
                console.log(abc());
                break;
            case "2":
                alert("2");
                break;
            case "3":
                alert("Hello World");
                break;
            case "q":
                alert("Goodbye");
                break;
        }
    }
}

function abc() {
    let input1 = prompt("Please enter a, b, or c.");

    switch (input1) {
        case "a":
            alert("A");
            return "A";
        case "b":
            alert("B");
            return "B";
        case "c":
            alert("C");
            return "C";
    }
}

main();