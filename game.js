let gamestopped = false
let trainername
let choice = false
while (!gamestopped) {

  alert('Hello there! Welcome to the world of Pokémon! This world is inhabited by creatures called Pokémon! For some people, Pokémon are pets. Other use them for fights.')
  trainername= prompt('Right... So what is your name?')
  alert(`Welcome, ${trainername}.`)
  alert('You story begins in the village of Wispwood Town, bordered by mountains on one side and a mysterious forest on the other. Wispwood has a long legacy of pokémon trainers, and every year new trainers are given their very own pokémon partner so they can make their own mark on the world.')
  alert(`You're lucky, ${trainername}, because today is that day! You excitedly make your way to the pokémon research center, ready to meet your pokémon.`)
  alert(`You are surprised when you SMACK into someone at the entrance to the center!`)
  alert(`'Oh..erm you must be ${trainername}! I'm terribly sorry but we've had a break-in here at the research center! All of our pokémon are gone!'`)
  alert(`'${trainername}, I'm sorry but I have no pokemon to give you....... Let me think... That's it! ${trainername}, please come with me.`)
  alert(`You follow the man and head uncertainly into the forest. The darkness surrounds you and you realize that the man isn't front of you any longer! You run forwards after him, and come to a fork in the path. The sign says:  <--LAKE PATH .... FOREST PATH.... MOUNTAIN PATH-->`)
  while (!choice){
    choice = true
    let terrainChoice = prompt(`Which path do you choose? Enter: lake, mountain, forest or home`)
    switch (terrainChoice) {
      case ('lake') :
        alert(`Without hesitation, you head towards the lake. You start to see `)
      case ('mountain') :
        alert(`Without hesitation, you head towards the mountain path. You start to see `)
      case ('forest') :
        alert(`Without hesitation, you continue through the forest. You start to see `)
      case ('home') :
        alert(`In panic, you turn around and flee back through the forest.`)
      default :
        choice = false
        break
        alert
    }
  }
  
  
}
