import { db } from "../firebase/firebase";

export const loadNotes =async (uid)=>{

  const noteInfo = await db.collection(`${uid}/journal/notes`).get()
  const notes =[]
  


  noteInfo.forEach(snapHijo=>{
    notes.push({
      id: snapHijo.id,
      ...snapHijo.data()
    })
  })




return  notes
  



}



