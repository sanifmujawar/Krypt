import React from "react";
import logo from "../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
        <img src={logo} alt="logo" className="w-32" />
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          Market
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          Exchange
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          Tutorials
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          Wallets
        </p>
      </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center">
        Get in touch with me for any inquiries.
      </p>
      <p className="text-white text-sm text-center font-medium mt-2">
        Contact:{" "}
        <a
          href="https://www.sanifmujawar.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faGlobe}
            size="lg"
            style={{ marginRight: "4px" }}
          />
          {/* Globe icon */}
          www.sanifmujawar.com 
          <FontAwesomeIcon
            icon={faGlobe}
            size="lg"
            style={{ marginLeft: "4px" }}
          />
          {/* Globe icon */}
        </a>
      </p>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-left text-xs">
        &copy; {new Date().getFullYear()} Sanif Mujawar. All rights reserved.
      </p>
      <div className="text-white text-right text-xs flex items-center">
        <a
          href="https://github.com/sanifmujawar"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2"
        >
          <FontAwesomeIcon
            icon={faGithub}
            size="lg"
            style={{ marginRight: "1px" }}
          />{" "}
          {/* Adjust margin-right */}
          GitHub
        </a>
        <a
          href="https://youtu.be/FtH7D-MNebg?si=vMkYLDO3qr_8lUnO"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2"
        >
          <FontAwesomeIcon
            icon={faYoutube}
            size="lg"
            style={{ marginRight: "1px" }}
          />{" "}
          {/* Adjust margin-right */}
          YouTube
        </a>
        <a
          href="https://www.linkedin.com/in/sanif-mujawar/"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            size="lg"
            style={{ marginRight: "1px" }}
          />{" "}
          {/* Adjust margin-right */}
          LinkedIn
        </a>
      </div>
    </div>
  </div>
);

export default Footer;
