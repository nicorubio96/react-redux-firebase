import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { startSaveNote } from '../../store/actions/notes'

export const NotesAppBar = () => {

    const {active} = useState(state=> state.notes)
    
    const dispatch = useDispatch()
    
    const handleSave =() =>{
        dispatch(startSaveNote(active))
        
    }
    return (
        <div className="notes__appbar">
            <span>28 de agosto 2020</span>

            <div>
                <button className="btn">
                    Picture
                </button>

                <button className="btn" onClick={handleSave}>
                    Save
                </button>
            </div>
        </div>
    )
}
