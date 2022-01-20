function setup() {
  createCanvas(500, 500);
  frameRate(15);
  // What else goes here?
  //creating the grid
  for (let grid = 0; grid < 500; grid += 50) {
    rect(grid, grid, 50);
    rect(grid + 50, grid, 50);
    rect(grid + 100, grid, 50);
    rect(grid + 150, grid, 50);
    rect(grid + 200, grid, 50);
    rect(grid + 250, grid, 50);
    rect(grid + 300, grid, 50);
    rect(grid + 350, grid, 50);
    rect(grid + 400, grid, 50);
    rect(grid + 450, grid, 50);
    rect(grid, grid + 50, 50);
    rect(grid, grid + 100, 50);
    rect(grid, grid + 150, 50);
    rect(grid, grid + 200, 50);
    rect(grid, grid + 250, 50);
    rect(grid, grid + 300, 50);
    rect(grid, grid + 350, 50);
    rect(grid, grid + 400, 50);
    rect(grid, grid + 450, 50);
  }
}

function draw() {
  // What goes here?
  //randomly colouring the squares
  let coordinate = [0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500];
  fill(random(255), random(255), random(255));
  rect(random(coordinate), random(coordinate), 50);
}
