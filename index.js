let buttons = document.getElementsByTagName("button");
let divs = document.getElementsByTagName("div");
let imgs = document.getElementsByTagName("img");

let openButton = [];

random = randomList();
console.log(random);

for (let i = 0; i < random.length; i++) {
  for (let j = 0; j < random[i].length; j++) {
    imgs[2 * i + j].src = `svg/${random[i][j]}.svg`;
  }
}

function rotate(id) {
  if (openButton.length != 2) {
    openButton.push(id);
    buttons[id].style.transform = "rotateY(90deg)";

    setTimeout(() => {
      divs[id].style.transform = "rotateY(0deg)";
    }, 250);
  }
  if (openButton.length == 2 && checkValid(openButton[1], openButton[0])) {
    setTimeout(() => {
      divs[openButton[1]].style.transform = "rotateY(90deg)";
      divs[openButton[0]].style.transform = "rotateY(90deg)";

      setTimeout(() => {
        buttons[openButton[0]].style.transform = "rotateY(0deg)";
        buttons[openButton[1]].style.transform = "rotateY(0deg)";
        openButton = [];
      }, 200);
    }, 1000);
  } else if (!checkValid(openButton[1], openButton[0])) {
    openButton = [];
  }
}

function randomList() {
  let elements = [[], [], [], [], [], [], [], [], []];
  let availableNumbers = Array.from({ length: 9 }, (_, i) => [
    i + 1,
    i + 1,
  ]).flat(); // Create an array of numbers from 1 to 9, each repeated twice

  for (let i = 0; i < elements.length; i++) {
    for (let j = 0; j < 2; j++) {
      let randomIndex = Math.floor(Math.random() * availableNumbers.length);
      elements[i][j] = availableNumbers.splice(randomIndex, 1)[0]; // Remove the number from availableNumbers and assign it to elements[i][j]
    }
  }

  return elements;
}

function checkValid(first, second) {
  if (
    imgs[first].src.slice(
      imgs[first].src.length - 5,
      imgs[first].src.length - 4
    ) ==
    imgs[second].src.slice(
      imgs[second].src.length - 5,
      imgs[second].src.length - 4
    )
  ) {
    return false;
  } else {
    return true;
  }
}
