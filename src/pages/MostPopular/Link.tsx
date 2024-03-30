import { PopularCourseType } from "@/shared/types/types";
import React from "react";

type propsType = {
  compo: PopularCourseType;
  selectedCompo: PopularCourseType | undefined;
  setSelectedCompo: (value: PopularCourseType) => void;
};

export const Link: React.FC<propsType> = ({
  compo,
  selectedCompo,
  setSelectedCompo,
}: propsType) => {
  if (!selectedCompo) return null;
  return (
    <div
      className={`cursor-pointer rounded-[5px] p-3 min-w-28 text-center  ${
        selectedCompo?.name == compo?.name
          ? " bg-blue-500 text-white  "
          : " text-blue-500 transition-all duration-150 hover:opacity-70"
      }`}
      onClick={() => setSelectedCompo(compo)}
    >
      {compo.name}
    </div>
  );
};

export default Link;
