"use client";
import React from "react";
import { Label } from "../components/ui/Label";
import { Input } from "../components/ui/Input";
import { cn } from  '../../src/utils/utils';
import {
    IconBrandGoogle,

} from "@tabler/icons-react";
import LineChart from "../assets/svg/LineChart";
import { Link } from "react-router-dom";
import {auth, provider} from "../../src/config/firebase-config";
import {signInWithPopup} from 'firebase/auth'
import {useNavigate, Navigate} from "react-router-dom"
import {useGetUserInfo} from '../hooks/useGetUserInfo'


export function SignIn() {
  const navigate = useNavigate();
  const {isAuth} = useGetUserInfo();

   const signInWithGoogle = async () => {
      const results = await signInWithPopup(auth, provider);
      const authInfo = {
        userID: results.user.uid,
        name: results.user.displayName, 
        profilePhoto: results.user.photoURL,
        isAuth: true,
      };

      localStorage.setItem('auth', JSON.stringify(authInfo));
      navigate('/portfolio');
    
   }

  if (isAuth) {
    return <Navigate to="/portfolio"/>
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  // md:mb-10 
  return (
    <div className="flex flex-col justify-between w-[100vw] gap-2  ">
      <div className="flex justify-center pt-5 items-center mx-auto gap-10">
        <h3 className="text-3xl  ml-10 font-bold text-slate-700">Sign in to Track your portfolio Today </h3>
        <LineChart/>
      </div>

    <div
      className="flex flex-col max-w-xl w-full sm:mx-auto  ml-5 mx-auto mt-12 rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-my-green dark:bg-black">
      <h2 className="font-bold text-xl mx-auto text-neutral-800 dark:text-neutral-200">
        Welcome to CryptoPlanet
      </h2>
      <p className="text-neutral-600 text-center mx-auto text-xl max-w-sm mt-2 dark:text-neutral-300">
        Login to CryptoPlanet to track track your portfolio today
      </p>
      <form className="my-8" onSubmit={handleSubmit}>
        <div
          className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">

        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="••••••••" type="password" />
        </LabelInputContainer>
        

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit">
          Sign In &rarr;
          <BottomGradient />
        </button>

        <div
          className="flex -flex-col bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
          <div className="flex pb-5 justify-center items-center ">
            <p className="text-lg">Don't have an account?
              <Link to="/sign-up" 
              className="text-blue-500 text-large font-bold ml-1">Sign Up</Link>
              </p>
          </div>
        <div className="flex flex-col space-y-4"  onClick={signInWithGoogle}>
          <button
            className=" relative mx-auto group/btn flex space-x-2 items-center justify-center px-4 w-1/2 text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit">
            <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm ">
             Sign in with Google
            </span>
            <BottomGradient />
          </button>
        
        </div>
      </form>
    </div>
    </div>
  );
}

const BottomGradient = () => {
  return (<>
    <span
      className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
    <span
      className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
  </>);
};

const LabelInputContainer = ({
  children,
  className
}) => {
  return (
    (<div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>)
  );
};

export default SignIn;