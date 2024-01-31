import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";

const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md mb-5">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://down-vn.img.susercontent.com/file/sg-11134201-22100-w6ffnhlma4iv92"
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">Áo thun local brand unisex Otis Club</p>
          <p className="opacity-70">Size: L, While</p>
          <p className="opacity-70 mt-2">Seller: Crishtaliyo 2fashion</p>
          <div className="flex space-x-5 items-center text-gray-900 mt-6">
            <p className="font-semibold">$199</p>
            <p className="opacity-50 line-through ">$211</p>
            <p className="text-green-600 font-semibold"> 5% off</p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 first-letter:pt-4">
        <div>
          <IconButton>
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">3</span>
          <IconButton sx={{ color: "RGB(145 85 253)" }}>
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div>
          <Button sx={{ color: "RGB(145 85 253)" }}>Remove</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
