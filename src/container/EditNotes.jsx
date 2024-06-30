import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditNotes = () => {
  const { index } = useParams()
  const key = localStorage.key(index)
  const note = JSON.parse(localStorage.getItem(key))
  const [noteTitle, setNoteTitle] = useState(note.title)
  const [noteDesc, setNoteDesc] = useState(note.desc)

  useEffect(() => {
    return () => {
      localStorage.setItem(`${key}`,JSON.stringify({
        title: noteTitle,
        desc: noteDesc
      }))
    }
  }, [noteTitle,noteDesc])
  

  return (
    <div className="fixed flex flex-col z-[10] w-full h-screen bg-zinc-800 text-white">
      <textarea
        className="min-w-[400px] overflow-hidden border-b-4 border-zinc-600 max-md:h-1/8  outline-none resize-none px-4 pt-6 bg-zinc-800
        text-2xl font-semibold mx-4 text-zinc-300"
        type="text"
        placeholder="Title here"
        onChange={(e)=> setNoteTitle(e.target.value)}
        value={noteTitle} 
      />
      <textarea
        className="w-auto h-7/8 m-4 text-lg no-scrollbar outline-none px-4 py-2 resize-none bg-zinc-800"
        type="text"
        placeholder="Type your notes here..."
        onChange={(e)=> setNoteDesc(e.target.value)}
        value = {noteDesc}
      />
    </div>
  );
};

export default EditNotes;
