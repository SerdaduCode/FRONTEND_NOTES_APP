import instance from '../lib/axios/axios';

const NotesApi = {

  getNotes: () => instance.get("/notes"),
  searchNotes: (query) => instance.get(`/notes?search=${query}`),
  getArchivedNote: () => instance.get("/notes/archived"),
  getNote: (id) => instance.get(`/notes/${id}`),
  addNote: (note) => instance.post('/notes', note),
  updateNote: (note) =>
    instance.put(`/notes/${note.id}`, note),
  deleteNote: (id) => instance.delete(`/notes/${id}`),
};

export default NotesApi;
