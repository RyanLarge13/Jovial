import { PrismaClient } from "@prisma/client";
import Image from "next/image";
import BG from "../public/login-bg.svg";
import LoginSignupWrapper from "@/components/LoginSignupWrapper";

const prisma = new PrismaClient();

export default function Home() {
  const loginUser = async (formData: FormData) => {
    "use server";
  };
  const signupUser = async (formData: FormData) => {
    "use server";
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    const birthday = formData.get("birthday");
    const phone = formData.get("phone");

    const validUsername = typeof username === "string" ? username : "";
    const validEmail = typeof email === "string" ? email : "";
    const validPass = typeof password === "string" ? password : "";
    const validBirthday = typeof birthday === "string" ? birthday : "";
    const validPhone = typeof phone === "string" ? phone : "";

    const newUser = {
      username: validUsername,
      email: validEmail,
      password: validPass,
      birthday: validBirthday,
      phone: validPhone,
      avatarUrl: "",
      verified: false,
    };
    const uploadedUser = await prisma.user.create({ data: newUser });
    if (!uploadedUser) {
      console.log("failed to upload user");
    }
    if (uploadedUser) {
      console.log("user uploaded");
    }
  };

  return (
    <main className="flex flex-col md:flex-row justify-evenly md:justify-center items-center h-screen px-5 lg:px-40 relative">
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
      <LoginSignupWrapper loginUser={loginUser} signupUser={signupUser} />
    </main>
  );
}
