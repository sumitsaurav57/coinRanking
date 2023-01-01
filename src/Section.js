import React, { useEffect, useState } from "react";
import img2 from "./grad.jpg";
import img3 from "./Meditation.png";
import { fetchData, options } from "./fetchData";
import { Scroll } from "scrollex";
import { MdOutlinePriceChange } from "react-icons/md";
import { GoVerified } from "react-icons/go";
import { GoUnverified } from "react-icons/go";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
const Section = () => {
  const [coins, setCoins] = useState(null);
  const [About, setAbout] = useState(null);
  useEffect(() => {
    let coinData = [];
    const fetchExercisesData = async () => {
      coinData = await fetchData(
        "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0",
        options
      );
      console.log("frtching cards");
      setCoins(coinData.data.coins);
    };
    fetchExercisesData();
  }, []);

  return (
    <div className=" w-screen overflow-x-hidden relative flex flex-col justify-center items-center bg-black">
      <div>{coins && <Coin coins={coins} />}</div>
    </div>
  );
};
const Coin = ({ coins }) => {
  return (
    <div className=" w-[90vw]   flex flex-wrap items-center justify-center my-16 gap-5">
      {coins ? (
        coins.map((item, index) => (
          <Link
            to={`/exercise/${item.uuid}`}
            className="h-[300px] w-[200px] text-black flex justify-center items-center flex-col bg-slate-400 "
            key={index}
          >
            <p className="text-lg w-full h-1/5 flex items-center justify-center tracking-widest">
              {item.name}
            </p>
            <Divider />
            <div
              className="h-2/5 w-full bg-center bg-no-repeat bg-contain"
              style={{ backgroundImage: `url(${item.iconUrl})` }}
            ></div>
            <div className="flex h-1/5 w-full  flex-col items-center justify-center">
              <p className="text-sm py-3 w-4/5 flex">
                <AiOutlineDollarCircle className=" text-2xl" /> {item.price}
              </p>
              <p className="text-sm w-4/5 flex">
                {item.recommended ? (
                  <GoVerified className=" text-xl mx-2" />
                ) : (
                  <GoUnverified className="text-xl mx-2" />
                )}
                recommended
              </p>
            </div>
          </Link>
        ))
      ) : (
        <p>waiting...</p>
      )}
    </div>
  );
};
const Divider = () => <hr className="sidebar-hr w-4/5" />;
export default React.memo(Section);
