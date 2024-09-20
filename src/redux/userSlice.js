import {createSlice} from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "user",
    initialState: {
        token: null,        
        authenticated: false,    
        user: {
          id: null,      
          name: null,      
        }
    }, 
    reducers: {
        login: (state, action) => {
            state.token = action.payload.token
            state.authenticated = true;               
            state.user = {
              id: action.payload.id,      
              name: action.payload.name,    
            };
        },
    }
});

export const {login} = userSlice.actions;
export const selectUser = (state) => state.user.user;
export const selectAuthenticated = (state)=> state.user.authenticated;
export default userSlice.reducer;