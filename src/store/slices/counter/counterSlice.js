import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({ //retorna acciones
    name: 'counter',
    initialState: {
        counter: 10
    },
    reducers: {
        increment: (state) => { //acciones (definicion del reducer)
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.counter += 1
        },
        decrement: (state) => { //acciones
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.counter -= 1
        },
        incrementby2: (state, action) => { //acciones
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.counter += action.payload //payload toma el valor que se le envia desde app.jsx, puede ser múmero, objeto,etc
        },

    },
})

// Action creators are generated for each case reducer function(Generador de acciones)
export const { increment, decrement, incrementby2 } = counterSlice.actions;

//Dispatch: Es una función que permite lanzar acciones (actions) al store, con la intención de afectar el estado.