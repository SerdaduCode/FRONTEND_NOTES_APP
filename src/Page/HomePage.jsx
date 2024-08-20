import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';
import InputSearch from '../Components/InputSearch';
import NotesApi from '../API/notes';
import ModalAddNotes from './ModalAddNotes';

const HomePage = () => {
  const [notes, setNotes] = useState([]);
  const [modalAddNotes, setModalAddNotes] = useState(false);

  const getNotes = async () => {
    const { data } = await NotesApi.getNotes();
    setNotes(data);
  };

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <>
      <InputSearch />
      <div className="grid content-center grid-cols-1 px-3 lg:px-0 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {notes?.map((note) => (
          <Card
            key={note.id}
            id={note.id}
            title={note.title}
            body={note.body}
            createdAt={note.createdAt}
            getNotes={getNotes}
          />
        ))}
      </div>
      <div className="fixed right-3 bottom-3 lg:right-10 lg:bottom-10">
        <button
          className="bg-primary p-5 rounded-full text-white flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16"
          onClick={() => setModalAddNotes(true)}
        >
          <span className="text-4xl">+</span>
        </button>
      </div>
      {modalAddNotes && (
        <ModalAddNotes
          setModalAddNotes={setModalAddNotes}
          setNotes={setNotes}
        />
      )}
    </>
  );
};

export default HomePage;
