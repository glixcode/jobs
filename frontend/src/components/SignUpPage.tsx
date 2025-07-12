import { Link } from "react-router-dom"

const SignUpPage = () => {
  return (
    <div>
      <h4 className="font-semibold">Sign Up Page</h4>
      <p>Already have an account?<Link to="/">Login</Link></p>
    </div>
  )
}

export default SignUpPage