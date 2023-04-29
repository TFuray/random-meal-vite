import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import ButtonRandomMeal from "../components/dashboardComps/ButtonRandomMeal"
import ButtonSave from "../components/dashboardComps/ButtonSave"
import DisplayMeal from "../components/dashboardComps/DisplayMeal"

const Dashboard = () => {
  const [randomMeal, setRandomMeal] = useState([])
  const [showBtn, setShowBtn] = useState(false)
  const [clicked, setClicked] = useState(false)

  const { user } = useSelector((state) => state.auth)
  console.log(user)
  const onClick = async () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then((res) => res.json())
      .then((data) => setRandomMeal(data.meals))
    setShowBtn(true)
  }

  useEffect(() => {
    return () => onClick()
  }, [])

  return (
    <div className="">
      <div className="flex justify-center mt-5">
        <ButtonRandomMeal
          onClick={onClick}
          setClicked={setClicked}
        />
        {showBtn ? (
          <ButtonSave
            clicked={clicked}
            setClicked={setClicked}
            randomMeal={randomMeal}
          />
        ) : null}
      </div>
      <section className="w-4/5 mt-10 ml-auto mr-auto">
        <div className="grid">
          <DisplayMeal randomMeal={randomMeal} />
        </div>
      </section>
    </div>
  )
}

export default Dashboard
