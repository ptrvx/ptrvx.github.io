var points = [];

function cross(a, b, c) {
    //a1 * b2 - a2 * b1
    return ((b.x - a.x) * (c.y - b.y) - (b.y - a.y) * (c.x - b.x));
}

function hull() {
    var upper = [];
    var lower = [];
    var first = true;

    for (var i = 0; i < points.length; i++) {
        if (points[i].avail) {
            while (lower.length >= 2 && cross(points[lower[lower.length - 2]], points[lower[lower.length - 1]], points[i]) > 0) {
                points[lower.pop()].avail = true;
            }
            lower.push(i);
            if (first) {
                first = false;
            } else {
            points[i].avail = false;
            }
        }
    }

    for (var i = points.length - 1; i >= 0; i--) {
        if (points[i].avail) {
            while (upper.length >= 2 && cross(points[upper[upper.length - 2]], points[upper[upper.length - 1]], points[i]) > 0) {
                points[upper.pop()].avail = true;  
            }
            upper.push(i);
            points[i].avail = false;
        }
    }

    // lower.pop();
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
    var h = hull();
    console.log(h);

    if (h) {
        for (var i = 0; i < h.length - 1; i++) {
            line(points[h[i]].x, points[h[i]].y, points[h[i + 1]].x, points[h[i + 1]].y);
        }
        line(points[h[0]].x, points[h[0]].y, points[h[h.length - 1]].x, points[h[h.length - 1]].y);
    }

}