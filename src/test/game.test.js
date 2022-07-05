import Ship from "../module/ship.js";
import Gameboard from "../module/gameboard.js";

describe("ship mechanic", () => {
  it("ship is hit", () => {
    const ship = Ship(3);
    expect(ship.hit(0)).toBe(true);
    ship.hit(0);
    expect(ship.getBody()[0]).toBe("hit");
  });
  it("ship is sunk", () => {
    const ship = Ship(1);
    ship.hit(0);
    expect(ship.isSunk()).toBe(true);
  });
});

describe("gameboard mechanics", () => {
  it("check if spot is available at coordinates", () => {
    const ship = Ship(2);
    const gameboard = Gameboard();
    expect(gameboard.checkAvailability(0, 1, ship)).toBe(true);
  });
  it("place ship at specific coordinates", () => {
    const ship = Ship(1);
    const gameboard = Gameboard();
    expect(gameboard.placeShip(0, 1, ship)).toBe(true);
  });
  it.todo("recieve an attack");
  it.todo("check if all ships sunk");
});

describe("player mechanics", () => {});
