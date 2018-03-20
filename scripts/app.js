let snake, posX, posY, dir, tail, tailTab, diamond, diamondPosX, diamondPosY, penality, score, scoreDiv

init()
function init(){
  // On initialise le score à 0
  score = 0
  // On initialise la penalité à 20.
  penality = 20
  // On initialise la direction
  dir = 1

  // on initialise un tableau vide
  tailTab = new Array();

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
  game()
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

function game(){
  // pour lancer la fonction tous les 40millisecondes.
  let gamePlay = setInterval(
    function(){
      //on sauvegarde les anciennes positions de la tête
      let oldPosX = posX,
      oldPosY = posY

      // faire avancer la tete
      if (dir == 0) {
        posY -= 10
      }
      else if (dir == 1) {
        posX += 10
      }
      else if (dir == 2) {
        posY += 10
      }
      else {

        posX -= 10
      }
      placeSnake()

      // gérer la queue du snake
      tailManager(oldPosX,oldPosY)

      // gérer la vérification de la tete et du diamant
      diamondManager()
    }
    ,40)
}

window.addEventListener('keypress', function(e){
  switch(e.keyCode){
    case 122:
        dir = 0
        break;
    case 113:
        dir = 3
        break;
    case 115:
        dir = 2
        break;
    case 100:
        dir = 1
        break;
      }
})

function tailManager(oldPosX,oldPosY){
  // créer une div qui va prendre la place de la tete
  newTail = document.createElement('div')
  newTail.style.top = oldPosY + "px"
  newTail.style.left = oldPosX + "px"
  // la placer dans le dom dans la div #tail
  tail.appendChild(newTail)
  // lui donner l'identifiant 'tposX_posY'
  newTail.setAttribute('id',`t${posX}_${posY}`)

  // ajouter à la fin du tableau tailTab la nouvelle position.
  tailTab[tailTab.length]= new Array(posX,posY);

  // si penality > 0
    // penality --
    if(penality > 0){
      penality--
    }
    else{
      tail.removeChild(document.querySelector("#tail div:first-child"))
      tailTab.shift()

    }
  // sinon
    // supprimer dans la balise #tail la premiere balise enfant.
    // dans le tableau tailTab, supprimer le premier élement (.shift)
}

function diamondManager(){
  if (posX == diamondPosX && posY == diamondPosY){
    document.querySelector('body').removeChild(diamond)
    generateDiamond()
    penality += 10
    score += 10
    scoreDiv.innerHTML = score
  }
}
