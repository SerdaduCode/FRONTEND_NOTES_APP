import React, { useEffect, useState } from "react";
import NotesApi from "../../../API/notes";

const FooterCard = (props) => {
  const { getNotes, id } = props;
  const [note, setNote] = useState({
    id: "",
    title: "",
    body: "",
    createdAt: "",
    updatedAt: "",
    archived: false,
  });
  const deleteNotes = async () => {
    await NotesApi.deleteNote(id);
    getNotes();
  };

  const handleArchive = async (event) => {
    event.preventDefault();

    const updateArchive = {
      ...note,
      archived: !note.archived,
    };

    try {
      await NotesApi.updateNote(updateArchive);
      getNotes();
    } catch (error) {
      console.log(error);
    }
  };

  const getNote = async () => {
    const { data } = await NotesApi.getNote(id);
    setNote(data);
  };

  useEffect(() => {
    getNote();
  }, []);
  return (
    <div className="flex gap-3 ">
      <button onClick={handleArchive}>
        {!note.archived ? (
          <p className=" rounded-full text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m-6 3.75 3 3m0 0 3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75"
              />
            </svg>
          </p>
        ) : (
          <p className=" text-primary font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m0-3-3-3m0 0-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75"
              />
            </svg>
          </p>
        )}
      </button>
      <button onClick={deleteNotes}>
        <p className="text-white bg-red-900 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </p>
      </button>
    </div>
  );
};

export default FooterCard;
