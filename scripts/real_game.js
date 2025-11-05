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
let currentLocation
let currentCatchablePokemon
let totalCaughtPokemon = 0


//The types chart-
const NOTHING = [[], []]
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
  constructor(moveName, moveType, damage) {
    this.moveName = moveName
    this.moveType = moveType
    this.damage = damage
  }
}

//List of moves-
const EMPTY = new move('', '', 0);
const TACKLE = new move('Tackle', NORMAL_TYPE, 40);
const QUICK_ATTACK = new move('Quick Attack', NORMAL_TYPE, 60);
const SCRATCH = new move('Scratch', NORMAL_TYPE, 40);
const WRAP = new move('Wrap', NORMAL_TYPE, 20);
const BITE = new move('Bite', NORMAL_TYPE, 60);
const BODY_SLAM = new move('Body Slam', NORMAL_TYPE, 85);
const SLASH = new move('Slash', NORMAL_TYPE, 70);
const SKULL_BASH = new move('Skull Bash', NORMAL_TYPE, 100);
const PURSUIT = new move('Pursuit', NORMAL_TYPE, 50);
const HYPER_FANG = new move('Hyper Fang', NORMAL_TYPE, 80);
const SELF_DESTRUCT = new move('Self-Destruct', NORMAL_TYPE, 130);
const EXPLOSION = new move('Explosion', NORMAL_TYPE, 170);
const THRASH = new move('Thrash', NORMAL_TYPE, 90);
const RAPID_SPIN = new move('Rapid Spin', NORMAL_TYPE, 30);
const EMBER = new move('Ember', FIRE_TYPE, 40);
const FLAME_WHEEL = new move('Flame Wheel', FIRE_TYPE, 60);
const FIRE_SPIN = new move('Fire Spin', FIRE_TYPE, 35);
const FLAMETHROWER = new move('Flamethrower', FIRE_TYPE, 90);
const BUBBLE = new move('Bubble', WATER_TYPE, 40);
const WATER_GUN = new move('Water Gun', WATER_TYPE, 40);
const BUBBLE_BEAM = new move('Bubble Beam', WATER_TYPE, 65);
const WATER_PULSE = new move('Water Pulse', WATER_TYPE, 60);
const SURF = new move('Surf', WATER_TYPE, 90);
const WATERFALL = new move('Waterfall', WATER_TYPE, 80);
const ICE_BEAM = new move('Ice Beam', ICE_TYPE, 90);
const ABSORB = new move('Absorb', GRASS_TYPE, 20);
const VINE_WHIP = new move('Vine Whip', GRASS_TYPE, 45);
const RAZOR_LEAF = new move('Razor Leaf', GRASS_TYPE, 55);
const GIGA_DRAIN = new move('Giga Drain', GRASS_TYPE, 75);
const SOLAR_BEAM = new move('Solar Beam', GRASS_TYPE, 120);
const PETAL_DANCE = new move('Petal Dance', GRASS_TYPE, 100);
const ACID = new move('Acid', POISON_TYPE, 40);
const SLUDGE_BOMB = new move('Sludge Bomb', POISON_TYPE, 90);
const POISON_STING = new move('Poison Sting', POISON_TYPE, 15);
const GUST = new move('Gust', FLYING_TYPE, 40);
const WING_ATTACK = new move('Wing Attack', FLYING_TYPE, 60);
const AERIAL_ACE = new move('Aerial Ace', FLYING_TYPE, 60);
const ROCK_THROW = new move('Rock Throw', ROCK_TYPE, 50);
const ROCK_BLAST = new move('Rock Blast', ROCK_TYPE, 25);
const MAGNITUDE = new move('Magnitude', GROUND_TYPE, 70);
const EARTHQUAKE = new move('Earthquake', GROUND_TYPE, 100);
const SAND_TOMB = new move('Sand Tomb', GROUND_TYPE, 35);
const METAL_CLAW = new move('Metal Claw', STEEL_TYPE, 50);
const LOW_KICK = new move('Low Kick', FIGHTING_TYPE, 50);
const KARATE_CHOP = new move('Karate Chop', FIGHTING_TYPE, 50);
const ROCK_SMASH = new move('Rock Smash', FIGHTING_TYPE, 40);
const CROSS_CHOP = new move('Cross Chop', FIGHTING_TYPE, 100);
const SUBMISSION = new move('Submission', FIGHTING_TYPE, 80);


class pokemon {
  constructor(name, type, moves, hp, evolution) {
    this.name = name
    this.moves = moves
    this.type = type
    this.hp = hp
    this.evolution = evolution
  }
}

//The pokemon list-
const BLASTOISE = new pokemon('Blastoise', WATER_TYPE, [SURF, BITE, SKULL_BASH, WATERFALL], 280)
const WARTORTLE = new pokemon('Wartortle', WATER_TYPE, [WATER_GUN, BITE, RAPID_SPIN, BUBBLE_BEAM], 209, BLASTOISE)
const SQUIRTLE = new pokemon('Squirtle', WATER_TYPE, [BUBBLE, TACKLE, WATER_GUN], 156, WARTORTLE)
const VENUSAUR = new pokemon('Venusaur', GRASS_TYPE, [SOLAR_BEAM, SLUDGE_BOMB, BODY_SLAM, RAZOR_LEAF], 284)
const IVYSAUR = new pokemon('Ivysaur', GRASS_TYPE, [VINE_WHIP, RAZOR_LEAF, ACID, TACKLE], 213, VENUSAUR)
const BULBASAUR = new pokemon('Bulbasaur', GRASS_TYPE, [TACKLE, VINE_WHIP, ABSORB], 160, IVYSAUR)
const CHARIZARD = new pokemon('Charizard', FIRE_TYPE, [FLAMETHROWER, AERIAL_ACE, SLASH, FIRE_SPIN], 277)
const CHARMELEON = new pokemon('Charmeleon', FIRE_TYPE, [EMBER, FLAME_WHEEL, QUICK_ATTACK, METAL_CLAW], 206, CHARIZARD)
const CHARMANDER = new pokemon('Charmander', FIRE_TYPE, [SCRATCH, EMBER, TACKLE], 138, CHARMELEON)
const VILEPLUME = new pokemon('Vileplume', POISON_TYPE, [GIGA_DRAIN, SLUDGE_BOMB, SOLAR_BEAM, ACID], 266)
const GLOOM = new pokemon('Gloom', POISON_TYPE, [ACID, PETAL_DANCE, GIGA_DRAIN], 213, VILEPLUME)
const ODDISH = new pokemon('Oddish', GRASS_TYPE, [ABSORB, ACID, VINE_WHIP], 160, GLOOM)
const RATICATE = new pokemon('Raticate', NORMAL_TYPE, [QUICK_ATTACK, HYPER_FANG, PURSUIT, BITE], 195)
const RATTATA = new pokemon('Rattata', NORMAL_TYPE, [TACKLE, QUICK_ATTACK, BITE], 106, RATICATE)
const NINETALES = new pokemon('Ninetales', FIRE_TYPE, [FLAMETHROWER, FIRE_SPIN, SLASH, QUICK_ATTACK], 259)
const VULPIX = new pokemon('Vulpix', FIRE_TYPE, [EMBER, QUICK_ATTACK, FLAME_WHEEL, TACKLE], 135, NINETALES)
const PIDGEOT = new pokemon('Pidgeot', NORMAL_TYPE, [WING_ATTACK, AERIAL_ACE, QUICK_ATTACK, SLASH], 294)
const PIDGEOTTO = new pokemon('Pidgeotto', NORMAL_TYPE, [GUST, QUICK_ATTACK, WING_ATTACK], 223, PIDGEOT)
const PIDGEY = new pokemon('Pidgey', NORMAL_TYPE, [TACKLE, GUST, QUICK_ATTACK], 142, PIDGEOTTO)
const PELIPPER = new pokemon('Pelipper', WATER_TYPE, [SURF, WING_ATTACK, WATER_PULSE, BITE], 213)
const WINGULL = new pokemon('Wingull', WATER_TYPE, [WATER_GUN, BUBBLE, QUICK_ATTACK, GUST], 142, PELIPPER)
const POLIWRATH = new pokemon('Poliwrath', WATER_TYPE, [SURF, SUBMISSION, ICE_BEAM, BODY_SLAM], 319)
const POLIWHIRL = new pokemon('Poliwhirl', WATER_TYPE, [BUBBLE_BEAM, BODY_SLAM, WATER_GUN], 230, POLIWRATH)
const POLIWAG = new pokemon('Poliwag', WATER_TYPE, [BUBBLE, TACKLE, WATER_GUN], 142, POLIWHIRL)
const TENTACRUEL = new pokemon('Tentacruel', WATER_TYPE, [SURF, SLUDGE_BOMB, WRAP, ACID], 284)
const TENTACOOL = new pokemon('Tentacool', WATER_TYPE, [POISON_STING, WATER_GUN, ACID], 142, TENTACRUEL)
const GOLEM = new pokemon('Golem', ROCK_TYPE, [EARTHQUAKE, ROCK_BLAST, EXPLOSION, TACKLE], 284)
const GRAVELLER = new pokemon('Graveler', ROCK_TYPE, [ROCK_THROW, MAGNITUDE, SELF_DESTRUCT, TACKLE], 195, GOLEM)
const GEODUDE = new pokemon('Geodude', ROCK_TYPE, [TACKLE, ROCK_THROW, MAGNITUDE], 142, GRAVELLER)
const ONIX = new pokemon('Onix', ROCK_TYPE, [TACKLE, ROCK_THROW, SAND_TOMB], 124)
const PRIMEAPE = new pokemon('Primeape', FIGHTING_TYPE, [CROSS_CHOP, THRASH, ROCK_SMASH, KARATE_CHOP], 230)
const MANKEY = new pokemon('Mankey', FIGHTING_TYPE, [SCRATCH, LOW_KICK, KARATE_CHOP], 142, PRIMEAPE)





//////LOCATIONS && ENCOUNTER RATES ///////

const LOCATIONS = ['Wispwood pokémon center', 'mountain path', 'lake path', 'forest path', 'research center', 'continue here']
const MOUNTAIN_PATH = [[CHARIZARD, 1], [CHARMELEON, 2], [CHARMANDER, 4], [GEODUDE, 34], [GRAVELLER, 8], [GOLEM, 2], [VULPIX, 13], [NINETALES, 2], [ONIX, 18], [MANKEY, 12], [PRIMEAPE, 4]]
const LAKE_PATH = [[TENTACOOL, 35], [TENTACRUEL, 11], [POLIWAG, 13], [POLIWHIRL, 8], [POLIWRATH, 2], [WINGULL, 19], [PELIPPER, 6], [SQUIRTLE, 3], [WARTORTLE, 2], [BLASTOISE, 1]]
const FOREST_PATH = [[ODDISH, 20], [GLOOM, 7], [VILEPLUME, 3], [RATTATA, 25], [RATICATE, 10], [PIDGEY, 21], [PIDGEOTTO, 5], [PIDGEOT, 3], [BULBASAUR, 3], [IVYSAUR, 2], [VENUSAUR, 1]]

/////////FUNCTIONS/////////

const setCurrentLocation = (location) => {
  currentLocation = location
  if (currentLocation === 'mountain path') {
    currentCatchablePokemon = MOUNTAIN_PATH
  } else if (currentLocation === 'forest path') {
    currentCatchablePokemon = FOREST_PATH
  } else if (currentLocation === 'lake path') {
    currentCatchablePokemon = LAKE_PATH
  }
}

const createPlaceList = () => {
  newList = LOCATIONS.filter(location => location !== currentLocation)
  return newList
}

const createPlaceString = (list) => {
  let locationString = ''
  for (i = 1; i - 1 < list.length; i++) {
    locationString = locationString + `  ${i}. ` + list[i - 1]
  }
  return locationString
}

const randomPokemonGenerator = () => {
  let randomNumber = pokemonRandomAppearance()
  let pokemonChance = 0
  for (let i = 0; i < currentCatchablePokemon.length; i++) {
    pokemonChance = pokemonChance + currentCatchablePokemon[i][1]
    if (pokemonChance > randomNumber) {
      enemyPokemon = currentCatchablePokemon[i][0]
      currentEnemyHealth = enemyPokemon.hp
      console.log(`Enemy pokemon changed to ${enemyPokemon.name}. (Random number was ${randomNumber}). HP: ${currentEnemyHealth}.`)
      break
    }
  }
}

const setEnemyPokemon = (Name) => {
  enemyPokemon = Name
  currentEnemyHealth = Name.hp
  console.log(`Changed enemy pokemon to ${enemyPokemon.name}. HP: ${currentEnemyHealth}`)
}

const setCurrentPokemon = (Name) => {
  currentPokemon = Name
  currentPokemonHealth = Name.hp
  console.log(`set current pokemon to ${currentPokemon.name}. HP: ${currentPokemon.hp}`)
}

const useCurrentAttack = (number, pokemon) => {
  let currentMove = pokemon.moves[number].moveName
  return currentMove
}

const returnDamage = (pokemon, attack, effectiveness) => {
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

const checkWhiteOut = () => {
  let whiteOut = true
  console.log(myPokemon.length)
  for (let i = 0; i < myPokemon.length; i++) {
    if (myPokemon[i][1] <= 0) {
      console.log(`${myPokemon[i][0].name} is fainted!`)
    } else {
      whiteOut = false
    }
  }
  return whiteOut
}

const returnEnemyHealth = (damageDone) => {
  let health = currentEnemyHealth - damageDone
  currentEnemyHealth = health
  return health
}

const returnPokemonHealth = (damageDone) => {
  let health = currentPokemonHealth - damageDone
  currentPokemonHealth = health
  return health
}

const calculateEffect = (pokemon, move, enemyPokemon) => {
  if (enemyPokemon.type[1].includes(pokemon.moves[move].moveType[2][0])) {
    return " It's super effective!"
  } else if (enemyPokemon.type[0].includes(pokemon.moves[move].moveType[2][0])) {
    return " It's not very effective.."
  } else {
    return ''
  }
}

const addToMyPokemon = (pokemon, hp) => {
  let tempArray = []
  tempArray.push(pokemon)
  tempArray.push(hp)
  myPokemon.push(tempArray)
  console.log(`Added ${tempArray[0].name}, ${tempArray[1]} to ${trainername}'s pokemon.`)
  console.log(myPokemon)
}

const listMyPokemon = () => {
  let myPokemonList = myPokemon.filter(pokeball => pokeball !== currentPokemon)
  let cancel = 'cancel'
  myPokemonList.push(cancel)
  return myPokemonList
}

const myPokemonString = (list) => {
  let myPokemonString = ''
  for (let i = 1; i < list.length; i++) {
    myPokemonString = myPokemonString + `  ${list[i][0]}: ${list[i][1]}HP  `
  }
  return myPokemonString
}

const findAttack = (pokemon) => {
  let indexList = pokemon.moves.map((move, index) => `${index + 1}: ${move.moveName}`)
  let moveString = indexList.join(" | ")
  return moveString
}

const isChoiceValid = (attackNumber, pokemon = currentPokemon) => {
  let num = Number(attackNumber)
  if (num <= pokemon.moves.length - 1 && num >= 0 && !isNaN(num)) {
    return true
  } else {
    return false
  }
}

const chooseActivePokemon = (pokemonChoice) => {
  for (let i = 0; i < myPokemon.length; i++) {
    if (i === pokemonChoice) {
      currentPokemon = pokemonChoice
    } else {
      continue
    }
  }
}

const randomMove = (pokemon) => {
  let randomNumber = Math.floor(Math.random() * pokemon.moves.length)
  return randomNumber
}

const pokemonRandomAppearance = () => {
  let randomNumber = Math.floor(Math.random() * 100)
  return randomNumber
}

const fleeingChance = () => {
  let randomNumber = Math.floor(Math.random() * 23)
  console.log(`${randomNumber} is fleeing chance the number`)
  if (randomNumber === 7) {
    return false
  } else {
    return true
  }
}

const catchingChance = (enemyHP = currentEnemyHealth, enemyPokemon = currentPokemon) => {
  let randomNumber = Math.floor(Math.random() * 10)
  console.log(randomNumber)
  let percentage = (enemyHP / enemyPokemon.HP) * randomNumber
  console.log(percentage)
  if (percentage < 1) {
    return `... ... the ${enemyPokemon.name} broke free!`
  } else if (percentage >= 1) {
    return `... ... the ${enemyPokemon.name} was caught!`
  }
}

const fullyHealPokemon = (pokemon) => {
  return pokemon.hp
}

const healPartyPokemon = () => {
  console.log(myPokemon.length)
  console.log(myPokemon[0][0].name)
  for (let i = 0; i <= myPokemon.length; i++) {
    console.log(i)
    console.log(myPokemon[i][1])
    console.log(fullyHealPokemon(myPokemon[i][0].name))
    myPokemon[i][1] = fullyHealPokemon(myPokemon[i][0].hp)
    console.log(`Restored ${myPokemon[i][0].name} to ${myPokemon[i][1]}`)
  }
}

const pokemonAppears = () => {
  return `A wild ${enemyPokemon.name} appeared! Go, ${currentPokemon.name}! `
}
const fightMessage = () => {
  return `What would you like to do? Please type 'fight', 'change' (to change pokemon), 'throw' (to throw a pokéball) or 'flee'`
}
const fleeMessage = () => {
  return `You chose to flee! You run away with the ${enemyPokemon.name} nipping at your heels.`
}
const choosePokemon = () => {
  return `Please choose a pokemon to battle with:`
}
function attackPrompt() {
  return `Choose an attack for ${currentPokemon.name} to use: `
}
const attackAction = (pokemon, move) => {
  return `${pokemon.name} used ${move}!`
}
const enemyDamageMessage = () => {
  return ` Enemy ${enemyPokemon.name} took `
}
const pokemonDamageMessage = () => {
  return ` Your ${currentPokemon.name} took `
}
const winMessage = () => {
  return `The ${enemyPokemon.name} fainted. You won the match!`
}
const loseMessage = () => {
  return `Your ${currentPokemon.name} fainted.`
}
const whiteoutMessage = () => {
  return `Your ${currentPokemon} was defeated. You ran out of pokemon! You scurry back to the pokemon center to heal your pokemon.`
}

/////////BEGINNING OF THE GAME//////////


alert('Hello there! Welcome to the world of Pokémon! This world is inhabited by creatures called Pokémon! For some people, Pokémon are pets. Other use them for fights.')
trainername = prompt('Right... So what is your name?')
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
while (choice === false) {
  let terrainChoice = prompt(`Which path do you choose? Enter: lake, mountain, forest or home`)
  switch (terrainChoice) {
    case ('lake'):
      alert(`Without hesitation, you head towards the lake. You start to hear the sound of flapping behind you getting closer and closer until.. `)
      setEnemyPokemon(WINGULL)
      setCurrentLocation('lake path')
      choice = true
      break
    case ('mountain'):
      alert(`Without hesitation, you head towards the mountain path. You start to hear something growling behind you. You run faster, but it's catching up...`)
      setEnemyPokemon(VULPIX)
      setCurrentLocation('mountain path')
      choice = true
      break
    case ('forest'):
      alert(`Without hesitation, you continue through the forest, hoping that you'll catch up with the man. You start hearing thumping behind you, and you trip over something round...`)
      setEnemyPokemon(ODDISH)
      setCurrentLocation('forest path')
      choice = true
      break
    case ('home'):
      alert(`In panic, you turn around and flee back through the forest. You hear chattering behind you and freeze in your tracks. You then turn around slowly...`)
      setEnemyPokemon(RATTATA)
      setCurrentLocation('forest path')

      choice = true
      break
    default:
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
  } else if (decision === 'fight') {
    setCurrentPokemon(CHARMANDER)
    battleGoing = false
  } else if (decision === 'throw') {
    alert('You dont have any pokéballs!')
  }
}

alert(`'Oh! ${trainername}, there you are. Looks like you need some help! Here - use my ${currentPokemon.name}.'`)
alert(`${trainername}, this is a great opportunity to teach you something about being a trainer! Every pokémon has strengths and weaknesses.
If you use an attack type on a pokémon that it is weak against, it will do more damage, and you'll be able to defeat it. However if your attack is weak against a pokemon, it will likely endure your attack and return an attack to your pokémon! ${trainername}, I'll let you give it a go!`)
let attackChoiceValid = false
while (!attackChoiceValid) {
  userAttackChoice = (prompt(attackPrompt() + findAttack(currentPokemon)) - 1)
  if (isChoiceValid(userAttackChoice, undefined) === true) {
    console.log('Valid attack choice')
    attackChoiceValid = true
    break
  } else {
    console.log('invalid choice..')
  }
}
currentEffectiveness = calculateEffect(currentPokemon, userAttackChoice, enemyPokemon)
currentAttackDamage = returnDamage(currentPokemon, userAttackChoice, currentEffectiveness)
alert(attackAction(currentPokemon, useCurrentAttack(userAttackChoice, currentPokemon)) + currentEffectiveness + enemyDamageMessage() + currentAttackDamage + ' damage.')
returnEnemyHealth(currentAttackDamage)
if (currentEnemyHealth <= 0) {
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
totalCaughtPokemon = totalCaughtPokemon + 1
alert(`'Well done, ${trainername}! You seem to be a natural at catching pokemon. .... I know! Maybe you can help me find our lost Pokemon! How does that sound, ${trainername}?
  You nod your head eagerly
  Splendid! Report back to me anytime you want to find out how many pokemon you've caught. You'll need to head back to Wispwood to heal up.`)

///////////////END OF INTRO////////////////

///////////////// MAIN GAME LOOP ////////////////////

restartChoice:
while (!gameStopped) {
  let fightingActive
  let placesList = createPlaceList()
  let locationNumberChoice = prompt(`Current Location: ${currentLocation}. 

    Where would you like to go? ${createPlaceString(placesList)}`)
  let locationChoice = placesList[locationNumberChoice - 1]

  let rightAnswer = false
  while (!rightAnswer) {
    if (locationChoice === 'continue here') {
      rightAnswer = true
      fightingActive = true
      alert(`You stay where you are...`)
    } else if (locationChoice === 'Wispwood pokémon center') {
      alert(`You make your way to the pokémon center in Wispwood...
      Hello, ${trainername}, we've healed your pokemon. We hope to see you again!`)
      for (let i = 0; myPokemon.length; i++) {
        healPartyPokemon()
        continue restartChoice
      }
    } else if (locationChoice === 'research center') {
      alert(`You travel to the research center in Wispwood... 
      'Why hello, ${trainername}! Great to see you. It looks like you've caught ${totalCaughtPokemon} pokémon!
      Hope to see you soon!`)
      continue restartChoice
    } else if (locationChoice === 'forest path') {
      setCurrentLocation('forest path')
      rightAnswer = true
      alert(`You start walking on the forest path...`)
    } else if (locationChoice === 'lake path') {
      setCurrentLocation('lake path')
      rightAnswer = true
      alert(`You travel down the lake path...`)
    } else if (locationChoice === 'forest path') {
      setCurrentLocation('forest path')
      rightAnswer = true
      alert(`You head towards the mountain path...`)
    }

    fightingActive = true
    newPokemonAppears:
    while (fightingActive) {
      randomPokemonGenerator()
      fullyHealPokemon(enemyPokemon, enemyPokemon.HP)
      alert(pokemonAppears())

      let battleActive = true
      restartBattleLoop:
      while (battleActive === true) {
        decision = prompt(fightMessage())
        if (decision === 'flee') {
          let fleeChance = fleeingChance()
          if (fleeChance == true) {
            alert('Got away safely...')
            continue restartChoice
          } else {
            alert(`Can't Escape!`)
            continue restartBattleLoop
          }
        } else if (decision === 'change') {
          alert(`You don't have any pokémon to choose from!`)
          continue restartBattleLoop
        } else if (decision === 'throw') {

        } else if (decision === 'fight') {
          userAttackChoice = (prompt(attackPrompt() + findAttack(currentPokemon)) - 1)
          currentEffectiveness = calculateEffect(currentPokemon, userAttackChoice, enemyPokemon)
          currentAttackDamage = returnDamage(currentPokemon, userAttackChoice, currentEffectiveness)
          alert(attackAction(currentPokemon, useCurrentAttack(userAttackChoice, currentPokemon)) + currentEffectiveness + enemyDamageMessage() + currentAttackDamage + ' damage.')
          returnEnemyHealth(currentAttackDamage)
          if (currentEnemyHealth <= 0) {
            battleActive = false
            fightingActive = false
            alert(winMessage())
            continue restartChoice
          } else {
            alert(`Your ${currentPokemon.name} has ${currentPokemonHealth} HP, Enemy ${enemyPokemon.name} has ${currentEnemyHealth} HP.`)
          }
          let moveNumber = randomMove(enemyPokemon)
          currentEffectiveness = calculateEffect(enemyPokemon, moveNumber, currentPokemon)
          currentAttackDamage = returnDamage(enemyPokemon, moveNumber, currentEffectiveness)
          alert(attackAction(enemyPokemon, enemyPokemon.moves[moveNumber].moveName) + currentEffectiveness + pokemonDamageMessage() + currentAttackDamage + ' damage.')
          returnPokemonHealth(currentAttackDamage)
          if (currentPokemonHealth <= 0) {
            battleActive = false
            fightingActive = false
            if (checkWhiteOut() === true) {
              console.log(`${trainername} whited out!`)
              alert(whiteoutMessage())
              fullyHealPokemon()
              alert(`*We have fully healed your pokémon. Please be more careful in the future!*`)
            } else {
              console.log(`${trainername} lost a match`)
              alert(loseMessage())
            }
          } else {
            alert(`Your ${currentPokemon.name} has ${currentPokemonHealth} HP, Enemy ${enemyPokemon.name} has ${currentEnemyHealth} HP.`)
          }

        } else if (decision === 'throw') {

        }
      }
    }
  }
}

gameStopped = true  
