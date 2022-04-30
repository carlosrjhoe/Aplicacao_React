function Counter(){
  let cont = 0;

  function up(){
    cont = cont + 1;
    document.getElementById('box').innerHTML = cont;
  }

  return(
    <>
      <h1 id="box">{cont}</h1>
      <button onClick={up}>Aumentar</button>
    </>
  )
}

export default Counter;