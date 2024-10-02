const url= 'https://raw.githubusercontent.com/guilhermemeonrails/api/main/dados-globais.json';

//url='20.201.28.151/main/dados/grafico-principal.json';
//modelo de endereço servidor de dados para o javaScript.


async function visualizarinformacoesGlobais() {
    const res = await fetch(url);
    const dados = await res.json
}