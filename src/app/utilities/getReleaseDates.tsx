import { game } from "~/types/types";
import makeRequest from "./makeRequest";

type Props = {
  games: game[];
};

export default async function getRelease({ games }: Props) {
  const curTime = new Date().getTime();
  console.log("curTime: ", curTime);
  const releaseDatesRequests = games.map((game: game) => {
    if (game.id) {
      return makeRequest({
        endpoint: `/release_dates`,
        requestBody: `fields m, date, human, game; where date > 1706827467176; limit 5;`,
        getCover: false,
        getReleaseDates: false,
      });
    }
    console.log("request made");
    return Promise.resolve(null);
  });

  const releaseDateResponses = await Promise.all(releaseDatesRequests);

  // Add cover images to each game
  games.forEach((game: game) => {
    releaseDateResponses.forEach((response) => {
      if (response === null) return;
      console.log("adding stuff", response);
      if (game.id === response.game) {
        console.log(
          `Match found ${game.id} & ${response.game}, adding release dates...`,
        );
        console.log("stuff:", response);
      }
    });
  });
  return games;
}
