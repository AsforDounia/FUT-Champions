

async function fetchPlayers() {
    try {
        if (!localStorage.getItem("playersObject")) {
            const response = await fetch('./players.json');
            const data = await response.json();
            const allPlayers = data;
            const players = allPlayers.players;
            localStorage.setItem("playersObject", JSON.stringify(players));
            location.reload();
        }
    }
    catch (error) {
    console.error('Error fetching the data:', error);
    }

}
// ======================================================================

const formations = [
    {
      formation: "4-4-2",
      forward: 2,
      midfield: 4,
      defense: 4,
      goalkeeper: 1,
      prototype: {
        forward: [
          { pos: "ST", x: 35, y: 30 },
          { pos: "ST", x: 65, y: 30 },
        ],
        midfield: [
          { pos: "CM", x: 15, y: 45 },
          { pos: "CM", x: 35, y: 50 },
          { pos: "CM", x: 65, y: 50 },
          { pos: "CM", x: 85, y: 45 },
        ],
        defense: [
          { pos: "CB", x: 20, y: 70 },
          { pos: "CB", x: 40, y: 75 },
          { pos: "CB", x: 60, y: 75 },
          { pos: "CB", x: 80, y: 70 },
        ],
        goalkeeper: [{ pos: "GK", x: 50, y: 95 }],
      },
    },
    {
      formation: "4-3-3",
      forward: 3,
      midfield: 3,
      defense: 4,
      goalkeeper: 1,
      prototype: {
        forward: [
          { pos: "ST", x: 20, y: 30 },
          { pos: "ST", x: 50, y: 25 },
          { pos: "ST", x: 80, y: 30 },
        ],
        midfield: [
          { pos: "CM", x: 30, y: 55 },
          { pos: "CM", x: 50, y: 50 },
          { pos: "CM", x: 70, y: 55 },
        ],
        defense: [
          { pos: "CB", x: 20, y: 70 },
          { pos: "CB", x: 40, y: 75 },
          { pos: "CB", x: 60, y: 75 },
          { pos: "CB", x: 80, y: 70 },
        ],
        goalkeeper: [{ pos: "gK", x: 50, y: 95 }],
      },
    },
  ];
  
  function repositionCards(elementFormation) {
    const formation = formations.find(e => e.formation === elementFormation);

    const cards = document.querySelectorAll(".cart");
  
    let cardIndex = 0;
    for (let i = 0; i < formation.forward; i++) {
      const card = cards[cardIndex];
      const cardPos = card.querySelectorAll("span");
      const cardDataPos = card.querySelectorAll("button");
      for(let k = 0 ; k < cardDataPos.length; k++) {
        cardDataPos[k].setAttribute("data-position", formation.prototype.forward[i].pos);  
      }
  
      for(let j = 0; j < cardPos.length; j++) {
        cardPos[j].innerHTML = formation.prototype.forward[i].pos;
      }
      card.style.left = formation.prototype.forward[i].x + "%";
      card.style.top = formation.prototype.forward[i].y + "%";
      cardIndex++;
    }
    for (let i = 0; i < formation.midfield; i++) {
      const card = cards[cardIndex++];
      const cardPos = card.querySelectorAll("span");
      const cardDataPos = card.querySelectorAll("button");
      for(let k = 0 ; k < cardDataPos.length; k++) {
        cardDataPos[k].setAttribute("data-position", formation.prototype.midfield[i].pos);  
      }
      for(let j = 0; j < cardPos.length; j++) {
        cardPos[j].innerHTML = formation.prototype.midfield[i].pos;
      }
      card.style.left = formation.prototype.midfield[i].x + "%";
      card.style.top = formation.prototype.midfield[i].y + "%";
    }
    for (let i = 0; i < formation.defense; i++) {
      const card = cards[cardIndex++];
      const cardPos = card.querySelectorAll("span");
      const cardDataPos = card.querySelectorAll("button");
      for(let k = 0 ; k < cardDataPos.length; k++) {
        cardDataPos[k].setAttribute("data-position", formation.prototype.defense[i].pos);  
      }
      for(let j = 0; j < cardPos.length; j++) {
        cardPos[j].innerHTML = formation.prototype.defense[i].pos;
      }
      card.style.left = formation.prototype.defense[i].x + "%";
      card.style.top = formation.prototype.defense[i].y + "%";
    }
    for (let i = 0; i < formation.goalkeeper; i++) {
      const card = cards[cardIndex++];
      const cardPos = card.querySelectorAll("span");
      for(let j = 0; j < cardPos.length; j++) {
        cardPos[j].innerHTML = formation.prototype.goalkeeper[i].pos;
      }
      card.style.left = formation.prototype.goalkeeper[i].x + "%";
      card.style.top = formation.prototype.goalkeeper[i].y + "%";
    }
  }
  
 



// ==================================








function homePage(){
    fetchPlayers();
    if (window.location.pathname.endsWith("players.html")) {
        playersPage();
    }
    if (window.location.pathname.endsWith("index.html") || window.location.pathname.endsWith("/") ) {
        allPlayers();
        repositionCards("4-4-2");
        
    }
    localStorage.removeItem("CurentsquadList");
}

document.addEventListener("DOMContentLoaded", homePage());

const players = JSON.parse(localStorage.getItem("playersObject"));

// const players = [
//     {
//         name: "Lionel Messi",
//         photo: "https://cdn.sofifa.net/players/158/023/25_120.png",
//         flag: "https://cdn.sofifa.net/flags/ar.png",
//         logo: "https://cdn.sofifa.net/meta/team/239235/120.png",
//         nationality: "Argentina",
//         club: "Paris Saint-Germain",
//         position: ["RW", "CF", "CAM"],
//         rating: 93,
//         pace: 79,
//         shooting: 91,
//         passing: 90,
//         dribbling: 95,
//         defending: 37,
//         physical: 65
//     },
//     {
//         name: "Cristiano Ronaldo",
//         photo: "https://cdn.sofifa.net/players/020/801/25_120.png",
//         flag: "https://cdn.sofifa.net/flags/pt.png",
//         logo: "https://cdn.sofifa.net/meta/team/2506/120.png",
//         nationality: "Portugal",
//         club: "Al Nassr",
//         position: ["ST", "LW"],
//         rating: 90,
//         pace: 83,
//         shooting: 93,
//         passing: 81,
//         dribbling: 82,
//         defending: 35,
//         physical: 78
//     },
//     {
//         name: "Kevin De Bruyne",
//         photo: "https://cdn.sofifa.net/players/192/985/25_120.png",
//         flag: "https://cdn.sofifa.net/flags/be.png",
//         logo: "https://cdn.sofifa.net/players/239/085/25_120.png",
//         nationality: "Belgium",
//         club: "Manchester City",
//         position: ["CM", "CAM"],
//         rating: 91,
//         pace: 74,
//         shooting: 83,
//         passing: 95,
//         dribbling: 87,
//         defending: 56,
//         physical: 78
//     },
//     {
//         name: "Kylian Mbappé",
//         photo: "https://cdn.sofifa.net/players/231/747/25_120.png",
//         flag: "https://cdn.sofifa.net/flags/fr.png",
//         logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
//         nationality: "France",
//         club: "Paris Saint-Germain",
//         position: ["CF", "LW"],
//         rating: 91,
//         pace: 96,
//         shooting: 87,
//         passing: 80,
//         dribbling: 91,
//         defending: 34,
//         physical: 77
//     },
//     {
//         name: "Virgil van Dijk",
//         photo: "https://cdn.sofifa.net/players/203/376/25_120.png",
//         flag: "https://cdn.sofifa.net/flags/nl.png",
//         logo: "https://cdn.sofifa.net/meta/team/8/120.png",
//         nationality: "Netherlands",
//         club: "Liverpool",
//         position: ["CB"],
//         rating: 90,
//         pace: 76,
//         shooting: 61,
//         passing: 75,
//         dribbling: 70,
//         defending: 89,
//         physical: 83
//     },
//     {
//         name: "Antonio Rudiger",
//         photo: "https://cdn.sofifa.net/players/205/452/25_120.png",
//         flag: "https://cdn.sofifa.net/flags/de.png",
//         logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
//         nationality: "Germany",
//         club: "Real Madrid",
//         position: ["CB"],
//         rating: 85,
//         pace: 79,
//         shooting: 59,
//         passing: 60,
//         dribbling: 70,
//         defending: 85,
//         physical: 86
//     },
//     {
//         name: "Neymar Jr",
//         photo: "https://cdn.sofifa.net/players/190/871/25_120.png",
//         flag: "https://cdn.sofifa.net/flags/br.png",
//         logo: "https://cdn.sofifa.net/meta/team/7011/120.png",
//         nationality: "Brazil",
//         club: "Al Hilal",
//         position: ["LW", "CF"],
//         rating: 88,
//         pace: 85,
//         shooting: 80,
//         passing: 80,
//         dribbling: 94,
//         defending: 40,
//         physical: 66
//     },
//     {
//         name: "Mohamed Salah",
//         photo: "https://cdn.sofifa.net/players/192/985/25_120.png",
//         flag: "https://cdn.sofifa.net/flags/eg.png",
//         logo: "https://cdn.sofifa.net/meta/team/8/120.png",
//         nationality: "Egypt",
//         club: "Liverpool",
//         position: ["RW"],
//         rating: 89,
//         pace: 89,
//         shooting: 88,
//         passing: 83,
//         dribbling: 90,
//         defending: 49,
//         physical: 77
//     },
//     {
//         name: "Joshua Kimmich",
//         photo: "https://cdn.sofifa.net/players/212/622/25_120.png",
//         flag: "https://cdn.sofifa.net/flags/de.png",
//         logo: "https://cdn.sofifa.net/meta/team/503/120.png",
//         nationality: "Germany",
//         club: "Bayern Munich",
//         position: ["CDM", "CM"],
//         rating: 88,
//         pace: 73,
//         shooting: 76,
//         passing: 87,
//         dribbling: 80,
//         defending: 85,
//         physical: 75
//     },
//     {
//         name: "Jan Oblak",
//         photo: "https://cdn.sofifa.net/players/200/389/25_120.png",
//         flag: "https://cdn.sofifa.net/flags/si.png",
//         logo: "https://cdn.sofifa.net/meta/team/7980/120.png",
//         nationality: "Slovenia",
//         club: "Atletico Madrid",
//         position: ["GK"],
//         rating: 91,
//         pace: 49,
//         shooting: 40,
//         passing: 55,
//         dribbling: 56,
//         defending: 90,
//         physical: 83
//     },
//     {
//         name: "Luka Modrić",
//         photo: "https://cdn.sofifa.net/players/177/003/25_120.png",
//         flag: "https://cdn.sofifa.net/flags/hr.png",
//         logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
//         nationality: "Croatia",
//         club: "Real Madrid",
//         position: ["CM", "CAM"],
//         rating: 89,
//         pace: 74,
//         shooting: 79,
//         passing: 91,
//         dribbling: 89,
//         defending: 58,
//         physical: 72
//     },
//     {
//         name: "Vinicius Junior",
//         photo: "https://cdn.sofifa.net/players/238/794/25_120.png",
//         flag: "https://cdn.sofifa.net/flags/br.png",
//         logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
//         nationality: "Brazil",
//         club: "Real Madrid",
//         position: ["LW"],
//         rating: 87,
//         pace: 91,
//         shooting: 80,
//         passing: 77,
//         dribbling: 89,
//         defending: 33,
//         physical: 74
//     },
//     {
//         name: "Brahim Diáz",
//         photo: "https://cdn.sofifa.net/players/231/410/25_120.png",
//         flag: "https://cdn.sofifa.net/flags/ma.png",
//         logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
//         nationality: "Morocco",
//         club: "AC Milan",
//         position: ["RW", "CAM"],
//         rating: 80,
//         pace: 87,
//         shooting: 74,
//         passing: 72,
//         dribbling: 81,
//         defending: 38,
//         physical: 68
//     },
//     {
//         name: "Karim Benzema",
//         photo: "https://cdn.sofifa.net/players/165/153/25_120.png",
//         flag: "https://cdn.sofifa.net/flags/fr.png",
//         logo: "https://cdn.sofifa.net/meta/team/476/120.png",
//         nationality: "France",
//         club: "Al-Ittihad",
//         position: ["ST"],
//         rating: 89,
//         pace: 80,
//         shooting: 88,
//         passing: 81,
//         dribbling: 84,
//         defending: 34,
//         physical: 77
//     },
//     {
//         name: "Erling Haaland",
//         photo : "https://cdn.sofifa.net/players/239/085/25_120.png",
//         flag: "https://cdn.sofifa.net/flags/no.png",
//         logo: "https://cdn.sofifa.net/players/239/085/25_120.png",
//         nationality: "Norway",
//         club: "Manchester City",
//         position: ["ST"],
//         rating: 90,
//         pace: 91,
//         shooting: 94,
//         passing: 75,
//         dribbling: 85,
//         defending: 35,
//         physical: 90
//     },
//     {
//         name : "N Golo Kanté",
//         photo : "https://cdn.sofifa.net/players/215/914/25_120.png",
//         flag: "https://cdn.sofifa.net/flags/gb.png",
//         logo: "https://cdn.sofifa.net/meta/team/9282/120.png",
//         nationality: "England",
//         club: "Bayern Munich",
//         position: ["ST"],
//         rating: 88,
//         pace: 78,
//         shooting: 91,
//         passing: 80,
//         dribbling: 80,
//         defending: 39,
//         physical: 83
//     },
//     {
//         name : "Alphonso Davies",
//         photo : "https://cdn.sofifa.net/players/234/396/25_120.png",
//         flag: "https://cdn.sofifa.net/flags/be.png",
//         logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
//         nationality: "Belgium",
//         club: "Real Madrid",
//         position: ["GK"],
//         rating: 89,
//         pace: 50,
//         shooting: 35,
//         passing: 60,
//         dribbling: 55,
//         defending: 86,
//         physical: 85
//     },
//     {
//         name : "Yassine Bounou",
//         photo : "https://cdn.sofifa.net/players/209/981/25_120.png",
//         flag: "https://cdn.sofifa.net/flags/sn.png",
//         logo: "https://cdn.sofifa.net/meta/team/10792/120.png",
//         nationality: "Senegal",
//         club: "Al Nassr",
//         position: ["GK"],
//         rating: 88,
//         pace: 88,
//         shooting: 85,
//         passing: 80,
//         dribbling: 87,
//         defending: 40,
//         physical: 74
//     },
//     {
//         name : "Bruno Fernandes",
//         photo : "https://cdn.sofifa.net/players/212/198/25_120.png",
//         flag: "https://cdn.sofifa.net/flags/gb.png",
//         logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
//         nationality: "England",
//         club: "Real Madrid",
//         position: ["CM", "CAM"],
//         rating: 85,
//         pace: 80,
//         shooting: 78,
//         passing: 80,
//         dribbling: 83,
//         defending: 75,
//         physical: 83
//     },
//     {
//         name : "Jadon Sancho",
//         photo : "https://cdn.sofifa.net/players/233/049/25_120.png",
//         flag: "https://cdn.sofifa.net/flags/nl.png",
//         logo: "https://cdn.sofifa.net/meta/team/529/120.png",
//         nationality: "Netherlands",
//         club: "Barcelona",
//         position: ["CM"],
//         rating: 87,
//         pace: 76,
//         shooting: 72,
//         passing: 87,
//         dribbling: 85,
//         defending: 77,
//         physical: 77
//     },
//     {
//         name : "Trent Alexander-Arnold",
//         photo : "https://cdn.sofifa.net/players/231/281/25_120.png",
//         flag: "https://cdn.sofifa.net/flags/de.png",
//         logo: "https://cdn.sofifa.net/meta/team/529/120.png",
//         nationality: "Germany",
//         club: "Barcelona",
//         position: ["GK"],
//         rating: 89,
//         pace: 50,
//         shooting: 40,
//         passing: 60,
//         dribbling: 55,
//         defending: 85,
//         physical: 84
//     },
//     {
//         name : "Achraf Hakimi",
//         photo : "https://cdn.sofifa.net/players/235/212/25_120.png",
//         position : ["RB"],
//         nationality : "Morocco",
//         flag : "https://cdn.sofifa.net/flags/ma.png",
//         club : "Paris Saint-Germain",
//         logo : "https://cdn.sofifa.net/meta/team/591/120.png",
//         rating : 84,
//         pace : 91,
//         shooting : 76,
//         passing : 80,
//         dribbling : 80,
//         defending : 75,
//         physical : 78
//         },
//         {
//         name : "Youssef En-Nesyri",
//         photo : "https://cdn.sofifa.net/players/235/410/25_120.png",
//         position : ["CDM"],
//         nationality : "Morocco",
//         flag : "https://cdn.sofifa.net/flags/ma.png",
//         club : "Fenerbahçe",
//         logo : "https://cdn.sofifa.net/meta/team/88/120.png",
//         rating : 83,
//         pace : 82,
//         shooting : 82,
//         passing : 63,
//         dribbling : 77,
//         defending : 36,
//         physical : 80
//         },
//         {
//         name : "Noussair Mazraoui",
//         photo : "https://cdn.sofifa.net/players/236/401/25_120.png",
//         position : ["LB"],
//         nationality : "Morocco",
//         flag : "https://cdn.sofifa.net/flags/ma.png",
//         club : "Manchester United",
//         logo : "https://cdn.sofifa.net/meta/team/14/120.png",
//         rating : 81,
//         pace : 78,
//         shooting : 66,
//         passing : 77,
//         dribbling : 83,
//         defending : 77,
//         physical : 71
//         },
//         {
//         name : "Ismael Saibari",
//         photo : "https://cdn.sofifa.net/players/259/480/25_120.png",
//         position : ["CM"],
//         nationality : "Morocco",
//         flag : "https://cdn.sofifa.net/flags/ma.png",
//         club : "PSV",
//         logo : "https://cdn.sofifa.net/meta/team/682/120.png",
//         rating : 83,
//         pace : 89,
//         shooting : 78,
//         passing : 80,
//         dribbling : 86,
//         defending : 55,
//         physical : 84
//         },
//         {
//         name : "Gianluigi Donnarumma",
//         photo : "https://cdn.sofifa.net/players/230/621/25_120.png",
//         position : ["GK"],
//         nationality : "Italy",
//         flag : "https://cdn.sofifa.net/flags/it.png",
//         club : "Paris Saint-Germain",
//         logo : "https://cdn.sofifa.net/meta/team/591/120.png",
//         rating : 89,
//         diving : 88,
//         handling : 84,
//         kicking : 75,
//         reflexes : 90,
//         speed : 50,
//         positioning : 85
//         }
// ];

// console.log(players);

let containerPlayer;
let clickedButton;
function selectPlayer(element) {
    
    containerPlayer = element; 

    const position = containerPlayer.getAttribute('data-position');

    const players = JSON.parse(localStorage.getItem("playersObject"));

    // const curentSquadList = JSON.parse(localStorage.getItem("CurentsquadList"));

    const options = players.filter(player => player.position.includes(position));
    // if (curentSquadList && options ) {
    //     options.forEach(optionPlayer => {
    //         const playerExistsInSquad = curentSquadList.find(squadPlayer => squadPlayer.name === optionPlayer.name);
    //         if (playerExistsInSquad) {
    //             const playerIndex = options.indexOf(playerExistsInSquad);
    //             options.splice(playerIndex, 1);
    //         } else {
    //             console.log(`${optionPlayer.name} n'existe pas dans CurentsquadList.`);
    //         }
    //     });
    // }
    
    const divParent = document.getElementById("playerList");
    divParent.className = "w-full h-auto";

    
    
    divParent.innerHTML = ``;
    const selectElement = document.createElement("div");
    selectElement.className = "flex w-full";
    divParent.appendChild(selectElement);

    const playerDiv1 = document.createElement("div");
    playerDiv1.className = "w-full h-full mx-2";
    const playerDiv2 = document.createElement("div");
    playerDiv2.className = "w-full h-full";

    selectElement.appendChild(playerDiv1);
    selectElement.appendChild(playerDiv2);
    const middleIndex = Math.ceil(options.length / 2);  
    const firstHalf = options.slice(0, middleIndex); 
    const secondHalf = options.slice(middleIndex);
    firstHalf.forEach(player => {
        const playerDiv = document.createElement("div");
        playerDiv.setAttribute("onclick", `AddPlayerToSquad('${player.name}')`);


        playerDiv.className = "flex items-center w-full border border-black bg-slate-800 p-2 cursor-pointer my-2 hover:border-yellow-500";

        playerDiv.innerHTML = `
            <img src="${player.photo}" class="w-12 h-12 object-cover mr-4">
            <span class="text-white">${player.name}</span>
        
        `;
        playerDiv1.appendChild(playerDiv);
    });
    secondHalf.forEach(player => {
        const playerDiv = document.createElement("div");
        playerDiv.setAttribute("onclick", `AddPlayerToSquad('${player.name}')`);
        playerDiv.className = "flex items-center w-full border border-black bg-slate-800 p-2 cursor-pointer my-2 hover:border-yellow-500";

        playerDiv.innerHTML = `
            <img src="${player.photo}" class="w-12 h-12 object-cover mr-4">
            <span class="text-white">${player.name}</span>
        
        `;
        playerDiv2.appendChild(playerDiv);
    });
}



function hideSelect() {
    const selectElement = document.getElementById("selectPlayer");
    if (selectElement) {
        selectElement.classList.add("hidden");
    selectElement.classList.remove("z-40");

    }
}
let squadList = []; 


// function AddPlayerToAdditional(playerName){
//     const players = JSON.parse(localStorage.getItem("playersObject"));

//     const playerfound = players.find(player => player.name === playerName);
//     const CurentsquadList = JSON.parse(localStorage.getItem("CurentsquadList")) || [];
//     // const additionalSquadList = JSON.parse(localStorage.getItem("additionalSquadList")) || [];

//     if(CurentsquadList){
//         const squadPlayer = CurentsquadList.find(player => player.name === playerfound.name);
//         if (!squadPlayer) {
//             // CurentsquadList.additionalSquadList.find(player => player.name === playerfound.name);
//             // if()
//             CurentsquadList.push(playerfound);
//             localStorage.setItem("CurentsquadList", JSON.stringify(CurentsquadList));

//             containerPlayer.innerHTML = "";
    
//             containerPlayer.innerHTML = `
//             <div onclick="hoverDiv('${playerfound.name}')" class="divPlayerChange flex flex-col items-center justify-center w-full h-full text-white" >
//                 <img  src="${playerfound.photo}" class="w-[5rem] playerImage">
//                 <p class="playerName text-sm text-white w-3/5">${playerfound.name}</p>
//             </div>
//             `;
//         }
//         else{
//             alert("Player already in the squad");
//         }
//     }
// }




function AddPlayerToSquad(playerName) {

    const players = JSON.parse(localStorage.getItem("playersObject")) || [];
    const CurentsquadList = JSON.parse(localStorage.getItem("CurentsquadList")) || [];
    const playerfound = players.find(player => player.name === playerName);

    const squadPlayer = CurentsquadList.find(player => player.name === playerName);

    if (squadPlayer) {
        alert("Player already in the squad");
        return;
    }

    CurentsquadList.push(playerfound);
    localStorage.setItem("CurentsquadList", JSON.stringify(CurentsquadList));

    containerPlayer.innerHTML = `
        <div onclick="hoverDiv('${playerfound.name}')" class="divPlayerChange flex flex-col items-center justify-center w-full h-full text-white">
            <img src="${playerfound.photo}" class="w-[5rem] playerImage">
            <p class="playerName text-sm text-white w-3/5">${playerfound.name}</p>
        </div>
    `;
}

function addNewSquad(){
    const squadList = JSON.parse(localStorage.getItem("SquadList")) || [];
    const CurentsquadList = JSON.parse(localStorage.getItem("CurentsquadList")) || [];
    console.log(CurentsquadList.length);
    if( CurentsquadList.length === 11 ){
        squadList.push();
        localStorage.setItem("SquadList", JSON.stringify(squadList));


    }
    else{


    const errorMessage = document.getElementById('error-message');
        alert("You must have 11 players in your squad");
    }


}




function hoverDiv(playerName){

    const divPlayerChange = document.getElementsByClassName('divPlayerChange');

    if (divPlayerChange.length > 0) {
        for (const div of divPlayerChange) {
            const playerParagraphs = div.getElementsByClassName("playerName");

            for (let i = 0; i < playerParagraphs.length; i++) {
                console.log(`playerParagraphs : ${i + 1}`, playerParagraphs[i]);

                if (playerParagraphs[i].textContent === playerName) {
                    const CurentsquadList = JSON.parse(localStorage.getItem("CurentsquadList"));

                    const playerToRemoveIndex = CurentsquadList.findIndex(player => player.name === playerName);

                    if (playerToRemoveIndex !== -1) {
                        CurentsquadList.splice(playerToRemoveIndex, 1);
                        localStorage.setItem("CurentsquadList", JSON.stringify(CurentsquadList));
                    }
                    const parentDiv = playerParagraphs[i].parentElement;
                    const plusButton = parentDiv.parentElement;

                    parentDiv.innerHTML = `
                        <svg class="w-1/2 fill-current text-slate-800 group-hover:text-green-600" viewBox="0 0 85 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M42.5 20.5C43.6935 20.5 44.8381 20.9741 45.682 21.818C46.5259 22.6619 47 23.8065 47 25V37.5H59.5C60.6935 37.5 61.8381 37.9741 62.682 38.818C63.5259 39.6619 64 40.8065 64 42C64 43.1935 63.5259 44.3381 62.682 45.182C61.8381 46.0259 60.6935 46.5 59.5 46.5H47V59C47 60.1935 46.5259 61.3381 45.682 62.182C44.8381 63.0259 43.6935 63.5 42.5 63.5C41.3065 63.5 40.1619 63.0259 39.318 62.182C38.4741 61.3381 38 60.1935 38 59V46.5H25.5C24.3065 46.5 23.1619 46.0259 22.318 45.182C21.4741 44.3381 21 43.1935 21 42C21 40.8065 21.4741 39.6619 22.318 38.818C23.1619 37.9741 24.3065 37.5 25.5 37.5H38V25C38 23.8065 38.4741 22.6619 39.318 21.818C40.1619 20.9741 41.3065 20.5 42.5 20.5Z" fill="currentColor"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M84.5 42C84.5 65.196 65.696 84 42.5 84C19.304 84 0.5 65.196 0.5 42C0.5 18.804 19.304 0 42.5 0C65.696 0 84.5 18.804 84.5 42ZM75.5 42C75.5 60.225 60.725 75 42.5 75C24.275 75 9.5 60.225 9.5 42C9.5 23.775 24.275 9 42.5 9C60.725 9 75.5 23.775 75.5 42Z" fill="currentColor"/>
                            <defs>
                            <linearGradient id="paint0_linear_0_1" x1="0.500001" y1="1.16437e-06" x2="84.5" y2="84" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#0074FF"/>
                            <stop offset="1" stop-color="#6D4EE9"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_0_1" x1="0.5" y1="0" x2="84.5" y2="84" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#0074FF"/>
                            <stop offset="1" stop-color="#6D4EE9"/>
                            </linearGradient>
                            </defs>
                        </svg>
                    `;

                    plusButton.click();
                }
            }
        }
    }


}
function allPlayers(){
    
    const players = JSON.parse(localStorage.getItem("playersObject")) || [];
    
    const playerList = document.getElementById("playerList");
    console.log("playerList : ", playerList);
    playerList.className = "flex w-full h-[66%] overflow-auto";
    playerList.innerHTML = "";
    const playerDiv1 = document.createElement("div");
    playerDiv1.className = "w-full h-full mx-2";
    const playerDiv2 = document.createElement("div");
    playerDiv2.className = "w-full h-full";


    playerList.appendChild(playerDiv1);
    playerList.appendChild(playerDiv2);


    const middleIndex = Math.ceil(players.length / 2);
    const firstHalf = players.slice(0, middleIndex); 
    const secondHalf = players.slice(middleIndex);
    firstHalf.forEach(player => {
        const playerDiv = document.createElement("div");
        playerDiv.setAttribute("onclick", `playerDetails('${player.name}')`);
        playerDiv.className = "flex items-center w-full border border-black bg-slate-800 p-2 cursor-pointer my-2 hover:border-yellow-500";

        playerDiv.innerHTML = `
            <img src="${player.photo}" class="w-12 h-12 object-cover mr-4">
            <span class="text-white">${player.name}</span>
        
        `;
        playerDiv1.appendChild(playerDiv);
    });
    secondHalf.forEach(player => {
        const playerDiv = document.createElement("div");
        playerDiv.setAttribute("onclick", `playerDetails('${player.name}')`);
        playerDiv.className = "flex items-center w-full border border-black bg-slate-800 p-2 cursor-pointer my-2 hover:border-yellow-500";

        playerDiv.innerHTML = `
            <img src="${player.photo}" class="w-12 h-12 object-cover mr-4">
            <span class="text-white">${player.name}</span>
        
        `;
        playerDiv2.appendChild(playerDiv);
    });

}
function hideDetailsPlayer(){
    const playerSectionDetails = document.getElementById("playerDetails");
    playerSectionDetails.classList.remove("flex");
    playerSectionDetails.classList.add("hidden");
}



function playerDetails(playerName){
    const player = players.find(player => player.name === playerName);
    const playerSectionDetails = document.getElementById("playerDetails");
    playerSectionDetails.innerHTML = `
        <div class="card-container flex justify-end">
            <button onclick="hideDetailsPlayer()">✖</button>
        </div>
    `;

    playerSectionDetails.classList.remove("hidden");
    playerSectionDetails.classList.add("flex");
    const cardContainer = document.createElement("div");
    cardContainer.className = "card-container flex";
    

    let playerx = [];
    let playerxPr = [];
    let statsHTML = "";
    if (player.position.includes("GK")) {
        playerx =  ["DIV", "HAD", "KIC", "REF", "SPE","POS"] ;
        playerxPr = [ "diving", "handling", "kicking", "reflexes", "speed", "positioning" ];
    }
    else{
        playerx = ["PAC", "SHO", "PAS","DRI", "DEF", "PHY"];
        playerxPr = ["pace", "shooting", "passing","dribbling" , "defending", "physical"];
    }
    for(let i = 0; i < playerx.length; i++){
        statsHTML += `
            <div><p>${playerx[i]}</p><p>${player[playerxPr[i]]}</p></div>
        `;
    }
    let statsHTMLDetails = "";
    const imageRegex = /(jpeg|jpg|gif|png|webp)/i;
    for (const key in player) {

        if (imageRegex.test(player[key]) && key !== "photo"){
            statsHTMLDetails += `
            <div class="flex items-center border mt-5 rounded-lg mx-auto w-11/12 p-2">
                <h1 class=" uppercase w-1/5">${key} : </h1>
                <img id="${key}" src="${player[key]}" alt="${key} image" class="w-8 h-8 rounded-full">
            </div>
            `;
            
        }
        
        else if (typeof player[key] !== 'number') {
            if( key !== "photo"){
                statsHTMLDetails += `
                <div  class="border mt-5 rounded-lg mx-auto w-11/12 p-2 ">
                    <h1 class="uppercase w-1/5 inline-block">${key} : </h1>
                    <input id="${key}" type="text" class="uppercase border-none bg-transparent " value="${player[key]}" readonly>

                </div>
                `;
            }
        }
        else{
            
            statsHTMLDetails += `
                <div class="border mt-5 rounded-lg mx-auto w-11/12 p-2 pl-0">
                    <label class="w-1/5 inline-block uppercase">${key} :</label>
                    <input id="${key}" class="slider w-3/4 bg-gray-300 rounded-full appearance-none h-3 " 
                        type="range" value="${player[key]}" min="1" max="99" disabled
                        style="background: linear-gradient(to right, goldenrod ${player[key]}%, black ${player[key]}%);"
                    >
                    <label class="inputValue inline-block uppercase">${player[key]}</label>
                </div>

            `;
        }
    }

    cardContainer.innerHTML = `
            <div class="relative bg-badge-gold w-5/12 border border-[#dfbe6b]">
                <div class="absolute top-[22%] left-[23%] h-1/6 text-center text-xs sm:text-xs md:text-base font-bold">
                    <h1 class="h-[40%] text-xl">${player.rating}</h1>
                    <h1>${player.position}</h1>
                </div>
    
                <div class="absolute top-[14%] left-1/2 transform -translate-x-1/2 w-32 sm:w-36 md:w-40  ">
                    <img src="${player.photo}" alt="Player Image" class="object-cover w-full h-full">
                </div>
    
                <div class="absolute top-[65%]  left-1/2 transform -translate-x-1/2 text-center">
                    <h1 class="text-sm font-bold">${player.name}</h1>
                </div>
    
                <div class="absolute top-[72%] left-1/2 transform -translate-x-1/2 grid grid-cols-6 gap-1 px-1 text-center text-[10px] font-bold w-[58%]">
                ${statsHTML}
                </div>
    
    
                <div class="absolute top-[82%] left-1/2 transform -translate-x-1/2 flex justify-center items-center gap-1 w-4">
                    <img src="${player.flag}" alt="Flag" class="">
                    <img src="${player.logo}" alt="Logo" class="">
                    <img src="${player.League}" alt="League Logo" class="bg-black rounded-full">
                </div>
            </div>
            

            

            <form id="cardDetails" class="relative w-7/12 h-[25rem] overflow-auto border border-[#dfbe6b] text-white text-sm pb-6">
                
                    ${statsHTMLDetails}            
            </form>
    
    `;
    playerSectionDetails.appendChild(cardContainer);
    cardDetails.innerHTML += `
        <div class="fixed top-[25rem] left-1/2 transform -translate-x-1/3 w-full flex  gap-4 mt-4">
        <button id="btnModify" onclick="updatePlayer('${player.name}')" class="text-lg font-medium w-1/3 py-2 bg-[#5f4e0c] text-yellow-400 rounded-md">Modify</button>
        <button id="btnSave" type="submit" class="text-lg font-medium w-1/3 py-2 bg-[#5f4e0c] text-yellow-400 rounded-md hidden">Save</button>

        <button onclick="deletePlayer('${player.name}')" class="text-lg font-medium w-1/3 py-2 bg-[#5f4e0c] text-yellow-400 rounded-md">Delete</button>
        <button id="Cancel" onclick="window.location.reload();" class="text-lg font-medium w-1/3 py-2 bg-[#5f4e0c] text-yellow-400 rounded-md hidden">Cancel</button>

        </div>
    `;

}

// playerDetails("Lionel Messi");
// updatePlayer("Lionel Messi");

function updatePlayer(playerName){
    const player = players.find(player => player.name === playerName);
    const btnModify = document.getElementById("btnModify");
    btnModify.classList.add("hidden");
    const btnSave = document.getElementById("btnSave");
    btnSave.classList.remove("hidden");
    btnSave.nextElementSibling.classList.add("hidden") ;
    const cancelBtn = document.getElementById("Cancel");
    cancelBtn.classList.remove("hidden");
    const cardDetails = document.getElementById("cardDetails");

    cardDetails.innerHTML = `
            <div class="flex items-center border mt-5 rounded-lg mx-auto w-11/12 p-2">
                <h1 class=" uppercase w-1/5"> Photo </h1>
                <input id="photo" class= "uppercase border-none bg-transparent w-full " value="${player.photo}"> 
            </div>
    ` + cardDetails.innerHTML;;
    const imgs = cardDetails.querySelectorAll("img");
    for(let i = 0 ; i < imgs.length ; i++ ){
        const imgInput = document.createElement("input");
        imgInput.id =  imgs[i].id ;
        imgInput.className = "uppercase border-none bg-transparent w-full "  ;
        imgInput.type = "text";
        imgInput.value = imgs[i].src ;
        imgs[i].replaceWith(imgInput);
    }
    const inputs = cardDetails.querySelectorAll("input");
    for(let i = 0 ; i < inputs.length ; i++ ){
        inputs[i].removeAttribute("readonly");
    }
    const inputsRange = cardDetails.querySelectorAll("input[type='range']");
    for(let i = 0 ; i < inputsRange.length ; i++ ){
        inputsRange[i].removeAttribute("disabled");
        inputsRange[i].classList.add("cursor-pointer");

        inputsRange[i].addEventListener("input", function () {
            const rangeValue = this.value;
            this.nextElementSibling.innerHTML = `${rangeValue}`;
            this.style.background = `linear-gradient(to right, goldenrod ${rangeValue}%, black ${rangeValue}%)`;
        });  
    }
    cardDetails.addEventListener("submit", function (event) {
        event.preventDefault();
        console.log("update sub");
        const inputs = cardDetails.querySelectorAll("input");
        const playerIndex = players.findIndex(p => p.name === player.name);

        let newPlayer = {};
        inputs.forEach(input => {
            if (input.id === "position") {
                player[input.id] = [input.value] ;
            }
            else{
                player[input.id] = input.value ;

            }
        });
        newPlayer = player;
        players.splice(playerIndex, 1, newPlayer);
        localStorage.setItem("playersObject", JSON.stringify(players));
        location.reload();


    });  


}
                    
function formNewPlayer(){
    const playerSection = document.getElementById("addPlayerSection");
    playerSection.classList.remove("hidden");
}
function hiddePlayerSection(){
    const playerSection = document.getElementById("addPlayerSection");
    playerSection.classList.add("hidden");
}
function playerPosition(){
    const selectedPosition = document.getElementById("form-select-position").value;
    const goalkeepersProperties = document.getElementsByClassName("goalKeeperProperties");
    const playerProperties = document.getElementsByClassName("playerProperties");
    if(selectedPosition === "GK"){
        for (let i = 0; i < goalkeepersProperties.length; i++) {
            goalkeepersProperties[i].classList.remove("hidden");
        }
        for (let i = 0; i < playerProperties.length; i++) {
            playerProperties[i].classList.add("hidden");

        }
    }
    else{
        for (let i = 0; i < playerProperties.length; i++) {
            playerProperties[i].classList.remove("hidden");

        }
        for (let i = 0; i < goalkeepersProperties.length; i++) {
            goalkeepersProperties[i].classList.add("hidden");
        }

    }

}





function addSquadTolist(){
    const squadList = JSON.parse(localStorage.getItem("squadList")) || [];
    const curentSquadList = JSON.parse(localStorage.getItem("CurentsquadList"));
    if(curentSquadList.length >= 11 ){
        squadList.push(curentSquadList);
        localStorage.setItem("squadList", JSON.stringify(squadList));
    }
    else{

    }
}

function deletePlayer(playerName){
    const players = JSON.parse(localStorage.getItem("playersObject"));
    const playerIndex = players.findIndex(player => player.name === playerName);
    players.splice(playerIndex, 1);
    localStorage.setItem("playersObject", JSON.stringify(players));
}






function formValidation(event){
    event.preventDefault();
    const errorMessage = document.getElementById('error-message');
    let textInput = ["Name","Nationality","Club-Name"];
    let imgInput = ["Player-Image","Flag","Logo"];
    const goalKeeperProperties = document.getElementById("goalKeeperProperties");
    let numberInput= ["Rating"];
    if (goalKeeperProperties.classList.contains("hidden")) {
        numberInput = numberInput.concat(["Pace", "Shooting", "Passing", "Dribbling", "Defense", "Physicality"]);

    } else {
        numberInput = numberInput.concat(["Diving", "Handling", "Kicking", "Reflexes", "Speed", "Positioning"]);
    }
    for(let i = 0; i < textInput.length; i++){
        let input = document.getElementById(textInput[i]).value
        if(input.length < 1){
            errorMessage.classList.remove("hidden");
            errorMessage.innerHTML = `
            <button onclick='closeErrorMsg()' class='flex justify-end w-full -mt-4 ml-4'>✖</button> 
            <p>Please fill in all the fields.</p>
            `;
            return false;
        }
        else{
            errorMessage.classList.add("hidden");
            textValidation(textInput[i]);
            if(textValidation(textInput[i]) === false){
                return false;
            }

        }
    }
    for(let i = 0; i < numberInput.length; i++){
        let input = document.getElementById(numberInput[i]).value;
        if(input.length < 1){
            errorMessage.classList.remove("hidden");
            errorMessage.innerHTML = `
            <button onclick='closeErrorMsg()' class='flex justify-end w-full -mt-4 ml'>✖</button> 
            <p>Please fill in all the fields.</p>
            `;
            return false
        }
        else{
            errorMessage.classList.add("hidden");
            numberValidation(numberInput[i]);
            if(numberValidation(numberInput[i]) === false){
                return false;
            }
        }
    }
    for(let i = 0; i < imgInput.length; i++){
        let input = document.getElementById(imgInput[i]).value;
        if(input.length < 1){
            errorMessage.classList.remove("hidden");
            errorMessage.innerHTML = `
            <button onclick='closeErrorMsg()' class='flex justify-end w-full -mt-4 ml'>✖</button> 
            <p>Please fill in all the fields.</p>
            `;
            return false;
        }
        else{
            errorMessage.classList.add("hidden");
            imgValidation(imgInput[i]);
            if(imgValidation(imgInput[i]) === false){
                return false;
            }
        }
    }
    alert("all is ok");
    addNewPlayer(textInput,imgInput,numberInput);

}

function textValidation(id){
    const textInput = document.getElementById(id);
    const errorMessage = document.getElementById('error-message');
    const Pattern = /^[a-zA-Z]+(\s+[a-zA-Z]+)*$/;
    if (Pattern.test(textInput.value)) {
        errorMessage.classList.add("hidden");
        errorMessage.innerHTML = '';
        return true;
    }
    else{
        errorMessage.innerHTML = '';
        errorMessage.innerHTML += `
            <button onclick='closeErrorMsg()' class='flex justify-end w-full -mt-4 ml-4 z-50'>✖</button> 
            <p>The ${id} is Incorrect. Please use letters only</p>
        `;
        errorMessage.classList.remove("hidden");
        return false;
    }
}

function  numberValidation(id){
    const numberInput = document.getElementById(id);
    const errorMessage = document.getElementById('error-message');
    const numberPattern = /^(100|[1-9]?[0-9])$/;
    if (numberPattern.test(numberInput.value)) {
        errorMessage.classList.add("hidden");
        errorMessage.innerHTML = '';  
        return true;
    }
    else{
        errorMessage.innerHTML = '';
        errorMessage.innerHTML += `
            <button onclick='closeErrorMsg()' class='flex justify-end w-full -mt-4 ml-4'>✖</button> 
            <p>Invalid ${id}. Please enter a value between 0 and 100.</p>
        `;
        errorMessage.classList.remove("hidden");
        return false;
    }
}


function imgValidation(ImageId) {
    const imageInput = document.getElementById(ImageId);
    const errorMessage = document.getElementById('error-message');

    if (!imageInput.value) {
        errorMessage.innerHTML = '';
        errorMessage.innerHTML += `
            <button onclick='closeErrorMsg()' class='flex justify-end w-full -mt-4 ml-4'>✖</button> 
            <p>The ${ImageId} source is required.</p>
        `;
        errorMessage.classList.remove("hidden");
        return false;
    }

    const imagePattern = /\.(jpeg|jpg|gif|png|webp)$/i;
    
    if (imagePattern.test(imageInput.value)) {
        errorMessage.classList.add("hidden");
        errorMessage.innerHTML = ''; 
        return true;
    } else {
        errorMessage.innerHTML = '';
        errorMessage.innerHTML += `
            <button onclick='closeErrorMsg()' class='flex justify-end w-full -mt-4 ml-4'>✖</button> 
            <p>Invalid ${ImageId} source. Please enter a valid image source.</p>
        `;
        errorMessage.classList.remove("hidden");
        return false;
    }
}

function showError(message) {
    const errorMessage = document.getElementById('error-message');
    errorMessage.innerHTML = `
        <button onclick='closeErrorMsg()' class='flex justify-end w-full -mt-4 ml-4'>✖</button> 
        <p>${message}</p>
    `;
    errorMessage.classList.remove('hidden');
}

function clearError() {
    const errorMessage = document.getElementById('error-message');
    errorMessage.classList.add('hidden');
    errorMessage.innerHTML = '';
}

function closeErrorMsg() {
    const errorMessage = document.getElementById('error-message');
    errorMessage.classList.add('hidden');
    errorMessage.innerHTML = '';
}






function closeErrorMsg(){
    document.getElementById('error-message').classList.add("hidden");
}






const goalKeeperProperties = document.getElementById("goalKeeperProperties");




function addNewPlayer(textInput, imgInput, numberInput) {
    const position = document.getElementById('form-select-position').value;
    let player = {};
    player.position = [position];
    textInput.forEach(function (inputId, index) {
        const inputElement = document.getElementById(inputId);
        const inputValue = inputElement.value;

        switch (index) {
            case 0:
                player.name = inputValue;
                break;
            case 1:
                player.nationality = inputValue;
                break;
            case 2:
                player.club = inputValue;
                break;
            default:
                break;
        }
    });

    imgInput.forEach(function (inputId, index) {
        const inputElement = document.getElementById(inputId);
        const inputValue = inputElement.value;

        switch (index) {
            case 0:
                player.image = inputValue;
                break;
            case 1:
                player.flag = inputValue;
                break;
            case 2:
                player.logo = inputValue;
                break;
            default:
                break;
        }
    });

    const goalKeeperProperties = document.getElementById("goalKeeperProperties");
    const isFieldPlayer = goalKeeperProperties.classList.contains("hidden");

    numberInput.forEach(function (inputId, index) {
        const inputElement = document.getElementById(inputId);
        const inputValue = inputElement.value;
        if (isFieldPlayer) {
            switch (index) {
                case 0:
                    player.rating = inputValue;
                    break;
                case 1:
                    player.pace = inputValue;
                    break;
                case 2:
                    player.shooting = inputValue;
                    break;
                case 3:
                    player.passing = inputValue;
                    break;
                case 4:
                    player.dribbling = inputValue;
                    break;
                case 5:
                    player.defense = inputValue;
                    break;
                case 6:
                    player.physicality = inputValue;
                    break;
                default:
                    break;
            }
        } else {
            switch (index) {
                case 0:
                    player.rating = inputValue;
                    break;
                case 1:
                    player.diving = inputValue;
                    break;
                case 2:
                    player.handling = inputValue;
                    break;
                case 3:
                    player.kicking = inputValue;
                    break;
                case 4:
                    player.reflexes = inputValue;
                    break;
                case 5:
                    player.speed = inputValue;
                    break;
                case 6:
                    player.positioning = inputValue;
                    break;
                default:
                    break;
            }
        }
    });

    const players =  JSON.parse(localStorage.getItem("playersObject"));
    players.push(player);
    localStorage.setItem("playersObject", JSON.stringify(players));
    location.reload();

}






function playersPage(){
    
    const players = JSON.parse(localStorage.getItem("playersObject")) || [];
    
    const playersPage = document.getElementById("playersPage");
    playersPage.className = "w-full h-full flex flex-wrap";
    playersPage.innerHTML = "";
    
    let playerx = [];
    let playerxPr = [];
    for(let i = 0; i < players.length; i++){
        const player = players[i];
        let statsHTML = "";
        const cardContainer = document.createElement("div");
        cardContainer.setAttribute("onclick", `playerDetails('${player.name}')`);
        cardContainer.className = "relative bg-badge-gold w-1/5";
        if (player.position.includes("GK")) {
            playerx =  ["DIV", "HAD", "KIC", "REF", "SPE","POS"] ;
            playerxPr = [ "diving", "handling", "kicking", "reflexes", "speed", "positioning" ];
        }
        else{
            playerx = ["PAC", "SHO", "PAS","DRI", "DEF", "PHY"];
            playerxPr = ["pace", "shooting", "passing","dribbling" , "defending", "physical"];
        }
        for(let i = 0; i < playerx.length; i++){
            statsHTML += `
                <div><p>${playerx[i]}</p><p>${player[playerxPr[i]]}</p></div>
            `;
        }

        cardContainer.innerHTML = `
            <div class="absolute top-[22%] left-[23%] h-1/6 text-center text-xs sm:text-xs md:text-base font-bold">
                <h1 class="h-[40%] text-xl">${player.rating}</h1>
                <h1>${player.position}</h1>
            </div>

            <div class="absolute top-[14%] left-1/2 transform -translate-x-1/2 w-32 sm:w-36 md:w-40  ">
                <img src="${player.photo}" alt="Player Image" class="object-cover w-full h-full">
            </div>

            <div class="absolute top-[65%]  left-1/2 transform -translate-x-1/2 text-center">
                <h1 class="text-sm font-bold">${player.name}</h1>
            </div>

            <div class="absolute top-[72%] left-1/2 transform -translate-x-1/2 grid grid-cols-6 gap-1 px-1 text-center text-[10px] font-bold w-[58%]">
            ${statsHTML}
            </div>


            <div class="absolute top-[82%] left-1/2 transform -translate-x-1/2 flex justify-center items-center gap-1 w-4">
                <img src="${player.flag}" alt="Flag" class="">
                <img src="${player.logo}" alt="Logo" class="">
                <img src="${player.League}" alt="League Logo" class="bg-black rounded-full">
            </div>
        `;
        playersPage.appendChild(cardContainer);

    }

}
    





























