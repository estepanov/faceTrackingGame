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

function checkHitDetection(player, opponents, scoreDiv) {
  opponents.forEach(opponent => {})
  return newOpponents
}

function makeOpponent(windowWidth, windowHeight) {
  let opponentsArray = []

  const NORMAL_HEIGHT = 100
  const NORMAL_WIDTH = 100

  opponentsArray.push({
    points: Math.random() * 100,
    height: NORMAL_HEIGHT,
    width: NORMAL_WIDTH,
    xPosition: getRandomInt(0, windowWidth - NORMAL_WIDTH),
    yPosition: getRandomInt(0, windowHeight - NORMAL_HEIGHT)
  })
  return opponentsArray
}

function drawOpponents(boardContext, opponentsArray) {
  opponentsArray.forEach(opponent => {
    console.log('drawing opponent with points', opponent.points)
    boardContext.fillStyle = '#fff'
    boardContext.fillRect(
      opponent.xPosition,
      opponent.yPosition,
      opponent.height,
      opponent.width
    )
  })
}
