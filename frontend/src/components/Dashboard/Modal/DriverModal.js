import React, { forwardRef } from "react";
import { Avatar } from "@mui/material";
import DriveridIcon from "../../../assets/dashboard/DriveridIcon.svg";
import BookingIcon2 from "../../../assets/dashboard/BookingIcon2.svg";
import TripIcon from "../../../assets/dashboard/TripIcon.svg";
import RidesIcon from "../../../assets/dashboard/RidesIcon.svg";
import DriverBg from "../../../assets/dashboard/DriverBg.jpg";

const DriverModal = forwardRef((props, ref) => {
  return (
    <div className="driver-details top-6 absolute left-1/2 -translate-x-1/2 rounded w-2/3 bg-white px-8 py-4 min-w-96 min-h-96">
      <div className="flex flex-col gap-8">
        <h3 className="text-2xl font-sans font-light">Driver Details</h3>

        <div className="flex flex-col items-center gap-4">
          <Avatar className="!w-32 !h-32" />
          <div className="flex justify-between items-center mt-4">
            <div className="order-info flex gap-14 text-center">
              <div className="order-field flex gap-2 flex-col ">
                <img
                  src={DriveridIcon}
                  alt="car-field"
                  className=" mx-auto  h-6 w-fit"
                />
                <h2 className="font-semibold text-lg">Total Drivers</h2>
                <span className="text-xl text-slate-500">48</span>
              </div>
              <div className="order-field flex gap-2 flex-col ">
                <img
                  src={BookingIcon2}
                  alt="car-field"
                  className=" mx-auto  h-6 w-fit"
                />
                <h2 className="font-semibold text-lg">Total Bookings</h2>
                <span className="text-xl text-slate-500">25</span>
              </div>
              <div className="order-field flex gap-2 flex-col ">
                <img
                  src={TripIcon}
                  alt="car-field"
                  className="h-6 w-fit text-blue-100 mx-auto"
                />
                <h2 className="font-semibold text-lg">Total Trips</h2>
                <span className="text-xl text-slate-500">200</span>
              </div>
              <div className="order-field flex gap-2 flex-col ">
                <img
                  src={RidesIcon}
                  alt="car-field"
                  className="h-6 mx-auto  w-fit"
                />
                <h2 className="font-semibold text-lg">Bookings Per Driver</h2>
                <span className="text-xl text-slate-500">10</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default DriverModal;
