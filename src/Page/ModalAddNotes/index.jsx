import React, { useState } from "react";
import PropTypes from "prop-types";
import Modal from "../../Components/Modal";
import Input from "../../Components/Input";
import NotesApi from "../../API/notes";

const ModalAddNotes = ({ setModalAddNotes, setNotes, getNotes }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const title = event.target.title.value;
    const body = event.target.body.value;
    const note = { title, body };
    try {
      const { data } = await NotesApi.addNote(note);
      setNotes(data);
      setModalAddNotes(false);
      await getNotes();
    } catch (error) {
      setIsLoading(false);
    } finally {
      setIsLoading(false);
      event.target.reset();
    }
  };
  return (
    <Modal onClose={() => setModalAddNotes(false)}>
      <p className="text-2xl text-primary font-bold italic text-center underline">
        Add Notes
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input
          type="text"
          placeholder="Title..."
          name="title"
          required
          autoFocus
        />
        <textarea
          name="body"
          className="no-scrollbar py-3 px-4 block w-full rounded-lg text-sm border-gray-300 focus:outline-none"
          rows="11"
          placeholder="Tuliskan catatan..."
        ></textarea>
        <div className="relative flex justify-end mt-5">
          <button
            type="submit"
            className={`${
              isLoading ? "cursor-not-allowed" : ""
            } bg-primary text-white rounded-lg px-4 py-2`}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Save"}
          </button>
        </div>
      </form>
    </Modal>
  );
};

ModalAddNotes.propTypes = {
  setModalAddNotes: PropTypes.func,
  setNotes: PropTypes.func,
  getNotes: PropTypes.func,
};

export default ModalAddNotes;
