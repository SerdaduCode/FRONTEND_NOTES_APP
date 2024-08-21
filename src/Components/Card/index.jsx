import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import NotesApi from '../../API/notes';
import { formatDate } from '../../utils/FormatTanggal';
import ModalUpdateNotes from '../../Page/ModalUpdateNotes';
const colors = [
  'border-t-red-500',
  'border-t-blue-500',
  'border-t-primary',
  'border-t-quartenary',
  'border-t-purple-500',
  'border-t-pink-500',
  'border-t-indigo-500',
];
const Card = ({ id, body, title, createdAt, getNotes }) => {
  const [borderColorClass, setBorderColorClass] = useState(
    colors[0],
  );

  const [modalUpdateNotes, setModalUpdateNotes] =
    useState(false);

  const getRandomColorClass = () => {
    const randomIndex = Math.floor(
      Math.random() * colors.length,
    );
    return colors[randomIndex];
  };

  const changeColor = () => {
    const newColorClass = getRandomColorClass();
    setBorderColorClass(newColorClass);
  };

  const deleteNotes = async () => {
    await NotesApi.deleteNote(id);
    getNotes();
  };

  useEffect(() => {
    changeColor();
  }, []);

  return (
    <>
      <div
        className={`md:max-w-sm flex flex-col bg-white border border-t-4 shadow-sm rounded-xl ${borderColorClass}`}
      >
        <div className="p-4 md:p-5">
          <h3
            className="text-lg font-bold text-primary italic"
            onClick={() => setModalUpdateNotes(true)}
          >
            {title}
          </h3>
          <p className="mt-2 text-gray-500 truncate">
            {body}
          </p>
          <p>{formatDate(createdAt)}</p>
          <div className="flex gap-3">
            <button>Arsip</button>
            <button onClick={deleteNotes}>Delete</button>
          </div>
        </div>
      </div>
      {modalUpdateNotes && (
        <ModalUpdateNotes
          id={id}
          setModalUpdateNotes={setModalUpdateNotes}
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
