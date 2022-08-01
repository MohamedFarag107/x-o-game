import React from "react";
import Box from "./Box";

function Game() {
  return (
    <div className="grid grid-cols-3 gap-1 md:gap-9 m-auto mt-16">
      <Box x='0' y='0' /> <Box x='0' y='1' /> <Box x='0' y='2' />
      <Box x='1' y='0' /> <Box x='1' y='1' /> <Box x='1' y='2' />
      <Box x='2' y='0' /> <Box x='2' y='1' /> <Box x='2' y='2' /> 
    </div>
  );
}

export default Game;
