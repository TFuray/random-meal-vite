import { Link } from "react-router-dom"

const LoginRegisterBtn = () => {
  return (
    <div className="flex items-baseline ml-10 space-x-4">
      <button
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
      </button>
    </div>
  )
}

export default LoginRegisterBtn
