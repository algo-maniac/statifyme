"use client";

import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <footer className="gradient-light mt-auto text-tertiary flex flex-col bg-primary">
      {/* <hr className="bg-tertiary h-[2px] w-[100%] mt-20" />
      <br /> */}
      <div className="flex flex-col  justify-around items-center p-4 ">
        <div className="text-2xl font-bold  p-2">Follow Us</div>
        <ul className="flex flex-row  p-2">
          <li className="p-2">
            <TwitterIcon />
          </li>
          <li className="p-2">
            <InstagramIcon />
          </li>
          <li className="p-2">
            <FacebookIcon />
          </li>
          <li className="p-2">
            <LinkedInIcon />
          </li>
        </ul>
      </div>
      <div className="flex flex-row justify-around">
        <div className=" w-[33%] flex flex-col items-center justify-center p-4 ">
          <h1 className="text-xl font-bold p-2 bor">Company</h1>
          <div>About Us</div>
          <div>Our Services</div>
          <div>Privacy Policy</div>
          <div>Affiliate Program</div>
        </div>
        <div className=" w-[33%] flex flex-col items-center justify-center p-4 ">
          <h1 className="text-xl font-bold p-2 bor">Get Help</h1>
          <div>FAQ</div>
          <div>Shipping</div>
          <div>Returns</div>
          <div>Order Status</div>
          <div>Payment Options</div>
        </div>
        <div className=" w-[33%] flex flex-col items-center justify-center p-4 ">
          <h1 className="text-xl font-bold p-2 bor">Online Shop</h1>
          <div>Watch</div>
          <div>Bag</div>
          <div>Shoes</div>
          <div>Dress</div>
        </div>
      </div>
      <div className="text-center font-medium">Copyright @billpal.com</div>
    </footer>
  );
}

export default Footer;
