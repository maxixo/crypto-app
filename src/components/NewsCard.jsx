import { useContext } from "react";
import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { CoinContext } from "../context/CoinContext";

export function NewsCard() {

const { news } = useContext(CoinContext);   

console.log(news);

  return (
    (<div
      className=" h-[50vh] flex items-center flex-col">
      <InfiniteMovingCards items={news} direction="right" speed="" />
    </div>)
  );
}

export default NewsCard;