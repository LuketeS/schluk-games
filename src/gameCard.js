const gameList = document.querySelector(".games-list");

export async function createGameLi (games) {
    console.log(games);

    games.forEach ((game) => {
        const li = document.createElement("li");
        li.className = "games-list-game"
        li.innerHTML = `
            <img src="${game.background_image}" class="games-list-game-img">
            <div class="games-list-game-details">
                <div class="game-info-main">
                    <h3>${game.name}</h3>
                    <p>Nota: ${game.rating}</p>
                </div>
                <p class="game-info-genres">Gêneros: ${
                    game.genres.map((genre)=>{
                        genre.name
                        return genre.name
                    }).join(", ")
                }</p>
                                            
            </div>
            <a href="#">Detalhes</a>
        `
        gameList.appendChild(li);
    })
    
}