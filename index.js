const btn = document.getElementById("btn");
const pipOne = document.getElementById("_1");
const pipThree = document.getElementById("_3");
const pipFour = document.getElementById("_4");
const pipFive = document.getElementById("_5");
const pipSix = document.getElementById("_6");
const pipSeven = document.getElementById("_7");
const pipNine = document.getElementById("_9");

function resetDice() {
  const showAll = document.getElementsByClassName("pip");
  for (const prop in showAll) {
    if (Number.isInteger(parseInt(prop))) {
      showAll[prop].style.visibility = "visible";
    }
  }
}
function handlePips(pip) {
  pip.style.visibility = "hidden";
}

btn.addEventListener("click", () => {
  resetDice();
  const randNum = Math.ceil(Math.random() * 6);
  switch (randNum) {
    case 1:
      const hideForOne = [pipOne, pipThree, pipFour, pipSix, pipSeven, pipNine];
      hideForOne.map((pip) => handlePips(pip));
      break;
    case 2:
      const hideForTwo = [pipOne, pipFour, pipFive, pipSix, pipNine];
      hideForTwo.map((pip) => handlePips(pip));
      break;
    case 3:
      const hideForThree = [pipOne, pipFour, pipSix, pipNine];
      hideForThree.map((pip) => handlePips(pip));
      break;
    case 4:
      const hideForFour = [pipFour, pipFive, pipSix];
      hideForFour.map((pip) => handlePips(pip));
      break;
    case 5:
      const hideForFive = [pipFour, pipSix];
      hideForFive.map((pip) => handlePips(pip));
      break;
    case 6:
      const hideForSix = [pipFive];
      hideForSix.map((pip) => handlePips(pip));
      break;
  }
});
