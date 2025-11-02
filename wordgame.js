
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
    console.log("hidden is: " + selected);
//    text(selected, width/2, height/2);
    reveal = "_ ".repeat(selected.length);

    guessInput = createInput("");
    guessInput.position(650, 400);

    button1 = createButton("Guess");
    button1.mousePressed(handleUserInput);
    button1.position(800, 400);
}

function handleUserInput() {
    //alert("hi");
    console.log("you have provided: " +guessInput.value());
    let source = guessInput.value();
    let target = selected;

    if (source === target) {
        return true;
    }
    for (let index=0; index<source.length; index++) {
        if (source[index] === target[index]) {
            reveal[index*2] = target[index]
        }
    }
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