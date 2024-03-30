import React, { useState } from "react";
import Logo from "@/assets/images/logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types/types";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import useMediaQuery from "@/hook/useMediaQuery";
import { useTheme } from "@/components/theme-provider";

type propsType = {
  selectedPage: SelectedPage;
  isTop: boolean;
  setSelectedPage: (value: SelectedPage) => void;
};

export const Navbar: React.FC<propsType> = ({
  selectedPage,
  isTop,
  setSelectedPage,
}: propsType) => {
  const isResponsiveMd = useMediaQuery("(max-width: 768px)");
  const [isOpen, setIsOpen] = useState(true);
  const [isDark, setIsDark] = useState<boolean>(false);
  const menus: string[] = [
    "Home",
    "About",
    "Courses",
    "Project",
    "Reviews",
    // "Contact Us",
  ];
  const { setTheme, theme } = useTheme();
  const changeLightTheme = () => {
    setIsDark(!isDark);
    setTheme("light");
  };

  const changeDarkTheme = () => {
    setIsDark(!isDark);
    setTheme("dark");
  };

  return (
    <nav>
      <div
        className={` fixed  w-full ${
          !isTop ? " bg-background z-40 shadow-xl " : ""
        }`}
      >
        <div className="flex justify-between items-center w-11/12 mx-auto">
          <div className="w-40 h-20">
            <img src={Logo} className="w-full h-full" alt="logo" />
          </div>
          <div className="hidden md:block">
            <ul className="flex gap-8 font-heebo">
              {menus.map((menu) => (
                <Link
                  key={menu}
                  page={menu}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              ))}
            </ul>
          </div>
          <div className="flex gap-8">
            <button className="pt-1">
              {theme == "dark" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 transition duration-150 hover:text-blue-400"
                  onClick={changeLightTheme}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 transition duration-150 hover:text-blue-400"
                  onClick={changeDarkTheme}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                  />
                </svg>
              )}
            </button>

            {isResponsiveMd && (
              <nav className="pt-1">
                <div className="pt-2">
                  <Drawer direction="right">
                    <DrawerTrigger>
                      <svg
                        onClick={() => setIsOpen(!isOpen)}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-7 h-7 cursor-pointer"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                      </svg>
                    </DrawerTrigger>
                    <DrawerContent className="bg-white">
                      <ul className="flex gap-9 font-heebo flex-col mt-10 text-2xl items-center">
                        {menus.map((menu) => (
                          <Link
                            key={menu}
                            page={menu}
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                          />
                        ))}
                      </ul>
                    </DrawerContent>
                  </Drawer>
                </div>
              </nav>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
