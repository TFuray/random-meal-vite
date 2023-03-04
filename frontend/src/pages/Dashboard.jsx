import { getRandomMeal } from '../features/meal/mealSlice';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DashboardShell from '../components/dashboardComps/DashboardShell';
import Header from '../components/generalComps/Header';
import ButtonRandomMeal from '../components/dashboardComps/ButtonRandomMeal';
import DisplayMeal from '../components/dashboardComps/DisplayMeal';

const Dashboard = () => {
  // const { meal } = useSelector((state) => state.meals);
  // const [randomMeal, setRandomMeal] = useState(null);
  // const dispatch = useDispatch();

  // const handleRandomClick = () => {
  //   const randMeal = dispatch(getRandomMeal())
  //   setRandomMeal(randMeal)
  // }

  const [randomMeal, setRandomMeal] = useState([]);

  const fetchMeal = async () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then(res => res.json())
      .then(data => setRandomMeal(data.meals)
      )
  }
 

  return (
    <div>
      <Header />
      <div>
        <ButtonRandomMeal
        fetchMeal={fetchMeal}
        />
        <div className='flex flex-col content-center'>
          <DisplayMeal
          randomMeal={randomMeal} 
          />
      </div>
      </div>
    </div>
  )
}

export default Dashboard