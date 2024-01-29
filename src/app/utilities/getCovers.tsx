import { game } from "~/types/types";
import makeRequest from "./makeRequest";

type Props = {
  games: game[];
};

/**
 * Asynchronous function to retrieve cover images for games and add them to the game objects.
 *
 * @param {Object} Props - an object containing the 'games' array
 * @return {Array} an array of game objects with cover images added
 */
export default async function getCovers({ games }: Props) {
  const coverImageRequests = games.map((game: game) => {
    if (game.cover) {
      return makeRequest({
        endpoint: `/covers`,
        requestBody: `fields url, game; where id=${game.cover};`,
      });
    }
    return Promise.resolve(null);
  });

  const coverImagesResponses = await Promise.all(coverImageRequests);

  // Add cover images to each game
  games.forEach((game: game) => {
    coverImagesResponses.forEach((response) => {
      if (response === null) return;
      if (game.id === response[0].game) {
        console.log(
          `Match found ${game.id} & ${response[0].game}, adding covers...`,
        );
        var big_cover_url = response[0].url.replace("t_thumb", "t_cover_big");
        big_cover_url = big_cover_url.replace(".jpg", ".png");
        game.cover_url = big_cover_url;
      }
    });
  });
  return games;
}
