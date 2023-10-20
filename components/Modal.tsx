"use client";
import { useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ isOpen, onClose }: ModalProps) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("Player");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/submitData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, role }),
      });

      if (response.ok) {
        console.log("User saved successfully");
      } else {
        console.error("Error saving user", response.statusText);
      }
    } catch (error) {
      console.error("Error saving user", error);
    }

    setName("");
    setRole("Player");
    setSubmitted(true);
  };

  const renderContent = () => {
    if (submitted) {
      return (
        <p className="text-gray-500 font-bold mb-4">
          Thank you, See you Game time!
        </p>
      );
    } else {
      return (
        <div className="flex flex-col gap-2">
          <p className="text-black text-sm font-medium">Enter your name:</p>
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
            <input
              type="text"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="w-full px-6 py-3 border border-gray-300 rounded-xl text-black text-sm"
            />
            <div className="flex items-center gap-4 text-black">
              <label>
                <input
                  type="radio"
                  name="role"
                  value="Player"
                  onChange={(e) => setRole(e.target.value)}
                  checked={role === "Player"}
                  className="mr-2"
                />
                Player
              </label>
              <label>
                <input
                  type="radio"
                  name="role"
                  value="Fan"
                  checked={role === "Fan"}
                  onChange={(e) => setRole(e.target.value)}
                  className="mr-2"
                />
                Fan
              </label>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded-xl text-sm w-full"
            >
              Submit
            </button>
          </form>
        </div>
      );
    }
  };

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center z-50 transition-opacity ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className="bg-white px-8 py-12 rounded-lg shadow-lg flex
      flex-col justify-center items-center"
      >
        <button className="text-gray-600 mb-4 text-5xl" onClick={onClose}>
          &times;
        </button>
        {renderContent()}
      </div>
    </div>
  );
};

export default Modal;
