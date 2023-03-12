import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
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
        <h1 className="text-center text-2xl font-bold my-5">Upload a Meal</h1>
      </div>

      <div className="">
        <form className="" onSubmit={onSubmit}>
          <div className="flex flex-col gap-5 justify-center content-center ">
            <input
              className="flex self-center input input-bordered w-full max-w-xs"
              type="text"
              name="title"
              placeholder="Title"
              id="title"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />

            <textarea className="flex self-center w-1/2 textarea textarea-bordered " name="ingredietns" id="ingredietns" value={ingredietns} onChange={e => setIngredietns(e.target.value)} placeholder='ingredietns' type='text'  />

            <textarea className="flex self-center w-1/2 textarea textarea-bordered" name="instructions" id="instructions" value={instructions} onChange={e => setInstructions(e.target.value)} placeholder='Instructions' type='text'  />

            <textarea className="flex self-center w-1/2 textarea textarea-bordered" name="description" id="description" value={description} onChange={e => setDescription(e.target.value)} placeholder='Description' type='text'  />

            <input className="flex self-center input input-bordered w-full max-w-xs" type="text" name="photo" placeholder="Photo URL" id="photo" value={photo} onChange={e => setPhoto(e.target.value)} />
          
            <button className="flex self-center btn btn-success" type="submit">Add Reciepe</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default ShareMeal