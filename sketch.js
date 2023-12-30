var rows = 30;
var cols = 45;

var grid = new Array(rows);

var unchecked = [];
var checked = [];
var start;
var end;
var g_w;
var g_h;

function Spot(i, j){
    this.x = j;
    this.y = i;

    this.f = 0;
    this.g = 0;
    this.h = 0;

    this.show = function(){
        fill(255);
        stroke(0);
        rect(this.x * g_w, this.y * g_h, g_w-1, g_h-1);
    }
}


function setup(){
    createCanvas(900, 600);
    console.log("A*");

    g_w = width / cols;
    g_h = height / rows;

    for (var i = 0; i < rows; i++){
        grid[i] = new Array(cols);
    }

    for (var i = 0; i < rows; i++){
        for (var j = 0; j < cols; j++){
            grid[i][j] = new Spot(i, j);
        }
    }


    start = grid[0][0];
    end = grid[rows-1][cols-1];

    unchecked.push(start);

    console.log(grid);
}

function draw(){

    if(unchecked.length > 0){

    }
    else{

    }

    background(0);

    for (var i = 0; i < rows; i++){
        for (var j = 0; j < cols; j++){
            grid[i][j].show();
        }
    }
}