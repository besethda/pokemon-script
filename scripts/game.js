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

const BLASTOISE = new pokemon('Blastoise', WATER_TYPE, [SURF, BITE, SKULL_BASH, WATERFALL], 280)
const VENUSAUR = new pokemon('Venusaur', GRASS_TYPE, [SOLAR_BEAM, SLUDGE_BOMB, BODY_SLAM, RAZOR_LEAF], 284)
const CHARIZARD = new pokemon('Charizard', FIRE_TYPE, [FLAMETHROWER, AERIAL_ACE, SLASH, FIRE_SPIN], 277)

///////FUNCTIONS////////

const printAction = (action) => {
  const actionBox = document.querySelector('.action-box')
  const actionText = document.createElement('p')
  actionText.textContent = action
  actionBox.appendChild(actionText)
}

const generateRandomNumber = (range) => {
  number = Math.floor(Math.random() * range)
  return number
}

const chooseGamePokemon = () => {
  choice = generateRandomNumber(3)
  let availablePokemon = [BLASTOISE, VENUSAUR, CHARIZARD]
  let userPokemon = (availablePokemon[choice])
  return
}

const listAttacks = (attackingPokemon) => {
  let moveList = ''
  attackingPokemon.moves.forEach(move => {
    moveList = moveList + ` ${move[0]}`
  });
  console.log(moveList)
}

const attack = (attacker, victim) => {

}

listAttacks(CHARIZARD)
/////////STORY//////////

let userPokemon = chooseUserPokemon()
let 