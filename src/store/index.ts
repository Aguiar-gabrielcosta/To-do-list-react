import { configureStore } from '@reduxjs/toolkit'
import tarefasReducer from './reducers/tarefas'

export type RootReducer = ReturnType<typeof store.getState>

const store = configureStore({
  reducer: {
    tarefas: tarefasReducer
  }
})

export default store
