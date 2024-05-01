import BotaoAdicionar from '../../components/BotaoAdicionar'
import Barralateral from '../../containers/BarraLateral'
import ListaDetarefas from '../../containers/ListaDeTarefas'

const Home = () => {
  return (
    <>
      <Barralateral mostrarFiltros={true} />
      <ListaDetarefas />
      <BotaoAdicionar />
    </>
  )
}

export default Home
