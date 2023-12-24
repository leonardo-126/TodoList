import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  pomodoroTimer: 1500,
  shortTimer: 300,
  longTimer: 3600,
}

export const TimerSlice = createSlice({
  name: 'Timer',
  initialState,
  reducers: {
    setPomodoroTimer: (state, action) => {
        state.pomodoroTimer = action.payload
    },
    setShortTimer: (state, action) => {
        state.shortTimer = action.payload
    },
    setLongTimer: (state, action) => {
        state.longTimer = action.payload
    },
  },
})

export const { setLongTimer, setShortTimer, setPomodoroTimer } = TimerSlice.actions

export default TimerSlice.reducer