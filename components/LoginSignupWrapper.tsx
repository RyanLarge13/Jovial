"use client";

import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

const LoginSignupWrapper = () => {
  const [loggingOrSignup, setLoginOrSignup] = useState(false);
  return (
    <div className="flex justify-center items-center w-full">
      {!!loggingOrSignup ? (
        <Signup setLoginOrSignup={setLoginOrSignup} />
      ) : (
        <Login setLoginOrSignup={setLoginOrSignup} />
      )}
    </div>
  );
};

export default LoginSignupWrapper;
