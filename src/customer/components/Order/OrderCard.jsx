import { Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const OrderCard = () => {
  const navigate = useNavigate();

  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className="p-5 shadow-lg hover:shadow-2xl border">
      <Grid spacing={2} container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://shop.localbrand.vn/wp-content/uploads/2022/12/otis-1-300x400.jpg"
              alt=""
            />
            <div className="ml-5 ">
              <p className="mb-5">Áo thun local brand unisex Otis Club</p>
              <p className="opacity-50 text-sm font-semibold">Size: M</p>
              <p className="opacity-50 text-sm font-semibold">
                Color: Bottle Green
              </p>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <p>220.000</p>
        </Grid>
        <Grid item xs={4}>
          {true && (
            <p>
              <span>Dự kiến ​​giao hàng vào ngày 02/12</span>
            </p>
          )}
          {false && (
            <p>
              <span>Dự kiến ​​giao hàng vào ngày 02/12</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
