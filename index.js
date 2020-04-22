/***** Deliverable 1 *****/
let header = document.getElementById("header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/

header.style.color = "red"

/***** Deliverable 3 *****/
// console.log("PLAYERS array looks like this:", PLAYERS)

// for (const <KEY> in <OBJECT>) {
//     // Code in the statement body
//   }

let mainPlayersDiv = document.querySelector('div.player-container')
// console.log("players div?", playersDiv)

// iterate thru array of hashes and pull out individual array
for (const element of PLAYERS) {
    console.log(element)
    // classList https://stackoverflow.com/questions/55224589/document-createelementdiv-with-a-class
    // .replace(/\s/g,'')  // removes leading and trailing whitespace, plus word spaces
    // .replace(/ /g,'') // removes just string spaces, will leave leading / trailing space
    // create div w/player name and class info
    let playerDiv = document.createElement('div')
    playerDiv.classList.add(element.name.replace(/\s/g,''))
    playerDiv.setAttribute('data-number', element.number)
    mainPlayersDiv.appendChild(playerDiv)
    
    // create heading for player info
    let newPlayer = document.querySelector(`div.${element.name.replace(/\s/g,'')}`)
    let playerHeading = document.createElement('h3')
    let playerHeadingText = document.createTextNode(`${element.name} (${element.nickname})`)
    playerHeading.appendChild(playerHeadingText)
    newPlayer.appendChild(playerHeading)
   
    // create player image
    let playerImage = document.createElement('img')
    playerImage.src = element.photo
    playerImage.alt = element.name
    newPlayer.appendChild(playerImage)
}


/***** Deliverable 4 *****/

// remove wrong player

let wrongPlayer = document.querySelector('div.RaheemSterling')
wrongPlayer.remove()
// wrongPlayer.removeChild(wrongPlayer.querySelector('div:nth-child(4)'))
