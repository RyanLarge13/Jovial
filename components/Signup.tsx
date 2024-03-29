import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

const Signup = ({
  setLoginOrSignup,
  signupUser,
}: {
  setLoginOrSignup: Dispatch<SetStateAction<boolean>>;
  signupUser: (formData: FormData) => void;
}) => {
  return (
    <motion.form
      action={signupUser}
      initial={{ x: 25, opacity: 0 }}
      animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
      className="flex flex-col justify-center items-start"
    >
      <p className="text-4xl mb-2">Sign Up</p>
      <input
        autoFocus={true}
        type="username"
        name="username"
        placeholder="Username"
        className="text-lg py-2 px-2 rounded-sm focus:my-1 focus:outline-none focus:bg-slate-50 duration-200 hover:bg-slate-50"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="text-lg py-2 px-2 rounded-sm focus:my-1 focus:outline-none focus:bg-slate-50 duration-200 hover:bg-slate-50"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="text-lg py-2 px-2 rounded-sm focus:my-1 focus:outline-none focus:bg-slate-50 duration-200 hover:bg-slate-50"
      />
      <input
        type="date"
        name="birthday"
        placeholder="Birthday"
        className="text-lg py-2 px-2 rounded-sm focus:my-1 focus:outline-none focus:bg-slate-50 duration-200 hover:bg-slate-50"
      />
      <input
        type="phone"
        name="phone"
        placeholder="(702) 981-1370"
        className="text-lg py-2 px-2 rounded-sm focus:my-1 focus:outline-none focus:bg-slate-50 duration-200 hover:bg-slate-50"
      />
      <div className="flex gap-x-5">
        <button
          type="submit"
          className="mt-3 rounded-sm bg-purple-400 py-3 px-6 duration-200 hover:text-white hover:bg-black hover:translate-x-2 font-semibold"
        >
          Connect <span className="text-purple-400">Me</span>
        </button>
        <button
          onClick={() => setLoginOrSignup(false)}
          className="mt-3 rounded-sm bg-white py-3 px-6 duration-200 hover:text-white hover:bg-black hover:translate-x-2 font-semibold"
        >
          Login
        </button>
      </div>
    </motion.form>
  );
};

export default Signup;
