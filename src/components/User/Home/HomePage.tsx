import React from "react";
import BannerGirl from "../../../assets/Group 230.svg";
import AdsBanner from "../../../assets/AdBanner-transformed.jpeg";

const HomePage: React.FC = () => {
  return (
    <>
      <div className="grid sm:grid-cols-2 place-items-center h-auto bg-slate-50">
        <div>
          <h1 className="my-3 text-3xl font-semibold">Learning comes to you</h1>
          <p>
            Sale ends today.Attain a world of knowledge at hom eor on the go.
          </p>
          <p>Courses as low as $10</p>
        </div>

        <div className="md:m-10 max-w-40 sm:max-w-none object-scale-down">
          <img
            src={BannerGirl}
            alt="Banner"
            className="md:w-2/4 sm:w-4/4 w-full h-auto md:ml-16"
          />
        </div>
      </div>
      <div>
        <img src={AdsBanner} alt="" />
      </div>
    </>
  );
};

export default HomePage;
