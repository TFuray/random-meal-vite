import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { logout, reset } from "../../features/auth/authSlice"
import LoginRegisterBtn from "./LoginRegisterBtn"

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.auth)
  const [theme, setTheme] = useState("buisness")

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate("/")
  }

  return (
    <>
      {user ? (
        <div>
          <nav className="bg-base-200 shadow ">
            <div className="px-8 mx-auto max-w-7xl">
              <div className="flex items-center justify-between h-16">
                <div className="w-full justify-between flex items-center">
                  <div
                    className="flex-shrink-0 flex items-center"
                    href="/"
                  >
                    <svg
                      width="36px"
                      height="36px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      className="m-3"
                      fill="currentColor"
                    >
                      <path d="M12-.006c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm5.999 19.999c2.429-1.825 4.001-4.73 4.001-7.999 0-5.519-4.481-10-10-10s-10 4.481-10 10c0 3.701 2.015 6.936 5.008 8.665v-4.023c0-.576-.36-.765-1.147-1.395-.581-.466-.981-1.194-.907-1.935.209-2.114.718-6.312.718-6.312h.5v5h.836l.186-5h.506l.144 5h.836l.201-5h.469l.166 5h.835v-5h.458s.562 4.171.793 6.292c.081.751-.341 1.493-.935 1.963-.791.626-1.151.806-1.151 1.391v5.042c.794.204 1.626.312 2.484.312 1.229 0 2.407-.222 3.496-.629v-3.371s-.977-.003-2.056 0c.668-5.83 2.586-11 3.883-11 .373 0 .67.297.673.709.005.802.004 7.091.003 12.29z" />
                    </svg>
                    <h1 className="text-2xl text-base-content  drop-shadow-lg font-medium">
                      <Link to="/"> What's for Dinner?</Link>
                    </h1>
                  </div>

                  <div className="z-[8]">
                    <div className="flex items-center ml-10 space-x-4">
                      <div className="flex-none">
                        <ul className="menu menu-horizontal px-1">
                          <li>
                            <details>
                              <summary>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  height="2em"
                                  viewBox="0 0 448 512"
                                  fill="white"
                                >
                                  <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                                </svg>
                              </summary>
                              <ul className="p-2 bg-base-100">
                                <li className="text-gray-800 dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                  <Link to="/randommeal">Random Meal</Link>
                                </li>
                                <li className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                  <Link to="/userMeals"> User Meals</Link>
                                </li>
                                <li className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                  <Link to="/savedMeals"> Saved Meals</Link>
                                </li>
                                <li className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                  <Link to="/shareMeal"> Share Meal</Link>
                                </li>
                              </ul>
                            </details>
                          </li>
                        </ul>
                      </div>

                      <div className="text-gray-300 self-center mx-4 hover:text-gray-800 dark:hover:text-white">
                        <Link to="/">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                          >
                            <path
                              d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                              stroke="white"
                            />
                          </svg>
                        </Link>
                      </div>

                      <button
                        onClick={() => onLogout()}
                        className="btn btn-accent text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        href="/#"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
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
                  <div
                    className="flex-shrink-0"
                    href="/"
                  >
                    {/* <img className="w-8 h-8" src="/icons/rocket.svg" alt="Workflow" /> */}
                    <h1 className="text-2xl text-gray-300 drop-shadow-lg font-medium">
                      <Link to="/"> What's for Dinner?</Link>
                    </h1>
                  </div>
                  <div className="hidden md:block">
                    <div className="flex items-baseline ml-10 space-x-4">
                    <LoginRegisterBtn/>
                    </div>
                  </div>
                </div>
                <div className="block">
                  <div className="flex items-center ml-4 md:ml-6"></div>
                </div>
                <div className="flex -mr-2 md:hidden">
                  <button className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                    <svg
                      width={20}
                      height={20}
                      fill="currentColor"
                      className="w-8 h-8"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <button
                  className="btn btn-accent text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  href="/#"
                >
                  <Link id="login" to="/login"> Login</Link>
                </button>{" "}
                <button
                  className="btn text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  href="/#"
                >
                  <Link to="/register">Register</Link>
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
