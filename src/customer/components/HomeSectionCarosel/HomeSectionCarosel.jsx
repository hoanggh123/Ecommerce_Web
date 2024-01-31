import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button } from "@mui/material";
import { mens_kurta } from "../../../Data/mens_kurta";

const HomeSectionCarosel = ({ data, sectionName }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };
  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);
  const syncActiveIndex = ({ item }) => setActiveIndex(item);
  const items = mens_kurta
    .slice(0, 10)
    .map((item) => <HomeSectionCard product={item} />);

    return (
      <div className="border">
        <div className="relative p-5">
        <h2 className="text-2xl font-extrabold text-gray-900 py-5">{sectionName}</h2>
          <AliceCarousel
            items={items}
            disableButtonsControls
            responsive={responsive}
            disableDotsControls
            onSlideChanged={syncActiveIndex}
            activeIndex={activeIndex}
          />
          {activeIndex !== items.length - 5 && 
            <Button
              variant="contained"
              onClick={slideNext}
              className="z-50 bg-white"
              sx={{
                position: "absolute",
                top: "8rem",
                right: "0rem",
                transform: "translateX(50%) rotate(90deg)",
                bgcolor: "white",
              }}
              aria-label="next"
            >
              <KeyboardArrowLeftIcon
                className=""
                sx={{ transform: "rotate(90deg)", color: "black" }}
              />
            </Button>
          }
          {activeIndex !== 0 && (
            <Button
              variant="contained"
              onClick={slidePrev}
              className="z-50 bg-white"
              sx={{
                position: "absolute",
                top: "8rem",
                left: "0em",
                transform: "translateX(-50%) rotate(90deg)",
                bgcolor: "white",
              }}
              aria-label="prev"
            >
              <KeyboardArrowLeftIcon
                className=""
                sx={{ transform: "rotate(-90deg)", color: "black" }}
              />
            </Button>
          )}
        </div>
      </div>
    );
  };

export default HomeSectionCarosel;
