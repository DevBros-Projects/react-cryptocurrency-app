import React from "react";

const style = {
  wrapper: `bg-gradient w-full flex flex-wrap text-sm justify-between items-center p-8 mt-10`,
  heading: `mb-2 text-2xl font-bold tracking-tight text-white font-poppins`,
  preview: `mb-3 font-normal font-karla text-white`,
};

const News = () => {
  return (
    <>
      <div className={style.wrapper}>
          <h5 className={style.heading}>
            Noteworthy technology acquisitions 2021
          </h5>
        <p className={style.preview}>
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <a
          href="#"
          class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            aria-hidden="true"
            class="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </>
  );
};

export default News;
