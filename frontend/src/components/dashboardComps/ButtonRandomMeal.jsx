
const ButtonRandomMeal = ({onClick, setClicked}) => {
  return (
    <div className="flex justify-center space-x-2">
      <button type="button" onClick={()=>onClick() && setClicked(false)} className="btn btn-primary">
        Random Meal
      </button>
    </div>

  )
}

export default ButtonRandomMeal