import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../../Components/Modal';
import Input from '../../Components/Input';
import NotesApi from '../../API/notes';

const ModalUpdateNotes = ({ id, setModalUpdateNotes }) => {
  const [note, setNote] = useState({
    id: '',
    title: '',
    body: '',
    createdAt: '',
    updatedAt: '',
    archived: false,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const body = event.target.body.value;
    const updatedNote = {
      ...note,
      title,
      body,
    };

    try {
      await NotesApi.updateNote(updatedNote);
      setModalUpdateNotes(false);
    } catch (error) {
      console.log(error);
    } finally {
      event.target.reset();
      window.location.reload();
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
    <Modal onClose={() => setModalUpdateNotes(false)}>
      <p className="text-2xl text-primary font-bold italic text-center underline">
        Update Notes
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
        <Input
          type="text"
          name="title"
          defaultValue={note.title}
          required
          autoFocus
        />
        <textarea
          name="body"
          className="py-3 px-4 block w-full rounded-lg text-sm border-gray-300 focus:outline-none"
          rows="11"
          placeholder="Tuliskan catatan..."
          defaultValue={note.body}
        ></textarea>

        <div className="relative flex justify-end mt-5">
          <button
            type="submit"
            className={` bg-primary text-white rounded-lg px-4 py-2`}
          >
            {'Save'}
          </button>
        </div>
      </form>
    </Modal>
  );
};

ModalUpdateNotes.propTypes = {
  id: PropTypes.string,
  setModalUpdateNotes: PropTypes.func,
};

export default ModalUpdateNotes;
