
const WORDS = ["cover", "power", "house", "peach", "apple", "bound"];

function setup() {
    createCanvas(600,600);
    background("hotpink");
    textAlign(CENTER, CENTER);
    textSize(40);
    let selected = random(WORDS);
    text(selected, width/2, height/2);
    let reveal = "_ ".repeat(selected.length);
}

function draw() {
//    background("hotpink");
}