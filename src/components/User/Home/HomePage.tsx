import React from "react";
import BannerGirl from "../../../assets/logoBanner.jpg";

const HomePage: React.FC = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between px-6 md:px-12 lg:px-24 xl:px-32 mt-10">
        <img
          src={BannerGirl}
          alt="Banner"
          className="md:w-1/2 w-full h-auto md:order-last" // Move image to last on medium screens and up
        />
        <div className="md:w-1/2 p-6 md:p-12 md:order-first"> {/* Order first on medium screens and up */}
          <h1 className="my-3 text-3xl md:text-4xl lg:text-5xl font-semibold  ">Learning comes to you</h1>
          <p className="text-base md:text-lg lg:text-xl font-serif ">
            Sale ends today. Attain a world of knowledge at home or on the go.
          </p>
          <p className="text-base md:text-lg lg:text-xl font-serif">Courses as low as $10</p>
        </div>
      </div>
    </>
  );
};

export default HomePage;




// import React from "react";
// import BannerGirl from "../../../assets/Group 230.svg";

// const HomePage: React.FC = () => {
//   return (
//     <>
//       <div className="grid sm:grid-cols-2 place-items-center h-auto bg-gradient-to-br from-blue-50 ">
//         <div className="">
//           <p className="text-3xl font-bold tracking-wide ">Discover best</p>
//           <p className="text-3xl font-bold leading-normal tracking-wide">classes for the</p>
//           <p className="text-3xl font-bold tracking-wide">best learning</p>
//           <p className="tracking-wide mt-5 font-serif">
//             In the digital realm, knowledge is not just power;
//           </p>
//           <p className="tracking-wide font-serif">it's empowerment at your fingertips.</p>
//         </div>

//         <div className="md:m-10 max-w-40 sm:max-w-none object-scale-down ">
//           <img
//             src={BannerGirl}
//             alt="Banner"
//             className="md:w-4/6 sm:w-4/4 w-full h-auto md:ml-16"
//           />
//         </div>
//       </div>
   
//     </>
//   );
// };

// export default HomePage;

