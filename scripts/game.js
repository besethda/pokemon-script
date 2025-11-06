const FIRE_TYPE = [['grass', 'bug', 'ice', 'steel'], ['water', 'rock', 'ground'], ['fire']]
const WATER_TYPE = [['ground', 'rock', 'fire'], ['grass', 'electric'], ['water']]
const GRASS_TYPE = [['water', 'ground', 'rock'], ['fire', 'flying', 'bug', 'ice'], ['grass']]
const FLYING_TYPE = [['grass', 'fighting', 'bug'], ['electric', 'ice', 'rock'], ['flying']]
const POISON_TYPE = [['grass', 'fairy'], ['ground', 'psychic'], ['poison']]
const NORMAL_TYPE = [[], ['fighting'], ['normal']]

class move {
  constructor(moveName, moveType, damage) {
    this.moveName = moveName
    this.moveType = moveType
    this.damage = damage
  }
}

const WATERFALL = new move('Waterfall', WATER_TYPE, 80);
const SOLAR_BEAM = new move('Solar Beam', GRASS_TYPE, 120);
const RAZOR_LEAF = new move('Razor Leaf', GRASS_TYPE, 55);
const FLAMETHROWER = new move('Flamethrower', FIRE_TYPE, 90);
const AERIAL_ACE = new move('Aerial Ace', FLYING_TYPE, 60);
const SLASH = new move('Slash', NORMAL_TYPE, 70);
const SKULL_BASH = new move('Skull Bash', NORMAL_TYPE, 100);
const SLUDGE_BOMB = new move('Sludge Bomb', POISON_TYPE, 90);
const BODY_SLAM = new move('Body Slam', NORMAL_TYPE, 85);
const FIRE_SPIN = new move('Fire Spin', FIRE_TYPE, 35);
const SURF = new move('Surf', WATER_TYPE, 90);
const BITE = new move('Bite', NORMAL_TYPE, 60);

class pokemon {
  constructor(name, type, moves, hp) {
    this.name = name
    this.moves = moves
    this.type = type
    this.hp = hp
  }
}

const BLASTOISE = new pokemon('Blastoise', [WATER_TYPE], [SURF, BITE, SKULL_BASH, WATERFALL], 280)
const VENUSAUR = new pokemon('Venusaur', [GRASS_TYPE, POISON_TYPE], [SOLAR_BEAM, SLUDGE_BOMB, BODY_SLAM, RAZOR_LEAF], 284)
const CHARIZARD = new pokemon('Charizard', [FIRE_TYPE, FLYING_TYPE], [FLAMETHROWER, AERIAL_ACE, SLASH, FIRE_SPIN], 277)

///////FUNCTIONS////////

let userPokemon
let userPokemonHealth
let gamePokemon
let gamepokemonHealth

const clearText = () => document.querySelector('.game-text').textContent = ''

const clearMoves = () =>   document.querySelector('.move-div').remove()

const addPlayBtn = () => {
  const textArea = document.querySelector('.text-area')
  const MOVEDIV = document.createElement('div')
  MOVEDIV.className = 'move-div'
  const playBtn = document.createElement('button')
  playBtn.textContent = 'Play Game'
  playBtn.className = 'play-btn'
  MOVEDIV.appendChild(playBtn)
  textArea.appendChild(MOVEDIV)
  playBtn.addEventListener('click', chooseGamePokemon)
}

const calculateEffectiveness = (currentPokemon, currentMove, damagedPokemon) =>{
  let moveClass, message = '', damage = 1
  currentPokemon.moves.forEach(move => {
    if (move.moveName === currentMove){
      moveClass = move
    } });
    for (let i =0; i < damagedPokemon.type.length; i++){
      if (moveClass.moveType[0].includes(damagedPokemon.type[i][2][0])){
        damage = damage * 1.5
        message = ` It's super effective!`
      } else if (moveClass.moveType[1].includes(damagedPokemon.type[i][2][0])) {
        damage = damage * .5
        message = ` It's not very effective...`
      } 
    }
    damage = damage * moveClass.damage
    damagedPokemon.hp -= damage
    message += ` ${damagedPokemon.name} took ${damage} damage.`
    return message
}

const printAction = (action, i=0) => {
  let speed = 20
  const actionText = document.querySelector('.game-text')
  if (actionText.textContent === 0){
    actionText.textContent = ''
  } if (i < action.length) {
    actionText.textContent += action.charAt(i)
    i++
    setTimeout(() => printAction(action, i++), speed)
  }
}

const generateRandomNumber = (range) => {
  number = Math.floor(Math.random() * range)
  return number
}

const gameAttack = () => {
  number = generateRandomNumber(4)
  useGameAttack(gamePokemon, gamePokemon.moves[number].moveName)
}

const pickAttack = () => printAction(`Pick a move for ${userPokemon} to use:`)

const chooseGamePokemon = () => {
  choice = generateRandomNumber(3)
  let availablePokemon = [BLASTOISE, VENUSAUR, CHARIZARD]
  userPokemon = availablePokemon[choice]
  userPokemonHealth = availablePokemon[choice].hp
  let leftPokemon = availablePokemon.filter((pokemon) => pokemon !== availablePokemon[choice])
  choice = generateRandomNumber(2)
  gamePokemon =leftPokemon[choice]
  gamePokemonHealth = leftPokemon[choice].hp
  playBtn = document.querySelector('.play-btn')
  playBtn.remove()
  printAction(`You got ${userPokemon.name}! Your enemy is ${gamePokemon.name}. Pick a move for ${userPokemon.name} to use:`)
  listAttacks(userPokemon)
  return
}

const useGameAttack = (attackingPokemon, move) =>   {
  printAction(` ${attackingPokemon.name} used ${move}!`)
  document.addEventListener('keydown', listAttacks)
}

const useAttack = (attackingPokemon, move) => {
  const MOVEDIV = document.querySelector('.move-div')
  MOVEDIV.remove()
  clearText(), clearMoves()
  printAction(`${attackingPokemon.name} used ${move}!` + calculateEffectiveness(attackingPokemon, move, gamePokemon))
  document.addEventListener('keydown', gameAttack)
}

const listAttacks = () => {
  const textArea = document.querySelector('.text-area')
  const MOVEDIV = document.createElement('div')
  MOVEDIV.className = 'move-div'
  textArea.appendChild(MOVEDIV)
  userPokemon.moves.forEach(move => {
    let activeMove = document.createElement('button')
    activeMove.className = 'move-btn'
    activeMove.textContent = move.moveName
    MOVEDIV.appendChild(activeMove)
    activeMove.addEventListener('click', () => useAttack(userPokemon, activeMove.textContent))
  });
}

const attack = (attacker, victim) => {

}
// chooseGamePokemon()
// listAttacks(userPokemon)

/////////STORY//////////

addPlayBtn()

