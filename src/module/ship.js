export default function Ship(shipName, len) {
  let shipN = shipName;
  let length = len;
  let body = [];
  (function () {
    for (let i = 0; i < length; i++) {
      body.push("");
    }
  })();
  const hit = (position) => {
    body[position] = "hit";
    return true;
  };
  const isSunk = () => {
    console.log("sinking" + getBody());
    getBody().forEach((unit) => {
      if (unit != "hit") {
        return false;
      }
    });
    return true;
  };
  const getBody = () => {
    return body;
  };
  const getShipName = () => {
    return shipN;
  };
  return {
    getShipName,
    getBody,
    hit,
    isSunk,
  };
}
