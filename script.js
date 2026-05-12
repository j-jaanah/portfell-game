function joinGame() {

  const gameId = document.getElementById("gameId").value;
  const playerName = document.getElementById("playerName").value;

  if (!gameId || !playerName) {
    alert("Please enter Game ID and Player Name");
    return;
  }

  alert(
    "Joined game: " + gameId +
    "\nPlayer: " + playerName
  );

}console.log("Website loaded");
