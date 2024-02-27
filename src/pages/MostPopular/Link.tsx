import { PopularCourseTypes } from "@/shared/types/types";
import React from "react";

type propsType = {
  compo: string;
  selectedCompo: PopularCourseTypes;
  setSelectedCompo: (value: PopularCourseTypes) => void;
};

export const Link: React.FC<propsType> = ({
  compo,
  selectedCompo,
  setSelectedCompo,
}: propsType) => {
  const lowerCasePage = compo
    .toLowerCase()
    .replace(/ /g, "") as PopularCourseTypes;
  return (
    <div
      className={`cursor-pointer rounded-[5px] p-3  ${
        selectedCompo == lowerCasePage
          ? " bg-blue-500 text-white  "
          : " text-blue-500 transition-all duration-150 hover:opacity-70"
      }`}
      onClick={() => setSelectedCompo(lowerCasePage)}
    >
      {compo}
    </div>
  );
};

export default Link;
