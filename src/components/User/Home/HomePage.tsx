import React from "react";
import BannerGirl from "../../../assets/BannerGirl.png"

const HomePage: React.FC = () => {
  return (
    <div className="grid sm:grid-cols-2 justify-items-center h-auto">
      <div className="my-16 text-3xl font-semibold  ">
        Learning comes to you
      </div>
      <div className="my-16 w-30 h-30">
        <img src={BannerGirl} alt="" />
      </div>
    </div>
  );
};

export default HomePage;
