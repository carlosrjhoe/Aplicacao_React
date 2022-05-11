interface Veiculo{
  nome: string;
  placa: string;
  entrada: Date;
}


(function(){
  const $ = (query: string): HTMLInputElement | null=> document.querySelector(query);
  
  function patio(){
    function ler(): Veiculo[]{
      return localStorage.patio ? JSON.parse(localStorage.patio) : [];
    }

    function salvar(veiculos: Veiculo[]){
      localStorage.setItem("patio", JSON.stringify(veiculos));
    }

    function adicionar(veiculo: Veiculo, salva?: boolean){
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

      if(salva) salvar([...ler(), veiculo])
    }
    function remover(){

    }
    function rederizar(){
      $("#patio")!.innerHTML = "";
      const patio = ler();

      if(patio.length){
        patio.forEach((veiculo) => adicionar(veiculo));
      }
    }
    return { ler, adicionar, remover, salvar, rederizar };
  }

  patio().rederizar();
  $("#cadastrar")?.addEventListener("click", () =>{
    const nome = $("#nome")?.value;
    const placa = $("#placa")?.value;
    console.log({nome, placa});

    if(!nome || !placa){
      alert("coloque o nome e placa");
      return;
    }

    patio().adicionar({ nome, placa, entrada: new Date()}, true);
  })
})();