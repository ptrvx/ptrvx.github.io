function setup() {
    createCanvas(1600, 900);
    fill(0);
    background(255, 242, 145);
}

function draw() {

}

function mousePressed() {
    ellipse(mouseX, mouseY, 5, 5);

    points.push({x: mouseX, y: mouseY});

    if (points.length > 1) {
        line(mouseX, mouseY, points[points.length - 2].x, points[points.length - 2].y);
    
    }


    return false;
}
