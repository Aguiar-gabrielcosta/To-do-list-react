import BotaoAdicionar from '../../components/BotaoAdicionar'
import Barralateral from '../../containers/BarraLateral'
import ListaDetarefas from '../../containers/ListaDeTarefas'

const Home = () => {
  return (
    <>
      <Barralateral />
      <ListaDetarefas />
      <BotaoAdicionar />
    </>
  )
}

export default Home
