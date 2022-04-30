import React, { useState } from 'react'
import "../Ifoodcouter/Ifoodcounter.css"

export default function Ifoodcounter() {
  const [value, setValue] = useState(0)


  function down(){
    if(value > 0){
      setValue(value-1)
    }
  }

  function up(){
    setValue(value+1)
  }

  return (
    <div class="botao01">
      <button class="botao01" onClick={up}>+</button>
      <p>{value}</p>
      <button class="botao01" onClick={down}>-</button>
    </div>
  )
}
