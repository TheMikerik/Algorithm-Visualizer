var cols = 10;
var rows = 10;

var grid = new Array(cols);

function setup(){
    createCanvas(900, 600);
    console.log("A*");

    for (var i = 0; i < cols; i++){
        grid[i] = new Array(rows);
    }

    console.log(grid);
}

function draw(){
    background(0);
}