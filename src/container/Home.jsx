import React from "react";
import Background from "../components/Background";
import Foreground from "../components/Foreground";

const Home = () => {
  return (
    <div className="relative w-full h-screen bg-zinc-800">
      <Background />
      <Foreground />
      {/* <Routes>
        <Route path="/edit" element={<EditNotes />} />
      </Routes> */}
    </div>
  );
};

export default Home;
