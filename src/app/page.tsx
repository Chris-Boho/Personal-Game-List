import Link from "next/link";
import Showcase from "./components/showcase";
import makeRequest from "./utilities/makeRequest";
import { game } from "~/types/types";
import getCovers from "./utilities/getCovers";

export default async function HomePage() {
  const games: game[] = await makeRequest({
    endpoint: "/games",
    requestBody:
      "fields name, cover, summary; limit 10; where aggregated_rating > 90 & aggregated_rating_count > 10;",
  });

  const updatedGames = await getCovers({ games: games });
  console.log("UPDATED GAMES: ", updatedGames);

  return (
    <main>
      <div className="text-3xl">Testing~</div>
      <br />
      {/* <Showcase games={games} /> */}
    </main>
  );
}
