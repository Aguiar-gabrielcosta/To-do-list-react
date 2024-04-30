import { Provider } from 'react-redux'
import Barralateral from './containers/BarraLateral'
import ListaDetarefas from './containers/ListaDeTarefas'
import EstiloGlobal, { Container } from './styles'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <Barralateral />
        <ListaDetarefas />
      </Container>
    </Provider>
  )
}

export default App
