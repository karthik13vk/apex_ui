import * as React from 'react';
import { FaUserAlt, FaLock } from "react-icons/fa";
import { EyeOff, ChevronDown } from "lucide-react";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Typography,
  Button,
} from "@mui/material";

import { motion } from "framer-motion";
import loginbg1 from './../assets/images/login/bg-img1.png';
import loginbg2 from './../assets/images/login/bg-img2.png';
import loginbg3 from './../assets/images/login/bg-img3.png';
import loginbg4 from './../assets/images/login/bg-img4.png';
import loginbg5 from './../assets/images/login/bg-img5.png';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

const Newlogin = () => {
  const theme = useTheme();
  // const [activeStep, setActiveStep] = React.useState(0);

  // const handleNext = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };



  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (

    <div>
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};

            if (isStepOptional(index)) {
              labelProps.optional = (
                <Typography variant="caption">
                  Optional
                </Typography>
              );
            }

            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }

            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>
                  {label}
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>

        {activeStep === steps.length ? (
          <>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you're finished
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />

              <Button onClick={handleReset}>
                Reset
              </Button>
            </Box>
          </>
        ) : (
          <>
            <Typography sx={{ mt: 2, mb: 1 }}>
              Step {activeStep + 1}
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>

              <Box sx={{ flex: "1 1 auto" }} />

              {isStepOptional(activeStep) && (
                <Button
                  color="inherit"
                  onClick={handleSkip}
                  sx={{ mr: 1 }}
                >
                  Skip
                </Button>
              )}

              <Button onClick={handleNext}>
                {activeStep === steps.length - 1
                  ? "Finish"
                  : "Next"}
              </Button>
            </Box>
          </>
        )}
      </Box>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-purple-600/30 rounded-full blur-3xl"></div>

        <div className="absolute bottom-[-120px] right-[-120px] w-[420px] h-[420px] bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="w-full max-w-5xl bg-transparent rounded-2xl  overflow-hidden grid grid-cols-1 md:grid-cols-2 h-96">

          {/* Left Side - Login Form */}
          <div className="p-8 md:p-12 flex flex-col justify-center bg-transparent relative">
            <div className="lg:absolute w-full h-[90%] lg:left-[25px] 
  bg-white/10 backdrop-blur-2xl 
  border border-white/20 
  shadow-[0_8px_40px_rgba(0,0,0,0.15)] 
  rounded-2xl 
  py-8 px-5 z-[99999]">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                Login please
              </h2>

              <form className="space-y-5">
                {/* Email */}
                <div>
                  <input
                    type="email"
                    placeholder="Input your user ID or Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Password */}
                <div>
                  <input
                    type="password"
                    placeholder="Input your password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Remember & Forgot */}
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    Remember me
                  </label>

                  <a href="#" className="hover:text-blue-600">
                    Forgot Password?
                  </a>
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition duration-300"
                >
                  LOG IN
                </button>
              </form>
            </div>
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-blue-700 to-blue-500 relative">
            <div className="text-center text-white px-8">
              <h1 className="text-4xl font-bold mb-4">WELCOME!</h1>
              <p className="mb-8 text-gray-200">
                Enter your details and start journey with us
              </p>

              <button className="border border-white px-6 py-2 rounded-lg hover:bg-white hover:text-blue-600 transition duration-300">
                SIGN UP
              </button>
            </div>

            {/* Decorative Circles */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-blue-400 opacity-20 rounded-full -translate-x-12 -translate-y-12"></div>
            <div className="absolute bottom-0 right-0 w-52 h-52 bg-blue-300 opacity-20 rounded-full translate-x-16 translate-y-16"></div>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black flex items-center justify-center p-4 relative overflow-hidden">

        <div className="w-full max-w-5xl bg-transparent rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 h-96 shadow-2xl">

          {/* LEFT SIDE - LOGIN */}
          <div className="p-8 md:p-12 flex flex-col justify-center bg-transparent relative">

            <div className="lg:absolute w-full h-[90%] lg:left-[25px]
        bg-white/5 backdrop-blur-[28px]
        border border-white/10
        shadow-[0_20px_80px_rgba(0,0,0,0.6)]
        rounded-2xl
        py-8 px-5 z-[99999]">

              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Login please
              </h2>

              <form className="space-y-5">

                {/* Email */}
                <input
                  type="email"
                  placeholder="Input your user ID or Email"
                  className="w-full px-4 py-3
            bg-white/5 text-white placeholder-gray-400
            border border-white/10 rounded-lg
            focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Password */}
                <input
                  type="password"
                  placeholder="Input your password"
                  className="w-full px-4 py-3
            bg-white/5 text-white placeholder-gray-400
            border border-white/10 rounded-lg
            focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Remember + Forgot */}
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="accent-blue-500" />
                    Remember me
                  </label>

                  <a href="#" className="hover:text-blue-400">
                    Forgot Password?
                  </a>
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white
            py-3 rounded-lg font-semibold transition duration-300"
                >
                  LOG IN
                </button>

              </form>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="hidden md:flex items-center justify-center relative
      bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">

            <div className="text-center text-white px-8 z-10">
              <h1 className="text-4xl font-bold mb-4">WELCOME!</h1>
              <p className="mb-8 text-blue-100">
                Enter your details and start journey with us
              </p>

              <button className="border border-white px-6 py-2 rounded-lg
          hover:bg-white hover:text-blue-600 transition duration-300">
                SIGN UP
              </button>
            </div>

            {/* Decorative Circles */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-blue-500 opacity-20 rounded-full -translate-x-12 -translate-y-12"></div>
            <div className="absolute bottom-0 right-0 w-52 h-52 bg-indigo-500 opacity-20 rounded-full translate-x-16 translate-y-16"></div>

          </div>
        </div>
      </div>

      <div className="min-h-screen flex items-center justify-center bg-pink-50 p-4">
        <div className="w-full max-w-6xl bg-white shadow-2xl rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

          {/* LEFT LOGIN SECTION */}
          <div className="p-8 md:p-14 flex flex-col justify-center">

            {/* Logo */}
            <div className="text-center mb-8">
              <div className="text-4xl font-bold text-pink-500">T</div>
              <h2 className="text-lg font-semibold text-gray-700">Welcome to APEX AI3</h2>
            </div>

            <p className="text-sm text-gray-500 mb-6 text-center">
              Please login to your account
            </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Phone no or email id"
                className="w-full px-4 py-3 border rounded-full outline-none focus:ring-2 focus:ring-pink-400"
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 border rounded-full outline-none focus:ring-2 focus:ring-pink-400"
              />

              <button
                className="w-full py-3 rounded-full text-white font-semibold 
              bg-gradient-to-r from-orange-400 to-pink-500 hover:opacity-90 transition"
              >
                Login to Tidi
              </button>
            </form>

            <div className="text-center mt-4 text-sm text-gray-500">
              Forgot Password?
            </div>

            <div className="text-center mt-6 text-sm">
              Don’t have an account?{" "}
              <span className="text-pink-500 font-semibold cursor-pointer">
                Create new
              </span>
            </div>
          </div>

          {/* RIGHT INFO SECTION */}
          <div className="hidden md:flex relative items-center justify-center bg-gradient-to-br from-orange-300 via-pink-400 to-pink-500 text-white p-10">

            <div className="text-center space-y-6">
              <h1 className="text-3xl font-bold">
                We are more than just a company
              </h1>

              <p className="text-sm text-white/80 max-w-sm mx-auto">
                Simple dummy text of the printing and typesetting industry. Lorem Ipsum
                has been the industry’s standard dummy text ever since the 1500s.
              </p>

              {/* dots */}
              <div className="flex justify-center gap-2 mt-6">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span className="w-2 h-2 bg-white/50 rounded-full"></span>
                <span className="w-2 h-2 bg-white/50 rounded-full"></span>
              </div>
            </div>

            {/* decorative shapes */}
            <div className="absolute top-10 left-10 w-24 h-24 bg-white/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>

      <div className="min-h-screen flex items-center justify-center bg-[#f6f1f7] p-4">

        {/* MAIN CARD */}
        <div className="relative w-full max-w-6xl h-[600px] bg-white rounded-[28px] shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

          {/* LEFT SIDE */}
          <div className="bg-white flex flex-col justify-center px-10 md:px-16 relative z-10">

            {/* Logo */}
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-pink-500">T</div>
              <p className="text-gray-600 mt-2">Welcome to APEX AI3</p>
            </div>

            <p className="text-center text-gray-400 text-sm mb-6">
              Please login to your account
            </p>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Phone no or email id"
                className="w-full px-5 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full px-5 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />

              <button
                className="w-full py-3 rounded-full text-white font-semibold
              bg-gradient-to-r from-orange-400 via-pink-400 to-pink-500
              shadow-md hover:opacity-90 transition"
              >
                Login to Tidi
              </button>

              <p className="text-center text-xs text-gray-400">
                Forgot Password?
              </p>
            </div>

            <p className="text-center text-sm mt-6 text-gray-500">
              Don’t have an account?{" "}
              <span className="text-pink-500 font-semibold cursor-pointer">
                Create new
              </span>
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative hidden md:flex items-center justify-center overflow-hidden">

            <div className="absolute inset-0 overflow-hidden">

              {/* Base gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-pink-500 to-orange-300"></div>

              {/* Blob 1 */}
              <div className="absolute top-[-80px] right-[-80px] w-[300px] h-[300px] bg-orange-300/60 rounded-full blur-3xl"></div>

              {/* Blob 2 (main pink shape) */}
              <div className="absolute top-[40px] right-[-120px] w-[400px] h-[200px] bg-pink-300/70 rounded-full rotate-45 blur-2xl"></div>

              {/* Blob 3 */}
              <div className="absolute bottom-[-100px] left-[-80px] w-[350px] h-[350px] bg-fuchsia-400/50 rounded-full blur-3xl"></div>

              {/* Soft overlay shine */}
              <div className="absolute inset-0 bg-white/10"></div>

            </div>

            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-300 via-pink-400 to-fuchsia-500"></div>

            {/* Abstract Shapes */}
            <div className="absolute top-10 left-10 w-40 h-40 bg-white/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-10 right-10 w-56 h-56 bg-white/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

            {/* Content */}
            <div className="relative text-center text-white px-10">
              <h1 className="text-3xl font-bold mb-4">
                We are more than just a company
              </h1>

              <p className="text-sm text-white/80 leading-relaxed max-w-sm mx-auto">
                Simple dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry’s standard dummy text.
              </p>

              {/* dots */}
              <div className="flex justify-center gap-2 mt-8">
                <span className="w-2 h-2 rounded-full bg-white"></span>
                <span className="w-2 h-2 rounded-full bg-white/50"></span>
                <span className="w-2 h-2 rounded-full bg-white/50"></span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="min-h-screen flex items-center justify-center bg-gray-100 relative overflow-hidden">

        {/* Background decorative shapes */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-maincolor rounded-2xl rotate-12 opacity-60"></div>
        <div className="absolute bottom-10 right-10 w-52 h-52 bg-maincolor rounded-full opacity-50"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-maincolor rotate-45 opacity-40"></div>

        {/* Login Card */}
        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 z-10">

          {/* Logo */}
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-maincolor rounded-lg flex items-center justify-center font-bold text-white">
              APEX AI3
            </div>
          </div>

          {/* Title */}
          <h2 className="text-center text-2xl font-bold text-gray-800">
            Welcome back
          </h2>
          <p className="text-center text-gray-500 text-sm mb-6">
            Sign in to continue to dashboard
          </p>

          {/* Form */}
          <form className="space-y-4">

            {/* Username */}
            <div>
              <label className="text-sm text-gray-600">Username</label>
              <input
                type="text"
                placeholder="Enter your username"
                className="w-full mt-1 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-maincolor outline-none"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm text-gray-600">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full mt-1 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-maincolor outline-none"
              />
            </div>

            {/* Remember + Forgot */}
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2 text-gray-600">
                <input type="checkbox" />
                Remember me
              </label>

              <a href="#" className="text-maincolor hover:underline">
                Forgot password?
              </a>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-maincolor hover:bg-maincolor text-white py-3 rounded-lg font-semibold transition"
            >
              Sign in
            </button>

          </form>

          {/* Footer */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Don’t have an account?{" "}
            <a href="#" className="text-maincolor font-medium">
              Sign up
            </a>
          </p>

        </div>
      </div>

      <div className="min-h-screen bg-transparent p-10 relative">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: `url(${loginbg4})` }}
        >
        </div>

        {/* ================= SCREEN 1 ================= */}
        <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden border border-maincolor/20 bg-transparent shadow-[0_0_40px_rgba(255,215,0,0.15)] relative">

          <div className="grid lg:grid-cols-2">

            {/* LEFT SIDE */}
            <div className="relative p-12 relative p-12 bg-black text-white overflow-hidden bg-white/5 backdrop-blur-[28px]
        border border-white/10
        shadow-[0_20px_80px_rgba(0,0,0,0.6)]  text-white overflow-hidden">

              {/* Glow */}
              <div className="absolute top-0 left-0 w-72 h-72 bg-maincolor/10 blur-3xl rounded-full"></div>

              {/* Logo */}
              <div className="relative z-10">
                <h1 className="text-5xl font-bold">
                  <span className="text-maincolor">APEX</span>
                  <span className="text-white"> AI3</span>
                </h1>

                <p className="mt-2 text-gray-300 text-lg">
                  AI to do AI
                </p>
              </div>

              {/* Cube Design */}
              <div className="relative mt-20 flex items-center justify-center">


                <div className="grid grid-cols-3 gap-3 rotate-12">

                  {[...Array(9)].map((_, index) => (
                    <div
                      key={index}
                      className={`w-20 h-20 rounded-xl border border-white/10
                    ${index === 4
                          ? "bg-maincolor shadow-[0 0 40px rgb(113 100 166)]"
                          : "bg-white/5"
                        }`}
                    ></div>
                  ))}

                </div>
              </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="bg-white p-12 flex items-center justify-center relative z-50">

              <div className="w-full max-w-md">
                <h2 className="text-4xl font-bold text-black">
                  Welcome back
                </h2>

                <p className="mt-3 text-gray-500">
                  Sign in to continue to APEX AI3
                </p>

                {/* Username */}
                <div className="mt-10">
                  <label className="text-sm font-medium text-gray-700">
                    Username
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your username"
                    className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-4 outline-none focus:border-maincolor"
                  />
                </div>

                {/* Password */}
                <div className="mt-6">
                  <label className="text-sm font-medium text-gray-700">
                    Password
                  </label>

                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-4 outline-none focus:border-maincolor"
                  />
                </div>

                {/* Remember */}
                <div className="mt-5 flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 text-gray-600">
                    <input type="checkbox" />
                    Remember me
                  </label>

                  <button className="text-maincolor font-medium">
                    Forgot password?
                  </button>
                </div>

                {/* Button */}
                <button className="mt-8 w-full rounded-xl bg-maincolor py-4 font-semibold text-black transition hover:bg-maincolor">
                  Sign In
                </button>

                <p className="mt-8 text-center text-gray-500">
                  Don’t have an account?{" "}
                  <span className="text-maincolor font-medium">
                    Sign up
                  </span>
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-transparent p-10 relative">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: `url(${loginbg5})` }}
        >
        </div>
        {/* ================= SCREEN 2 ================= */}
        <div
          className="relative max-w-md mx-auto rounded-3xl border border-maincolor/30 
        bg-black/80 backdrop-blur-xl p-10 shadow-[0_0_50px_rgba(255,215,0,0.2)] overflow-hidden"
        >

          {/* Background Glow */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-60 h-60 bg-maincolor/10 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-maincolor/10 blur-3xl rounded-full"></div>
          </div>

          {/* Content */}
          <div className="relative z-10">

            {/* Logo */}
            <div className="flex justify-center">
              <div className="bg-maincolor rounded-2xl px-6 py-5 shadow-lg">
                <h1 className="text-3xl font-bold text-black">
                  APEX AI3
                </h1>
              </div>
            </div>

            {/* Heading */}
            <div className="mt-8 text-center">
              <h2 className="text-3xl font-bold text-white">
                Welcome back
              </h2>

              <p className="mt-2 text-gray-400">
                Sign in to continue to APEX AI3
              </p>
            </div>

            {/* Username */}
            <div className="mt-10">
              <label className="text-sm text-gray-300">
                Username
              </label>

              <input
                type="text"
                placeholder="Enter your username"
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-white placeholder:text-gray-500 outline-none focus:border-maincolor"
              />
            </div>

            {/* Password */}
            <div className="mt-6">
              <label className="text-sm text-gray-300">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-white placeholder:text-gray-500 outline-none focus:border-maincolor"
              />
            </div>

            {/* Remember */}
            <div className="mt-5 flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-400">
                <input type="checkbox" />
                Remember me
              </label>

              <button className="text-maincolor">
                Forgot password?
              </button>
            </div>

            {/* Button */}
            <button
              className="mt-8 w-full rounded-xl bg-maincolor py-4 
            font-semibold text-black transition hover:bg-maincolor"
            >
              Sign In
            </button>

            {/* Footer */}
            <p className="mt-8 text-center text-gray-500">
              Don’t have an account?{" "}
              <span className="text-maincolor font-medium">
                Sign up
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-[#eef1f8] flex items-center justify-center relative overflow-hidden font-sans">
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rotate-45 opacity-40 z-10  backdrop-blur-[28px]
        border border-white/10
        shadow-[0_20px_80px_rgba(0,0,0,0.6)]"></div>
        <div className="absolute top-10 left-10 w-40 h-40 bg-maincolor rounded-2xl rotate-12 opacity-60"></div>
        <div className="absolute bottom-10 right-10 w-52 h-52 bg-maincolor rounded-full opacity-50"></div>
        {/* Background blobs */}
        <div className="absolute top-0 left-0 w-60 h-60 bg-[#b6a6f3] rounded-br-[120px]" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#b6a6f3] rounded-tl-[140px]" />

        {/* Main Container */}
        <div className="w-[90%] max-w-6xl min-h-[700px] bg-white/80 backdrop-blur-md rounded-[30px] shadow-2xl flex overflow-hidden relative">

          {/* Left Section */}
          <div className="w-1/2 relative hidden lg:flex flex-col justify-between p-16 bg-gradient-to-br from-[#b6a6f3] via-[#ffffff] to-[#b6a6f3]">
            {/* Blur effect */}
            <div className="absolute inset-0 bg-white/40 backdrop-blur-[60px]" />

            <div className="relative z-10 mt-40">
              <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                Fast, Efficient and Productive
              </h1>
              <p className="mt-6 text-lg text-gray-600 max-w-md leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              </p>
            </div>

            {/* Footer */}
            <div className="relative z-10 flex items-center justify-between text-sm text-gray-600">
              <div className="flex items-center gap-2 cursor-pointer">
                <span className="text-xl">🇺🇸</span>
                <span>English</span>
                <ChevronDown size={16} />
              </div>

              <div className="flex gap-6">
                <a href="#" className="hover:text-blue-600 transition">
                  Terms
                </a>
                <a href="#" className="hover:text-blue-600 transition">
                  Plans
                </a>
                <a href="#" className="hover:text-blue-600 transition">
                  Contact Us
                </a>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-14">
            <div className="w-full max-w-md bg-white rounded-[28px] shadow-lg p-10">
              <h2 className="text-4xl font-bold text-gray-900">Sign Up</h2>
              <p className="text-gray-400 mt-2">Your Social Campaigns</p>

              <form className="mt-8 space-y-5">
                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder=""
                    className="w-full h-12 px-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      className="w-full h-12 px-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <EyeOff
                      size={18}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
                    />
                  </div>
                  <p className="text-xs text-gray-400 mt-2">
                    Use 8 or more characters with a mix of letters, numbers &
                    symbols.
                  </p>
                </div>

                {/* Repeat Password */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Repeat Password
                  </label>
                  <input
                    type="password"
                    className="w-full h-12 px-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Terms */}
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>
                    I accept the{" "}
                    <a href="#" className="text-blue-600">
                      Term
                    </a>
                  </span>
                </div>

                {/* Divider */}
                <div className="flex items-center gap-4 text-gray-400 text-sm">
                  <div className="flex-1 h-px bg-gray-200" />
                  <span>Or with</span>
                  <div className="flex-1 h-px bg-gray-200" />
                </div>

                {/* Social Buttons */}
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    className="h-12 border border-gray-200 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition"
                  >
                    <img
                      src="https://www.svgrepo.com/show/475656/google-color.svg"
                      alt="Google"
                      className="w-5 h-5"
                    />
                    <span className="text-sm font-medium">
                      Sign Up with Google
                    </span>
                  </button>

                  <button
                    type="button"
                    className="h-12 border border-gray-200 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition"
                  >
                    <span className="text-lg"></span>
                    <span className="text-sm font-medium">
                      Sign Up with Apple
                    </span>
                  </button>
                </div>

                {/* Sign Up Button */}
                <button
                  type="submit"
                  className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition"
                >
                  Sign Up
                </button>

                {/* Sign In */}
                <p className="text-center text-sm text-gray-500">
                  Already have an account?{" "}
                  <a href="#" className="text-blue-600 font-medium">
                    Sign In
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Newlogin
