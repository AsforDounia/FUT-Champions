

const players = [
    {
        name: "Lionel Messi",
        photo: "https://cdn.sofifa.net/players/158/023/25_120.png",
        flag: "https://cdn.sofifa.net/flags/ar.png",
        logo: "https://cdn.sofifa.net/meta/team/239235/120.png",
        nationality: "Argentina",
        club: "Paris Saint-Germain",
        position: ["RW", "CF", "CAM"],
        rating: 93,
        pace: 79,
        shooting: 91,
        passing: 90,
        dribbling: 95,
        defending: 37,
        physical: 65
    },
    {
        name: "Cristiano Ronaldo",
        photo: "https://cdn.sofifa.net/players/020/801/25_120.png",
        flag: "https://cdn.sofifa.net/flags/pt.png",
        logo: "https://cdn.sofifa.net/meta/team/2506/120.png",
        nationality: "Portugal",
        club: "Al Nassr",
        position: ["ST", "LW"],
        rating: 90,
        pace: 83,
        shooting: 93,
        passing: 81,
        dribbling: 82,
        defending: 35,
        physical: 78
    },
    {
        name: "Kevin De Bruyne",
        photo: "https://cdn.sofifa.net/players/192/985/25_120.png",
        flag: "https://cdn.sofifa.net/flags/be.png",
        logo: "https://cdn.sofifa.net/players/239/085/25_120.png",
        nationality: "Belgium",
        club: "Manchester City",
        position: ["CM", "CAM"],
        rating: 91,
        pace: 74,
        shooting: 83,
        passing: 95,
        dribbling: 87,
        defending: 56,
        physical: 78
    },
    {
        name: "Kylian Mbappé",
        photo: "https://cdn.sofifa.net/players/231/747/25_120.png",
        flag: "https://cdn.sofifa.net/flags/fr.png",
        logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
        nationality: "France",
        club: "Paris Saint-Germain",
        position: ["CF", "LW"],
        rating: 91,
        pace: 96,
        shooting: 87,
        passing: 80,
        dribbling: 91,
        defending: 34,
        physical: 77
    },
    {
        name: "Virgil van Dijk",
        photo: "https://cdn.sofifa.net/players/203/376/25_120.png",
        flag: "https://cdn.sofifa.net/flags/nl.png",
        logo: "https://cdn.sofifa.net/meta/team/8/120.png",
        nationality: "Netherlands",
        club: "Liverpool",
        position: ["CB"],
        rating: 90,
        pace: 76,
        shooting: 61,
        passing: 75,
        dribbling: 70,
        defending: 89,
        physical: 83
    },
    {
        name: "Antonio Rudiger",
        photo: "https://cdn.sofifa.net/players/205/452/25_120.png",
        flag: "https://cdn.sofifa.net/flags/de.png",
        logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
        nationality: "Germany",
        club: "Real Madrid",
        position: ["CB"],
        rating: 85,
        pace: 79,
        shooting: 59,
        passing: 60,
        dribbling: 70,
        defending: 85,
        physical: 86
    },
    {
        name: "Neymar Jr",
        photo: "https://cdn.sofifa.net/players/190/871/25_120.png",
        flag: "https://cdn.sofifa.net/flags/br.png",
        logo: "https://cdn.sofifa.net/meta/team/7011/120.png",
        nationality: "Brazil",
        club: "Al Hilal",
        position: ["LW", "CF"],
        rating: 88,
        pace: 85,
        shooting: 80,
        passing: 80,
        dribbling: 94,
        defending: 40,
        physical: 66
    },
    {
        name: "Mohamed Salah",
        photo: "https://cdn.sofifa.net/players/192/985/25_120.png",
        flag: "https://cdn.sofifa.net/flags/eg.png",
        logo: "https://cdn.sofifa.net/meta/team/8/120.png",
        nationality: "Egypt",
        club: "Liverpool",
        position: ["RW"],
        rating: 89,
        pace: 89,
        shooting: 88,
        passing: 83,
        dribbling: 90,
        defending: 49,
        physical: 77
    },
    {
        name: "Joshua Kimmich",
        photo: "https://cdn.sofifa.net/players/212/622/25_120.png",
        flag: "https://cdn.sofifa.net/flags/de.png",
        logo: "https://cdn.sofifa.net/meta/team/503/120.png",
        nationality: "Germany",
        club: "Bayern Munich",
        position: ["CDM", "CM"],
        rating: 88,
        pace: 73,
        shooting: 76,
        passing: 87,
        dribbling: 80,
        defending: 85,
        physical: 75
    },
    {
        name: "Jan Oblak",
        photo: "https://cdn.sofifa.net/players/200/389/25_120.png",
        flag: "https://cdn.sofifa.net/flags/si.png",
        logo: "https://cdn.sofifa.net/meta/team/7980/120.png",
        nationality: "Slovenia",
        club: "Atletico Madrid",
        position: ["GK"],
        rating: 91,
        pace: 49,
        shooting: 40,
        passing: 55,
        dribbling: 56,
        defending: 90,
        physical: 83
    },
    {
        name: "Luka Modrić",
        photo: "https://cdn.sofifa.net/players/177/003/25_120.png",
        flag: "https://cdn.sofifa.net/flags/hr.png",
        logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
        nationality: "Croatia",
        club: "Real Madrid",
        position: ["CM", "CAM"],
        rating: 89,
        pace: 74,
        shooting: 79,
        passing: 91,
        dribbling: 89,
        defending: 58,
        physical: 72
    },
    {
        name: "Vinicius Junior",
        photo: "https://cdn.sofifa.net/players/238/794/25_120.png",
        flag: "https://cdn.sofifa.net/flags/br.png",
        logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
        nationality: "Brazil",
        club: "Real Madrid",
        position: ["LW"],
        rating: 87,
        pace: 91,
        shooting: 80,
        passing: 77,
        dribbling: 89,
        defending: 33,
        physical: 74
    },
    {
        name: "Brahim Diáz",
        photo: "https://cdn.sofifa.net/players/231/410/25_120.png",
        flag: "https://cdn.sofifa.net/flags/ma.png",
        logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
        nationality: "Morocco",
        club: "AC Milan",
        position: ["RW", "CAM"],
        rating: 80,
        pace: 87,
        shooting: 74,
        passing: 72,
        dribbling: 81,
        defending: 38,
        physical: 68
    },
    {
        name: "Karim Benzema",
        photo: "https://cdn.sofifa.net/players/165/153/25_120.png",
        flag: "https://cdn.sofifa.net/flags/fr.png",
        logo: "https://cdn.sofifa.net/meta/team/476/120.png",
        nationality: "France",
        club: "Al-Ittihad",
        position: ["ST"],
        rating: 89,
        pace: 80,
        shooting: 88,
        passing: 81,
        dribbling: 84,
        defending: 34,
        physical: 77
    },
    {
        name: "Erling Haaland",
        photo : "https://cdn.sofifa.net/players/239/085/25_120.png",
        flag: "https://cdn.sofifa.net/flags/no.png",
        logo: "https://cdn.sofifa.net/players/239/085/25_120.png",
        nationality: "Norway",
        club: "Manchester City",
        position: ["ST"],
        rating: 90,
        pace: 91,
        shooting: 94,
        passing: 75,
        dribbling: 85,
        defending: 35,
        physical: 90
    },
    {
        name : "N Golo Kanté",
        photo : "https://cdn.sofifa.net/players/215/914/25_120.png",
        flag: "https://cdn.sofifa.net/flags/gb.png",
        logo: "https://cdn.sofifa.net/meta/team/9282/120.png",
        nationality: "England",
        club: "Bayern Munich",
        position: ["ST"],
        rating: 88,
        pace: 78,
        shooting: 91,
        passing: 80,
        dribbling: 80,
        defending: 39,
        physical: 83
    },
    {
        name : "Alphonso Davies",
        photo : "https://cdn.sofifa.net/players/234/396/25_120.png",
        flag: "https://cdn.sofifa.net/flags/be.png",
        logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
        nationality: "Belgium",
        club: "Real Madrid",
        position: ["GK"],
        rating: 89,
        pace: 50,
        shooting: 35,
        passing: 60,
        dribbling: 55,
        defending: 86,
        physical: 85
    },
    {
        name : "Yassine Bounou",
        photo : "https://cdn.sofifa.net/players/209/981/25_120.png",
        flag: "https://cdn.sofifa.net/flags/sn.png",
        logo: "https://cdn.sofifa.net/meta/team/10792/120.png",
        nationality: "Senegal",
        club: "Al Nassr",
        position: ["GK"],
        rating: 88,
        pace: 88,
        shooting: 85,
        passing: 80,
        dribbling: 87,
        defending: 40,
        physical: 74
    },
    {
        name : "Bruno Fernandes",
        photo : "https://cdn.sofifa.net/players/212/198/25_120.png",
        flag: "https://cdn.sofifa.net/flags/gb.png",
        logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
        nationality: "England",
        club: "Real Madrid",
        position: ["CM", "CAM"],
        rating: 85,
        pace: 80,
        shooting: 78,
        passing: 80,
        dribbling: 83,
        defending: 75,
        physical: 83
    },
    {
        name : "Jadon Sancho",
        photo : "https://cdn.sofifa.net/players/233/049/25_120.png",
        flag: "https://cdn.sofifa.net/flags/nl.png",
        logo: "https://cdn.sofifa.net/meta/team/529/120.png",
        nationality: "Netherlands",
        club: "Barcelona",
        position: ["CM"],
        rating: 87,
        pace: 76,
        shooting: 72,
        passing: 87,
        dribbling: 85,
        defending: 77,
        physical: 77
    },
    {
        name : "Trent Alexander-Arnold",
        photo : "https://cdn.sofifa.net/players/231/281/25_120.png",
        flag: "https://cdn.sofifa.net/flags/de.png",
        logo: "https://cdn.sofifa.net/meta/team/529/120.png",
        nationality: "Germany",
        club: "Barcelona",
        position: ["GK"],
        rating: 89,
        pace: 50,
        shooting: 40,
        passing: 60,
        dribbling: 55,
        defending: 85,
        physical: 84
    },
    {
        name : "Achraf Hakimi",
        photo : "https://cdn.sofifa.net/players/235/212/25_120.png",
        position : ["RB"],
        nationality : "Morocco",
        flag : "https://cdn.sofifa.net/flags/ma.png",
        club : "Paris Saint-Germain",
        logo : "https://cdn.sofifa.net/meta/team/591/120.png",
        rating : 84,
        pace : 91,
        shooting : 76,
        passing : 80,
        dribbling : 80,
        defending : 75,
        physical : 78
        },
        {
        name : "Youssef En-Nesyri",
        photo : "https://cdn.sofifa.net/players/235/410/25_120.png",
        position : ["CDM"],
        nationality : "Morocco",
        flag : "https://cdn.sofifa.net/flags/ma.png",
        club : "Fenerbahçe",
        logo : "https://cdn.sofifa.net/meta/team/88/120.png",
        rating : 83,
        pace : 82,
        shooting : 82,
        passing : 63,
        dribbling : 77,
        defending : 36,
        physical : 80
        },
        {
        name : "Noussair Mazraoui",
        photo : "https://cdn.sofifa.net/players/236/401/25_120.png",
        position : ["LB"],
        nationality : "Morocco",
        flag : "https://cdn.sofifa.net/flags/ma.png",
        club : "Manchester United",
        logo : "https://cdn.sofifa.net/meta/team/14/120.png",
        rating : 81,
        pace : 78,
        shooting : 66,
        passing : 77,
        dribbling : 83,
        defending : 77,
        physical : 71
        },
        {
        name : "Ismael Saibari",
        photo : "https://cdn.sofifa.net/players/259/480/25_120.png",
        position : ["CM"],
        nationality : "Morocco",
        flag : "https://cdn.sofifa.net/flags/ma.png",
        club : "PSV",
        logo : "https://cdn.sofifa.net/meta/team/682/120.png",
        rating : 83,
        pace : 89,
        shooting : 78,
        passing : 80,
        dribbling : 86,
        defending : 55,
        physical : 84
        },
        {
        name : "Gianluigi Donnarumma",
        photo : "https://cdn.sofifa.net/players/230/621/25_120.png",
        position : ["GK"],
        nationality : "Italy",
        flag : "https://cdn.sofifa.net/flags/it.png",
        club : "Paris Saint-Germain",
        logo : "https://cdn.sofifa.net/meta/team/591/120.png",
        rating : 89,
        diving : 88,
        handling : 84,
        kicking : 75,
        reflexes : 90,
        speed : 50,
        positioning : 85
        }
];





// let containerPlayer = null;

// function selectPlayer(position){
// document.body.addEventListener("click", function (event) {
//     containerPlayer = event.target;
    
// });
//     const options = players.filter(player => player.position.includes(position));

//     const selectElement = document.getElementById("selectPlayer");
//     selectElement.classList.remove("hidden");

//     selectElement.innerHTML = "<button onclick='hidSelect()' class='absolute left-[136px] hover:bg-slate-300' >✖</button>"; 

//     options.forEach(player => {
//         const PlayerDiv = document.createElement("div");
//         PlayerDiv.innerHTML = `<button onclick="AddPlayerToSquad('${player.name}')" class='flex items-center w-full border border-black bg-slate-800 object-cover' ><button>`;

//         selectElement.appendChild(PlayerDiv);

//         const playerButton = PlayerDiv.querySelector("button");
//         // playerButton.onclick = AddPlayerToSquad(player.name,player.position);
//         const img = document.createElement("img");
//         img.src = player.photo;
//         img.className = "w-12";

//         const name = document.createElement("p");
//         name.className = "w-8";
//         name.textContent = player.name


//         playerButton.appendChild(img);
//         playerButton.appendChild(name);

//         selectElement.appendChild(playerButton);
//         // selectElement.innerHTML = selectElement.innerHTML + playerButton.outerHTML;
//         // alert(player.photo);

//     });

// }

// function hidSelect(){
//     const selectElement = document.getElementById("selectPlayer");
//     selectElement.classList.add("hidden");
// }

// function AddPlayerToSquad(name){
//     console.log("AddPlayerToSquad : ",containerPlayer);
//     containerPlayer.innerHTML = "";
//     const player = players.find(player => player.name === name);
//     console.log(player.name);
//     containerPlayer.innerHTML = `<div class="flex flex-col items-center justify-center w-full h-full text-white" >
//     <img src="${player.photo}" class="w-[6rem]">
//     <p class="text-sm text-white w-3/5">${player.name}</p></div>`;

// }





let containerPlayer ;
let clickedButton;
function selectPlayer(event) {
    clickedButton = event.target;
    console.log("event :: :: ::",clickedButton);
    containerPlayer = event.target;
    const position =  event.target.getAttribute('data-position');
    const players = JSON.parse(localStorage.getItem("playersObject"));
    const options = players.filter(player => player.position.includes(position));

    const selectElement = document.getElementById("playerList");
    // console.log("selectElement div ",selectElement);
    // selectElement.classList.remove("hidden");
    // selectElement.classList.add("z-40");

    selectElement.innerHTML = ``;

    // Ajouter les joueurs filtrés
    // options.forEach(player => {
    //     const playerDiv = document.createElement("div");
    //     playerDiv.setAttribute("onclick", `AddPlayerToSquad('${player.name}','${event}')`);
    //     playerDiv.className = "flex items-center w-full border border-black bg-slate-800 p-2 cursor-pointer";

    //     playerDiv.innerHTML = `
    //         <img src="${player.photo}" class="w-12 h-12 object-cover mr-4">
    //         <span class="text-white">${player.name}</span>
        
    //     `;

    //     selectElement.appendChild(playerDiv);
    // });
    const playerDiv1 = document.createElement("div");
    playerDiv1.className = "w-full h-full mx-2";
    const playerDiv2 = document.createElement("div");
    playerDiv2.className = "w-full h-full";

    selectElement.appendChild(playerDiv1);
    selectElement.appendChild(playerDiv2);
    const middleIndex = Math.ceil(options.length / 2); // Trouver le milieu
    const firstHalf = options.slice(0, middleIndex); // Première moitié
    const secondHalf = options.slice(middleIndex);
    firstHalf.forEach(player => {
        const playerDiv = document.createElement("div");
        playerDiv.setAttribute("onclick", `AddPlayerToSquad('${player.name}','${event}')`);
        playerDiv.className = "flex items-center w-full border border-black bg-slate-800 p-2 cursor-pointer my-2 hover:border-yellow-500";

        playerDiv.innerHTML = `
            <img src="${player.photo}" class="w-12 h-12 object-cover mr-4">
            <span class="text-white">${player.name}</span>
        
        `;
        playerDiv1.appendChild(playerDiv);
    });
    secondHalf.forEach(player => {
        const playerDiv = document.createElement("div");
        playerDiv.setAttribute("onclick", `AddPlayerToSquad('${player.name}','${event}')`);
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
function AddPlayerToSquad(playerName,event) {
    const players = JSON.parse(localStorage.getItem("playersObject"));

    containerPlayer.innerHTML = "";
    const player = players.find(player => player.name === playerName);
    containerPlayer.innerHTML = `
    <div onclick="hoverDiv('${player.name}')" class="divPlayerChange flex flex-col items-center justify-center w-full h-full text-white" >
        <img  src="${player.photo}" class="w-[5rem] playerImage">
        <p class="playerName text-sm text-white w-3/5">${player.name}</p>
    </div>
    `;
    const playerfind = squadList.find(player => player.name === playerName);
    if (!playerfind) {
        squadList.push(player);
    }
    for(let i = 0; i < squadList.length; i++){
        // console.log("squadList : ",squadList[i].name);
    }


}

function hoverDiv(playerName){
    const divPlayerChange = document.querySelector(`.divPlayerChange`);
    if (divPlayerChange) {

        const playerParagraphs = divPlayerChange.getElementsByClassName("playerName");

        for(let i = 0; i < playerParagraphs.length; i++){
            if(playerParagraphs[i].textContent === playerName){
                const parentDiv = playerParagraphs[i].parentElement;
                const plusButton = parentDiv.parentElement;
                console.log("plus button :",plusButton);
                plusButton.click();
            }
            else{
                console.log("helpppppppppppppppppppppppp");
            }
        }
    }





}
function allPlayers(){

    let players = JSON.parse(localStorage.getItem("playersObject")) || [];
    
    const playerList = document.getElementById("playerList");
    playerList.innerHTML = "";
    const playerDiv1 = document.createElement("div");
    playerDiv1.className = "w-full h-full mx-2";
    const playerDiv2 = document.createElement("div");
    playerDiv2.className = "w-full h-full";


    playerList.appendChild(playerDiv1);
    playerList.appendChild(playerDiv2);


    const middleIndex = Math.ceil(players.length / 2); // Trouver le milieu
    const firstHalf = players.slice(0, middleIndex); // Première moitié
    const secondHalf = players.slice(middleIndex);
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

function addNewPlayer(){
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

















function homePage(){
    if (!localStorage.getItem("playersObject")) {
        localStorage.setItem("playersObject", JSON.stringify(players));
    }

    allPlayers();
}

function deletePlayer(){
    let playersObject = JSON.parse(localStorage.getItem("playersObject"));
    playersObject.splice(playersObject.indexOf(players), 1);
    localStorage.setItem("playersObject", JSON.stringify(playersObject));

}






document.addEventListener("DOMContentLoaded", homePage());