import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0,
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers:{
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmont: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(incrementAsyn.pending , ()=>{
            console.log("increment.pending")
        })
        .addCase(incrementAsyn.fulfilled, (state, action)=>{
            state.value += action.payload;
        })
    }
});

export const incrementAsyn = createAsyncThunk(
    "counter/incrementAsync",
    async(amount : number) => {
        await new Promise((resolve) => setTimeout(resolve,1000));
        return amount;
    }
)

export const { increment , decrement, incrementByAmont } = counterSlice.actions;

export default counterSlice.reducer;