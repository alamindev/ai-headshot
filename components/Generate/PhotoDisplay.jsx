// components/PhotoDisplay.js
const PhotoDisplay = ({ photos, onDelete }) => {
  return (
    <div className="flex flex-wrap gap-4">
      {photos.map((photo, index) => (
        <div key={photo.id} className="relative">
          <img
            src={photo.url}
            alt={`Uploaded ${index}`}
            className="w-[190px] h-[220px] rounded-xl object-cover"
          />
          <button
            onClick={() => onDelete(photo.id)}
            className="absolute size-6 flex justify-center items-center top-1  right-1 bg-red-500 text-white p-1 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="feather feather-x"
              viewBox="0 0 24 24"
            >
              <path d="M18 6 6 18M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
};

export default PhotoDisplay;
