import {Button, Button02} from './components/button.style'
import { Container } from "./components/conteiner.style"
import { Content } from "./components/content.style"
import { Input } from "./components/form.style"

function App() {
  let active = true

  return (
    <div className="App">
      
      <Container active={active}>
          <Content>
              {/* <Button color="silver">hello word</Button>
              <Button02 color="silver">hello word</Button02> */}
              <form action="http://localhost:3030" method="post"   className="form">
                Nome: <Input/>
                  <br/>
                Senha: <input 
                  className="input--senha"
                  type="password"
                  name="senha"
                  alt="senha"
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
