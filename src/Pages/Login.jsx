
import { useState } from 'react';
import { FaArrowLeft, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router';

const Login = () => {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className='my-6 w-11/12 mx-auto'>
      <Link>
        <button className='flex items-center gap-1 btn btn-outline border-primary text-primary shadow-none hover:bg-primary hover:text-white font-medium text-lg mb-4'>
          <FaArrowLeft />
          Back to Home
        </button>
      </Link>
      <div className='flex justify-center items-center min-h-[80vh]'>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-6">
          <h2 className='text-primary text-2xl font-bold text-center pt-4'>Login your account</h2>
          <div className='border-b border-base-200 mt-6'></div>
          <div className="card-body">
            <form className="fieldset">
              {/* email */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input bg-base-200 border-0 outline-none"
                placeholder="Enter your email"
                required
              />

              {/* password */}
              <label className="label">Password</label>
              <div className='input bg-base-200 border-0 outline-none'>
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