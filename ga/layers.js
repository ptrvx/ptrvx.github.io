var points = [];

function cross(a, b, c) {
    //a1 * b2 - a2 * b1
    return ((b.x - a.x) * (c.y - b.y) - (b.y - a.y) * (c.x - b.x));
}

function hull() {
    var upper = [];
    var lower = [];

    for (var i = 0; i < points.length; i++) {
        while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], points[i]) > 0) {
            lower.pop();
        }
        lower.push(points[i]);
    }

    for (var i = points.length - 1; i >= 0; i--) {
        while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], points[i]) > 0) {
            upper.pop();
        }
        upper.push(points[i]);
    }

    lower.pop();
    // upper.pop();

    return lower.concat(upper);
}

function layers() {
    points.sort(function (a, b) {
        if (a.x != b.x) {
            return a.x - b.x;
        } else {
            return a.y - b.y;
        }
    });

    console.log(points);
    h = hull();
    console.log(h);

    if (h) {
        for (var i = 0; i < h.length - 1; i++) {
            line(h[i].x, h[i].y, h[i + 1].x, h[i + 1].y);
        }
        line[h[0].x, h[0].y, h[h.length - 1].x, h[h.length - 1].y];
    }

}