import { game } from "~/types/types";
import Header from "../other/header";
import SmallHeader from "../other/smallHeader";
import SmallDetails from "./smallDetails";
import GameRatings from "./gameRatings";

type Props = {
  game: game;
};

export default function GameTop({ game }: Props) {
  console.log("Game Props: ", game);
  if (game && game.genres) {
    return (
      <div className="mt-8 flex flex-col items-center justify-center ">
        <div className="">
          <div className="">
            <Header text={`${game.name}`} />
          </div>
          <div className="divider"></div>
          <div className="max-w-3xl overflow-hidden md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-auto w-full rounded-lg border object-cover shadow-lg sm:max-w-xs"
                src={game.cover?.url}
                alt="Game Cover"
              />
              <SmallDetails game={game} />
            </div>
            <div className="md:ml-16">
              <GameRatings game={game} />
              <SmallHeader text="Description" />
              <p className="mt-2">{game.summary}</p>
              <div className="pt-4">
                <SmallHeader text="Storyline" />
              </div>
              <p className="mt-2">{game.storyline}</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Error Loading Page</div>;
  }
}
