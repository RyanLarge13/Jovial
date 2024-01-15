import Image from "next/image";
import BG from "../public/login-bg.svg";

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row justify-center items-center h-screen px-5 lg:px-40 relative">
      <Image
        src={BG}
        alt="background"
        className="absolute z-[-1] inset-0 object-cover w-full h-full"
      />
      <div className="flex flex-col justify-center items-start w-full">
        <h1 className="font-semibold text-6xl">Jovial</h1>
        <p className="ml-5 mt-[-0.5em]">
          The world is full of amazing people to meet...
        </p>
      </div>
      <div className="flex justify-center items-center w-full">
        <form className="flex flex-col justify-center items-start">
          <p className="text-4xl mb-2">Login</p>
          <input
            autoFocus={true}
            type="username"
            placeholder="Username"
            className="text-lg py-2 focus:outline-none focus:bg-slate-50 duration-200 hover:bg-slate-50"
          />
          <input
            type="email"
            placeholder="Email"
            className="text-lg py-2 focus:outline-none focus:bg-slate-50 duration-200 hover:bg-slate-50"
          />
          <input
            type="password"
            placeholder="Password"
            className="text-lg py-2 focus:outline-none focus:bg-slate-50 duration-200 hover:bg-slate-50"
          />
          <div className="flex gap-x-5">
            <button
              type="submit"
              className="mt-3 rounded-sm bg-purple-400 py-3 px-6 duration-200 hover:text-white hover:bg-black hover:translate-x-2 font-semibold"
            >
              Connect <span className="text-purple-400">Me</span>
            </button>
            <a
              href="/signup"
              className="mt-3 rounded-sm bg-white py-3 px-6 duration-200 hover:text-white hover:bg-black hover:translate-x-2 font-semibold"
            >
              Sign up
            </a>
          </div>
        </form>
      </div>
    </main>
  );
}
