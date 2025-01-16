"use client";

import { useState } from "react";
import { SignInFlow } from "../types";
import { SignInCard } from "./sign-in-card";
import { SignUpCard } from "./sign-up-card";


const AuthScreen = () => {
  const [state, setState] = useState<SignInFlow>("signIn");
  
  return (
    <div className="h-full flex items-center text-white justify-center bg-[#5c3858]">
        <div className=" md:w-[420px] md:h-auto">
            {state === 'signIn' ? <SignInCard setState={setState} /> : <SignUpCard setState={setState}/>} 
        </div>
    </div>
  );
};

export default AuthScreen;
