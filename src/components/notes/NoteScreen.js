import React, { useEffect, useRef } from "react";
import { NotesAppBar } from "./NotesAppBar";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../useForm";
import { activeNote } from "../../store/actions/notes";

export const NoteScreen = () => {
  const { active } = useSelector((state) => state.notes);
  const dispatch = useDispatch()


  const [formValues, handleInputChange, reset] = useForm(active);
  const { title, body } = formValues;
  const activeId = useRef(active.id);
  useEffect(()=>{
      if(active.id !== activeId.current){
          reset(active)
      }

  },[active,reset])

  useEffect(()=>{
      dispatch(activeNote(formValues.id,{...formValues}))
  })


  return (
    <div className="notes__main-content">
      <NotesAppBar />

      <div className="notes__content">
        
          <input
            type="text"
            placeholder="Some awesome title"
            className="notes__title-input"
            autoComplete="off"
            name="title"
            onChange={handleInputChange}
            value={title}
          />
        

        <textarea
          placeholder="What happened today"
          className="notes__textarea"
          onChange={handleInputChange}
          name='body'
          value={body}
        ></textarea>

        <div className="notes__image">
          {active.url && (
            <img
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
              alt="imagen"
            />
          )}
        </div>
      </div>
    </div>
  );
};
