// code your solution here
function superbowlWin(record) {
  // Look through the record to find the first win
  const winningGame = record.find((game) => game.result === "W");

  if (winningGame) {
    return winningGame.year;
  } else {
    return undefined;
  }
}
