import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContainerComponent from "./components/ContainerComponent";
import About from "./components/About";
import Terms from "./components/Terms";
import ViewMusicData from "./components/ViewMusicData";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ContainerComponent />} />
          <Route path="*" element={<ContainerComponent />} />
          <Route path="/view-music-info/:mbid" element={<ViewMusicData />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
