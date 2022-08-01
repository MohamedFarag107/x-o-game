import React from "react";
import { useDispatch } from "react-redux";
import { ticTacActions } from "../store/tictacSlice";

function Ties() {
  const dispatch = useDispatch();
  const handleQuit = () => {
    dispatch(ticTacActions.resetBoard());
    setTimeout(() => {
      dispatch(ticTacActions.reset());
    }, [100]);
  };
  const handleNextRound = () => {
    dispatch(ticTacActions.resetBoard());
    setTimeout(() => {
      dispatch(ticTacActions.continuePlay());
    }, [100]);
  };
  return (
    <div className="w-full h-screen absolute flex flex-col justify-center modal">
      <div className="bg-main flex justify-center items-center uppercase text-center font-bold">
        <div className="w-fit py-24">
          <h1 className="text-secondary mb-4 text-[40px]">ties</h1>
          <div className="text-primary-alt flex justify-center items-center gap-4 mt-4 ">
            <div
              onClick={handleQuit}
              className="rounded-md bg-secondary py-2 px-4 quit"
            >
              quit
            </div>
            <div
              onClick={handleNextRound}
              className="rounded-md bg-secondary py-2 px-4 quit"
            >
              next round
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ties;
