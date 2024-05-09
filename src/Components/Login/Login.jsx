import { Link, useNavigate} from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { getAuth } from "firebase/auth";
import app from "../../firebase/firebase.config";
// import { useHistory } from "react-router-dom";

function Login() {
  const { SignIn } = useContext(AuthContext)
  const auth = getAuth(app);
 
  const navigate = useNavigate();
   
        
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const userCredientials = {
            email,password
        }
      console.log(userCredientials);
      SignIn(email, password)
        .then(result => {
          const user = result.user;
          console.log(user);
          navigate('/');
         
        })
        .catch(error => {
          console.error(error);
      })
    }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col gap-28 justify-between lg:flex-row items-center">
          <div className="items-center animate__animated animate__rollIn ">
            <img src={img} alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 animate__animated animate__fadeInTopRight">
            <form className="card-body" onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <input
                  type="submit"
                  value="Login"
                  className="btn btn-primary"
                />
              </div>
            </form>
            <div className="flex gap-2 mx-auto mb-4 ">
              <p>New to Car Doctor?</p>
              <p className="text-red-700">
                <Link to={"/signup"}>Sign Up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login