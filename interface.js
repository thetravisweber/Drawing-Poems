let input = [];
let lastMouse = {
  valid: false,
  x: 0,
  y: 0
};

function updated()
{
  input = document.getElementById("userinput").value.split('\n')
      .map(row => row.split(" "));
}


function mouseDragged(e) {
  if (lastMouse.valid && mouseIsOnCanvas()) {
    cameraX += mouseX - lastMouse.x;
    cameraY += mouseY - lastMouse.y;
  }
  updateMouse();
}

function mouseIsOnCanvas()
{
  return (mouseX < width) && (mouseY < height)
}

function updateMouse() {
  lastMouse.valid = true;
  lastMouse.x = mouseX;
  lastMouse.y = mouseY;
}
function mouseReleased() {
  lastMouse.valid = false;
}