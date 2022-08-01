import React from "react";
import { useSelector } from "react-redux";
import { BsFillSquareFill, BsCircleFill } from "react-icons/bs";

function Footer() {
  const score = useSelector((state) => state.prevScore);
  return (
    <div className="flex justify-evenly items-center mx-auto my-12 text-primary-alt font-bold">
      <div className="bg-player-x px-4 py-2 md:px-8 md:py-4 text-lg rounded-2xl text-center">
        <div className="flex gap-2 justify-center items-center">
          <h1>Player</h1>
          <BsFillSquareFill size="20px" />
        </div>
        <div>{score.player_x}</div>
      </div>
      <div className="bg-secondary  px-4 py-2 md:px-8 md:py-4 text-lg rounded-2xl text-center">
        <h1 className="uppercase">ties</h1>
        <div>{score.ties}</div>
      </div>
      <div className="bg-player-o  px-4 py-2 md:px-8 md:py-4 text-lg rounded-2xl text-center">
        <div className="flex gap-2 justify-center items-center">
          <h1>Player</h1>
          <BsCircleFill size="20px" />
        </div>
        <div>{score.player_o}</div>
      </div>
    </div>
  );
}

export default Footer;
