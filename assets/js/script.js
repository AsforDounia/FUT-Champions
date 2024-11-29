

async function fetchPlayers() {
    try {
        if (!localStorage.getItem("playersObject")) {
            const response = await fetch('./players.json');
            const data = await response.json();
            const allPlayers = data;
            const players = allPlayers.players;
            localStorage.setItem("playersObject", JSON.stringify(players));
        }
    }
    catch (error) {
    console.error('Error fetching the data:', error);
    }
}


function homePage(){
    fetchPlayers();
    allPlayers();
    localStorage.removeItem("CurentsquadList");
}

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
    //             console.log(`${optionPlayer.name} existe déjà dans CurentsquadList.`);
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
    // const selectElementTitle = document.createElement("h2");
    // selectElementTitle.className = "text-white text-lg font-bold";
    // selectElementTitle.innerHTML = "Select additional players at this position";
    // divParent.appendChild(selectElementTitle);
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


    // AddPlayerToAdditional

    // const selectElementAdditional = document.createElement("div");
    // selectElementAdditional.className = "flex w-full";

    // const additionalTitle = document.createElement("h2");
    // additionalTitle.className = "text-white text-lg font-bold";
    // additionalTitle.innerHTML = "Select additional players at this position";
    // divParent.appendChild(additionalTitle);

    // divParent.appendChild(selectElementAdditional);

    // const playerDiv1Additional = document.createElement("div");
    // playerDiv1Additional.className = "w-full h-full mx-2";
    // const playerDiv2Additional = document.createElement("div");
    // playerDiv2Additional.className = "w-full h-full";

    // selectElementAdditional.appendChild(playerDiv1Additional);
    // selectElementAdditional.appendChild(playerDiv2Additional);
    // const middleIndexAdditional = Math.ceil(options.length / 2);  
    // const firstHalfAdditional = options.slice(0, middleIndexAdditional); 
    // const secondHalfAdditional = options.slice(middleIndexAdditional);
    // firstHalfAdditional.forEach(player => {
    //     const playerDiv = document.createElement("div");
    //     playerDiv.setAttribute("onclick", `AddPlayerToAdditional('${player.name}')`);


    //     playerDiv.className = "flex items-center w-full border border-black bg-slate-800 p-2 cursor-pointer my-2 hover:border-yellow-500";

    //     playerDiv.innerHTML = `
    //         <img src="${player.photo}" class="w-12 h-12 object-cover mr-4">
    //         <span class="text-white">${player.name}</span>
        
    //     `;
    //     playerDiv1Additional.appendChild(playerDiv);
    // });
    // secondHalfAdditional.forEach(player => {
    //     const playerDiv = document.createElement("div");
    //     playerDiv.setAttribute("onclick", `AddPlayerToAdditional('${player.name}')`);
    //     playerDiv.className = "flex items-center w-full border border-black bg-slate-800 p-2 cursor-pointer my-2 hover:border-yellow-500";

    //     playerDiv.innerHTML = `
    //         <img src="${player.photo}" class="w-12 h-12 object-cover mr-4">
    //         <span class="text-white">${player.name}</span>
        
    //     `;
    //     playerDiv2Additional.appendChild(playerDiv);
    // });
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
    const players = JSON.parse(localStorage.getItem("playersObject"));

    const playerfound = players.find(player => player.name === playerName);
    const CurentsquadList = JSON.parse(localStorage.getItem("CurentsquadList")) || [];
    if(CurentsquadList){
        const squadPlayer = CurentsquadList.find(player => player.name === playerfound.name);
        if (!squadPlayer) {
            CurentsquadList.push(playerfound);
            localStorage.setItem("CurentsquadList", JSON.stringify(CurentsquadList));

            containerPlayer.innerHTML = "";
    
            containerPlayer.innerHTML = `
            <div onclick="hoverDiv('${playerfound.name}')" class="divPlayerChange flex flex-col items-center justify-center w-full h-full text-white" >
                <img  src="${playerfound.photo}" class="w-[5rem] playerImage">
                <p class="playerName text-sm text-white w-3/5">${playerfound.name}</p>
            </div>
            `;
        }
        else{
            alert("Player already in the squad");
        }
    }
    // else{
    //     localStorage.setItem("CurentsquadList", JSON.stringify(playerfound));
    // }
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

                    parentDiv.innerHTML = "➕";

                    plusButton.click();
                }
            }
        }
    }


}
function allPlayers(){

    const players = JSON.parse(localStorage.getItem("playersObject")) || [];
    
    const playerList = document.getElementById("playerList");
    playerList.className = "flex w-full h-[36rem] overflow-auto";
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
        // playerDiv.setAttribute("onclick", `AddPlayerToSquad('${player.name}')`);
        playerDiv.className = "flex items-center w-full border border-black bg-slate-800 p-2 cursor-pointer my-2 hover:border-yellow-500";

        playerDiv.innerHTML = `
            <img src="${player.photo}" class="w-12 h-12 object-cover mr-4">
            <span class="text-white">${player.name}</span>
        
        `;
        playerDiv1.appendChild(playerDiv);
    });
    secondHalf.forEach(player => {
        const playerDiv = document.createElement("div");
        // playerDiv.setAttribute("onclick", `AddPlayerToSquad('${player.name}')`);
        playerDiv.className = "flex items-center w-full border border-black bg-slate-800 p-2 cursor-pointer my-2 hover:border-yellow-500";

        playerDiv.innerHTML = `
            <img src="${player.photo}" class="w-12 h-12 object-cover mr-4">
            <span class="text-white">${player.name}</span>
        
        `;
        playerDiv2.appendChild(playerDiv);
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

function deletePlayer(){
    let playersObject = JSON.parse(localStorage.getItem("playersObject"));
    playersObject.splice(playersObject.indexOf(players), 1);
    localStorage.setItem("playersObject", JSON.stringify(playersObject));

}


document.addEventListener("DOMContentLoaded", homePage());








// function selectPlayer(element) {
//     let containerPlayer;
//     let playerSquadId;
    

//     const position = element.getAttribute('data-position');
//     if(position){
//         playerSquadId = element.id;
//         containerPlayer = document.getElementById(playerSquadId);
//         localStorage.setItem("playerSquadIdCurent",playerSquadId);
//     }
//     else{
//         playerSquadId = localStorage.getItem("playerSquadIdCurent");
//         containerPlayer = document.getElementById(playerSquadId);
//     }
//     console.log(`Selected position: ${position}`);
//     const players = JSON.parse(localStorage.getItem("playersObject"));
//     const options = players.filter(player => player.position.includes(position));

//     const selectElement = document.getElementById("playerList");


//     selectElement.innerHTML = ``;

//     const playerDiv1 = document.createElement("div");
//     playerDiv1.className = "w-full h-full mx-2";
//     const playerDiv2 = document.createElement("div");
//     playerDiv2.className = "w-full h-full";

//     selectElement.appendChild(playerDiv1);
//     selectElement.appendChild(playerDiv2);
//     const middleIndex = Math.ceil(options.length / 2);  
//     const firstHalf = options.slice(0, middleIndex); 
//     const secondHalf = options.slice(middleIndex);
//     firstHalf.forEach(player => {
//         const playerDiv = document.createElement("div");
//         playerDiv.setAttribute("onclick", `AddPlayerToSquad('${player.name}','${playerSquadId}')`);

//         playerDiv.className = "flex items-center w-full border border-black bg-slate-800 p-2 cursor-pointer my-2 hover:border-yellow-500";

//         playerDiv.innerHTML = `
//             <img src="${player.photo}" class="w-12 h-12 object-cover mr-4">
//             <span class="text-white">${player.name}</span>
        
//         `;
//         playerDiv1.appendChild(playerDiv);
//     });
//     secondHalf.forEach(player => {
//         const playerDiv = document.createElement("div");
//         playerDiv.setAttribute("onclick", `AddPlayerToSquad('${player.name}','${playerSquadId}')`);
//         playerDiv.className = "flex items-center w-full border border-black bg-slate-800 p-2 cursor-pointer my-2 hover:border-yellow-500";

//         playerDiv.innerHTML = `
//             <img src="${player.photo}" class="w-12 h-12 object-cover mr-4">
//             <span class="text-white">${player.name}</span>
        
//         `;
//         playerDiv2.appendChild(playerDiv);
//     });
// }

// function AddPlayerToSquad(playerName,playerSquadId) {
//     console.log(playerSquadId);
//     const containerPlayer = document.getElementById(playerSquadId);
//     const players = JSON.parse(localStorage.getItem("playersObject"));
//     containerPlayer.innerHTML = "";
//     const player = players.find(player => player.name === playerName);
//     containerPlayer.innerHTML = `
//     <div onclick="hoverDiv('${player.name}')" class="divPlayerChange flex flex-col items-center justify-center w-full h-full text-white" >
//         <img  src="${player.photo}" class="w-[5rem] playerImage">
//         <p class="playerName text-sm text-white w-3/5">${player.name}</p>
//     </div>
//     `;
//     const playerfind = squadList.find(player => player.name === playerName);
//     if (!playerfind) {
//         squadList.push(player);
//     }
//     for(let i = 0; i < squadList.length; i++){
//         // console.log("squadList : ",squadList[i].name);
//     }


// }












let information = false;



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

// function addNewPlayer(textInput,imgInput,numberInput){
//     let player = {};
//     const playerName = document.getElementById(textInput[0]).value;
//     const playerNationality = document.getElementById(textInput[1]).value;
//     const playerClub = document.getElementById(textInput[2]).value;
//     const playerImage = document.getElementById(imgInput[0]).value;
//     const playerFlag = document.getElementById(imgInput[1]).value;
//     const playerLogo = document.getElementById(imgInput[2]).value;
   

//     const playerRating = document.getElementById(numberInput[0]).value;
//     const playerPace = document.getElementById(numberInput[1]).value;
//     const playerShooting = document.getElementById(numberInput[2]).value;
//     const playerPassing = document.getElementById(numberInput[3]).value;
//     const playerDribbling = document.getElementById(numberInput[4]).value;
//     const playerDefense = document.getElementById(numberInput[5]).value;
//     const playerPhysicality = document.getElementById(numberInput[6]).value;


//     const goalKeeperProperties = document.getElementById("goalKeeperProperties");
//     if (goalKeeperProperties.classList.contains("hidden")) {
//         player = {
//             name: playerName,
//             nationality: playerNationality,
//             club : playerClub,
//             image: playerImage,
//             flag: playerFlag,
//             logo: playerLogo,
//             rating: playerRating,
//             pace: playerPace,
//             shooting: playerShooting,
//             passing: playerPassing,
//             dribbling: playerDribbling,
//             defense: playerDefense,
//             physicality: playerPhysicality
//         }
        
//     } else {
//         player = {
//             name: playerName,
//             nationality: playerNationality,
//             club : playerClub,
//             image: playerImage,
//             flag: playerFlag,
//             logo: playerLogo,
//             rating: playerRating,
//             diving : playerPace,
//             handling : playerShooting,
//             kicking : playerPassing,
//             reflexes : playerDribbling,
//             speed : playerDefense,
//             positioning : playerPhysicality
//         }
//     }


// }


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
    // document.getElementById("addPlayerSection").classList.add("hidden");
    location.reload();

}
