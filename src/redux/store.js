import { configureStore } from '@reduxjs/toolkit'
import ColorReducer from './colorSlice'
import TimerReducer from './timerSlice'

export const store = configureStore({
  reducer: {
    Color: ColorReducer,
    Timer: TimerReducer,
  },
})