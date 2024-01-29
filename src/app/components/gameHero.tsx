import React from "react";
import { game } from "~/types/types";
import makeRequest from "../utilities/makeRequest";

type Props = {
  game: game;
};

export default async function GameHero({ game }: Props) {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">test</div>
    </div>
  );
}
