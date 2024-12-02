interface Track {
  title: string;
  artist: string;
  duration: number;
}

const TrackList = () => {
  const trackList: Track[] = [
    {
      title: "Track 1",
      artist: "Artist Name",
      duration: 184,
    },
    {
      title: "Track 2",
      artist: "Artist Name",
      duration: 217,
    },
    {
      title: "Track 3",
      artist: "Artist Name",
      duration: 163,
    },
    {
      title: "Track 4",
      artist: "Artist Name",
      duration: 200,
    },
    {
      title: "Track 5",
      artist: "Artist Name",
      duration: 190,
    },
    {
      title: "Track 6",
      artist: "Artist Name",
      duration: 210,
    },
    {
      title: "Track 7",
      artist: "Artist Name",
      duration: 174,
    },
    {
      title: "Track 8",
      artist: "Artist Name",
      duration: 190,
    },
    {
      title: "Track 9",
      artist: "Artist Name",
      duration: 200,
    },
    {
      title: "Track 10",
      artist: "Artist Name",
      duration: 180,
    },
  ];

  const secondsToMinutes = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="track-list">
      <h1 className="section-title">Track List</h1>
      <div className="tracks my-10">
        {trackList.map((track, index) => (
          <div key={index} className="track">
            <span className="track-number col-span-1">{index + 1}</span>
            <span className="play-button col-span-1">
              {/* Play icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-8 fill-gray-100"
                viewBox="0 0 24 24"
              >
                <path d="M7 6v12l10-6z"></path>
              </svg>
            </span>
            <p className="track-name-and-artist col-span-8 flex flex-col">
              <span className="track-name text-xl font-bold">
                {track.title}
              </span>
              <span className="track-artist text-sm font-semibold">
                {track.artist}
              </span>
            </p>
            <span className="track-duration col-span-1">
              {secondsToMinutes(track.duration)}
            </span>
            <span className="share-button col-span-1">
              {/* Share icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-6 fill-gray-100"
                viewBox="0 0 24 24"
              >
                <path d="M5.5 15a3.51 3.51 0 0 0 2.36-.93l6.26 3.58a3.06 3.06 0 0 0-.12.85 3.53 3.53 0 1 0 1.14-2.57l-6.26-3.58a2.74 2.74 0 0 0 .12-.76l6.15-3.52A3.49 3.49 0 1 0 14 5.5a3.35 3.35 0 0 0 .12.85L8.43 9.6A3.5 3.5 0 1 0 5.5 15zm12 2a1.5 1.5 0 1 1-1.5 1.5 1.5 1.5 0 0 1 1.5-1.5zm0-13A1.5 1.5 0 1 1 16 5.5 1.5 1.5 0 0 1 17.5 4zm-12 6A1.5 1.5 0 1 1 4 11.5 1.5 1.5 0 0 1 5.5 10z"></path>
              </svg>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrackList;
