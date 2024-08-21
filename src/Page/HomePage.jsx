import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import NotesApi from "../API/notes";
import ModalAddNotes from "./ModalAddNotes";
import InputSearch from "../Components/InputSearch";
import useDebounce from "../hooks/useDebounce";

const DELAY = 1000;

const HomePage = () => {
  const { debounce } = useDebounce();
  const [notes, setNotes] = useState([]);
  const [modalAddNotes, setModalAddNotes] = useState(false);
  const [search, setSearch] = useState("");
  const getNotes = async () => {
    const { data } = await NotesApi.getNotes();
    setNotes(data);
  };

  const searchNotes = async () => {
    const { data } = await NotesApi.searchNotes(search);
    setNotes(data);
  };

  const handleSearch = () => {
    if (search !== "") {
      searchNotes();
    } else {
      getNotes();
    }
  };
  const debouncedSearch = debounce(handleSearch, DELAY);
  useEffect(() => {
    debouncedSearch();
  }, [search]);

  useEffect(() => {
    getNotes();
  }, []);
  return (
    <>
      <main className="h-screen">
        <div className="container">
          <div className="px-3 lg:px-0 flex flex-col gap-5 my-10">
            <p className="text-3xl md:text-4xl text-primary font-bold italic text-center underline">
              My Notes
            </p>
            <div>
              <InputSearch setSearch={setSearch} />
            </div>
          </div>
          <div className="grid content-center grid-cols-1 px-3 lg:px-0 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {notes?.map((note) => (
              <Card
                key={note.id}
                title={note.title}
                body={note.body}
                createdAt={note.createdAt}
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
        </div>
      </main>
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
