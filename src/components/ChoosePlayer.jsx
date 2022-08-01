import React, { useState } from "react";
import { BsFillSquareFill, BsCircleFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { ticTacActions } from "../store/tictacSlice.js";

function ChoosePlayer({setchoosePlayer}) {
  const [choose, setChoose] = useState(true);
  const dispatch = useDispatch();
  const handlePlayerX = () => {
    setChoose(true);
  };
  const handlePlayerO = () => {
    setChoose(false);
  };
  const handleChoose = () => {
    dispatch(ticTacActions.setCurrentPlayer(choose));
    setchoosePlayer(false)
  };
  return (
    <div className="w-full h-screen absolute flex flex-col justify-center modal">
      <div className="bg-main flex justify-center items-center uppercase text-center font-bold">
        <div className="w-fit py-24">
          <h1 className="text-secondary mb-4 text-[40px]">pick player</h1>
          <div className="flex gap-1 bg-primary-alt text-secondary rounded-2xl overflow-hidden">
            <div
              onClick={handlePlayerX}
              className={`${
                choose ? "bg-secondary text-player-x" : ""
              } px-16 py-4 transition-all cursor-pointer`}
            >
              <BsFillSquareFill size={`50px`} />
            </div>
            <div
              onClick={handlePlayerO}
              className={`${
                choose ? "" : "bg-secondary text-player-o"
              } px-16 py-4 transition-all cursor-pointer`}
            >
              <BsCircleFill size={`50px`} />
            </div>
          </div>
          <div
            onClick={handleChoose}
            className={`${
              choose ? "bg-player-x shadow-x" : "bg-player-o shadow-o"
            } text-primary-alt text-[30px] px-16 py-4 mt-4 rounded-xl transition-all ease-in-out cursor-pointer next-round`}
          >
            Select
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChoosePlayer;
