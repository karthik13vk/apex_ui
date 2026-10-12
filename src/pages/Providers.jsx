import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

import { Button } from "@mui/material";
import xai from "./../assets/images/icon/xai-1.svg";
import openai from "./../assets/images/icon/openai.svg";
import meta from "./../assets/images/icon/meta-color.svg";
import incep from "./../assets/images/icon/incep-1.svg";
import mbzuai from "./../assets/images/icon/MBZUofAI.svg";
import stability from "./../assets/images/icon/stability-color.svg";
import mistral from "./../assets/images/icon/mistal.svg";
import anthropic from "./../assets/images/icon/anthropic.svg";
import deepseek from "./../assets/images/icon/deepseek-color.svg";
import qwen from "./../assets/images/icon/qwen-color.svg";
import cohere from "./../assets/images/icon/cohere-color.svg";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import AddProviderModal from "./popup/AddProviderModal";
const Providers = () => {
  const [open, setOpen] = useState(false);
  const providers = [
    {
      id: "openai",
      name: "OpenAI",
      company: "OpenAI | 26 Models",
      models: 26,
      icon: openai,
    },
    {
      id: "meta",
      name: "Meta",
      company: "Meta | 3 Models",
      models: 3,
      icon: meta,
    },
    {
      id: "mbzuai",
      name: "MBZUAI",
      company: "MBZUAI | 2 Models",
      models: 2,
      icon: mbzuai,
    },
    {
      id: "inception",
      name: "Inception",
      company: "Inception | 1 Model",
      models: 1,
      icon: incep,
    },
    {
      id: "mistral",
      name: "Mistral AI",
      company: "Mistral | 3 Models",
      models: 3,
      icon: mistral,
    },
    {
      id: "stability",
      name: "Stability AI",
      company: "Stability AI | 1 Model",
      models: 1,
      icon: stability,
    },
    {
      id: "anthropic",
      name: "Anthropic",
      company: "Anthropic | 1 Model",
      models: 1,
      icon: anthropic,
    },
    {
      id: "deepseekovn",
      name: "DeepSeek",
      company: "DeepSeek | 1 Model",
      models: 1,
      icon: deepseek,
    },
    {
      id: "qwen",
      name: "Qwen",
      company: "Owen | 3 Models",
      models: 3,
      icon: qwen,
    },
    {
      id: "cohere",
      name: "Cohere",
      company: "Cohere | 4 Models",
      models: 4,
      icon: cohere,
    },
    {
      id: "xai",
      name: "xAI",
      company: "xAI | 1 Model",
      models: 1,
      icon: xai,
    },
  ];
  return (
    <div>
      <div className="mx-auto space-y-6 max-w-7xl">
        <Breadcrumb title="Providers" subtitle="Platform / Providers" />

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#8161ff] to-[#b3a1ff] p-10 text-white">
          <div
            className="absolute left-[-50px] top-[-20px] w-50 h-50 
          bg-gradient-to-b from-[#5234C9] to-[#2828eb] rounded-full blur-3xl"
          ></div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="mb-4 text-2xl font-bold xl:text-5xl lg:text-4xl">
              Leading Providers in the AI Industry
            </h2>
            <p className="mb-6 text-lg text-purple-100">
              Choose from the industry's leading LLM providers to harness the
              full potential of AI tailored to your business needs. Our curated
              selection ensures access to the most advanced, reliable, scalable
              language models driving real-world results.
            </p>
            <Button
              variant="outlined"
              onClick={() => setOpen(true)}
              sx={{
                color: "white",
                borderColor: "white",
                borderRadius: "8px",
                textTransform: "none",
              }}
            >
              Start free trial
            </Button>
          </div>
          <div
            className="absolute right-[-50px] top-[-20px] w-50 h-50 
          bg-[linear-gradient(180deg,rgba(255,255,255,0.32)_19.72%,rgba(51,0,255,0.064)_100%)] rounded-full"
          ></div>
        </div>

        <div className="px-6 pb-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {providers.map((provider) => (
              <div
                key={provider.id}
                className="p-6 transition-shadow bg-white border cursor-pointer rounded-xl shadow-mainsecondary border-borderoutline hover:shadow-md hover:border-primary/20"
              >
                <div className="flex flex-col items-start gap-3 lg:flex-row">
                  <div
                    className={`w-16 h-16 rounded-lg bg-lightbgcolor flex items-center justify-center text-2xl`}
                  >
                    <img src={provider.icon} alt="img" className="w-12 h-12" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-xl font-semibold text-maincolor ">
                      {provider.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {provider.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <AddProviderModal isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default Providers;
