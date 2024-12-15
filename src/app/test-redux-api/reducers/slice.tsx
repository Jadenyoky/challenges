import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: any = {
  data: [],
  status: "idle", // حالة العملية (pending, fulfilled, rejected)
  error: null, // لتخزين الأخطاء
};

export const fetchData2: any = createAsyncThunk(
  "todos/fetchTodos",
  async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos?_limit=5"
    );
    return response.data;
  }
);

const dataSlice = createSlice({
  name: "dataFake",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData2.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData2.fulfilled, (state, action) => {
        state.status = "done";
        state.data = action.payload; // تخزين البيانات في الـ state
      })
      .addCase(fetchData2.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

// export const {} = dataSlice.actions;
export default dataSlice.reducer;
