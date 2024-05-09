import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import './SignUp.css'
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";
function SignUp() {
  const Navigate = useNavigate();
  const { createUser } = useContext(AuthContext);
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const password = form.password.value;
    const singnUpCredientials = {
      name,
      email,
      password,
    };
    console.log(singnUpCredientials);
    createUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user)
      })
      .catch(error => {
      console.error(error)
    })
  };
  const auth = getAuth(app);
   const provider = new GoogleAuthProvider
  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        console.log(user);
        Navigate('/');
    })
  }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col gap-28 justify-between lg:flex-row items-center">
          <div className="items-center animate__animated animate__rollIn">
            <img src={img} alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 animate__animated animate__fadeInTopRight">
            <form className="card-body" onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="input input-bordered"
                  name="name"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
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
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Sign Up"
                />
              </div>
            </form>

            <div className="text-center mb-4">
              <h1 className="mb-3 font-semibold">Or Sign Up With</h1>
              <div className="text-center flex justify-center gap-3">
                <Link>
                  
                  <FaFacebook className="bg-[#f5f5f8] text-5xl rounded-3xl border p-1 whirl"></FaFacebook>
                </Link>
                <Link>
                
                  <FcGoogle onClick={handleGoogleLogin} className="bg-[#f5f5f8] text-5xl rounded-3xl border p-1 whirl"></FcGoogle>
                </Link>
              </div>
            </div>
            <div className="flex mb-4 gap-3 mx-auto ">
              <p>Already registered?</p>
              <p className="text-red-700">
                <Link to={"/loggedin"}>Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignUp