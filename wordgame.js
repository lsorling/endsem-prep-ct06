
const WORDS = ["cover", "power", "house", "peach", "apple", "bound"];

function setup() {
    createCanvas(600,600);
    background("hotpink");
}

function draw() {
    background("hotpink");
    textAlign(CENTER, CENTER);
    textSize(40);
    let selected = random(WORDS);
    text(selected);
}