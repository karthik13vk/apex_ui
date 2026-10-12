import React, { useState } from 'react'
import { Box, TextField, Button, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from 'react-router-dom';
import FilterListIcon from "@mui/icons-material/FilterList";
import openai from './../assets/images/icon/openai.svg';
import meta from './../assets/images/icon/meta-color.svg';
import incep from './../assets/images/icon/incep-1.svg';
import mbzuai from './../assets/images/icon/MBZUofAI.svg';
import stability from './../assets/images/icon/stability-color.svg';
import mistral from './../assets/images/icon/mistal.svg';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import { Filter, Search, ListFilterPlus } from 'lucide-react';
import Requestpopup from './popup/Requestpopup';
import Modaltailingpopup from './popup/Modaltailingpopup';

const Modeltraining = () => {
  const [open, setOpen] = useState(false);
  const modeltraining = [
    {
      id: "openai",
      name: "OpenAI",
      company: "GPT-4o is OpenAI's latest model, offering faster, more efficient, and skillful multimodal reasoning for text inputs while maintaining improved accuracy, coherence, ....",
      sectorname: "Insurance",
      subdomain: "Finance",
      modeltype: "API",
      modeltoken: "32768",
      icon: openai,
      models: 26,


    },
    {
      id: "meta",
      name: "Meta",
      company: "OpenAI's most advanced model in the small models category supports text inputs and generates text outputs, making it ideal for smaller tasks.",
      sectorname: "Insurance",
      subdomain: "Policy Quotation",
      modeltype: "API",
      modeltoken: "32768",
      models: 3,
      icon: meta,
    },
    {
      id: "mbzuai",
      name: "MBZUAI",
      company: "K2 Think is a reasoning model that achieves state-of-the-art performance with 32B parameters. It was developed in the UAE by Mohamed bin Zayed University ........",
      sectorname: "Insurance",
      subdomain: "Finance",
      modeltype: "API",
      modeltoken: "32768",
      models: 2,
      icon: mbzuai,
    },
    {
      id: "inception",
      name: "Inception",
      company: "K2 Think is a reasoning model that achieves state-of-the-art performance with 32B parameters. It was developed in the UAE by Mohamed bin Zayed University....",
      sectorname: "Insurance",
      subdomain: "Finance",
      modeltype: "Self",
      modeltoken: "32768",
      models: 1,
      icon: incep,
    },
    {
      id: "mistral",
      name: "Mistral AI",
      company: "Whisper is a general-purpose speech recognition model. It is trained on a large dataset of diverse audio and is also a multitask model that can perform ...",
      sectorname: "Insurance",
      subdomain: "Customer",
      modeltype: "API",
      modeltoken: "32768",
      models: 3,
      icon: mistral,
    },
    {
      id: "stability",
      name: "Stability AI",
      company: "Llama 3 is an auto-regressive language model, part of the Llama 3 family, and the next generation of Meta's open-source LLMs. It is one of the....",
      sectorname: "Insurance",
      subdomain: "Finance",
      modeltype: "Self",
      modeltoken: "32768",
      models: 1,
      icon: stability,
    },

  ];

  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { label: "Business type", sub: "Supporting text" },
    { label: "Business Detail", sub: "Supporting text" },
    { label: "Your details", sub: "Supporting text" },
    { label: "Verification", sub: "Supporting text" },
  ];
  return (
    <div>
      <div className="mx-auto space-y-6 max-w-7xl">
        <Breadcrumb title="Models Training"
          subtitle="Platform / Trained Models " />
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#8161ff] to-[#b3a1ff] p-10 text-white">
          <div className="absolute left-[-50px] top-[-20px] w-50 h-50 
              bg-gradient-to-b from-[#5234C9] to-[#2828eb] rounded-full blur-3xl"
          ></div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="mb-4 text-2xl font-bold xl:text-5xl lg:text-4xl">Trained Models</h2>
            <Button variant="outlined"
              onClick={() => setOpen(true)} sx={{ color: 'white', borderColor: 'white', borderRadius: '8px', textTransform: 'none' }}>
              Configure AI
            </Button>
          </div>
          <div className="absolute right-[-50px] top-[-20px] w-50 h-50 
              bg-[linear-gradient(180deg,rgba(255,255,255,0.32)_19.72%,rgba(51,0,255,0.064)_100%)] rounded-full"
          ></div>
        </div>
        <div className="p-5 rounded-lg bg-inputbg">

          <div className="flex items-center gap-3">

            <div className="relative w-full">
              <input
                type="search"
                placeholder="Search for a model...."
                className="w-full px-4 py-2 pl-10 border rounded-sm border-inputbg2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <span className="absolute text-gray-400 -translate-y-1/2 left-3 top-1/2">
                <Search />
              </span>
            </div>

          </div>
        </div>
        <div className="pb-8 ">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {modeltraining.map((modelitem) => (
              <Link
                to="/modeltrainingdetails"
                key={modelitem.id}
                className="flex flex-col items-center gap-4 p-4 transition-shadow bg-white border cursor-pointer rounded-xl shadow-mainsecondary border-borderoutline hover:shadow-md hover:border-primary/20"
              >
                <div className="flex flex-col items-start w-full gap-3 overflow-hidden lg:flex-row lg:items-center">

                  <div className="flex items-center justify-center w-16 h-16 text-2xl rounded-lg min-w-16 bg-lightbgcolor">
                    <img src={modelitem.icon} alt="img" className="w-12 h-12" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="mb-1 text-xl font-semibold text-maincolor">
                      {modelitem.name}
                    </h3>

                    <p className="text-sm truncate text-muted-foreground">
                      Policy Inquiry & Claims Assistance
                    </p>
                  </div>
                </div>

                <div className="w-full">
                  <p className="text-base text-muted-foreground">
                    {modelitem.company}
                  </p>
                </div>
                <div className="flex items-center justify-between w-full">
                  <div className="w-full">
                    <h6 className="text-base font-normal text-paratextlight">
                      Sector
                    </h6>
                    <p className="text-sm font-semibold">
                      {modelitem.sectorname}
                    </p>
                  </div>
                  <div className="w-full">
                    <h6 className="text-base font-normal text-paratextlight">
                      Sub-domain
                    </h6>
                    <p className="text-sm font-semibold text-black">
                      {modelitem.subdomain}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between w-full">
                  <div className="w-full">
                    <h6 className="text-base font-normal text-paratextlight">
                      Model Type
                    </h6>
                    <p className="text-sm font-semibold text-black">
                      {modelitem.modeltype}
                    </p>
                  </div>
                  <div className="w-full">
                    <h6 className="text-base font-normal text-paratextlight">
                      Max Tokens
                    </h6>
                    <p className="text-base font-semibold text-black">
                      {modelitem.modeltoken}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Modaltailingpopup
        isOpen={open}
        onClose={() => setOpen(false)}
      />
      <div className="p-4 w-full">
        {/* Stepper */}
        <div className="flex flex-col md:flex-row w-full">
          {steps.map((step, index) => {
            const isActive = index === currentStep;
            const isCompleted = index < currentStep;

            return (
              <div
                key={index}
                className={`
                relative flex-1 px-6 py-4 text-center transition-all duration-300
                
                ${isActive ? "bg-indigo-500 text-white" : ""}
                ${isCompleted ? "bg-indigo-600 text-white" : ""}
                ${!isActive && !isCompleted ? "bg-gray-200 text-gray-500" : ""}
                
                md:mr-[-20px]
                
                ${index === 0 ? "md:[clip-path:polygon(0%_0%,100%_0%,90%_100%,0%_100%)]" : ""}
                ${index > 0 && index < steps.length - 1
                    ? "md:[clip-path:polygon(10%_0%,100%_0%,90%_100%,0%_100%)]"
                    : ""
                  }
                ${index === steps.length - 1
                    ? "md:[clip-path:polygon(10%_0%,100%_0%,100%_100%,0%_100%)] md:mr-0"
                    : ""
                  }

                rounded-md md:rounded-none mb-2 md:mb-0
              `}
              >
                <div className="font-semibold">{step.label}</div>
                <div className="text-xs opacity-80">{step.sub}</div>
              </div>
            );
          })}
        </div>

        {/* Controls */}
        <div className="mt-6 flex gap-3">
          <button
            onClick={() => setCurrentStep((s) => Math.max(s - 1, 0))}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Prev
          </button>

          <button
            onClick={() =>
              setCurrentStep((s) => Math.min(s + 1, steps.length - 1))
            }
            className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
          >
            Next
          </button>
        </div>
      </div>
      {/* <div className="p-4">
        <div className="hidden md:flex w-full">
          {steps.map((step, index) => {
            const isActive = index === currentStep;
            const isCompleted = index < currentStep;

            let bg = "bg-gray-200 text-gray-500";
            let arrowColor = "#e5e7eb";

            if (isCompleted) {
              bg = "bg-indigo-600 text-white";
              arrowColor = "#4f46e5";
            } else if (isActive) {
              bg = "bg-indigo-500 text-white";
              arrowColor = "#6366f1";
            }

            return (
              <div
                key={index}
                className={`relative flex-1 px-6 py-4 text-center ${bg}`}
              >
                {index !== steps.length - 1 && (
                  <div
                    className="absolute top-0 right-[-20px] w-0 h-0"
                    style={{
                      borderTop: "32px solid transparent",
                      borderBottom: "32px solid transparent",
                      borderLeft: `20px solid ${arrowColor}`,
                    }}
                  />
                )}

                {index !== 0 && (
                  <div
                    className="absolute top-0 left-0 w-0 h-0"
                    style={{
                      borderTop: "32px solid transparent",
                      borderBottom: "32px solid transparent",
                      borderLeft: "20px solid white",
                    }}
                  />
                )}

                <div className="relative z-10">
                  <div className="font-semibold">{step.label}</div>
                  <div className="text-xs opacity-80">{step.sub}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="md:hidden flex flex-col gap-2">
          {steps.map((step, index) => {
            const isActive = index === currentStep;
            const isCompleted = index < currentStep;

            return (
              <div
                key={index}
                className={`p-4 rounded text-center ${isActive
                    ? "bg-indigo-500 text-white"
                    : isCompleted
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
              >
                <div className="font-semibold">{step.label}</div>
                <div className="text-xs opacity-80">{step.sub}</div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex gap-3">
          <button
            onClick={() => setCurrentStep((s) => Math.max(s - 1, 0))}
            className="px-4 py-2 bg-gray-300 rounded"
          >
            Prev
          </button>

          <button
            onClick={() =>
              setCurrentStep((s) => Math.min(s + 1, steps.length - 1))
            }
            className="px-4 py-2 bg-indigo-500 text-white rounded"
          >
            Next
          </button>
        </div>
      </div> */}
    </div>
  )
}

export default Modeltraining