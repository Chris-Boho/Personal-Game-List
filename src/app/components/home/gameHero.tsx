import React from "react";
import { game } from "~/types/types";
import { FaStar } from "react-icons/fa6";
import Link from "next/link";

type Props = {
  game: game;
};

export default async function GameHero({ game }: Props) {
  return (
    <div className="hero rounded-lg bg-base-200 px-10 md:max-h-80 lg:max-h-96">
      <div className="hero-content h-auto max-w-full flex-col px-8 lg:flex-row">
        <img
          src={game.cover_url}
          className="h-auto max-w-full rounded-lg shadow-xl"
        />
        <div className="flex-grow">
          <h1 className="pb-4 text-xl font-bold">{game.name}</h1>
          <p className="line-clamp-5 overflow-hidden overflow-ellipsis">
            {game.summary}
          </p>
          <div className="mt-4 flex items-center">
            <button className="btn btn-info shadow-lg">
              <Link key={game.id} href={`/game/${game.id}`}>
                Read More
              </Link>
            </button>
            <kbd className="kbd kbd-lg ml-auto bg-info">
              {Math.floor(game.aggregated_rating!)} <FaStar className="ml-1" />
            </kbd>
          </div>
        </div>
      </div>
    </div>
  );
}
