let input = [];
let lastMouse = {
  valid: false,
  x: 0,
  y: 0
};

function updated()
{
  input = document.getElementById("userinput").value.split(' ');
}


function mouseDragged(e) {
  if (lastMouse.valid) {
    cameraX += mouseX - lastMouse.x;
    cameraY += mouseY - lastMouse.y;
  }
  updateMouse();
}

function updateMouse() {
  lastMouse.valid = true;
  lastMouse.x = mouseX;
  lastMouse.y = mouseY;
}
function mouseReleased() {
  lastMouse.valid = false;
}