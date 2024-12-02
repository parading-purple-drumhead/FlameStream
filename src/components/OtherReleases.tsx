import album_1 from "../assets/album_1.jpg";
import album_2 from "../assets/album_2.jpg";
import album_3 from "../assets/album_3.jpg";
import album_4 from "../assets/album_4.jpg";
import album_5 from "../assets/album_5.jpg";
import album_6 from "../assets/album_6.jpg";

interface Album {
  title: string;
  artist: string;
  cover: string;
}

const OtherReleases = () => {
  const albums: Album[] = [
    {
      title: "Album 1",
      artist: "Artist Name",
      cover: album_1,
    },
    {
      title: "Album 2",
      artist: "Artist Name",
      cover: album_2,
    },
    {
      title: "Album 3",
      artist: "Artist Name",
      cover: album_3,
    },
    {
      title: "Album 4",
      artist: "Artist Name",
      cover: album_4,
    },
    {
      title: "Album 5",
      artist: "Artist Name",
      cover: album_5,
    },
    {
      title: "Album 6",
      artist: "Artist Name",
      cover: album_6,
    },
  ];

  return (
    <div className="other-releases flex flex-col gap-10">
      <h1 className="section-title">Other Releases Like This</h1>
      <div className="album-list flex justify-between">
        {albums.map((album, index) => (
          <div
            key={index}
            className="album cursor-pointer transition duration-300 ease-out hover:scale-105"
          >
            <img src={album.cover} alt={album.title} className="mb-3 size-36" />
            <div className="album-info text-gray-200">
              <h3 className="text-xl font-bold uppercase">{album.title}</h3>
              <p className="text-xs">{album.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherReleases;
