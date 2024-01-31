import React from "react";
import MainCrosel from "../../components/HomeCarosel/MainCrosel";
import HomeSectionCarosel from "../../components/HomeSectionCarosel/HomeSectionCarosel";
import { mens_kurta } from "../../../Data/mens_kurta";
const Homepage = () => {
  return (
    <div>
      <MainCrosel />
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Shoes"} />
        <HomeSectionCarosel data={mens_kurta} sectionName={"Lengha Choli"} />
        <HomeSectionCarosel data={mens_kurta} sectionName={"Saree"} />
        <HomeSectionCarosel data={mens_kurta} sectionName={"Dress"} />
        <HomeSectionCarosel data={mens_kurta} sectionName={"Women's Gouns"} />
      </div>
    </div>
  );
};

export default Homepage;
