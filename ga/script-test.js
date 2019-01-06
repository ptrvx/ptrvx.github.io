var arr = [];
var points = [];

class Node {
    constructor(data) {
        if (data.length == 1) {
            this.data = data[0];
            this.left = null;
            this.right = null;
        } else {
            let center = Math.floor(data.length / 2);
            this.data = data[center];
            this.left = new Node(data.slice(0, center+1));
            this.right = new Node(data.slice(center+1, data.length));

        }
    }

}

class RangeTree {
    constructor(data) {
        this.root = new Node(data);
    }

    inorder(node) {
        if (node != null) {
            if (node.left === null && node.right === null) {
                console.log(node.data);
            } else {
                this.inorder(node.left);
                this.inorder(node.right);
            }

        }
    }

    getRootNode() {
        return this.root;
    }

}


function build() {

    points.sort(function (a, b) { return a.x - b.x });

    console.log(points);

    var tree = new RangeTree(points);
    tree.inorder(tree.getRootNode());

}