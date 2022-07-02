import Ship from "../module/ship.js";

describe("ship mechanic", () => {
  it("ship is hit", () => {
    const ship = Ship(3);
    expect(ship.hit(0)).toBe(true);
    ship.hit(0);
    expect(ship.body[0]).toBe("hit");
  });
  it("ship is sunk", () => {
    const ship = Ship(1);
    ship.hit(0);
    expect(ship.isSunk()).toBe(true);
  });
});
