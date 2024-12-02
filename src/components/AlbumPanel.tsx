import albumCover from "../assets/album_cover.jpg";

const AlbumPanel = () => {
  return (
    <div className="album-panel mt-20 flex items-center gap-20">
      <div className="album-art flex items-end">
        <span
          style={{ writingMode: "vertical-rl" }}
          className="mr-1 rotate-180 text-xl italic"
        >
          <span className="font-semibold text-teal-500">Released - </span>
          <span className="text-gray-200">November 29, 2024</span>
        </span>
        <img src={albumCover} className="size-96" alt="" />
      </div>
      <div className="album-info flex flex-col gap-20">
        <div className="album-details font-bold uppercase">
          <h1 className="mb-5 text-6xl text-gray-200">Album Title</h1>
          <h2 className="text-4xl text-teal-400">Artist Name</h2>
        </div>
        <div className="album-options flex gap-2">
          <button className="album-option border-teal-500 bg-teal-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-6 fill-gray-100"
              viewBox="0 0 24 24"
            >
              <path d="M7 6v12l10-6z"></path>
            </svg>
            Listen Now
          </button>
          <button className="album-option border-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-6 fill-gray-100"
              viewBox="0 0 24 24"
            >
              <path d="M5.5 15a3.51 3.51 0 0 0 2.36-.93l6.26 3.58a3.06 3.06 0 0 0-.12.85 3.53 3.53 0 1 0 1.14-2.57l-6.26-3.58a2.74 2.74 0 0 0 .12-.76l6.15-3.52A3.49 3.49 0 1 0 14 5.5a3.35 3.35 0 0 0 .12.85L8.43 9.6A3.5 3.5 0 1 0 5.5 15zm12 2a1.5 1.5 0 1 1-1.5 1.5 1.5 1.5 0 0 1 1.5-1.5zm0-13A1.5 1.5 0 1 1 16 5.5 1.5 1.5 0 0 1 17.5 4zm-12 6A1.5 1.5 0 1 1 4 11.5 1.5 1.5 0 0 1 5.5 10z"></path>
            </svg>
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlbumPanel;
