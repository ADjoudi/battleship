export default function Player() {
  let turn = 0;
  const setTurn = (value) => {
    turn = value;
  };
  const getTurn = () => {
    return turn;
  };
  return { setTurn, getTurn };
}
