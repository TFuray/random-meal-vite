import { getRandomMeal } from '../features/meal/mealSlice';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DashboardShell from '../components/dashboardComps/DashboardShell';
import Header from '../components/generalComps/Header';
import ButtonRandomMeal from '../components/dashboardComps/ButtonRandomMeal';
import DisplayMeal from '../components/dashboardComps/DisplayMeal';
import DisplayIngredients from '../components/dashboardComps/DisplayIngredients';

const Dashboard = () => {
  const [randomMeal, setRandomMeal] = useState([]);
  const [ingList, setIngList] = useState([])

  const onClick = async () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then(res => res.json())
      .then(data => setRandomMeal(data.meals)

      )
  }

  const getIng = () => {
    for (let i = 1; i < 20; i++) {
      if (randomMeal['strIngredient' + i] != '') {
        setIngList(randomMeal['strIngredient' + i])
      }
    }

  }

  return (
    <div>
      <Header />
      <section>
        <div className='grid'>
          {console.log(randomMeal[0])}
          <DisplayMeal
           randomMeal={randomMeal}
          />
        </div>
        <div>
          <ButtonRandomMeal
            onClick={onClick}
          />
        </div>
      </section>
    </div>
  )
}

export default Dashboard