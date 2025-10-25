import { FaFire } from "react-icons/fa";
import applelaptop from "../assets/Hero/applelaptop.png";
import PrimaryBtn from "./PrimaryBtn";
import { BiHive } from "react-icons/bi";
import HeaderInfo from "./HeaderInfo";

const Hero = () => {
  return (
    <div className="bg-[#FCEAE1] rounded-xl">
      <div className=" w-11/12 mx-auto flex justify-center items-center gap-10  h-[600px]">
        <div className="w-1/2">
          <HeaderInfo iconName={<FaFire />} info={"Top Brands"}></HeaderInfo>
          <h2 className="text-5xl font-bold text-neutral mb-4">Discover the Future of</h2>
          <h2 className="text-5xl font-bold text-neutral">Electronics</h2>
          <p className="text-neutral-600 font-medium mt-5 mb-8">Stay Ahead with the latest tech trends and innovations</p>
          <PrimaryBtn>
            <BiHive />
            Explore Now
          </PrimaryBtn>
        </div>
        <div className="w-1/2">
          <img src={applelaptop} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;