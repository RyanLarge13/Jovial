import Image from "next/image";
import BG from "../public/login-bg.svg";
import LoginSignupWrapper from "@/components/LoginSignupWrapper";

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
      <LoginSignupWrapper />
    </main>
  );
}
