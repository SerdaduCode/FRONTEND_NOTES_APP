import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import NotesApi from "../API/notes";
import ModalAddNotes from "./ModalAddNotes";
import InputSearch from "../Components/InputSearch";
import useDebounce from "../hooks/useDebounce";
import { Link } from "react-router-dom";

const DELAY = 500;

const HomePage = () => {
  const { debounce } = useDebounce();
  const [search, setSearch] = useState("");
  const [modalAddNotes, setModalAddNotes] = useState(false);
  const [notes, setNotes] = useState([]);

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
      <main className="h-screen container">
        <div className="px-3 lg:px-0 flex flex-col gap-5 my-10">
          <p className="text-3xl md:text-4xl text-primary font-bold italic text-center underline">
            My Notes
          </p>
          <Link to={`/archive`} className="text-primary">
            Archive
          </Link>
          <div>
            <InputSearch setSearch={setSearch} />
          </div>
        </div>
        {notes.length > 0 ? (
          <div className="grid content-center grid-cols-1 px-3 lg:px-0 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {notes.map((note) => (
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
        ) : (
          <div className=" h-96 flex items-center justify-center">
            <h1>Data Not Found</h1>
          </div>
        )}
        <div className="fixed right-3 bottom-3 lg:right-10 lg:bottom-10">
          <button
            className="bg-primary p-5 rounded-full text-white flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16"
            onClick={() => setModalAddNotes(true)}
          >
            <span className="text-4xl">+</span>
          </button>
        </div>
      </main>
      {modalAddNotes && (
        <ModalAddNotes
          setModalAddNotes={setModalAddNotes}
          setNotes={setNotes}
          getNotes={getNotes}
        />
      )}
    </>
  );
};

export default HomePage;
