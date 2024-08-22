import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NotesApi from "../API/notes";
import Card from "../Components/Card";

const ArchivedPage = () => {
  const [archive, setArchive] = useState([]);
  const getArchive = async () => {
    const { data } = await NotesApi.getArchivedNote();
    setArchive(data);
  };

  useEffect(() => {
    getArchive();
  }, []);

  return (
    <main className="h-screen">
      <div className="container">
        <div className="px-3 lg:px-0 flex flex-col gap-5 my-10">
          <p className="text-3xl md:text-4xl text-primary font-bold italic text-center underline">
            My Archive
          </p>
          <Link to={`/`} className="text-primary">
            Home
          </Link>
        </div>
        {archive.length > 0 ? (
          <div className="grid content-center grid-cols-1 px-3 lg:px-0 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {archive?.map((note) => (
              <Card
                key={note.id}
                id={note.id}
                title={note.title}
                body={note.body}
                createdAt={note.createdAt}
                getNotes={getArchive}
              />
            ))}
          </div>
        ) : (
          <div className=" h-96 flex items-center justify-center">
            <h1>Data Not Found</h1>
          </div>
        )}
      </div>
    </main>
  );
};

export default ArchivedPage;
