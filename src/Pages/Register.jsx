import { useContext, useState } from 'react';
import { FaArrowLeft, FaEye, FaEyeSlash, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router';
import AuthContext from '../Contexts/AuthContext';
import { GoogleAuthProvider } from 'firebase/auth';
import Swal from 'sweetalert2';

const Register = () => {
  const { createAccount, googleProviderLogin, updateUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const googleProvider = new GoogleAuthProvider();

  const handleRegister = e => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const { name, photoUrl, email, password } = Object.fromEntries(formData.entries());
    const terms = form.terms.checked;

    if (!terms) {
      return setErrorMessage("Plase accept terms & conditions.")
    }

    setErrorMessage("");

    console.log(name, photoUrl, email, password, terms);

    const userDetails = {
      displayName: name,
      photoURL: photoUrl,
    }

    createAccount(email, password)
      .then(result => {
        console.log(result);
        setSuccessMessage("User created Successfully");
        if (result.user) {
          updateUser(userDetails)
            .then(() => {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Registration Successfull",
                showConfirmButton: false,
                timer: 1000
              });
              navigate(from, { replace: true }); // go back or go home
            })
            .catch(err => {
              console.log(err);
            })
        }
      })
      .catch(err => {
        console.log(err);
      })

  }

  const handleGoogleLogin = () => {
    googleProviderLogin(googleProvider)
      .then(result => {
        console.log(result);
        if (result.user) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Registration Successfull",
            showConfirmButton: false,
            timer: 1000
          });
          navigate(from, {replace: true}); // go back or go home
        }
      })
      .catch(err => {
        console.log(err);
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
          <h2 className='text-primary text-2xl font-bold text-center pt-4'>Register your account</h2>
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

            <form onSubmit={handleRegister} className="fieldset">

              {/* name */}
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input bg-base-200 border-0 w-full outline-none"
                placeholder="Enter your name"
                required
              />

              {/* photo url */}
              <label className="label">Photo URL</label>
              <input
                type="text"
                name="photoUrl"
                className="input bg-base-200 border-0 w-full outline-none"
                placeholder="Photo URL"
                required
              />
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

              {/* terms and conditons */}
              <p className='flex items-center gap-1 mt-1'>
                <input type="checkbox" name='terms' />
                Accept Terms & Conditions
              </p>

              {/* error message */}
              {errorMessage && <p className="text-red-500">{errorMessage}</p>}
              {successMessage && <p className="text-green-500">{successMessage}</p>}

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