import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchData, options } from "./fetchData";
const CoinDetail = () => {
  const { id } = useParams();
  console.log(id);
  const [coin, setCoin] = useState();
  useEffect(() => {
    const AboutCoin = async () => {
      let Coin = [];
      Coin = await fetchData(
        `https://coinranking1.p.rapidapi.com/coin/${id}?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h`,
        options
      );
      setCoin(Coin.data.coin);
    };
    AboutCoin();
  }, [id]);
  return (
    <div className=" min-h-[100vh] pt-10 w-screen flex  justify-center items-center bg-black">
      {coin ? (
        <div className="w-[80vw] flex  pb-5 flex-col justify-center items-start">
          <div
            className="h-[300px] w-[200px] bg-center bg-no-repeat bg-contain"
            style={{ backgroundImage: `url(${coin.iconUrl})` }}
          ></div>
          <div className=" w-[80vw] flex rounded-lg  ">
            <div
              className="text-white text-sm text-left"
              dangerouslySetInnerHTML={{ __html: coin.description }}
            ></div>
          </div>
        </div>
      ) : (
        "dosentExist"
      )}
    </div>
  );
};
export default CoinDetail;
