import { game } from "~/types/types";

type Props = {
  games: game[];
};

export default function GameTitle({ games }: Props) {
  console.log("Game Props: ", games);
  if (games[0] && games[0].genres) {
    return (
      <div>
        Testing Stuff:
        <p>{games[0].name}</p>
        <p>Genres: {games[0].genres.map((genre) => genre.name).join(", ")}</p>
      </div>
    );
  } else {
    return <div>Error Loading Page</div>;
  }
}
