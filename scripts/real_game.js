let gamestopped = false
let trainername
let starterpokemon = ''
let myPokemon = ''
let enemyPokemon 
let currentPokemon
let currentAttack
let userAttackChoice
let currentEffectiveness
let currentEnemyHealth
let currentPokemonHealth
let currentAttackDamage
let enemyHealth


//The types chart-
const NOTHING = [[],[]]
const NORMAL_TYPE = [[], ['fighting'], ['normal']]
const FIRE_TYPE = [['grass', 'bug', 'ice', 'steel'], ['water', 'rock', 'ground'], ['fire']]
const WATER_TYPE = [['ground', 'rock', 'fire'], ['grass', 'electric'], ['water']]
const GRASS_TYPE = [['water', 'ground', 'rock'], ['fire', 'flying', 'bug', 'ice'], ['grass']]
const ELECTRIC_TYPE = [['water', 'flying'], ['ground'], ['electric']]
const ICE_TYPE = [['grass', 'ground', 'flying', 'dragon'], ['fire', 'rock', 'fighting', 'steel'], ['ice']]
const FIGHTING_TYPE = [['normal', 'ice', 'rock', 'dark', 'steel'], ['flying', 'psychic', 'fairy'], ['fighting']]
const POISON_TYPE = [['grass', 'fairy'], ['ground', 'psychic'], ['poison']]
const GROUND_TYPE = [['poison', 'fire', 'electric', 'rock', 'steel'], ['water', 'grass', 'ice'], ['ground']]
const FLYING_TYPE = [['grass', 'fighting', 'bug'], ['electric', 'ice', 'rock'], ['flying']]
const PSYCHIC_TYPE = [['fighting', 'poison'], ['bug', 'ghost', 'dark'], ['psychic']]
const BUG_TYPE = [['grass', 'psychic', 'dark'], ['fire', 'flying', 'rock'], ['bug']]
const ROCK_TYPE = [['flying', 'fire', 'bug', 'ice'], ['water', 'grass', 'fighting', 'ground', 'steel'], ['rock']]
const GHOST_TYPE = [['psychic', 'ghost'], ['ghost', 'dark'], ['ghost']]
const DRAGON_TYPE = [['dragon'], ['ice', 'dragon', 'fairy'], ['dragon']]
const DARK_TYPE = [['psychic', 'ghost'], ['fighting', 'bug', 'fairy'], ['dark']]
const STEEL_TYPE = [['ice', 'rock', 'fairy'], ['fire', 'fighting', 'ground'], ['steel']]
const FAIRY_TYPE = [['fighting', 'dragon', 'dark'], ['poison', 'steel'], ['fairy']]

class move {
  constructor (moveName, moveType, damage) {
    this.moveName = moveName
    this.moveType = moveType
    this.damage = damage
  }
}

//List of moves-
const EMPTY = new move('','')
const BUBBLE = new move('Bubble', WATER_TYPE, 50)
const TACKLE = new move('Tackle', NORMAL_TYPE, 70)
const QUICK_ATTACK = new move('Quick Attack', NORMAL_TYPE, 80)
const ROCK_THROW = new move('Rock Throw', ROCK_TYPE, 100)
const WATER_GUN = new move('Water Gun', WATER_TYPE, 70)
const VINE_WHIP = new move('Vine Whip', GRASS_TYPE, )
const EMBER = new move('Ember', FIRE_TYPE, 90)
const FLAME_WHEEL = new move('Flame Wheel', FIRE_TYPE, 120)
const METAL_CLAW = new move('Metal Claw', STEEL_TYPE, 110)


class pokemon {
  constructor (name, type, moves, hp) {
    this.name = name
    this.moves = moves
    this.type = type
    this.hp = hp
  }
}

//The pokemon list-
const SQUIRTLE = new pokemon('Squirtle', WATER_TYPE, [BUBBLE, TACKLE, WATER_GUN], 200) 
// const WARTORTLE
// const BLASTOISE
// const BULBASAUR
// const IVYSAUR
// const VENUSAUR
// const CHARMANDER
const CHARMELEON = new pokemon('Charmeleon', FIRE_TYPE, [EMBER, FLAME_WHEEL, QUICK_ATTACK, METAL_CLAW], 600)
// const CHARIZARD
const ODDISH = new pokemon('Oddish', GRASS_TYPE, [TACKLE], 160)
// const GLOOM
// const VILEPLUME
const RATTATA = new pokemon('Rattata', NORMAL_TYPE, [TACKLE, QUICK_ATTACK], 160)
// const RATICATE
const VULPIX = new pokemon('Vulpix', FIRE_TYPE, [EMBER, FLAME_WHEEL, QUICK_ATTACK, TACKLE], 160)
// const NINETALES
// const PIDGEY
// const PIDGEOTTO
// const PIDGEOT
const WINGULL = new pokemon('Wingull', WATER_TYPE, [WATER_GUN, BUBBLE, TACKLE], 160)
// const POLIWAG
// const POLIWHIRL
// const POLIWRATH
// const TENTACOOL
// const TENTACRUEL
// const GEODUDE
// const GRAVELLER
// const ONIX
// const MANKEY
// const PRIMEAPE

function setEnemyPokemon(Name) {
  enemyPokemon = Name
  currentEnemyHealth = Name.hp
  console.log(`Changed enemy pokemon to ${enemyPokemon}. HP: ${currentEnemyHealth}`)
}

function setCurrentPokemon(Name){
  currentPokemon = Name
  currentPokemonHealth = Name.hp
  console.log(`set current pokemon to ${currentPokemon}. HP: ${currentPokemonHealth}`)///DONT FORGET TO CHANGE THIS
}

function useCurrentAttack(number, pokemon){
  let currentMove = pokemon.moves[number].moveName
  return currentMove
}

function returnDamage(pokemon, attack, effectiveness) {
  let damage = pokemon.moves[attack].damage
  if (effectiveness === " It's super effective!") {
    damage = damage * 1.5
    return damage
  } else if (effectiveness === " It's not very effective..") {
    damage = damage * .5
    return damage 
  } else {
    return damage 
  }
}

function returnEnemyHealth(damageDone){
  currentEnemyHealth = currentEnemyHealth - damageDone
  return currentEnemyHealth
}

function returnPokemonHealth(damageDone){
  currentPokemonHealth = currentPokemonHealth - damageDone
  return currentPokemonHealth
}

function calculateEffect(pokemon, move, enemyPokemon) {
  let effect = ''
  for (let i = 0; i < enemyPokemon.type[1].length; i++) {
    if (pokemon.moves[move].moveType[2][0] === enemyPokemon.type[1][i]) {
      effect = " It's super effective!"
      return effect
    } 
  }
    for (let i = 0; i < enemyPokemon.type[0].length; i++) {
      if (pokemon.moves[move].moveType[2][0] === enemyPokemon.type[0][i]) {
        effect = " It's not very effective.."
        return effect
      }
  }
  return ''
}

function listMyPokemon() {
  let pokemonList = ''
  for (let i = 0; i < myPokemon.length; i++) {
    pokemonList= pokemonList + ', ' + i
    if (i === (myPokemon.length - 1)){
      pokemonList = pokemonList + ' or'
    }
  }
  return pokemonList
}

function findAttack(pokemon) {
  let moveList = ''
  for (let i = 0; i < pokemon.moves.length; i++) {
    moveList = moveList + pokemon.moves[i].moveName + `(${i + 1}), `
  }
  return moveList
}

function chooseActivePokemon(pokemonChoice) {
  for (let i = 0; i < myPokemon.length; i++) {
    if (i === pokemonChoice) {
      currentPokemon = pokemonChoice
    } else {
      continue
    }
  }
}

function randomMove(pokemon) {
  let randomNumber = Math.floor(Math.random() * pokemon.moves.length)
  alert(randomNumber)
  return randomNumber
}

function pokemonAppears() {
  return `A wild ${enemyPokemon.name} appeared! Go, ${currentPokemon.name}! `}
function fightMessage() {
  return  `What would you like to do? Please type 'fight', 'change' (to change pokemon) or 'flee'`}
function fleeMessage() { 
  return `You chose to flee! You run away with the ${enemyPokemon.name} nipping at your heels.`}
function choosePokemon() {
   return `Please choose a pokemon to battle with:`}
function attackPrompt() {
  return `Choose an attack for ${currentPokemon.name} to use: `}
function attackAction(pokemon, move) {
  return `${pokemon.name} used ${move}!`}
function enemyDamageMessage() {
  return ` Enemy ${enemyPokemon.name} took `}
function pokemonDamageMessage() {
  return ` Your ${currentPokemon.name} took `}
function winMessage() {
  return `The ${enemyPokemon.name} was defeated.`
}


  /////////BEGINNING OF THE GAME//////////


  alert('Hello there! Welcome to the world of Pokémon! This world is inhabited by creatures called Pokémon! For some people, Pokémon are pets. Other use them for fights.')
  trainername= prompt('Right... So what is your name?')
  alert(`Welcome, ${trainername}.`)
  alert('You story begins in the village of Wispwood Town, bordered by mountains on one side and a mysterious forest on the other. Wispwood has a long legacy of pokémon trainers, and every year new trainers are given their very own pokémon partner so they can make their own mark on the world.')
  alert(`You're lucky, ${trainername}, because today is your choosing day! You excitedly make your way to the pokémon research center, ready to meet your pokémon.`)
  alert(`You are surprised when you SMACK into someone at the entrance to the center!`)
  alert(`'Oh..erm you must be ${trainername}! I'm terribly sorry but we've had a break-in here at the research center! All of our pokémon are gone!'`)
  alert(`'${trainername}, I'm sorry but I have no pokemon to give you....... Let me think... That's it! ${trainername}, please come with me.`)
  alert(`You follow the man and head uncertainly into the forest. The darkness surrounds you and you realize that the man isn't front of you any longer! You run forwards after him, and come to a fork in the path. The sign says:  <--LAKE PATH .... FOREST PATH.... MOUNTAIN PATH-->`)
  let choice = false
  while (choice === false){
    let terrainChoice = prompt(`Which path do you choose? Enter: lake, mountain, forest or home`)
    switch (terrainChoice) {
      case ('lake') :
        alert(`Without hesitation, you head towards the lake. You start to hear the sound of flapping behind you getting closer and closer until.. `)
        setEnemyPokemon(WINGULL)
        choice = true
        break
      case ('mountain') :
        alert(`Without hesitation, you head towards the mountain path. You start to hear something growling behind you. You run faster, but it's catching up...`)
        setEnemyPokemon(VULPIX)
        choice = true
        break
      case ('forest') :
        alert(`Without hesitation, you continue through the forest, hoping that you'll catch up with the man. You start hearing thumping behind you, and you trip over something round...`)
        setEnemyPokemon(ODDISH)
        choice = true
        break
      case ('home') :
        alert(`In panic, you turn around and flee back through the forest. You hear chattering behind you and freeze in your tracks. You then turn around slowly...`)
        setEnemyPokemon(RATTATA)

        choice = true
        break
      default :
        break
    }
  }
  let battleGoing = true
  restartLoop:
  while (battleGoing === true) {
    decision = prompt(`A wild ${enemyPokemon.name} Appeared! ${fightMessage()}`)
    if (decision === 'flee') {
      alert(`Can't Escape!`)
      continue restartLoop
    } else if (decision === 'change') {
      alert(`You don't have any pokémon to choose from!`)
      continue restartLoop
    } else if (decision === 'fight'){
      setCurrentPokemon(CHARMELEON)
      battleGoing = false
    } else {
      setCurrentPokemon(CHARMELEON)
    }
  }

alert(`'Oh! ${trainername}, there you are. Looks like you need some help! Here - use my ${currentPokemon.name}.'`)
alert(`${trainername}, this is a great opportunity to teach you something about being a trainer! Every pokémon has strengths and weaknesses.
  If you use an attack type on a pokémon that it is weak against, it will do more damage, and you'll be able to defeat it. However if your attack is weak against a pokemon, it will likely endure your attack and return an attack to your pokémon! ${trainername}, I'll let you give it a go!`) 
  let enemyFainted = false
  while (!enemyFainted) {
    userAttackChoice = (prompt(attackPrompt() + findAttack(currentPokemon)) - 1)
    currentEffectiveness = calculateEffect(currentPokemon, userAttackChoice, enemyPokemon)
    currentAttackDamage = returnDamage(currentPokemon, userAttackChoice, currentEffectiveness)
    alert(attackAction(currentPokemon, useCurrentAttack(userAttackChoice, currentPokemon)) + currentEffectiveness + enemyDamageMessage() + currentAttackDamage + ' damage.')
    returnEnemyHealth(currentAttackDamage)
    if (currentEnemyHealth <= 0){
      enemyFainted = true
      alert(winMessage())
    } else {
      alert(`Your ${currentPokemon.name} has ${currentPokemonHealth} HP, Enemy ${enemyPokemon.name} has ${currentEnemyHealth} HP.`)
    }
    let moveNumber = randomMove(enemyPokemon)
    currentEffectiveness = calculateEffect(enemyPokemon, moveNumber, currentPokemon)
    currentAttackDamage = returnDamage(enemyPokemon, moveNumber, currentEffectiveness)
    alert(attackAction(enemyPokemon, enemyPokemon.moves[moveNumber].moveName) + currentEffectiveness + pokemonDamageMessage() + currentAttackDamage + ' damage.')
    returnPokemonHealth(currentAttackDamage)
    
  }
