// import {Button, Button02, Button03} from './components/button.style'
import { Container } from "./components/conteiner.style"
import { Content } from "./components/content.style"
import React from 'react'


import "../src/App.css"

function App() {
  let active = true

  return (
    <div className="App">
       
      <Container active={active}>
          <Content>
              {/* <Button color="silver">hello word</Button>
              <Button02 color="silver">hello word</Button02> */}
              {/* <Button03>iuhgiu</Button03>*/}

              <form action="http://localhost:3040/form" method="POST"   className="form">
                <h1>FORM</h1>
                <label>Nome:</label> <input 
                  className="input--nome"
                  type="text"
                  name="nome"
                  alt="nome de usuario"
                  required
                  />
                  <br/>
                  <label>Senha:</label> <input 
                  className="input--senha"
                  type="password"
                  name="senha"
                  alt="senha"
                  required
                  />
                  <br/>

                  <button type="submit">Enviar</button>
              </form>
          </Content>
      </Container>

    </div>
  );
}

export default App;
