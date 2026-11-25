import Header from "../Components/Header";
import logo from "../assets/grandsteam.png";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    firstname: "",
    surname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const [fnError, setfnError] = useState("");
  const [snError, setsnError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.firstname.trim() == "") {
      setfnError("Firstname is required");
    } else {
        setfnError('');
    }
    if (formData.surname.trim() == "") {
      setsnError("Surname is required");
    } else {
        setsnError('');
    }
    if (formData.email.trim() == "") {
      setEmailError("Email is required");
    } else {
        setEmailError('');
    }
    if (formData.password.trim() == "") {
      setPasswordError("Password is required");
    } else if (formData.password != formData.confirmpassword) {
        setPasswordError("Password don't match");
    } else {
        setPasswordError('')
    }
    if (formData.confirmpassword.trim() == "") {
      setConfirmPasswordError("Confirm Password is required");
    } else if (formData.password != formData.confirmpassword) {
        setConfirmPasswordError("Password don't match");
    } else {
        setConfirmPasswordError('');
    }
  };

  return (
    <>
      <Header />

      <section className="bg-gray-50 dark:bg-gray-900 mt-5">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img className="w-8 h-8 mr-2" src={logo} alt="logo" />
            Grand Steam
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create an account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                {/* Firstname */}
                <div>
                  <label
                    for="firstname"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Firstname
                  </label>
                  <input
                    type="firstname"
                    name="firstname"
                    id="firstname"
                    placeholder="John"
                    onChange={handleChange}
                    className={`bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${fnError === "" ? "border-gray-300" : "border-red-300"}`}
                  />

                  <span className="text-red-600">{fnError}</span>
                </div>

                {/* Surname */}
                <div>
                  <label
                    for="surname"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Surname
                  </label>
                  <input
                    type="surname"
                    name="surname"
                    id="surname"
                    placeholder="Doe"
                    onChange={handleChange}
                    className={`bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${snError === "" ? "border-gray-300" : "border-red-300"}`}
                  />

                  <span className="text-red-600">{snError}</span>
                </div>

                {/* Email Address */}
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="name@company.com"
                    onChange={handleChange}
                    className={`bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${emailError === "" ? "border-gray-300" : "border-red-300"}`}
                  />

                  <span className="text-red-600">{emailError}</span>
                </div>

                {/* Password */}
                <div className="relative">
                  <label
                    for="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    onChange={handleChange}
                    className={`bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${passwordError === "" ? "border-gray-300" : "border-red-300"}`}
                  />

                  <span className="text-red-600">{passwordError}</span>
                  <span
                    className="absolute right-2 top-10 w-5 h-5"
                    onClick={(e) => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOffIcon size={15} />
                    ) : (
                      <EyeIcon size={15} />
                    )}
                  </span>
                </div>

                {/* Confirm Password */}
                <div className="relative">
                  <label
                    for="confirmpassword"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirm Password
                  </label>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmpassword"
                    id="confirmpassword"
                    placeholder="••••••••"
                    onChange={handleChange}
                    className={`bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${confirmPasswordError === "" ? "border-gray-300" : "border-red-300"}`}
                  />

                  <span className="text-red-600">{confirmPasswordError}</span>
                  <span
                    className="absolute right-2 top-10 w-5 h-5"
                    onClick={(e) =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                  >
                    {showConfirmPassword ? (
                      <EyeOffIcon size={15} />
                    ) : (
                      <EyeIcon size={15} />
                    )}
                  </span>
                </div>

                {/* Term & Condition */}
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      for="terms"
                      className="font-light text-gray-500 dark:text-gray-300"
                    >
                      I accept the{" "}
                      <a
                        className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                        href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>

                {/* Register Button */}
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Create an account
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <a
                    href="#"
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Login here
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
