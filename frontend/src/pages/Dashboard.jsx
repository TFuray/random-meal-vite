import { getRandomMeal } from '../features/meal/mealSlice';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ButtonRandomMeal from '../components/dashboardComps/ButtonRandomMeal';
import DisplayMeal from '../components/dashboardComps/DisplayMeal';
import ButtonSave from '../components/dashboardComps/ButtonSave';

const Dashboard = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [randomMeal, setRandomMeal] = useState([]);

  const { user } = useSelector(state => state.auth)

  useEffect(() => {
    onClick()
    console.log('1')
  }, [user])

  const onClick = async () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then(res => res.json())
      .then(data => setRandomMeal(data.meals)

      )
  }

  return (
    <div>
      <section>
        <div className='grid'>
          <DisplayMeal
            randomMeal={randomMeal}
          />
        </div>
        <div className='flex justify-center mt-24'>
          <ButtonRandomMeal
            onClick={onClick}
          />
          {randomMeal !== [] ? (
            <ButtonSave />
          ) : (null)}
        </div>
      </section>
    </div>
  )
}

export default Dashboard