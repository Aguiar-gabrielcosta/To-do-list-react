import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

type TarefasState = {
  itens: Tarefa[]
}

const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      descricao: '',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.PENDENTE,
      titulo: 'Estudar TypeScript'
    },
    {
      id: 2,
      descricao: 'Rever  aula 2',
      prioridade: enums.Prioridade.URGENTE,
      status: enums.Status.CONCLUIDA,
      titulo: 'Estudar JavaScript'
    },
    {
      id: 3,
      descricao: 'praticar useEffect',
      prioridade: enums.Prioridade.URGENTE,
      status: enums.Status.PENDENTE,
      titulo: 'Estudar React'
    },
    {
      id: 4,
      descricao: 'praticar em landing page',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.PENDENTE,
      titulo: 'Estudar Bootstrap'
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((tarefa) => tarefa.id != action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => (t.id = action.payload.id)
      )
      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Tarefa, 'id'>>) => {
      const tarefaJaExiste = state.itens.find(
        (tarefa) =>
          tarefa.titulo.toLowerCase() === action.payload.titulo.toLowerCase()
      )

      if (tarefaJaExiste) {
        alert('Já existe uma tarefa com este nome')
      } else {
        const ultimaTarefa = state.itens[state.itens.length - 1]
        const tarefaNova = {
          ...action.payload,
          id: ultimaTarefa ? ultimaTarefa.id + 1 : 1
        }
        state.itens.push(tarefaNova)
      }
    },
    concluirTarefa: (
      state,
      action: PayloadAction<{ id: number; finalizado: boolean }>
    ) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => (t.id = action.payload.id)
      )
      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa].status = action.payload.finalizado
          ? enums.Status.CONCLUIDA
          : enums.Status.PENDENTE
      }
    }
  }
})

export const { remover, editar, cadastrar, concluirTarefa } =
  tarefasSlice.actions
export default tarefasSlice.reducer
