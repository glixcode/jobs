import { Link } from "react-router-dom"
import { Fragment } from "react/jsx-runtime"
import 'mdb-ui-kit/css/mdb.min.css';
import 'mdb-ui-kit';

const LoginPage = () => {

  const formSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(e.currentTarget)
  }
  const googleAuthUrl:string = import.meta.env.VITE_GOOGLE_AUTH_URL;


  return (
    <Fragment>
      <div className="login-page vh-100 d-flex justify-content-center align-items-center">
        <div className="login-form rounded">
          <div className="login-form-right p-5">
            <form onSubmit={formSubmit} action="" className="">
              <h3 className="text-center fw-bold">Sign In</h3>
              <div className="form-group">
                <label htmlFor="">Username</label>
                <input type="text" className="form-control" placeholder="Username" required />
              </div>
              <div className="form-group mt-2">
                <label htmlFor="">Password</label>
                <input type="password" className="form-control" placeholder="Password" required />
              </div>
              <div className="form-group mt-4">
                <button className="btn btn-primary w-100">Sign In</button>
              </div>
              <div className="position-relative text-center mt-4">
                <span className="position-relative w-max-content z-2 fw-bold">OR</span>
                <span className="bg-dark position-absolute top-0 bottom-0 my-auto z-1" style={{"height": "1px", "left" : "0", "width": "40%"}}></span>
                <span className="bg-dark position-absolute top-0 bottom-0 my-auto z-1" style={{"height": "1px", "right" : "0", "width": "40%"}}></span>
              </div>
              <label className="w-100 text-center fw-bold">Sign In with</label>
              <div className="form-group mt-2">
                <Link to={googleAuthUrl} className="btn btn-warning w-100">Google</Link>
              </div>
              <div className="form-group mt-4">
                <a className="btn btn-dark w-100">GitHub</a>
              </div>
              <label className="mt-2">Don't have an account? <Link to={'/signUp'}>Signup</Link></label>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default LoginPage