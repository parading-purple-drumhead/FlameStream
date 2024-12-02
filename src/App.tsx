import "./App.css";
import TrackList from "./components/TrackList";
import Landing from "./components/Landing";
import OtherReleases from "./components/OtherReleases";
import PageLinks from "./components/PageLinks";

function App() {
  return (
    <div className="app">
      <Landing />
      <main
        className="min-h-screen px-60 pb-40 pt-20"
        style={{
          background: `url(https://storage.googleapis.com/monstercat/background-tile.webp) repeat `,
        }}
      >
        <section id="track-list" className="mb-20">
          <TrackList />
        </section>

        <section id="other-releases">
          <OtherReleases />
        </section>
      </main>

      <footer
        className="px-60 py-10"
        style={{
          background: `url(https://storage.googleapis.com/monstercat/background-tile.webp) repeat `,
        }}
      >
        <PageLinks />
        <div>
          <hr className="border-b border-b-gray-200" />
          <div className="flex justify-between py-5 text-gray-200">
            <div className="">
              <p>2024 &copy; FlameStream</p>
            </div>
            <div className="text-gray-200">
              <p>Made by Sudhanshu Basuroy</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
