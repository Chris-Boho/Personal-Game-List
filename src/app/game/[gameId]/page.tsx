import makeRequest from "~/app/utilities/makeRequest";
import { game } from "~/types/types";
import GameTop from "~/app/components/game/gameTop";

type Props = {
  params: {
    gameId: string;
  };
};

export default async function GamePage({ params }: Props) {
  const thisGame: game[] = await makeRequest({
    endpoint: "/games",
    requestBody: `fields id, name, cover, genres.name, game_modes.name, summary, storyline, platforms.name, artworks.url, screenshots.url; where id = ${params.gameId};`,
    getCover: true,
  });

  if (thisGame[0]) {
    return (
      <div className="">
        <GameTop game={thisGame[0]} />
      </div>
    );
  }
}
