import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';

//create action
export const createUser = createAsyncThunk("createUser",async(data,{rejectWithValue})=>{
    const response =await fetch("https://64b2d5ad38e74e386d559f63.mockapi.io/crud", {
        method:"POST",
        headers:{
            "Content-type":"application/json",
        },
        body: JSON.stringify(data)

    });
    try {
        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error);
    }
});

//read action 

export const showUser = createAsyncThunk(
    "showUser",
    async (args, { rejectWithValue }) => {
      const response = await fetch(
        "https://64b2d5ad38e74e386d559f63.mockapi.io/crud"
      );
  
      try {
        const result = await response.json();
        console.log(result);
        return result;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );
/////////////

export const userDetail = createSlice({
    name:"userDetail",
    initialState:{
        users:[],
        loading:false,
        error:null,
    },
    extraReducers:{
        [createUser.pending]:(state)=>{
            state.loading=true;
        },
        [createUser.fulfilled]:(state,action)=>{
            state.loading=false;
            state.users.push(action.payload);
        },
        [createUser.rejected]:(state,action)=>{
            state.loading=false;
            state.error = action.payload.message;
        },
        [showUser.pending]: (state) => {
            state.loading = true;
          },
        [showUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.users = action.payload;
          },
        [showUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
          },
    }
})

export default userDetail.reducer