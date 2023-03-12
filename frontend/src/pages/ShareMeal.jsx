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
  const [instrucitons, setInstructions] = useState('')
  const [description, setDescription] = useState('')
  const [photo, setPhoto] = useState('')

  return (
    <>
      <div>
      </div>
    </>
  )
}

export default ShareMeal