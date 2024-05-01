import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'
import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'

const Barralateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        <S.Campo
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
        />
        <S.Filtros>
          <FiltroCard contador={3} legenda="pedentes" />
          <FiltroCard contador={3} legenda="concluídas" />
          <FiltroCard contador={3} legenda="urgentes" />
          <FiltroCard contador={3} legenda="importantes" />
          <FiltroCard contador={4} legenda="normal" />
          <FiltroCard contador={5} legenda="todas" ativo={true} />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default Barralateral
