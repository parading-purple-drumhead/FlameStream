// import AlbumPanel from "../components/AlbumPanel";
// import Navbar from "../components/Navbar";
// import Sidenav from "../components/Sidenav";

// const Landing = () => {
//   return (
//     <div className="landing min-h-screen">
//       <header className="sticky top-0 z-10">
//         <Navbar />
//         <div className="fixed right-20 z-20">
//           <Sidenav />
//         </div>
//       </header>

//       <div className="mx-40">
//         <AlbumPanel />
//       </div>
//     </div>
//   );
// };

import { useRef, useEffect, useState } from "react";
import AlbumPanel from "../components/AlbumPanel";
import Navbar from "../components/Navbar";
import Sidenav from "../components/Sidenav";

const Landing = () => {
  const navbarRef = useRef<HTMLDivElement>(null);
  const [navbarHeight, setNavbarHeight] = useState(0);

  // Calculate the Navbar's height dynamically
  useEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }
  }, []);

  return (
    <div className="landing min-h-screen">
      {/* Navbar fixed at the top */}
      <header ref={navbarRef} className="fixed left-0 top-0 z-20 w-full">
        <Navbar />
      </header>

      {/* Sidenav fixed below the Navbar */}
      <div className="fixed right-20 z-20" style={{ top: `${navbarHeight}px` }}>
        <Sidenav />
      </div>

      {/* Main content */}
      <div style={{ paddingTop: `${navbarHeight}px` }} className="mx-60">
        <AlbumPanel />
      </div>
    </div>
  );
};

export default Landing;
