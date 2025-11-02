
const WORDS = ["cover", "power", "house", "peach", "apple", "bound"];
let selected;
let reveal;
let guessInput;
let button1;

function setup() {
    createCanvas(600,600);
    background("hotpink");
    textAlign(CENTER, CENTER);
    textSize(40);
    selected = random(WORDS);
//    text(selected, width/2, height/2);
    reveal = "_ ".repeat(selected.length);

    guessInput = createInput("");
    guessInput.position(650, 400);

    button1 = createButton("Guess");
    button1.mousePressed(handleUserInput);
    button1.position(800, 400);
}

function handleUserInput() {

}

function draw() {
    background("hotpink");
    textAlign(CENTER, CENTER);
    textSize(32);
//    text(selected, width/2, height/2);
    text("Guess the hidden word", width/2, height/2-100);
    text("Attempts: 0", width/2, height/2 -50 )
    textAlign(RIGHT, CENTER);
    text("Hint: ", width/2, height/2 )
    textAlign(LEFT, CENTER);
    text(reveal, width/2, height/2);
}