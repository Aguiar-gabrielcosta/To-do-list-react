import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { remover, editar, concluirTarefa } from '../../store/reducers/tarefas'
import * as S from './styles'
import TarefaClass from '../../models/Tarefa'
import { Botao, BotaoSalvar } from '../../styles'
import * as enums from '../../utils/enums/Tarefa'

type Props = TarefaClass

const Tarefa = ({
  titulo,
  prioridade,
  status,
  descricao: descricaoInicial,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [editando, setEditando] = useState(false)
  const [descricao, setDescricao] = useState('')

  useEffect(() => {
    if (descricaoInicial.length > 0) {
      setDescricao(descricaoInicial)
    }
  }, [descricaoInicial])

  function cancelaEdicao() {
    setEditando(false)
    setDescricao(descricaoInicial)
  }

  function alteraStatusTarefa(evento: ChangeEvent<HTMLInputElement>) {
    dispatch(
      concluirTarefa({
        id,
        finalizado: evento.target.checked
      })
    )
  }

  return (
    <S.Card>
      <label htmlFor={titulo}>
        <input
          type="checkbox"
          id={titulo}
          checked={status === enums.Status.CONCLUIDA}
          onChange={alteraStatusTarefa}
        />
        <S.Titulo>
          {editando && <em>Editanto: </em>}
          {titulo}
        </S.Titulo>
      </label>
      <S.Tag prioridade={prioridade} parametro="prioridade">
        {prioridade}
      </S.Tag>
      <S.Tag status={status} parametro="status">
        {status}
      </S.Tag>
      <S.Descricao
        disabled={!editando}
        value={descricao}
        onChange={(evento) => setDescricao(evento.target.value)}
      />
      <S.BarraAcoes>
        {editando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    descricao,
                    id,
                    prioridade,
                    status,
                    titulo
                  })
                )
                setEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelaEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <Botao onClick={() => setEditando(true)}>Editar</Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
