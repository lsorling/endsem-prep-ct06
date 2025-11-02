
const WORDS = ["cover", "power", "house", "peach", "apple", "bound"];
let selected;
let reveal;
let guessInput;

function setup() {
    createCanvas(600,600);
    background("hotpink");
    textAlign(CENTER, CENTER);
    textSize(40);
    selected = random(WORDS);
//    text(selected, width/2, height/2);
    reveal = "_ ".repeat(selected.length);

    guessInput = createInput("abc");
    guessInput.position(600, 400);
}

function draw() {
    background("hotpink");
    textAlign(CENTER, CENTER);
    textSize(40);
//    text(selected, width/2, height/2);
    text("Guess the hidden word", width/2, height/2-50);

    text(reveal, width/2, height/2);
}