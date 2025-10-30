import {fetchGames} from "./rawg-api.js";
import {createGameLi} from "./gameCard.js";

//executa a função assim que a página do navegador carrega
// (async () => {
// createGameLi();  
// })();

const games = await fetchGames({ page: 1, page_size: 10 });
createGameLi(games);