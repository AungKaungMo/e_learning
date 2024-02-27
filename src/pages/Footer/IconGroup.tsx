import React from "react";

export const IconGroup: React.FC<{}> = () => {
  return (
    <div className="icon-group flex gap-3 mt-3">
      <div className="p-3 bg-white shadow-xl transition-all duration-150 hover:bg-blue-100 cursor-pointer rounded-xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.7em"
          height="1.7em"
          viewBox="0 0 24 24"
          className="text-blue-500"
        >
          <path
            fill="currentColor"
            d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
          ></path>
        </svg>
      </div>

      <div className="p-3 bg-white shadow-xl transition-all duration-150 hover:bg-red-100 cursor-pointer rounded-xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.7em"
          height="1.7em"
          viewBox="0 0 32 32"
          className="text-red-500"
        >
          <circle cx="22.406" cy="9.594" r="1.44" fill="currentColor"></circle>
          <path
            fill="currentColor"
            d="M16 9.838A6.162 6.162 0 1 0 22.162 16A6.162 6.162 0 0 0 16 9.838M16 20a4 4 0 1 1 4-4a4 4 0 0 1-4 4"
          ></path>
          <path
            fill="currentColor"
            d="M16 6.162c3.204 0 3.584.012 4.849.07a6.642 6.642 0 0 1 2.228.413a3.975 3.975 0 0 1 2.278 2.278a6.642 6.642 0 0 1 .413 2.228c.058 1.265.07 1.645.07 4.85s-.012 3.583-.07 4.848a6.642 6.642 0 0 1-.413 2.228a3.975 3.975 0 0 1-2.278 2.278a6.642 6.642 0 0 1-2.228.413c-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07a6.642 6.642 0 0 1-2.228-.413a3.975 3.975 0 0 1-2.278-2.278a6.642 6.642 0 0 1-.413-2.228c-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849a6.642 6.642 0 0 1 .413-2.228a3.975 3.975 0 0 1 2.278-2.278a6.642 6.642 0 0 1 2.228-.413c1.265-.058 1.645-.07 4.849-.07M16 4c-3.259 0-3.668.014-4.948.072a8.807 8.807 0 0 0-2.912.558a6.136 6.136 0 0 0-3.51 3.51a8.807 8.807 0 0 0-.558 2.913C4.014 12.333 4 12.74 4 16s.014 3.668.072 4.948a8.807 8.807 0 0 0 .558 2.912a6.136 6.136 0 0 0 3.51 3.51a8.807 8.807 0 0 0 2.913.558c1.28.058 1.688.072 4.947.072s3.668-.014 4.948-.072a8.807 8.807 0 0 0 2.913-.558a6.136 6.136 0 0 0 3.51-3.51a8.807 8.807 0 0 0 .557-2.913C27.986 19.667 28 19.26 28 16s-.014-3.668-.072-4.948a8.807 8.807 0 0 0-.558-2.912a6.136 6.136 0 0 0-3.51-3.51a8.807 8.807 0 0 0-2.913-.557C19.667 4.013 19.26 4 16 4"
          ></path>
        </svg>
      </div>

      <div className="p-3 bg-white shadow-xl transition-all duration-150 hover:bg-blue-100 cursor-pointer rounded-xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.7em"
          height="1.7em"
          viewBox="0 0 32 32"
          className="text-blue-500"
        >
          <path
            fill="currentColor"
            d="M11.548 25.752c9.056 0 14.01-7.503 14.01-14.01c0-.213 0-.425-.015-.636A10.017 10.017 0 0 0 28 8.556a9.827 9.827 0 0 1-2.828.776a4.942 4.942 0 0 0 2.164-2.724a9.866 9.866 0 0 1-3.126 1.195a4.929 4.929 0 0 0-8.392 4.491A13.98 13.98 0 0 1 5.67 7.15a4.928 4.928 0 0 0 1.525 6.573a4.887 4.887 0 0 1-2.235-.617v.063a4.926 4.926 0 0 0 3.95 4.827a4.917 4.917 0 0 1-2.223.084a4.93 4.93 0 0 0 4.6 3.42A9.88 9.88 0 0 1 4 23.54a13.94 13.94 0 0 0 7.547 2.209"
          ></path>
        </svg>
      </div>

      <div className="p-3 bg-white shadow-xl transition-all duration-150 hover:bg-blue-100 cursor-pointer rounded-xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.7em"
          height="1.7em"
          viewBox="0 0 32 32"
          className="text-blue-500"
        >
          <path
            fill="currentColor"
            d="M26.2 4H5.8C4.8 4 4 4.8 4 5.7v20.5c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V5.7c0-.9-.8-1.7-1.8-1.7M11.1 24.4H7.6V13h3.5zm-1.7-13c-1.1 0-2.1-.9-2.1-2.1c0-1.2.9-2.1 2.1-2.1c1.1 0 2.1.9 2.1 2.1s-1 2.1-2.1 2.1m15.1 12.9H21v-5.6c0-1.3 0-3.1-1.9-3.1S17 17.1 17 18.5v5.7h-3.5V13h3.3v1.5h.1c.5-.9 1.7-1.9 3.4-1.9c3.6 0 4.3 2.4 4.3 5.5v6.2z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default IconGroup;
