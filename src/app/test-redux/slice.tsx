import { createSlice } from "@reduxjs/toolkit";

interface CounterStateTypes {
  count: any;
  count2: any;
}
const initialState: CounterStateTypes = { count: 0, count2: 0 };

const counterSlice = createSlice({
  name: "counterA",
  initialState,
  reducers: {
    plus: (state) => {
      state.count += 1;
    },
    minus: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    count2: (state) => {
      state.count2 += 1;
    },
  },
});

export const { minus, plus, reset, count2 } = counterSlice.actions;
export default counterSlice.reducer;
