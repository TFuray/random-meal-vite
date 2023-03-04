import { getRandomMeal } from '../features/meal/mealSlice';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DashboardShell from '../components/dashboardComps/DashboardShell';
import Header from '../components/generalComps/Header';
import ButtonRandomMeal from '../components/dashboardComps/ButtonRandomMeal';

const Dashboard = () => {
  // const { meal } = useSelector((state) => state.meals);
  // const [randomMeal, setRandomMeal] = useState(null);
  // const dispatch = useDispatch();

  // const handleRandomClick = () => {
  //   const randMeal = dispatch(getRandomMeal())
  //   setRandomMeal(randMeal)
  // }

  const [randomMeal, setRandomMeal] = useState([]);

  const fetchData = async () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then(res => res.json())
      .then(data => setRandomMeal(data.meals)
      )
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <Header />
      <div>
        <ul>
          {randomMeal.map(meal => (
            <li key={meal.idMeal}>{meal.strMeal}</li>
          ))}
        </ul>

      </div>
    </div>
  )
}

export default Dashboard