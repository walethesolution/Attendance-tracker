"use client";
import Link from "next/link";
import { useState } from "react";
import Modal from "./Modal";

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen relative">
      {/* Background image */}
      <div className="absolute inset-0 w-full h-full home-bg" />

      {/* Overlay */}
      <div className="absolute inset-0 w-full h-full bg-black opacity-80" />

      <div className=" relative flex flex-col justify-center items-center text-white rounded-lg w-[90%] gap-6 p-6">
        <div>
          <h1 className="text-6xl text-center font-bold font-custom bg-gray-800 bg-opacity-20 rounded-md p-6">
            Game <br className="hidden" />{" "}
            <span className="text-4xl">Attendance Tracker </span>
          </h1>
        </div>
        <div className="flex flex-col gap-4 bg-gray-800 p-5 rounded-md bg-opacity-60 shadow-lg text-lg lg:text-xl">
          <h3>Are you coming to the game?</h3>
          <h3>Theme: Saturday Practice</h3>
          <h3>
            Time: <span className="text-4xl font-custom">7</span> AM
          </h3>
          <h3>Location: Hamilton Metz Field</h3>
        </div>
        <div className="flex flex-col gap-4 w-full lg:w-1/3">
          <button
            className="px-4 py-4 bg-white text-[#373737] rounded-lg font-bold"
            onClick={handleModalToggle}
          >
            Yes
          </button>
          <Modal isOpen={isModalOpen} onClose={handleModalToggle} />
          <Link
            href="/livecount"
            className="px-4 py-4 text-center bg-[#193E1B] text-white rounded-lg font-bold"
          >
            View live count
          </Link>
        </div>
        <button className="text-gray-300 shadow-md font-normal text-sm text-center">
          Leave a feedback
        </button>
        <p className="text-gray-300 mt-8 text-sm">
          `&copy;` African Stars. 2023
        </p>
      </div>
    </div>
  );
};

export default HomePage;
