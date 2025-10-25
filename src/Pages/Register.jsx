
import { useState } from 'react';
import { FaArrowLeft, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router';

const Register = () => {
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
          <h2 className='text-primary text-2xl font-bold text-center pt-4'>Register your account</h2>
          <div className='border-b border-base-200 mt-6'></div>
          <div className="card-body">
            <form className="fieldset">

              {/* name */}
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input bg-base-200 border-0 outline-none"
                placeholder="Enter your name"
                required
              />

              {/* photo url */}
              <label className="label">Photo URL</label>
              <input
                type="text"
                name="photoUrl"
                className="input bg-base-200 border-0 outline-none"
                placeholder="Photo URL"
                required
              />
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

              {/* terms and conditons */}
              <p className='flex items-center gap-1 mt-1'>
                <input type="checkbox" name='terms' />
                Accept Terms & Conditions
              </p>

              {/* error message */}

              {/* register button */}
              <button type='submit' className="btn btn-primary mt-4">Register</button>

              {/* login route */}
              <p className='text-center mt-3'>Already Have An Account ? {" "}
                <Link to="/login" className='text-secondary font-medium hover:underline'>Login</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;