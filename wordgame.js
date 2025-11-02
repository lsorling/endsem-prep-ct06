
const WORDS = ["cover", "power", "house", "peach", "apple", "bound"];
let selected;
let reveal;
let guessInput;
let button1;
let gameOver = false;
let attempts = 0;

function setup() {
    createCanvas(600,600);
    background("hotpink");
    textAlign(CENTER, CENTER);
    textSize(40);
    selected = random(WORDS);
    console.log("hidden is: " + selected);
//    text(selected, width/2, height/2);
    reveal = "_ ".repeat(selected.length);

    guessInput = createInput("");
    guessInput.position(250, 400);

    button1 = createButton("Guess");
    button1.mousePressed(handleUserInput);
    button1.position(400, 400);
}

function handleUserInput() {
    //alert("hi");
    let source = guessInput.value().toLowerCase();
    let target = selected;
    let inside = reveal.split("");

    if (source === target) {
        gameOver = true;
        reveal = target.toUpperCase();
        return;
    }
    console.log("repeat how many: " + source.length);
    for (let index=0; index<source.length; index++) {
        console.log(source[index]);
        console.log(target[index]);
        if (source[index] === target[index]) {
            inside[index*2] = target[index];
            console.log("hints: " + inside);

        }
        else {
            console.log("why no matched?");
        }
    }
    reveal = inside.join("").toUpperCase();
    console.log("hints: " + reveal);
    attempts++;
    return;
}

function draw() {
    background("hotpink");

    if (gameOver) {
        textAlign(CENTER, CENTER);
        textSize(32);
        text("You got the correct answer!", width/2, height/2);
        text("The word is " + reveal, width/2, height/2 + 50);
        guessInput.remove();
        button1.remove();
    }
    else {
        textAlign(CENTER, CENTER);
        textSize(32);
    //    text(selected, width/2, height/2);
        text("Guess the hidden word", width/2, height/2-100);
        text("Attempts: "+attempts, width/2, height/2 -50 )
        textAlign(RIGHT, CENTER);
        text("Hint: ", width/2, height/2 )
        textAlign(LEFT, CENTER);
        text(reveal, width/2, height/2);
    }

}