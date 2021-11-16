import {Button, Button02} from './components/button.style'
import { Container } from "./components/conteiner.style"
import { Content } from "./components/content.style"

function App() {
  let active = true

  return (
    <div className="App">
      
      <Container active={active}>
          <Content>
              <Button color="silver">hello word</Button>
              <Button02 color="silver">hello word</Button02>

          </Content>
      </Container>

    </div>
  );
}

export default App;
