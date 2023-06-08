import React from "react";
import DriverBg from "../../assets/dashboard/DriverBg.jpg";
import CarIcon from "../../assets/dashboard/CarIcon.svg";
import AvailableIcon from "../../assets/dashboard/AvailableIcon.svg";
import RidesIcon from "../../assets/dashboard/RidesIcon.svg";
import DriveridIcon from "../../assets/dashboard/DriveridIcon.svg";
import BookingIcon2 from "../../assets/dashboard/BookingIcon2.svg";
import TripIcon from "../../assets/dashboard/TripIcon.svg";
import { DriversTable } from "../Tables/DriversTable";

const Drivers = () => {
  return (
    <div className="driver-panel pt-8 px-8 h-[100vh] overflow-y-scroll">
      <div className="flex flex-col">
        <h3 className="text-3xl font-sans font-light">Drivers</h3>
        <div className="flex justify-between items-center">
          <div className="order-info flex gap-14">
            <div className="order-field flex gap-2 flex-col ">
              <img src={DriveridIcon} alt="car-field" className="h-6 w-fit" />
              <h2 className="font-semibold text-lg">Total Drivers</h2>
              <span className="text-xl text-slate-500">48</span>
            </div>
            <div className="order-field flex gap-2 flex-col ">
              <img src={BookingIcon2} alt="car-field" className="h-6 w-fit" />
              <h2 className="font-semibold text-lg">Total Bookings</h2>
              <span className="text-xl text-slate-500">25</span>
            </div>
            <div className="order-field flex gap-2 flex-col ">
              <img
                src={TripIcon}
                alt="car-field"
                className="h-6 w-fit text-blue-100"
              />
              <h2 className="font-semibold text-lg">Total Trips</h2>
              <span className="text-xl text-slate-500">200</span>
            </div>
            <div className="order-field flex gap-2 flex-col ">
              <img src={RidesIcon} alt="car-field" className="h-6 w-fit" />
              <h2 className="font-semibold text-lg">Bookings Per Driver</h2>
              <span className="text-xl text-slate-500">10</span>
            </div>
          </div>
          <img src={DriverBg} className="h-64" />
        </div>
      </div>
      <div className="drivers-section">
        <h3 className="text-3xl font-sans font-light">Manage Drivers</h3>
        <div className="drivers-table mt-6">
          <DriversTable />
        </div>
      </div>
    </div>
  );
};

export default Drivers;
