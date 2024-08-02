import { ButtonDataType } from "@/_types";
import React from "react";

const Btn: React.FC<ButtonDataType> = ({ name, styles }) => {
  return <button className={`${styles} outline-none border-none px-4 py-3 tracking-wider`}>{name}</button>;
};

export default Btn;
