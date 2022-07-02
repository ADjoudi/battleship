export default function Ship(len) {
  let length = len;
  let body = ["", "", "", ""];
  const hit = (position) => {
    body[position] = "hit";
    return true;
  };
  const isSunk = () => {
    body.forEach((unit) => {
      if (unit !== "hit") {
        return false;
      }
    });
    return true;
  };
  return {
    body,
    hit,
    isSunk,
  };
}
