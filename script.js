function showJoinGame() {

  document.getElementById("homeScreen").style.display = "none";
  document.getElementById("joinScreen").style.display = "block";

}

function showNewGame() {

  document.getElementById("homeScreen").style.display = "none";
  document.getElementById("newGameScreen").style.display = "block";

}

function joinGame() {

  const gameId =
    document.getElementById("joinGameId").value;

  const playerName =
    document.getElementById("joinPlayerName").value;

  if (!gameId || !playerName) {

    alert("Please fill all fields");
    return;

  }

  alert(
    "Joined game: " + gameId +
    "\nPlayer: " + playerName
  );

}

function createGame() {

  const hostName =
    document.getElementById("hostName").value;

  if (!hostName) {

    alert("Please enter host name");
    return;

  }

  alert(
    "Game created by: " + hostName
  );

}
