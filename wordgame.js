
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
    guessInput.position(250, 400);

    button1 = createButton("Guess");
    button1.mousePressed(handleUserInput);
    button1.position(400, 400);
}

function handleUserInput() {
    //alert("hi");
    let source = guessInput.value().toLowerCase();
    let target = selected;
    let 

    if (source === target) {
        reveal = target.toUpperCase();
        return true;
    }
    console.log("repeat how many: " + source.length);
    for (let index=0; index<source.length; index++) {
        console.log(source[index]);
        console.log(target[index]);
        if (source[index] === target[index]) {
            reveal[index*2] = target[index];
            console.log("hints: " + reveal);

        }
        else {
            console.log("why no matched?");
        }
    }
    reveal = reveal.toUpperCase();
    console.log("hints: " + reveal);
    return false;
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