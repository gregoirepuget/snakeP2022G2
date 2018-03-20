let snake, posX, posY, dir, tail, tailTab, diamond, diamondPosX, diamondPosY, penality, score, scoreDiv

init()
function init(){
  // On initialise le score à 0
  score = 0
  // On initialise la penalité à 20.
  penality = 20
  // On initialise la direction
  dir = 1
  // créer une balise div pour le snake
  snake = document.createElement('div')
  // lui ajouter l'id snake
  snake.setAttribute('id','snake')
  // on va générer une position aléatoire sur X et Y
  posX = Math.floor((Math.random()*window.innerWidth)/10) * 10
  posY = Math.floor((Math.random()*window.innerHeight)/10) * 10
  // on lui attribuer ses positions.
  placeSnake()
  // on va placer la balise dans le dom
  document.querySelector('body').appendChild(snake)

  //Générer le diamant
  generateDiamond()

  //on va créer une balise div pour contenir tous les élements de la queue
  tail = document.createElement('div')
  // lui ajouter l'id tail
  tail.setAttribute( 'id', 'tail')
  // on va placer la balise dans le dom
  document.querySelector('body').appendChild(tail)
  // créer une balise div pour le score
  scoreDiv = document.createElement('div')
  // lui ajouter l'id score
  scoreDiv.setAttribute('id', 'score')
  // on va placer la balise dans le dom
  document.querySelector('body').appendChild(scoreDiv)
  // on va lui attribuer le score de départ.
  scoreDiv.innerHTML = score

  // On lance la partie.
  //game()
}

function placeSnake(){
  snake.style.top = posY + 'px'
  snake.style.left = posX + 'px'
}

function placeDiamond() {
  diamond.style.top = diamondPosY + 'px'
  diamond.style.left = diamondPosX + 'px'
}

function generateDiamond(){
  // créer une balise div pour le diamant
  diamond = document.createElement('div')
  // lui ajouter l'id diamond
  diamond.setAttribute('id','diamond')
  // on va générer une position aléatoire sur X et Y
  diamondPosX = Math.floor((Math.random()*window.innerWidth)/10) * 10
  diamondPosY = Math.floor((Math.random()*window.innerHeight)/10) * 10
  // on lui attribuer ses positions.
  placeDiamond()
  // on va placer la balise dans le dom
  document.querySelector('body').appendChild(diamond)
}
