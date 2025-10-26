import { useContext, useState } from 'react';
import { FaArrowLeft, FaEye, FaEyeSlash, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router';
import AuthContext from '../Contexts/AuthContext';
import Swal from 'sweetalert2';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
  const { loginUser, googleProviderLogin } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const googleProvider = new GoogleAuthProvider();

  const handlelLogin = e => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);

    loginUser(email, password)
      .then(result => {
        console.log(result);
        if (result.user) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Logged in Successfully",
            showConfirmButton: false,
            timer: 1500
          });
          navigate(from, { replace: true });
        }
      })
      .catch(err => {
        console.log(err);
      })
  }

  const handleGoogleLogin = () => {
    googleProviderLogin(googleProvider)
      .then(result => {
        if (result.user) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Logged in Successfully",
            showConfirmButton: false,
            timer: 1000
          });
          navigate(from, { replace: true });
        }
      })
  }

  return (
    <section className='my-6 w-11/12 mx-auto'>
      <Link>
        <button className='flex items-center gap-1 btn btn-outline border-primary text-primary shadow-none hover:bg-primary hover:text-white font-medium text-lg mb-4'>
          <FaArrowLeft />
          Back to Home
        </button>
      </Link>
      <div className='flex justify-center items-center min-h-[80vh]'>
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-6">
          <h2 className='text-primary text-2xl font-bold text-center pt-4'>Login your account</h2>
          <div className='border-b border-base-200 mt-6'></div>
          <div className="card-body">

            <div className="flex gap-6 items-center justify-around">
              <button onClick={handleGoogleLogin} className='flex gap-2 items-center btn bg-indigo-100 shadow-none border-none'>
                <span className='bg-white p-2 rounded-full'><FaGoogle /></span>
                <span>Sign in With Google</span>
              </button>
              <button className='flex gap-2 items-center btn bg-indigo-100 shadow-none border-none'>
                <span className='bg-white p-2 rounded-full'><FaGithub /></span>
                <span>Sign in With Github</span>
              </button>
            </div>

            <form onSubmit={handlelLogin} className="fieldset">
              {/* email */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input bg-base-200 border-0 w-full outline-none"
                placeholder="Enter your email"
                required
              />

              {/* password */}
              <label className="label">Password</label>
              <div className='input bg-base-200 border-0 w-full outline-none'>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter password"
                  required
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className='cursor-pointer text-lg'
                >
                  {
                    showPassword ? <FaEye /> : <FaEyeSlash />
                  }
                </span>
              </div>

              {/* forget password */}
              <div><a className="link link-hover">Forgot password?</a></div>

              {/* login button */}
              <button type="submit" className="btn btn-primary mt-4">Login</button>

              {/* register route */}
              <p className='text-center mt-3'>Dont’t Have An Account ? {" "}
                <Link to="/register" className='text-secondary font-medium hover:underline'>Register</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;