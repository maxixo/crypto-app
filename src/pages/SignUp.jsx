import React from "react";
import { Label } from "../components/ui/Label";
import { Input } from "../components/ui/Input";
import { cn } from  '../../src/utils/utils';

import LineChart from "../assets/svg/LineChart";
import { Link } from "react-router-dom";

export function Signup() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  // md:mb-10 
  return (
    <div className="flex flex-col justify-between w-[100vw] gap-2  ">
      <div className="flex justify-center pt-5 items-center mx-auto gap-10">
        <h3 className="text-3xl  ml-10 font-bold text-slate-700">Sign Up to Track your portfolio Today </h3>
        <LineChart/>
      </div>

    <div
      className="flex flex-col max-w-xl w-full sm:mx-auto  ml-5 mx-auto mt-12 rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-my-green dark:bg-black">
      <h2 className="font-bold text-xl mx-auto items-center text-neutral-800 dark:text-neutral-200">
        Welcome to CryptoPlanet
      </h2>
     
      <form className="my-8" onSubmit={handleSubmit}>
        <div
          className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="Tyler" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Durden" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="••••••••" type="password" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="twitterpassword">Your twitter password</Label>
          <Input id="twitterpassword" placeholder="••••••••" type="twitterpassword" />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit">
          Sign up &rarr;
          <BottomGradient />
        </button>

        <div
          className="flex -flex-col bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
          <div className="flex pb-5 justify-center items-center ">
            <p className="text-lg">Already have an account
              <Link to="/sign-in" 
              className="text-blue-500 text-large font-bold ml-1">Log in</Link>
              </p>
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

export default Signup;