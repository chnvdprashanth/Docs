import React, { useState } from "react";
import { FaFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Card = ({ reference, note, index }) => {
  const [downloadState, setdownloadState] = useState(true);
  const [downloadTagState, setdownloadTagState] = useState(false);
  const byteSize = (str) => new Blob([str]).size;
  const handleDownload = () => {
    if (!downloadState) {
      setdownloadState(true);
      setdownloadTagState(false);
    } else {
      setdownloadState(false);
      setdownloadTagState(true);
    }
  };

  const handleDownloadFile = () => {
    const note_blob = new Blob([note.desc],{ type : 'text/plain' })
    console.log(note_blob)
    const link = document.createElement('a')

    link.href = URL.createObjectURL(note_blob)
    console.log()
    link.download = `${note.title}.txt`

    link.click()

    URL.revokeObjectURL(link.href)
  }

  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.15 }}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
      className="relative w-52 h-64 rounded-[40px] bg-zinc-900/90 text-white p-5 overflow-hidden font-semibold"
    >
      <Link to={`/edit/${index}`}>
        <FaFileAlt />
      </Link>
      <div className="w-full h-24 mt-2 text-ellipsis overflow-hidden ...">
        <p className="text-sm leading-snug">{`${note.desc}`}</p>
      </div>
      <div className="footer absolute w-full bottom-0 left-0">
        <div className="flex justify-between items-center py-4 px-5">
          <h5>{`
                ${ (byteSize(note.desc) / (1024 * 1024)).toFixed(3) } mb
            `}</h5>
          {downloadState ? (
            <span onClick={handleDownload}>
              <LuDownload />
            </span>
          ) : (
            <span onClick={handleDownload}>
              <IoClose />
            </span>
          )}
        </div>
        {downloadTagState ? (
          <div className="tag w-full px-5 py-3 bg-green-500 flex items-center justify-center">
            <h3 className="text-base font-semibold cursor-default" onClick={handleDownloadFile}>
              Download Now.
            </h3>
          </div>
        ) : null}
      </div>
    </motion.div>
  );
};

export default Card;
