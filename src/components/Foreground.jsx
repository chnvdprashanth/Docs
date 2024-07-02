import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import { getDataFromLocalStorage } from "../utils/data";
import { IoMdAdd } from "react-icons/io";
import { v4 as uuidv4 } from "uuid";

const Foreground = () => {
  const ref = useRef(null);
  const [notes, setNotes] = useState([]);

  const handleCreateNote = () => {
    const newId = uuidv4();
    const newNote = {
      _id: `${newId}`,
      title: "Title here",
      desc: "Type here about notes...",
    };
    localStorage.setItem(newId, JSON.stringify(newNote));
    setNotes((prevNote) => [...prevNote, newNote]);
  };

  useEffect(() => {
    const storedData = getDataFromLocalStorage();
    setNotes(storedData);
  }, []);

  return (
    <>
      <div className="absolute z-10 right-6 top-6 p-3 rounded-md shadow-md text-2xl font-extrabold bg-teal-600 text-white">
        <IoMdAdd onClick={handleCreateNote} />
      </div>
      <div
        ref={ref}
        className="fixed overflow-y-scroll z-[3] top-0 left-0 p-3 w-full h-full flex gap-5 flex-wrap no-scrollbar"
      >
        {notes?.map((note, index) => (
          <Card
            reference={ref}
            note={note}
            id={note._id}
            key={index}
            setNotes={setNotes}
          />
        ))}
      </div>
    </>
  );
};

export default Foreground;
