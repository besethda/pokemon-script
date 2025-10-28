let gameStopped = false
let trainername
let myPokemon = []
let enemyPokemon 
let currentPokemon
let currentAttack
let userAttackChoice
let currentEffectiveness
let currentEnemyHealth
let currentPokemonHealth
let currentAttackDamage
let enemyHealth
let currentLocation
let totalCaughtPokemon = 0


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
const SQUIRTLE = new pokemon('Squirtle', WATER_TYPE, [BUBBLE, TACKLE, WATER_GUN], 44, WARTORTLE);
const WARTORTLE = new pokemon('Wartortle', WATER_TYPE, [WATER_GUN, BITE, RAPID_SPIN], 59, BLASTOISE);
const BLASTOISE = new pokemon('Blastoise', WATER_TYPE, [SURF, BITE, SKULL_BASH, HYDRO_PUMP], 79);
const BULBASAUR = new pokemon('Bulbasaur', GRASS_TYPE, [TACKLE, GROWL, VINE_WHIP, LEECH_SEED], 45, IVYSAUR);
const IVYSAUR = new pokemon('Ivysaur', GRASS_TYPE, [VINE_WHIP, POISON_POWDER, RAZOR_LEAF, SLEEP_POWDER], 60, VENUSAUR);
const VENUSAUR = new pokemon('Venusaur', GRASS_TYPE, [SOLAR_BEAM, SLUDGE_BOMB, SYNTHESIS, BODY_SLAM], 80);
const CHARMANDER = new pokemon('Charmander', FIRE_TYPE, [SCRATCH, GROWL, EMBER, SMOKESCREEN], 39, CHARMELEON);
const CHARMELEON = new pokemon('Charmeleon', FIRE_TYPE, [EMBER, FLAME_WHEEL, QUICK_ATTACK, METAL_CLAW], 58, CHARIZARD);
const CHARIZARD = new pokemon('Charizard', FIRE_TYPE, [FLAMETHROWER, WING_ATTACK, SLASH, FIRE_SPIN], 78);
const ODDISH = new pokemon('Oddish', GRASS_TYPE, [ABSORB, SWEET_SCENT, ACID, STUN_SPORE], 45, GLOOM);
const GLOOM = new pokemon('Gloom', POISON_TYPE, [ACID, MOONLIGHT, PETAL_DANCE], 60, VILEPLUME);
const VILEPLUME = new pokemon('Vileplume', POISON_TYPE, [GIGA_DRAIN, SLUDGE_BOMB, SOLAR_BEAM, STUN_SPORE], 75);
const RATTATA = new pokemon('Rattata', NORMAL_TYPE, [TACKLE, QUICK_ATTACK, BITE, HYPER_FANG], 30, RATICATE);
const RATICATE = new pokemon('Raticate', NORMAL_TYPE, [QUICK_ATTACK, HYPER_FANG, PURSUIT, SUPER_FANG], 55);
const VULPIX = new pokemon('Vulpix', FIRE_TYPE, [EMBER, QUICK_ATTACK, FLAME_WHEEL, CONFUSE_RAY], 38, NINETALES);
const NINETALES = new pokemon('Ninetales', FIRE_TYPE, [FLAMETHROWER, CONFUSE_RAY, SAFEGUARD, FIRE_SPIN], 73);
const PIDGEY = new pokemon('Pidgey', NORMAL_TYPE, [TACKLE, GUST, QUICK_ATTACK], 40, PIDGEOTTO);
const PIDGEOTTO = new pokemon('Pidgeotto', NORMAL_TYPE, [GUST, QUICK_ATTACK, WING_ATTACK], 63, PIDGEOT);
const PIDGEOT = new pokemon('Pidgeot', NORMAL_TYPE, [WING_ATTACK, AERIAL_ACE, QUICK_ATTACK, MIRROR_MOVE], 83);
const WINGULL = new pokemon('Wingull', WATER_TYPE, [WATER_GUN, BUBBLE, GROWL, QUICK_ATTACK], 40, PELIPPER);
const PELIPPER = new pokemon('Pelipper', WATER_TYPE, [SURF, PROTECT, WING_ATTACK, WATER_PULSE], 60);
const POLIWAG = new pokemon('Poliwag', WATER_TYPE, [BUBBLE, HYPNOSIS, WATER_GUN], 40, POLIWHIRL);
const POLIWHIRL = new pokemon('Poliwhirl', WATER_TYPE, [BUBBLE_BEAM, BODY_SLAM, SURF], 65, POLIWRATH);
const POLIWRATH = new pokemon('Poliwrath', WATER_TYPE, [SURF, SUBMISSION, HYPNOSIS, ICE_BEAM], 90);
const TENTACOOL = new pokemon('Tentacool', WATER_TYPE, [POISON_STING, WATER_GUN, ACID], 40, TENTACRUEL);
const TENTACRUEL = new pokemon('Tentacruel', WATER_TYPE, [SURF, SLUDGE_BOMB, BARRIER, WRAP], 80);
const GEODUDE = new pokemon('Geodude', ROCK_TYPE, [TACKLE, DEFENSE_CURL, ROCK_THROW], 40, GRAVELER);
const GRAVELLER = new pokemon('Graveler', ROCK_TYPE, [ROCK_THROW, MAGNITUDE, SELF_DESTRUCT], 55, GOLEM);
const GOLEM = new pokemon('Golem', ROCK_TYPE, [EARTHQUAKE, ROCK_BLAST, EXPLOSION], 80);
const ONIX = new pokemon('Onix', ROCK_TYPE, [TACKLE, ROCK_THROW, HARDEN, SAND_TOMB], 35);
const MANKEY = new pokemon('Mankey', FIGHTING_TYPE, [SCRATCH, LOW_KICK, KARATE_CHOP], 40, PRIMEAPE);
const PRIMEAPE = new pokemon('Primeape', FIGHTING_TYPE, [CROSS_CHOP, THRASH, ROCK_SMASH, FOCUS_ENERGY], 65);


//////LOCATIONS && ENCOUNTER RATES///////

const LOCATIONS = ['Wispwood pokémon center', 'mountain path', 'lake path', 'forest path', 'research center', 'continue here']
const MOUNTAIN_PATH = [[CHARIZARD, 1], [CHARMELEON, 2], [CHARMANDER, 4], [GEODUDE, 34], [GRAVELLER, 8], [GOLEM, 2], [VULPIX, 13], [NINETALES, 2], [ONIX, 18], [MANKEY, 12], [PRIMEAPE, 4]]
const LAKE_PATH = [[TENTACOOL, 35], [TENTACRUEL, 11], [POLIWAG, 13], [POLIWHIRL, 8], [POLIWRATH, 2], [WINGULL, 19], [PELIPPER, 6], [SQUIRTLE, 3], [WARTORTLE, 2], [BLASTOISE, 1]]
const FOREST_PATH = [[ODDISH, 20], [GLOOM, 7], [VILEPLUME, 3], [RATTATA, 25], [RATICATE, 10], [PIDGEY, 21], [PIDGEOTTO, 5], [PIDGEOT, 3], [BULBASAUR, 3], [IVYSAUR, 2], [VENUSAUR, 1]]

/////////FUNCTIONS/////////

function setCurrentLocation(location) {
  currentLocation = location
}

function createPlaceList() {
    newList = LOCATIONS.filter(location => location !== currentLocation)
    return newList
}

function createPlaceString(list) {
  let locationString = ''
  for (i = 1; i-1 < list.length; i++) {
    locationString = locationString + `  ${i}. ` + list[i-1]
  }
  return locationString
}


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

function addToMyPokemon(pokemon, hp) {
  let tempArray = []
  tempArray.push(pokemon)
  tempArray.push(hp)
  myPokemon.push(tempArray)
}

function listMyPokemon() {
  let myPokemonList = myPokemon.filter(pokeball => pokeball !== currentPokemon)
  let cancel = 'cancel'
  myPokemonList.push(cancel)
  return myPokemonList
}

function myPokemonString(list) {
  let myPokemonString = ''
  for (let i = 1; i < list.length; i++) {
    myPokemonString = myPokemonString + `  ${list[i][0]}: ${list[i][1]}HP  `
  }
  return myPokemonString
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
  return randomNumber
}

function fullyHealPokemon(pokemon, myPokemonHPNumber) {
  myPokemon[myPokemonHPNumber] = pokemon.hp
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
  return `The ${enemyPokemon.name} fainted. You won the match!`}
function loseMessage() {
  return `Your ${currentPokemon.name} fainted.`}
function whiteoutMessage() {
  return `Your ${currentPokemon} was defeated. You ran out of pokemon! You scurry back to the pokemon center to heal your pokemon.`}

  /////////BEGINNING OF THE GAME//////////


  alert('Hello there! Welcome to the world of Pokémon! This world is inhabited by creatures called Pokémon! For some people, Pokémon are pets. Other use them for fights.')
  trainername= prompt('Right... So what is your name?')
  alert(`Welcome, ${trainername}.`)
  alert('You story begins in the village of Wispwood Town, bordered by mountains on one side and a mysterious forest on the other. Wispwood has a long legacy of pokémon trainers, and every year new trainers are given their very own pokémon partner so they can make their own mark on the world.')
  alert(`You're lucky, ${trainername}, because today is your choosing day! You excitedly make your way to the pokémon research center, ready to meet your pokémon.`)
  alert(`You are surprised when you SMACK into someone at the entrance to the center!`)
  alert(`'Oh..erm you must be ${trainername}! I'm terribly sorry but there's been a disaster here at the research center. All of our pokémon have escaped into the nearby area!'`)
  alert(`'${trainername}, I'm sorry but I have no pokemon to give you.
    ...... Let me think... That's it! ${trainername}, please come with me.`)
  alert(`You follow the man and head uncertainly into the forest. The darkness surrounds you and you realize that the man isn't front of you any longer! You run forwards after him, and come to a fork in the path. The sign says:  
    <--LAKE PATH 
     FOREST PATH 
      MOUNTAIN PATH-->`)
  let choice = false
  while (choice === false){
    let terrainChoice = prompt(`Which path do you choose? Enter: lake, mountain, forest or home`)
    switch (terrainChoice) {
      case ('lake') :
        alert(`Without hesitation, you head towards the lake. You start to hear the sound of flapping behind you getting closer and closer until.. `)
        setEnemyPokemon(WINGULL)
        setCurrentLocation('lake path')
        choice = true
        break
      case ('mountain') :
        alert(`Without hesitation, you head towards the mountain path. You start to hear something growling behind you. You run faster, but it's catching up...`)
        setEnemyPokemon(VULPIX)
        setCurrentLocation('mountain path')
        choice = true
        break
      case ('forest') :
        alert(`Without hesitation, you continue through the forest, hoping that you'll catch up with the man. You start hearing thumping behind you, and you trip over something round...`)
        setEnemyPokemon(ODDISH)
        setCurrentLocation('forest path')
        choice = true
        break
      case ('home') :
        alert(`In panic, you turn around and flee back through the forest. You hear chattering behind you and freeze in your tracks. You then turn around slowly...`)
        setEnemyPokemon(RATTATA)
        setCurrentLocation('forest path')

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
userAttackChoice = (prompt(attackPrompt() + findAttack(currentPokemon)) - 1)
currentEffectiveness = calculateEffect(currentPokemon, userAttackChoice, enemyPokemon)
currentAttackDamage = returnDamage(currentPokemon, userAttackChoice, currentEffectiveness)
alert(attackAction(currentPokemon, useCurrentAttack(userAttackChoice, currentPokemon)) + currentEffectiveness + enemyDamageMessage() + currentAttackDamage + ' damage.')
returnEnemyHealth(currentAttackDamage)
if (currentEnemyHealth <= 0){
  matchOver = true
  alert(winMessage())
} else if (currentEnemyHealth < 60) {
 } else {
  alert(`Your ${currentPokemon.name} has ${currentPokemonHealth} HP, Enemy ${enemyPokemon.name} has ${currentEnemyHealth} HP.`)
}
let moveNumber = randomMove(enemyPokemon)
currentEffectiveness = calculateEffect(enemyPokemon, moveNumber, currentPokemon)
currentAttackDamage = returnDamage(enemyPokemon, moveNumber, currentEffectiveness)
alert(attackAction(enemyPokemon, enemyPokemon.moves[moveNumber].moveName) + currentEffectiveness + pokemonDamageMessage() + currentAttackDamage + ' damage.')
returnPokemonHealth(currentAttackDamage)
if (currentPokemonHealth <= 0) {
  matchOver = true
  alert(loseMessage())
} else {
  alert(`Your ${currentPokemon.name} has ${currentPokemonHealth} HP, Enemy ${enemyPokemon.name} has ${currentEnemyHealth} HP.`)
} 
alert(`'Wooah there, ${trainername}. Hold on! Once you've lowered a pokémons health it will become easier to capture it inside a pokéball. Here- try catching this ${enemyPokemon.name}.'
   You throw the pokéball.  ....  .... `)
alert(`Congratulations! Your first pokémon, ${enemyPokemon.name} was caught!`)
    addToMyPokemon(enemyPokemon, currentEnemyHealth)
    currentPokemon = myPokemon[0][0]
    currentPokemonHealth = myPokemon[0][1]
    totalCaughtPokemon = totalCaughtPokemon +1
alert(`'Well done, ${trainername}! You seem to be a natural at catching pokemon. .... I know! Maybe you can help me find our lost Pokemon! How does that sound, ${trainername}?
  You nod your head eagerly
  Splendid! Report back to me anytime you want to find out how many pokemon you've caught. You'll need to head back to Wispwood to heal up.`)

while (!gameStopped) {
  let placesList = createPlaceList()
  let locationNumberChoice = prompt(`Current Location: ${currentLocation}. 

    Where would you like to go? ${createPlaceString(placesList)}`)
  let locationChoice = placesList[locationNumberChoice-1]

   let rightAnswer = false
   while (!rightAnswer) {
  if (locationChoice === 'continue here') {
    rightAnswer = true
    continue
  } else if (locationChoice === 'Wispwood pokémon center') {
    rightAnswer = true
    alert(`You make your way to the pokémon center in Wispwood...
      Hello, ${trainername}, we've healed your pokemon. We hope to see you again!`)
      for (let i = 0; myPokemon.length; i++) {
        fullyHealPokemon(myPokemon[i][0].hp, [i][1])
        console.log(`Fully Healed ${myPokemon[i][0].name}.`)
      }
  } else if (locationChoice === 'research center') {
    rightAnswer = true
    alert(`You travel to the research center in Wispwood... `)
  } else if (locationChoice === 'forest path') {
    rightAnswer = true
    alert(`You start walking on the forest path...`)
  } else if (locationChoice === 'lake path') {
    rightAnswer = true
    alert(`You travel down the lake path...`)
  } else if (locationChoice === 'forest path') {
    rightAnswer = true
    alert(`You head towards the mountain path...`)
  }
  
  gameStopped = true  
  }
}


  // while (!matchOver) {
  //   userAttackChoice = (prompt(attackPrompt() + findAttack(currentPokemon)) - 1)
  //   currentEffectiveness = calculateEffect(currentPokemon, userAttackChoice, enemyPokemon)
  //   currentAttackDamage = returnDamage(currentPokemon, userAttackChoice, currentEffectiveness)
  //   alert(attackAction(currentPokemon, useCurrentAttack(userAttackChoice, currentPokemon)) + currentEffectiveness + enemyDamageMessage() + currentAttackDamage + ' damage.')
  //   returnEnemyHealth(currentAttackDamage)
  //   if (currentEnemyHealth <= 0){
  //     matchOver = true
  //     alert(winMessage())
  //     break
  //   } else {
  //     alert(`Your ${currentPokemon.name} has ${currentPokemonHealth} HP, Enemy ${enemyPokemon.name} has ${currentEnemyHealth} HP.`)
  //   }
  //   let moveNumber = randomMove(enemyPokemon)
  //   currentEffectiveness = calculateEffect(enemyPokemon, moveNumber, currentPokemon)
  //   currentAttackDamage = returnDamage(enemyPokemon, moveNumber, currentEffectiveness)
  //   alert(attackAction(enemyPokemon, enemyPokemon.moves[moveNumber].moveName) + currentEffectiveness + pokemonDamageMessage() + currentAttackDamage + ' damage.')
  //   returnPokemonHealth(currentAttackDamage)
  //   if (currentPokemonHealth <= 0) {
  //     matchOver = true
  //     alert(loseMessage())
  //     break
  //   } else {
  //     alert(`Your ${currentPokemon.name} has ${currentPokemonHealth} HP, Enemy ${enemyPokemon.name} has ${currentEnemyHealth} HP.`)
  //   }
  // }