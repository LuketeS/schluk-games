const rawgKey = "";

async function fetchGames({ page = 1, page_size = 20, search = ""} = {}) {

    //Etapas para gerar a URL a ser utilizada
    const urlBase = "https://api.rawg.io/api/games";
    //Utiliza o método URLSearchParams do JS para adicionar query string para a url
    const params = new URLSearchParams ({
        key: rawgKey,
        page,
        page_size,
    });
    //Verifica se o parâmetro search foi passado ao se chamar a função
    if (search) params.set("search", search);
    //Junta a url base com os parametros que serão usados como query string
    const url = `${urlBase}?${params.toString()}`;

    //Etapas para fazer a requisição a API, utilizando try catch
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP ${res.status} - &{res.statusText}`);

        const data = await res.json();
        return data;
    } catch (err) {
        console.error("Erro ao buscar jogos no RAWG: ", err);
        throw err;
    }
}

(async () => {
  const data = await fetchGames({ page: 1, page_size: 10 });
  console.log(data); // inspeciona estrutura: data.results
})();

