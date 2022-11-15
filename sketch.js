const alphabet = "abcdefghijklmnopqrstuvwxyz`*".split('');

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  let x = width/2;
  let y = width/2;
  const unitLength = 10;

  for (let key in input) {
    let word = input[key];
    if (word.length > 0) {
      let angle = getCharAngle(word[0]);
      let dist = unitLength * word.length;
      let newX = cos(angle) * dist + x;
      let newY = sin(angle) * dist + y;
      line(x,y,newX,newY);
      x = newX; 
      y = newY;
    }
  }
}

function getCharAngle(character) {
  let index = alphabet.indexOf(low(character));
  if (index == -1)
  {
    index = 27;
  }
  return map(index, 0, 28, TWO_PI, 0);
}

function low(char)
{
  if (!!char.toLowerCase())
  {
    return char.toLowerCase();
  } else
  {
    return char;
  }
}

function drawKey()
{
  textSize(30);
  textAlign(CENTER, CENTER);
  const dist = 150;
  const bonus = 20;
  alphabet.forEach(chr => {
    let angle = getCharAngle(chr);
    console.log(angle);
    let x = (width / 2) + (cos(angle) * dist);
    let y = (height / 2) + (sin(angle) * dist);
    let bx = cos(angle) * bonus;
    let by = sin(angle) * bonus;
    line(width/2, height/2, x, y);
    text(chr, x + bx, y + by);
  });
  noLoop();
}
