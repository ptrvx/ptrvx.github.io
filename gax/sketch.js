function setup() {
    createCanvas(1300, 900);
    background(247, 157, 0);
    fill(0);

    frameRate(5);
    noLoop();
}

function draw() {
    background(247, 157, 0);

    if (go) {
        while (it > -1 && it < points.length && !points[it].avail) {
            it += upper;
        }
        if (it == -1) {
            sure.push(hull);
            hull = [];
            go = false;
            noLoop();
        } else if (it == points.length) {
            upper = -1;
            it--;
        } else {
            if (wrong) {
                hull.pop();
                points[hull.pop()].avail = true;
                wrong = false;
            }
            if (hull.length >= 2 && cross(points[hull[hull.length - 2]], points[hull[hull.length - 1]], points[it]) > 0) {
                wrong = true;
                hull.push(it);
                //points[hull.pop()].avail = true;
            } else {
                if (hull.length > 0)
                    points[it].avail = false;
                hull.push(it);
                it += upper;
            }
        }
    }

    for (var i = 0; i < points.length; i++) {
        if (points[i].avail)
            fill(0);
        else
            fill(255);
        ellipse(points[i].x, points[i].y, 5, 5);
    }

    for (var i = 1; i < hull.length; i++) {
        line(points[hull[i - 1]].x, points[hull[i - 1]].y, points[hull[i]].x, points[hull[i]].y);
    }

    for (var i = 0; i < sure.length; i++) {
        for (var j = 1; j < sure[i].length; j++) {
            line(points[sure[i][j - 1]].x, points[sure[i][j - 1]].y, points[sure[i][j]].x, points[sure[i][j]].y);
        }
        line(points[sure[i][sure[i].length - 1]].x, points[sure[i][sure[i].length - 1]].y, points[sure[i][0]].x, points[sure[i][0]].y);
    }

}

function mousePressed() {
    if (!sorted) {
        ellipse(mouseX, mouseY, 5, 5);
        points.push({ x: mouseX, y: mouseY, avail: true });
    }
    return false;
}

function keyPressed() {
    if (!go) {
        layers();
    }

    return false;
}