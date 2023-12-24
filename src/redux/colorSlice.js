import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  pomodoroColor: "rgb(57, 112, 151)",
  shortColor: "#7D53A2",
  longColor: "#BA4949",
}

export const ColorSlice = createSlice({
  name: 'Color',
  initialState,
  reducers: {
    setPomodoroColor: (state, action) => {
        state.pomodoroColor = action.payload
    },
    setShortColor: (state, action) => {
        state.shortColor = action.payload
    },
    setLongColor: (state, action) => {
        state.longColor = action.payload
    },
  },
})

export const { setPomodoroColor, setLongColor, setShortColor } = ColorSlice.actions

export default ColorSlice.reducer