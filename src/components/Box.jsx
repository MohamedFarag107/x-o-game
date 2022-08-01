import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BsCircleFill, BsFillSquareFill } from "react-icons/bs";
import { ticTacActions } from "../store/tictacSlice";

function Box({ x, y }) {
  const [show, setShow] = useState(false);
  const [player, setPlayer] = useState(false);
  const dispatch = useDispatch();
  const currentPlayer = useSelector((state) => state.currentPlayer);
  const reset = useSelector((state) => state.reset);
  const handlePlayer = () => {
    if (!show) {
      setShow(true);
      setPlayer(currentPlayer);
      dispatch(ticTacActions.Check({ x, y, val: currentPlayer }));
      dispatch(ticTacActions.nextPlayer());
    }
  };
  useEffect(() => {
    if (reset) {
      setShow(false);
      setPlayer(false);
    }
  }, [reset]);
  return (
    <div
      onClick={handlePlayer}
      className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] bg-primary player-box rounded-2xl flex justify-center items-center"
    >
      {show &&
        (player ? (
          <BsFillSquareFill className="text-player-x" size="70px" />
        ) : (
          <BsCircleFill className="text-player-o" size="70px" />
        ))}
    </div>
  );
}

export default Box;
