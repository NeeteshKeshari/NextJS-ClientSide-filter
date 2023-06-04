import React from "react";
import { MdSearchOff, MdFlight, MdFlightTakeoff, MdFlightLand, MdAirplaneTicket, MdFlightClass, MdSupervisorAccount, MdAirlineSeatReclineNormal, MdCalendarMonth, MdOutlineCancel } from "react-icons/md";
import { RiUserStarFill, RiUserFill, RiUserHeartFill, RiUserFollowFill, RiUserSearchFill, RiArrowLeftRightLine } from "react-icons/ri";

const icons = {
  MdSearchOff, MdFlight, MdFlightTakeoff, MdAirplaneTicket, MdFlightLand, MdFlightClass, MdSupervisorAccount, MdAirlineSeatReclineNormal, MdCalendarMonth, MdOutlineCancel, RiUserStarFill, RiUserFill, RiUserHeartFill, RiUserFollowFill, RiUserSearchFill, RiArrowLeftRightLine,
};

const Icon = ({ name, className }) => {
  const IconComponent = icons[name];
  if (!IconComponent) return null;
  return <IconComponent className={className} />;
};


export default Icon;