"use client";

import { useState } from "react";

const PhotoUpload = ({ onUploadComplete, uploadedCount, maxPhotos }) => {
  const [dragging, setDragging] = useState(false);

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);

    const files = Array.from(e.dataTransfer.files);
    processFiles(files);
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    processFiles(files);
  };

  const processFiles = (files) => {
    // Check for remaining slots
    const remainingSlots = maxPhotos - uploadedCount;

    if (remainingSlots <= 0) {
      alert("Maximum upload limit reached!");
      return;
    }

    const selectedFiles = files.slice(0, remainingSlots); // Limit to remaining slots

    const uploadedPhotos = selectedFiles.map((file) => ({
      id: Date.now() + Math.random(),
      url: URL.createObjectURL(file),
      name: file.name,
    }));

    if (onUploadComplete) {
      onUploadComplete(uploadedPhotos);
    }
  };

  return (
    <div
      onDragEnter={handleDragEnter}
      onDragOver={(e) => e.preventDefault()}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`border-2 ${
        dragging ? "border-blue-500" : "border-gray-300"
      } border-dashed rounded-lg p-6 text-center bg-white`}
    >
      {/* Upload Button */}
      <label className="inline-block cursor-pointer">
        <div
          className={`inline-flex items-center justify-center px-4 py-2 rounded-lg ${
            uploadedCount < maxPhotos
              ? "bg-gradient-to-r from-primary to-primary text-white"
              : "bg-gray-400 text-gray-200 cursor-not-allowed"
          } font-semibold shadow hover:opacity-90 transition duration-200`}
        >
          {uploadedCount < maxPhotos
            ? "⬆ Upload files"
            : "Upload Limit Reached"}
        </div>
        <input
          type="file"
          multiple
          disabled={uploadedCount >= maxPhotos}
          onChange={handleFileChange}
          className="hidden"
          accept="image/png, image/jpeg, image/heic"
        />
      </label>

      {/* Drag-and-Drop Instruction */}
      <p className="text-gray-500 mt-3">Click to upload or drag and drop</p>
      <p className="text-gray-400 text-sm">
        PNG, JPG, HEIC up to 120MB | {uploadedCount}/{maxPhotos} uploaded
      </p>
    </div>
  );
};

export default PhotoUpload;
