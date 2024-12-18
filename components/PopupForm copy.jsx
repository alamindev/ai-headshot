"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
const PopupForm = ({ isOpen, onClose, storageData = true }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({}); // To store validation errors
  const router = useRouter();
  const validateInputs = () => {
    const newErrors = {};

    // Username validation
    if (!username.trim()) {
      newErrors.username = "Username is required.";
    }

    // Email validation (simple regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    return newErrors;
  };

  const handleSave = () => {
    const newErrors = validateInputs();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Save data to localStorage
      localStorage.setItem("userData", JSON.stringify({ username, email }));
      router.push("/generate");
      onClose(); // Close the modal
    }
  };

  if (!isOpen) return null; // Don't render the modal if it's closed

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex z-[99] justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[560px]">
        <h2 className="text-2xl text-center font-semibold mb-8">
          Enter Your Details
        </h2>

        {/* Buttons */}
        <div className="flex justify-end space-x-2 pt-3">
          {storageData && (
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
            >
              Cancel
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopupForm;
