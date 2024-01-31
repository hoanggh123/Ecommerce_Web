import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTraker from "./OrderTraker";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const OrderDetails = () => {
  return (
    <div className="px:5 lg:px-20">
      <div>
        <p className="font-bold text-x1 py-7">Địa chỉ giao hàng</p>
        <AddressCard />
      </div>
      <div className="py-20">
        <OrderTraker activeStep={3} />
      </div>
      <Grid className="space-y-5" container>
        {[1, 1, 1].map((item) => (
          <Grid
            item
            container
            className="shadow-x1 rounded-md p-5 border"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              <div className="flex  items-center space-x-4">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src="https://shop.localbrand.vn/wp-content/uploads/2022/12/otis-1-300x400.jpg"
                  alt=""
                />
                <div className="space-y-2 ml-5">
                  <p className="">Áo thun local brand unisex Otis Club</p>
                  <p className="opacity-50 text-xs font-semibold space-x-5">
                    <span>Color: Bottle green</span>
                    <span>Size: M</span>
                  </p>
                  <p>Seller: Hoang Ne</p>
                  <p>220.000</p>
                </div>
              </div>
            </Grid>
            <Grid item>
              <Box sx={{ color: deepPurple[500] }}>
                <StarBorderIcon
                  sx={{ fontSize: "2rem" }}
                  className="px-2 text-2xl"
                />
                <span>Rate & Review</span>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OrderDetails;
