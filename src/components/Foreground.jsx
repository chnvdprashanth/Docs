import React, { useRef } from "react";
import Card from "./Card";
import { getDataFromLocalStorage } from "../utils/data";

const Foreground = () => {
  const ref = useRef(null);
  const notes = getDataFromLocalStorage();
  return (
    <div
      ref={ref}
      className="fixed z-[3] top-0 left-0 p-3 w-full h-full flex gap-5 flex-wrap"
    >
        {
          notes.map((note)=> console.log(note))
        }
      {notes?.map((note, index) => (
        <Card reference={ref} note={note} index={index} key={index} />
      ))}
    </div>
  );
};

export default Foreground;
