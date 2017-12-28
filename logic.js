'use strict'
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function centerBall(leftCorner, faceWidth, ballWidth) {
  return leftCorner + faceWidth / 2 - ballWidth / 2
}

function updateScore(scoreDiv, newScore) {
  console.log('old score:', scoreDiv.innerHTML, 'new score to add:', newScore)
  scoreDiv.innerHTML = parseInt(scoreDiv.innerHTML) + newScore
}

function endGame(gameOverDiv, scoreDiv, startTime) {
  gameOverDiv.style.visibility = 'visible'
  const endTime = new Date().getTime()
  const gameTime = (endTime - startTime) / 1000
  gameOverDiv.innerHTML =
    gameOverDiv.innerHTML +
    'finished in ' +
    gameTime +
    'seconds <br> with a score of ' +
    scoreDiv.innerHTML
}

function checkHitDetection(player, opponents, scoreDiv) {
  var newOpponents = []
  opponents.forEach(opponent => {
    if (
      player.XPosition <= opponent.xPosition &&
      player.YPosition <= opponent.yPosition &&
      player.XPosition + player.Width >= opponent.xPosition + opponent.width &&
      player.YPosition + player.Height >= opponent.yPosition + opponent.height
    ) {
      updateScore(scoreDiv, opponent.points)
    } else {
      newOpponents.push(opponent)
    }
  })
  return newOpponents
}

function makeOpponent(windowWidth, windowHeight) {
  let opponentsArray = []

  const NORMAL_HEIGHT = 100
  const NORMAL_WIDTH = 100

  for (var i = 0; i < 2; i++) {
    opponentsArray.push({
      points: getRandomInt(1, 2),
      height: NORMAL_HEIGHT,
      width: NORMAL_WIDTH,
      xPosition: getRandomInt(100, windowWidth - NORMAL_WIDTH - 100),
      yPosition: getRandomInt(100, windowHeight - NORMAL_HEIGHT - 100)
    })
  }

  return opponentsArray
}

function drawOpponents(boardContext, opponentsArray) {
  opponentsArray.forEach(opponent => {
    boardContext.fillStyle = '#fff'
    boardContext.fillRect(
      opponent.xPosition,
      opponent.yPosition,
      opponent.height,
      opponent.width
    )
  })
}
