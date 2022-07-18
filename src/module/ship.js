export default function Ship(shipName, len) {
  let shipN = shipName;
  let length = len;
  let rootCord = 0;
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
  const getBody = () => {
    return body;
  };
  const getShipName = () => {
    return shipN;
  };
  const isSunk = () => {
    console.log(getBody());
    let state = true;
    getBody().forEach((unit) => {
      if (unit != "hit") {
        state = false;
      }
    });
    return state;
  };
  const setRootCord = (root) => {
    rootCord = root;
  };
  const getRootCord = () => {
    return rootCord;
  };
  return {
    getShipName,
    getBody,
    hit,
    isSunk,
    setRootCord,
    getRootCord,
  };
}
