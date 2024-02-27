import { SelectedPage } from "@/shared/types/types";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

type propsType = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

export const Link: React.FC<propsType> = ({
  page,
  selectedPage,
  setSelectedPage,
}: propsType) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  return (
    <li className=" select-none">
      <AnchorLink
        href={`#${lowerCasePage}`}
        className={
          selectedPage == lowerCasePage
            ? " text-blue-500"
            : "transition-all duration-100 hover:text-blue-400"
        }
        onClick={() => setSelectedPage(lowerCasePage)}
      >
        {page}
      </AnchorLink>
    </li>
  );
};

export default Link;
