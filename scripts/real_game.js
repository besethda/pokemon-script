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
