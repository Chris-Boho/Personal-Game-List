import { game } from "~/types/types";
import SmallHeader from "../other/smallHeader";

type Props = {
  game: game;
};

export default function SmallDetails({ game }: Props) {
  return (
    <>
      <div className="flex flex-col">
        <div className="my-2">
          <SmallHeader text="Platforms" />
        </div>
        {game.platforms!.map((platform, index) => (
          <p key={index} className="badge badge-info mb-2 font-bold shadow-xl">
            {platform.name}
          </p>
        ))}
      </div>
      <div className="flex flex-col">
        <div className="my-2">
          <SmallHeader text="Genres" />
        </div>
        {game.genres!.map((genre, index) => (
          <p key={index} className="badge badge-info mb-2 font-bold shadow-xl">
            {genre.name}
          </p>
        ))}
      </div>
      <div className="flex flex-col">
        <div className="my-2">
          <SmallHeader text="Game Modes" />
        </div>
        {game.game_modes!.map((game_mode, index) => (
          <p key={index} className="badge badge-info mb-2 font-bold shadow-xl">
            {game_mode.name}
          </p>
        ))}
      </div>
    </>
  );
}
