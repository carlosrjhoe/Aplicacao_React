import { useState } from 'react';

export default function SmartCounter() {
  const [cont, up] = useState(0);

  return(
    <div>
      <h1>{cont}</h1>
      <button onClick={()=> up(cont + 1)}>Aumentar</button>
    </div>
  );
}
