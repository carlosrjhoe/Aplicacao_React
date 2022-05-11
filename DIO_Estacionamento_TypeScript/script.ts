interface Veiculo{
  nome: string;
  placa: string;
  entrada: Date;
}


(function(){
  const $ = (query: string): HTMLInputElement | null=> document.querySelector(query);

  function patio(){
    function ler(){

    }
    function adicionar(veiculo: Veiculo){
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${veiculo.nome}</td>
        <td>${veiculo.placa}</td>
        <td>${veiculo.entrada}</td>
        <td>
          <button class="delete" data-placa="${veiculo.placa}">X</button>
        </td>
      `;
      $("#patio")?.appendChild(row);
    }
    function remover(){

    }
    function salvar(){

    }
    function rederizar(){

    }
    return { ler, adicionar, remover, salvar, rederizar };
  }

  $("#cadastrar")?.addEventListener("click", () =>{
    const nome = $("#nome")?.value;
    const placa = $("#placa")?.value;
    console.log({nome, placa});

    if(!nome || !placa){
      alert("coloque o nome e placa");
      return;
    }

    patio().adicionar({ nome, placa, entrada: new Date() });
  })
})();