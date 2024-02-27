import React from "react";
import Logo from "@/assets/images/logo.png";
import IconGroup from "./IconGroup";
import useMediaQuery from "@/hook/useMediaQuery";

export const Footer: React.FC<{}> = () => {
  const isMobileScreen = useMediaQuery("(max-width:500px)");
  return (
    <div>
      <div
        className={`mt-10 w-11/12 mx-auto grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ${
          isMobileScreen && "grid-cols-1 ms-10"
        }`}
      >
        <div>
          <div className="w-40 h-20">
            <img src={Logo} className="w-full h-full" />
          </div>
          <p className="opacity-70">
            Eduport education theme, built specifically for the education
            centers which is dedicated to teaching and involve learners.
          </p>
          <IconGroup />
        </div>
        <div className="pt-7">
          <h1 className="text-xl mb-4 font-bold">Company</h1>
          <div className="opacity-70">
            <p className="mb-3">About Us</p>
            <p className="mb-3">Contact Us</p>
            <p className="mb-3">News and Blogs</p>
            <p>Career</p>
          </div>
        </div>

        <div className="pt-7">
          <h1 className="text-xl mb-4 font-bold">Community</h1>
          <div className="opacity-70">
            <p className="mb-3">Documentation</p>
            <p className="mb-3">FAQ</p>
            <p className="mb-3">Forums</p>
            <p>Sitemap</p>
          </div>
        </div>

        <div className="pt-7">
          <h1 className="text-xl mb-4 font-bold">Teaching</h1>
          <div className="opacity-70">
            <p className="mb-3">Become an instructor</p>
            <p className="mb-3">How to guide</p>
            <p className="mb-3">Terms & Conditions</p>
            <p>Sitemap</p>
          </div>
        </div>

        <div className="pt-7">
          <h1 className="text-xl mb-4 font-bold">Contact</h1>
          <div className="opacity-70">
            <p className="mb-3">
              Toll free:+1234 568 963
              <br />
              (9:AM to 8:PM IST)
            </p>
            <p className="mb-3">Email:example@gmail.com</p>
          </div>
        </div>
      </div>

      <hr className="my-6 w-full h-[2px] bg-gray-100" />
      <div className="opacity-70 pb-5 w-11/12 mx-auto">
        Copyrights ©2023 By Acodemy
      </div>
    </div>
  );
};

export default Footer;
