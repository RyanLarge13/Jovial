"use client";

import { Dispatch, SetStateAction, useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

const LoginSignupWrapper = ({
  loginUser,
  signupUser,
}: {
  loginUser: (formData: FormData) => void;
  signupUser: (formData: FormData) => void;
}) => {
  const [loggingOrSignup, setLoginOrSignup] = useState(false);

  return (
    <div className="flex justify-center items-center w-full">
      {!!loggingOrSignup ? (
        <Signup setLoginOrSignup={setLoginOrSignup} signupUser={signupUser} />
      ) : (
        <Login setLoginOrSignup={setLoginOrSignup} loginUser={loginUser} />
      )}
    </div>
  );
};

export default LoginSignupWrapper;
