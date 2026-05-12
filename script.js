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

  openGameScreen(gameId, playerName);

}

function createGame() {

  const hostName =
    document.getElementById("hostName").value;

  if (!hostName) {

    alert("Please enter host name");
    return;

  }

  const gameId = generateGameId();

  openGameScreen(gameId, hostName);

}

function openGameScreen(gameId, playerName) {

  document.getElementById("joinScreen").style.display = "none";
  document.getElementById("newGameScreen").style.display = "none";

  document.getElementById("gameScreen").style.display = "block";

  document.getElementById("gameTitle").innerText =
    "Game ID: " + gameId;

  document.getElementById("playerInfo").innerText =
    "Player: " + playerName;

}

function generateGameId() {

  return Math.random()
    .toString(36)
    .substring(2, 8)
    .toUpperCase();

}
