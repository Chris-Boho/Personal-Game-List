import makeRequest from "~/app/utilities/makeRequest";
import { game } from "~/types/types";
import GameTitle from "~/app/components/game/gameTitle";

type Props = {
  params: {
    gameId: string;
  };
};

export default async function GamePage({ params }: Props) {
  const thisGame: game[] = await makeRequest({
    endpoint: "/games",
    requestBody: `fields id, name, cover, genres.name, summary; where id = ${params.gameId};`,
    getCover: true,
  });

  return (
    <div>
      GamePage
      <GameTitle games={thisGame} />
    </div>
  );
}
