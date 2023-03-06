
const ButtonRandomMeal = ({onClick}) => {
  return (
    <div className="flex justify-center space-x-2">
      <button type="button" onClick={()=>onClick()} className="btn btn-primary">
        Button
      </button>
    </div>

  )
}

export default ButtonRandomMeal