import React, { useState } from "react";
import { BsFillSquareFill, BsCircleFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import ChoosePlayer from "../ChoosePlayer";
import Footer from "../Footer";
import Game from "../Game";
import Header from "../Header";
import Modal from "../Modal";
import Ties from "../Ties";
import Winner from "../Winner";

function TicTacToe() {
  const [choosePlayer, setchoosePlayer] = useState(true);
  const finish = useSelector((state) => state.finish);
  const winner = useSelector((state) => state.winner);
  const ties = useSelector((state) => state.ties);
  return (
    <div className="m-auto h-screen pt-8 w-fit">
      {choosePlayer && (
        <Modal>
          <ChoosePlayer setchoosePlayer={setchoosePlayer} />
        </Modal>
      )}
      {finish && (
        <Modal>
          {ties ? (
            <Ties />
          ) : winner ? (
            <Winner
              winnerColor="player-x"
              icon={<BsFillSquareFill size="45px" />}
            />
          ) : (
            <Winner
              winnerColor="player-o"
              icon={<BsCircleFill size="45px" />}
            />
          )}
        </Modal>
      )}
      <Header />
      <Game />
      <Footer />
    </div>
  );
}

export default TicTacToe;
