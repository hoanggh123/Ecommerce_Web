import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Typography } from "@mui/material";

const steps = [
  "Đặt hàng",
  "Xác nhận đơn hàng",
  "Đã gửi",
  "Đang giao hàng",
  "Đã giao hàng",
];

export default function OrderTraker({ activeStep }) {
  return (
    <div className="w-full">
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel
              sx={{ color: "#9155FD", fontSize: "44px" }}
              className={``}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}
