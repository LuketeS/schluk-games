import {fetchGames} from "./rawg-api.js";
import {createGameLi} from "./gameCard.js";

//executa a função assim que a página do navegador carrega
// (async () => {
// createGameLi();  
// })();

const loadMoreButton = document.getElementById("loadMoreButton");
const searchInput = document.getElementById("search");
const gameList = document.querySelector(".games-list");

let page = 1;
const page_size = 5;
let searchGame = ""

let games = await fetchGames({ page, page_size, search: searchGame});
createGameLi(games);

searchInput.addEventListener("keypress", async (evento) => {
    const searchText = searchInput.value.trim();
    if (evento.key === "Enter") {
        evento.preventDefault();
        if (searchText !== "") {
            searchGame = searchText;
            games = await fetchGames({ page, page_size, search: searchGame});
            gameList.innerHTML = ""
            createGameLi(games);    
            }
         }
 })

loadMoreButton.addEventListener("click", async () => {
    page +=1;
    const newGames = await fetchGames({page, page_size, search: searchGame});
    createGameLi(newGames);
})