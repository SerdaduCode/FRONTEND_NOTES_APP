import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import NotesApi from "../../API/notes";
import { formatDate } from "../../utils/FormatTanggal";
import ModalUpdateNotes from "../../Page/ModalUpdateNotes";
import FooterCard from "./FooterCard";
import { truncateText } from "../../utils/Truncate";
const colors = [
  "border-t-red-500",
  "border-t-blue-500",
  "border-t-primary",
  "border-t-quartenary",
  "border-t-purple-500",
  "border-t-pink-500",
  "border-t-indigo-500",
];
const Card = ({ id, body, title, createdAt, getNotes }) => {
  const [borderColorClass, setBorderColorClass] = useState(colors[0]);
  const [modalUpdateNotes, setModalUpdateNotes] = useState(false);

  const getRandomColorClass = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  useEffect(() => {
    setBorderColorClass(getRandomColorClass());
  }, []);

  return (
    <>
      <div
        className={`md:max-w-sm  flex flex-col bg-white border border-t-4 shadow-sm rounded-xl ${borderColorClass}`}
      >
        <div className="p-4 md:p-5">
          <div
            className="cursor-pointer"
            onClick={() => setModalUpdateNotes(true)}
          >
            <h3 className="text-lg font-bold text-primary italic">{title}</h3>
            <p className="my-2 min-h-40 text-gray-500">
              {truncateText(body, 20)}
            </p>
          </div>
          <div className="flex justify-between">
            <FooterCard getNotes={getNotes} id={id} />
            <p className="text-gray-500">{formatDate(createdAt)}</p>
          </div>
        </div>
      </div>
      {modalUpdateNotes && (
        <ModalUpdateNotes
          id={id}
          setModalUpdateNotes={setModalUpdateNotes}
          getNotes={getNotes}
        />
      )}
    </>
  );
};

Card.propTypes = {
  id: PropTypes.string,
  body: PropTypes.string,
  title: PropTypes.string,
  createdAt: PropTypes.string,
  getNotes: PropTypes.func,
};

export default Card;
