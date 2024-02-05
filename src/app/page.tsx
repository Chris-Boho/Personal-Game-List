import Link from "next/link";
import Showcase from "./components/showcase";
import Header from "./components/header";
import makeRequest from "./utilities/makeRequest";
import { makeRequestWithDelay } from "./utilities/makeRequestDelay";
import { game } from "~/types/types";
import GameColumn from "./components/gameColumn";

export default async function HomePage() {
  const showcaseGames: game[] = await makeRequestWithDelay({
    endpoint: "/games",
    requestBody:
      "fields name, cover, summary, aggregated_rating; limit 10; where aggregated_rating > 90 & aggregated_rating_count > 10;",
    getCover: true,
    getReleaseDates: false,
  });

  const curTime = Math.floor(new Date().getTime() / 1000);
  const thirtyDays = curTime + 2592000;

  const releasingGames: game[] = await makeRequestWithDelay({
    endpoint: "/games",
    requestBody: `fields cover, name, first_release_date, category; limit 10; where first_release_date > ${curTime} & first_release_date < ${thirtyDays} & cover!=null & category = 0; sort first_release_date asc;`,
    getCover: true,
    getReleaseDates: false,
  });

  const followedGames: game[] = await makeRequestWithDelay({
    endpoint: "/games",
    requestBody:
      "fields name, cover, summary, follows, hypes, first_release_date; limit 10; where follows > 800; sort follows desc;",
    getCover: true,
    getReleaseDates: false,
  });

  console.log("Followd Games: ", followedGames);

  return (
    <main>
      <div>
        <div className="mt-10 flex flex-col items-center justify-center">
          <div className="space-y-4">
            <Header text="Highly Rated Games" color="emerald" />
            <Showcase games={showcaseGames} />
          </div>
        </div>
      </div>
      <div className="mt-10 flex flex-row items-center justify-center">
        <div>
          <Header text="Coming Soon" color="red" />
          <GameColumn games={releasingGames} />
        </div>
        <div>
          <Header text="Most Followed" color="red" />
          <GameColumn games={followedGames} />
        </div>
      </div>
    </main>
  );
}
