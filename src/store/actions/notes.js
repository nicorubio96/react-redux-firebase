import { db } from "../../firebase/firebase";
import { loadNotes } from "../../helpers/loadNotes";
import { types } from "../types/types";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;

    const newNotes = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };

    const docRef = await db.collection(`${uid}/journal/notes`).add(newNotes);

    dispatch(activeNote(docRef.id, newNotes));
  };
};

export const activeNote = (id, note) => {
  return {
    type: types.notesActive,
    payload: {
      id,
      ...note,
    },
  };
};

export const setloading = (uid) => {
  return async (dispatch) => {
    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
  };
};

export const setNotes = (notes) => {
  return {
    type: types.notesLoad,
    payload: notes,
  };
};

export const startSaveNote =(note)=>{
  return async (dispatch, getState)=>{

    const {uid}=getState().auth;

    if(!note.url){
      delete note.url

    }
    const noteFirestore ={...note}
    delete noteFirestore.id

    await db.doc(`${uid}/journal/notes/${note.id}`).update(noteFirestore)
    

  }

}