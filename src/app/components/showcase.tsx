"use client";

import { game } from "~/types/types";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import GameHero from "./gameHero";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Props = {
  games: game[];
};

export default async function Showcase({ games }: Props) {
  return (
    <div className="flex max-w-4xl">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className=""
      >
        {games.map((game: game) => (
          <SwiperSlide key={game.id}>
            <GameHero game={game} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
