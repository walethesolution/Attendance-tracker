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
    <div className="flex flex-col p-16 gap-6">
      <h1 className="text-3xl">Gameday Attendance Tracker</h1>
      <div className="flex flex-col gap-6 mt-10">
        <h2> Are you coming to the game?</h2>
        <h3>Theme: Saturday Practice</h3>
        <h3>Time: 7AM</h3>
        <h3>Location: Albany & East New York</h3>

        <button
          className="px-4 py-4 bg-white text-black rounded-lg"
          onClick={handleModalToggle}
        >
          YES
        </button>
        <Modal isOpen={isModalOpen} onClose={handleModalToggle} />
        <Link
          href="/livecount"
          className="px-4 py-4 text-center bg-[#193E1B] text-white rounded-lg"
        >
          View Livecount
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
