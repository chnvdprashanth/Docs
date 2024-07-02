import React, { useState } from "react";
import { FaFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { getDataFromLocalStorage } from "../utils/data";

const Card = ({ reference, note, id, setNotes }) => {
  const [isDownloadActive, setIsDownloadActive] = useState(true);
  const [isDownloadTagVisible, setIsDownloadTagVisible] = useState(false);
  const byteSize = (str) => new Blob([str]).size;
  const handleDownload = () => {
    if (!isDownloadActive) {
      setIsDownloadActive(true);
      setIsDownloadTagVisible(false);
    } else {
      setIsDownloadActive(false);
      setIsDownloadTagVisible(true);
    }
  };

  const handleDownloadFile = () => {
    const note_blob = new Blob([note.desc], { type: "text/plain" });
    const link = document.createElement("a");

    link.href = URL.createObjectURL(note_blob);
    link.download = `${note.title}.txt`;

    link.click();

    URL.revokeObjectURL(link.href);
  };

  const handleDeleteNote = (e) => {
    localStorage.removeItem(document.getElementById(id).id);
    setNotes(getDataFromLocalStorage());
  };

  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.15 }}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
      className="relative w-52 h-64 rounded-[40px] bg-zinc-900/90 text-white p-5 overflow-hidden font-semibold"
    >
      <div className="flex justify-between items-center">
        <FaFileAlt />
        <div className="flex items-center gap-3 text-[20px]">
          <MdDeleteOutline
            className="text-[21px]"
            onClick={handleDeleteNote}
            id={id}
          />
          <Link to={`/edit/${id}`}>
            <FaRegEdit />
          </Link>
        </div>
      </div>
      <div className="w-full h-[120px] mt-2  overflow-hidden ...">
        <h3 className="underline mb-2 capitalize">{`${note.title}`}</h3>
        <p className="text-sm leading-snug overflow-hidden text-ellipsis display-[-webkit-box] -webkit-box-orient[vertical] -webkit-line-clamp-2">{`${note.desc}`}</p>
      </div>
      <div className="footer absolute w-full bottom-0 left-0">
        <div className="flex justify-between items-center py-4 px-5">
          <h5>{`
                ${
                  byteSize(note.desc) / (1024 * 1024) < 1
                    ? `${(byteSize(note.desc) / 1024).toFixed(3)} KB`
                    : `${(byteSize(note.desc) / (1024 * 1024)).toFixed(3)} Mb`
                }
            `}</h5>
          {isDownloadActive ? (
            <span onClick={handleDownload}>
              <LuDownload />
            </span>
          ) : (
            <span onClick={handleDownload}>
              <IoClose />
            </span>
          )}
        </div>
        {isDownloadTagVisible ? (
          <div className="tag w-full px-5 py-3 bg-green-500 flex items-center justify-center">
            <h3
              className="text-base font-semibold cursor-default"
              onClick={handleDownloadFile}
            >
              Download Now.
            </h3>
          </div>
        ) : null}
      </div>
    </motion.div>
  );
};

export default Card;
