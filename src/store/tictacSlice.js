import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  positios: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ],
  currentPlayer: true,
  finish: false,
  reset: false,
  ties: false,
  winner: false,
  prevScore: {
    player_x: 0,
    player_o: 0,
    ties: 0,
  },
};

const ticTacSlice = createSlice({
  name: "ticTacToe",
  initialState,
  reducers: {
    setCurrentPlayer(state, actions) {
      state.currentPlayer = actions.payload;
    },
    Check(state, actions) {
      const { x, y, val } = actions.payload;
      state.positios[x][y] = val;
      // rows
      for (let i = 0; i < 3; i++) {
        if (
          state.positios[i][0] === true &&
          state.positios[i][1] === true &&
          state.positios[i][2] === true
        ) {
          state.finish = true;
          state.winner = val
          if(val){
            state.prevScore.player_x += 1
          }else{
            state.prevScore.player_o += 1
          }
          return
        }
        if (
          state.positios[i][0] === false &&
          state.positios[i][1] === false &&
          state.positios[i][2] === false
        ) {
          state.finish = true;
          state.winner = val
          if(val){
            state.prevScore.player_x += 1
          }else{
            state.prevScore.player_o += 1
          }
          return
        }
      }
      // columns
      for (let i = 0; i < 3; i++) {
        if (
          state.positios[0][i] === true &&
          state.positios[1][i] === true &&
          state.positios[2][i] === true
        ) {
          state.finish = true;
          state.winner = val
          if(val){
            state.prevScore.player_x += 1
          }else{
            state.prevScore.player_o += 1
          }
          return
        }
        if (
          state.positios[0][i] === false &&
          state.positios[1][i] === false &&
          state.positios[2][i] === false
        ) {
          state.finish = true;
          state.winner = val
          if(val){
            state.prevScore.player_x += 1
          }else{
            state.prevScore.player_o += 1
          }
          return
        }
      }
      //
      if (
        (state.positios[0][0] === true &&
          state.positios[1][1] === true &&
          state.positios[2][2] === true) ||
        (state.positios[0][2] === true &&
          state.positios[1][1] === true &&
          state.positios[2][0] === true)
      ) {
        state.finish = true;
        state.winner = val
        if(val){
          state.prevScore.player_x += 1
        }else{
          state.prevScore.player_o += 1
        }
        return
      }
      if (
        (state.positios[0][0] === false &&
          state.positios[1][1] === false &&
          state.positios[2][2] === false) ||
        (state.positios[0][2] === false &&
          state.positios[1][1] === false &&
          state.positios[2][0] === false)
      ) {
        state.finish = true;
        state.winner = val
        if(val){
          state.prevScore.player_x += 1
        }else{
          state.prevScore.player_o += 1
        }
        return
      }
      // ties
      for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
          if(state.positios[i][j] === ""){
            return
          }
        }
      }
      state.finish = true;
      state.prevScore.ties++;
      state.ties = true;
      
    },
    nextPlayer(state) {
      state.currentPlayer = !state.currentPlayer;
    },
    reset(state) {
      state.positios = initialState.positios;
      state.currentPlayer = initialState.currentPlayer;
      state.finish = initialState.finish;
      state.prevScore = initialState.prevScore;
      state.winner = initialState.winner;
      state.reset = false;
      state.ties = false;
    },
    resetBoard(state) {
      state.reset = true;
    },
    continuePlay(state){
      state.positios = initialState.positios;
      state.currentPlayer = initialState.currentPlayer;
      state.finish = initialState.finish;
      state.winner = initialState.winner;
      state.reset = false;
      state.ties = false;
    }
  },
});

export const ticTacActions = ticTacSlice.actions;

export default ticTacSlice.reducer;
