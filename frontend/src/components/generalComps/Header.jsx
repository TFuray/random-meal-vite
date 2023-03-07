import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { logout, reset } from "../../features/auth/authSlice"

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.auth)
  const [theme, setTheme] = useState('dark')

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <>
      {user ? (
        <div>
          <nav className="bg-white dark:bg-gray-800  shadow ">
            <div className="px-8 mx-auto max-w-7xl">
              <div className="flex items-center justify-between h-16">
                <div className="w-full justify-between flex items-center">
                  <div className="flex-shrink-0" href="/">
                    {/* <img className="w-8 h-8" src="/icons/rocket.svg" alt="Workflow" /> */}
                    <h1 className="text-2xl text-gray-300 drop-shadow-lg font-medium"><Link to='/'> What's for Dinner?</Link></h1>
                  </div>
                  <div className="hidden md:block">
                    <div className="flex items-baseline ml-10 space-x-4">
                      <div className="text-gray-800 dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">
                        <Link to='/'>Random Meal</Link>
                      </div>
                      <div className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">
                        <Link to='/savedMeals'> Saved Meals</Link>
                      </div>
                      <div className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">
                        <Link to='/shareMeal'> Share Meal</Link>
                      </div>
                      <div className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">
                        <Link to='/userMeals'> User Meals</Link>
                      </div>
                      <button onClick={() => onLogout()} className="btn btn-accent text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
                <div className="block">
                  <div className="flex items-center ml-4 md:ml-6">
                  </div>
                </div>
                <div className="flex -mr-2 md:hidden">
                  <button className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                    <svg width={20} height={20} fill="currentColor" className="w-8 h-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                      </path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <div className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/#">
                  <Link to='/'>Random Meal</Link>
                </div>
                <div className="text-gray-800 dark:text-white block px-3 py-2 rounded-md text-base font-medium" href="/#">
                  <Link to='/savedMeals'> Saved Meals</Link>              </div>
                <div className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/#">
                  <Link to='/shareMeal'> Share Meal</Link>
                </div>
                <div className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/#">
                  <Link to='/userMeals'> User Meals</Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      ) : (
          <div>
            <nav className="bg-white dark:bg-gray-800  shadow ">
              <div className="px-8 mx-auto max-w-7xl">
                <div className="flex items-center justify-between h-16">
                  <div className="w-full justify-between flex items-center">
                    <div className="flex-shrink-0" href="/">
                      {/* <img className="w-8 h-8" src="/icons/rocket.svg" alt="Workflow" /> */}
                      <h1 className="text-2xl text-gray-300 drop-shadow-lg font-medium"><Link to='/'> What's for Dinner?</Link></h1>
                    </div>
                    <div className="hidden md:block">
                      <div className="flex items-baseline ml-10 space-x-4">
                        <button className="btn btn-accent text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">
                          <Link to='/login'> Login</Link>
                        </button> <button className="btn text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">
                          <Link to='/register'>Register</Link>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="block">
                    <div className="flex items-center ml-4 md:ml-6">
                    </div>
                  </div>
                  <div className="flex -mr-2 md:hidden">
                    <button className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                      <svg width={20} height={20} fill="currentColor" className="w-8 h-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                        </path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  <button className="btn btn-accent text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">
                    <Link to='/login'> Login</Link>
                  </button> <button className="btn text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">
                    <Link to='/register'>Register</Link>
                  </button>
                </div>
              </div>
            </nav>
          </div>
      )}


    </>
  )
}

export default Header