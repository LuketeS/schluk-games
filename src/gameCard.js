const gameList = document.querySelector(".games-list");

export async function createGameLi (games) {
    console.log(games);

    games.forEach ((game) => {
        const li = document.createElement("li");
        li.className = "games-list-game"
        li.innerHTML = `
            <img src="${game.background_image}" class="games-list-game-img">
            <div class="games-list-game-details">
                <h3>${game.name}</h3>
                <p>Nota: ${game.rating}</p>                            
            </div>
            <button>Detalhes</button>
        `
        gameList.appendChild(li);
    })
    
}