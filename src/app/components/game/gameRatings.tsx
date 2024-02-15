import { game } from "~/types/types";

type Props = {
  game: game;
};

export default function GameRatings({ game }: Props) {
  return (
    <div className="mb-4 flex justify-between rounded-lg bg-slate-300 p-4">
      <div className="flex flex-col">
        <p> IGDB Rating: </p>
        <div
          className="radial-progress border-4 border-info bg-info text-3xl font-bold text-info-content"
          style={
            {
              "--value": Math.floor(game.rating!),
              "--thickness": "4px",
            } as React.CSSProperties
          }
          role="progressbar"
        >
          {Math.floor(game.rating!)}
        </div>
      </div>
      <div className="ml-auto flex flex-col">
        <p> Critic Rating: </p>
        <div
          className="radial-progress border-4 border-info bg-info text-3xl font-bold text-info-content"
          style={
            {
              "--value": Math.floor(game.aggregated_rating!),
              "--thickness": "4px",
            } as React.CSSProperties
          }
          role="progressbar"
        >
          {Math.floor(game.aggregated_rating!)}
        </div>
      </div>
    </div>
  );
}
