
const WORDS = [
    "cover", "power", "house", 
    "peach", "apple", "bound", 
    "ditch", "eject", "latch",
    "green", "ghost", "photo",
    "knock", "month", "pluck",
    "drone", "score", "bones"];
let selected;
let reveal;
let guessInput;
let button1;
let gameOver = false;
let attempts = 0;

function setup() {
    createCanvas(800,400);
    background("hotpink");
    textAlign(CENTER, CENTER);
    textSize(40);
    selected = random(WORDS);
    // console.log("hidden is: " + selected);
//    text(selected, width/2, height/2);
    reveal = "_ ".repeat(selected.length);

    guessInput = createInput("");
    guessInput.position(320, 400);

    button1 = createButton("Guess");
    button1.mousePressed(handleUserInput);
    button1.position(470, 400);
}

function handleUserInput() {
    attempts++;

    //alert("hi");
    let source = guessInput.value().toLowerCase();
    let target = selected;
    let inside = reveal.split("");

    if (source === target) {
        gameOver = true;
        reveal = target.toUpperCase();
        return;
    }
    for (let index=0; index<source.length; index++) {
        if (source[index] === target[index]) {
            inside[index*2] = target[index];
        }
    }
    reveal = inside.join("").toUpperCase();
    guessInput.value("");
    return;
}

function draw() {
    background("skyblue");

    if (gameOver) {
        textAlign(CENTER, CENTER);
        textSize(32);
        if (attempts === 0) 
            text("You got the correct answer!", width/2, height/2);
        else
            text("You got the correct answer after " + attempts + " tries.", width/2, height/2);

        text("The word is " + reveal, width/2, height/2 + 50);
        guessInput.remove();
        button1.remove();
    }
    else {
        textAlign(CENTER, CENTER);
        textSize(32);
        text("Guess the hidden word", width/2, height/2-100);
        text("Attempts: "+attempts, width/2, height/2 -50 )
        textAlign(RIGHT, CENTER);
        text("Hint: ", width/2, height/2 )
        textAlign(LEFT, CENTER);
        text(reveal, width/2, height/2);
    }
}

function keyPressed() {
    if (keyCode === 13) {
        handleUserInput()
    }
}