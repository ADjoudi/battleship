import Gameboard from "./module/gameboard";
import Player from "./module/player";
import Ship from "./module/ship";

function rgbToHex(col) {
  if (col.charAt(0) == "r") {
    col = col.replace("rgb(", "").replace(")", "").split(",");
    var r = parseInt(col[0], 10).toString(16);
    var g = parseInt(col[1], 10).toString(16);
    var b = parseInt(col[2], 10).toString(16);
    r = r.length == 1 ? "0" + r : r;
    g = g.length == 1 ? "0" + g : g;
    b = b.length == 1 ? "0" + b : b;
    var colHex = "#" + r + g + b;
    return colHex;
  }
}

const NewGame = () => {
  const gameboard = Gameboard();
  const player1 = Player();
  const player2 = Player();
  const shipyardData = [
    Ship("cruiser", 1),
    Ship("submarine", 2),
    Ship("destroyer", 3),
    Ship("battleship", 4),
    Ship("carrier", 5),
  ];
  const shipyard = document.querySelector(".shipyard");
  const ships = document.querySelectorAll(".shipyard .ship");
  const blocks = document.querySelectorAll(".board .block");

  const dragAndDrop = () => {
    let shipSelected = false;
    let theShip;
    ships.forEach((ship) => {
      ship.addEventListener("click", () => {
        shipSelected = true;
        shipyardData.forEach((s) => {
          if (s.getShipName() == ship.getAttribute("id")) {
            theShip = s;
          }
        });
        ship.style.visibility = "hidden";
        ship.style.position = "absolute";
      });
    });

    blocks.forEach((block) => {
      block.addEventListener("click", () => {
        if (!shipSelected) return;
        let cordX = (block.getAttribute("id") - 1) % 6;
        let cordY = Math.floor((block.getAttribute("id") - 1) / 6);
        if (!gameboard.placeShip(cordX, cordY, theShip)) {
          return;
        }
        let sibling = block;
        for (let i = 0; i < theShip.getBody().length; i++) {
          sibling.style.backgroundColor = "#058514";
          sibling = sibling.nextElementSibling;
        }
        console.log(gameboard.getGameBoard());
        shipSelected = false;
      });
      block.addEventListener("mouseover", () => {
        if (shipSelected) {
          let sibling = block;
          for (let i = 0; i < theShip.getBody().length; i++) {
            if (rgbToHex(sibling.style.backgroundColor) != "#058514") {
              sibling.style.backgroundColor = "#991b08";
              sibling = sibling.nextElementSibling;
            }
          }
        }
      });
      block.addEventListener("mouseout", () => {
        if (shipSelected) {
          let sibling = block;
          for (let i = 0; i < theShip.getBody().length; i++) {
            if (rgbToHex(sibling.style.backgroundColor) != "#058514") {
              sibling.style.backgroundColor = "#9abac5";
              sibling = sibling.nextElementSibling;
            }
          }
        }
      });
    });
  };
  dragAndDrop();
};

NewGame();
