import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import LoginRegisterBtn from "../components/generalComps/LoginRegisterBtn"

const Landing = () => {
  const navigate = useNavigate()

  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
    if (user) {
      navigate("/search")
    }
  }, [user, navigate])

  return (
    <>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: "url('/heroImage.jpg')" }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Whats For Dinner?</h1>
            <p className="mb-5">
              When no one feels like anything, you can count on 'Whats for
              dinner?' to figure it out for you.
            </p>

            <a href="#sectionTwo">
              <div className="flex justify-center">
                <svg
                  xmlns:x="http://ns.adobe.com/Extensibility/1.0/"
                  xmlns:i="http://ns.adobe.com/AdobeIllustrator/10.0/"
                  xmlns:graph="http://ns.adobe.com/Graphs/1.0/"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  x="0px"
                  y="0px"
                  xmlSpace="preserve"
                  className="ml-auto"
                >
                  <switch>
                    <foreignObject
                      requiredExtensions="http://ns.adobe.com/AdobeIllustrator/10.0/"
                      x={0}
                      y={0}
                      width={1}
                      height={1}
                    />
                    <g i:extraneous="self">
                      <path
                        className="drop-shadow-3xl"
                        fill="white"
                        d="M56.4,94.8L84.3,67c3.6-3.6,3.6-9.3,0-12.9c-3.6-3.6-9.3-3.6-12.9,0L59.1,66.4V11.6c0-5-4.1-9.1-9.1-9.1s-9.1,4.1-9.1,9.1    v54.8L28.6,54.2c-3.6-3.6-9.3-3.6-12.9,0c-1.8,1.8-2.7,4.1-2.7,6.4c0,2.3,0.9,4.7,2.7,6.4l27.8,27.8c1.7,1.7,4,2.7,6.4,2.7    S54.7,96.5,56.4,94.8z"
                      />
                    </g>
                  </switch>
                </svg>
              </div>
            </a>

            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>

      <section id="sectionTwo">
        <div className="container p-4 mx-auto bg-white max-w-7xl sm:p-6 lg:p-8 dark:bg-base-200 mt-16">
          <div className="flex flex-wrap -mx-8">
            <div className="w-full px-8 lg:w-1/2">
              <div className="pb-12 mb-12 border-b lg:mb-0 lg:pb-0 lg:border-b-0">
                <h2 className="mb-4 text-3xl font-bold lg:text-4xl font-heading dark:text-white">
                  Sed ac magna sit amet risus tristique interdum, at vel velit
                  in hac habitasse platea dictumst.
                </h2>
                <p className="mb-8 leading-loose text-gray-500 dark:text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  sagittis, quam nec venenatis lobortis, mi risus tempus nulla,
                  sed porttitor est nibh at nulla. Praesent placerat enim ut ex
                  tincidunt vehicula. Fusce sit amet dui tellus.
                </p>
                <div className="w-full md:w-1/3">
                  <div className="flex items-baseline ml-10 space-x-4">
                    <LoginRegisterBtn/>
                    {/* <button
                      className="btn btn-accent text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      href="/#"
                    >
                      <Link to="/login"> Login</Link>
                    </button>
                    <button
                      className="btn btn-secondary text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      href="/#"
                    >
                      <Link to="/register">Register</Link>
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-8 lg:w-1/2">
              <ul className="space-y-12">
                <li className="flex -mx-4">
                  <div className="px-4">
                    <span className="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-blue-600 rounded-full font-heading bg-blue-50">
                      1
                    </span>
                  </div>
                  <div className="px-4">
                    <h3 className="my-4 text-xl font-semibold dark:text-white">
                      Responsive Elements
                    </h3>
                    <p className="leading-loose text-gray-500 dark:text-gray-300">
                      All elements are responsive and provide the best display
                      in all screen size. It's magic !
                    </p>
                  </div>
                </li>
                <li className="flex -mx-4">
                  <div className="px-4">
                    <span className="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-blue-600 rounded-full font-heading bg-blue-50">
                      2
                    </span>
                  </div>
                  <div className="px-4">
                    <h3 className="my-4 text-xl font-semibold dark:text-white">
                      Flexible Team
                    </h3>
                    <p className="leading-loose text-gray-500 dark:text-gray-300">
                      Flexibility is the key. All team is available 24/24 and
                      joinable every day on our hotline.
                    </p>
                  </div>
                </li>
                <li className="flex -mx-4">
                  <div className="px-4">
                    <span className="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-blue-600 rounded-full font-heading bg-blue-50">
                      3
                    </span>
                  </div>
                  <div className="px-4">
                    <h3 className="my-4 text-xl font-semibold dark:text-white">
                      Ecologic Software
                    </h3>
                    <p className="leading-loose text-gray-500 dark:text-gray-300">
                      Our Software are ecologic and responsable. Green is not
                      just a color, it's a way of life.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Landing
