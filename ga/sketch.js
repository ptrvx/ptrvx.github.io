function setup() {
    createCanvas(1300, 900);
    fill(0);
    background(247, 157, 0);
}

function draw() {

}

function mousePressed() {
    ellipse(mouseX, mouseY, 6, 6);

    points.push({ x: mouseX, y: mouseY });

    BST.insert(mouseX);

    // if (points.length > 1) {
    //     line(mouseX, mouseY, points[points.length - 2].x, points[points.length - 2].y);

    // }

    return false;
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        // root = BST.getRootNode();
        // BST.inorder(root);

        build();
    }


    return false; // prevent default
}