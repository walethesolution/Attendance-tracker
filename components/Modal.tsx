"use client";
import { useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ isOpen, onClose }: ModalProps) => {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("form has been submitted", name);
    setName("");
    setSubmitted(true);

    onClose();
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
        {submitted ? (
          <p className="text-blue-500 font-bold mb-4">
            Thank you, See you Game time!
          </p>
        ) : (
          <div className="flex flex-col gap-2">
            <p className="text-black text-sm font-medium ">Enter your name:</p>
            <form onSubmit={handleSubmit} className="w-full">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full px-6 py-3 mb-4 border border-gray-300 rounded-xl text-black text-sm"
              />
            </form>
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded-xl text-sm w-full"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
