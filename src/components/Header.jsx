import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ticTacActions } from "../store/tictacSlice";
import { BsFillSquareFill, BsCircleFill } from "react-icons/bs";
import { IoReload } from "react-icons/io5";

function Header() {
  const currentPlayer = useSelector((state) => state.currentPlayer);
  const dispatch = useDispatch();
  const handleReset = ()=>{
    dispatch(ticTacActions.resetBoard());
    setTimeout(()=>{
      dispatch(ticTacActions.reset());
    })
  }
  return (
    <header className="flex justify-between items-center md:gap-16">
      <div className="flex gap-1">
        <BsFillSquareFill className="text-player-x" size="50px" />
        <BsCircleFill className="text-player-o" size="50px" />
      </div>
      <div className="flex items-center gap-3 text-secondary bg-primary rounded-md py-2 px-5 current-player">
        {currentPlayer ? (
          <BsFillSquareFill size="35px" />
        ) : (
          <BsCircleFill size="35px" />
        )}

        <h1 className="uppercase font-bold text-xl select-none">turn</h1>
      </div>
      <div onClick={handleReset} className="bg-secondary rounded-md p-2 cursor-pointer">
        <IoReload className="text-main font-bold" size="35px" />
      </div>
    </header>
  );
}

export default Header;
