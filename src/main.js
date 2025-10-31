import {fetchGames} from "./rawg-api.js";
import {createGameLi} from "./gameCard.js";

//executa a função assim que a página do navegador carrega
// (async () => {
// createGameLi();  
// })();

const loadMoreButton = document.getElementById("loadMoreButton");
let page = 1;
const page_size = 10;

const games = await fetchGames({ page, page_size});

createGameLi(games);

loadMoreButton.addEventListener("click", async () => {
    page +=1;
    const newGames = await fetchGames({page, page_size});
    createGameLi(newGames);
})
