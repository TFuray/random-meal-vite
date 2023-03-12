import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify'
import { newMeal } from "../features/meal/mealSlice"


const ShareMeal = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [ingredietns, setIngredietns] = useState('')
  const [instructions, setInstructions] = useState('')
  const [description, setDescription] = useState('')
  const [photo, setPhoto] = useState('')

  const onSubmit = e => {
    e.preventDefault()

    dispatch(newMeal({ title, ingredietns, instructions, description, photo }))
    setTitle('')
    setIngredietns('')
    setInstructions('')
    setDescription('')
    setPhoto('')
  }

  return (
    <>
      <div>
        <h1 className="text-center text-2xl font-bold">Upload a Meal</h1>
      </div>

      <div>
        <form onSubmit={onSubmit}>
          <div>
            <input
              type="text"
              name="title"
              placeholder="Title"
              id="title"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />

            <textarea name="ingredietns" id="ingredietns" value={ingredietns} onChange={e => setIngredietns(e.target.value)} placeholder='ingredietns' type='text' cols="30" rows="10" />

            <textarea name="instructions" id="instructions" value={instructions} onChange={e => setInstructions(e.target.value)} placeholder='Instructions' type='text' cols="30" rows="10" />

            <textarea name="description" id="description" value={description} onChange={e => setDescription(e.target.value)} placeholder='Description' type='text' cols="30" rows="10" />

            <input type="file" name="photo" placeholder="Photo" id="photo" value={photo} onChange={e => setPhoto(e.target.value)} />
          </div>
          <div>
            <button type="submit">Add Reciepe</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default ShareMeal