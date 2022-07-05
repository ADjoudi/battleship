export default function Gameboard() {
  let gameboard = [];
  for (let i = 0; i < 6; i++) {
    gameboard.push([]);
    for (let j = 0; j < 6; j++) {
      gameboard[i][j] = "";
    }
  }
  const checkAvailability = (cordX, cordY, shipLength) => {
    for (let j = 0; j < shipLength; j++) {
      if (gameboard[cordY][cordX + j] !== "") return false;
    }
    return true;
  };

  const placeShip = (cordX, cordY, ship) => {
    if (checkAvailability(cordX, cordY, ship.getBody().length)) {
      for (let j = 0; j < ship.getBody().length; j++) {
        gameboard[cordY][cordX + j] = ship.getShipName();
      }
      return true;
    }
    return false;
  };

  const receiveAttack = (cordX, cordY) => {
    if (gameboard[cordY][cordX] == "") {
      gameboard[cordY][cordX] == "miss";
      return;
    }
    let shipName = gameboard[cordY][cordX];
    return { cordX, cordY, shipName };
  };
  const allShipsSunk = () => {
    for (let i = 0; i < gameboard.length; i++) {
      for (let j = 0; j < gameboard.length; j++) {
        if (gb[i][j] !== "hit" || gb[i][j] !== "miss" || gb[i][j] !== "") {
          return false;
        }
      }
    }
    return true;
  };
  return { checkAvailability, placeShip, receiveAttack, allShipsSunk };
}