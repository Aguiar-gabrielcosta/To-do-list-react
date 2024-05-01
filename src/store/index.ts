import { configureStore } from '@reduxjs/toolkit'
import tarefasReducer from './reducers/tarefas'
import filtroReducer from './reducers/filtro'

export type RootReducer = ReturnType<typeof store.getState>

const store = configureStore({
  reducer: {
    tarefas: tarefasReducer,
    filtro: filtroReducer
  }
})

export default store
