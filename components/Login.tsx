import { motion } from "framer-motion";

const Login = ({
  setLoginOrSignup,
  loginUser,
}: {
  setLoginOrSignup: React.Dispatch<React.SetStateAction<boolean>>;
  loginUser: string | ((formData: FormData) => void);
}) => {
  return (
    <motion.form
      action={loginUser}
      initial={{ x: 25, opacity: 0 }}
      animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
      className="flex flex-col justify-center items-start"
    >
      <p className="text-4xl mb-2">Login</p>
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
      <div className="flex gap-x-5">
        <button
          type="submit"
          className="mt-3 rounded-sm bg-purple-400 py-3 px-6 duration-200 hover:text-white hover:bg-black hover:translate-x-2 font-semibold"
        >
          Connect <span className="text-purple-400">Me</span>
        </button>
        <button
          onClick={() => setLoginOrSignup(true)}
          className="mt-3 rounded-sm bg-white py-3 px-6 duration-200 hover:text-white hover:bg-black hover:translate-x-2 font-semibold"
        >
          Sign up
        </button>
      </div>
      <button className="mt-3 underline">forgot password &rarr;</button>
    </motion.form>
  );
};

export default Login;
