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

const Modelcatalog = () => {
  const [open, setOpen] = useState(false);
  const modelcatalog = [
    {
      id: "openai",
      name: "OpenAI",
      company: "GPT-4o is OpenAI's latest model, offering faster, more efficient, and skillful multimodal reasoning for text inputs while maintaining improved accuracy, coherence, ....",
      models: 26,
      icon: openai,

    },
    {
      id: "meta",
      name: "Meta",
      company: "OpenAI's most advanced model in the small models category supports text inputs and generates text outputs, making it ideal for smaller tasks.",
      models: 3,
      icon: meta,
    },
    {
      id: "mbzuai",
      name: "MBZUAI",
      company: "K2 Think is a reasoning model that achieves state-of-the-art performance with 32B parameters. It was developed in the UAE by Mohamed bin Zayed University ........",
      models: 2,
      icon: mbzuai,
    },
    {
      id: "inception",
      name: "Inception",
      company: "K2 Think is a reasoning model that achieves state-of-the-art performance with 32B parameters. It was developed in the UAE by Mohamed bin Zayed University....",
      models: 1,
      icon: incep,
    },
    {
      id: "mistral",
      name: "Mistral AI",
      company: "Whisper is a general-purpose speech recognition model. It is trained on a large dataset of diverse audio and is also a multitask model that can perform ...",
      models: 3,
      icon: mistral,
    },
    {
      id: "stability",
      name: "Stability AI",
      company: "Llama 3 is an auto-regressive language model, part of the Llama 3 family, and the next generation of Meta's open-source LLMs. It is one of the....",
      models: 1,
      icon: stability,
    },

  ];
  return (
    <div>
      <div className="mx-auto space-y-6 max-w-7xl">
        <Breadcrumb title="Model Details "
          subtitle="Platform / Model Catalog / Model Details " />

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#8161ff] to-[#b3a1ff] p-10 text-white">
          <div className="absolute left-[-50px] top-[-20px] w-50 h-50 
              bg-gradient-to-b from-[#5234C9] to-[#2828eb] rounded-full blur-3xl"
          ></div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="mb-4 text-2xl font-bold xl:text-5xl lg:text-4xl">Model Catalog</h2>
            <Button variant="outlined"
              onClick={() => setOpen(true)} sx={{ color: 'white', borderColor: 'white', borderRadius: '8px', textTransform: 'none' }}>
              Start free trial
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

            <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg text-maincolor">
              <ListFilterPlus />
              Filter
            </button>
          </div>
        </div>
   
        <div className="pb-8 ">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {modelcatalog.map((modelitem) => (
              <Link
                  to="/modelcatdetail"
                key={modelitem.id}
                className="p-4 transition-shadow bg-white border cursor-pointer rounded-xl shadow-mainsecondary border-borderoutline hover:shadow-md hover:border-primary/20">
                <div className="flex flex-col items-start gap-3 mb-3 lg:flex-row lg:items-center">
                  <div className={`w-12 h-12 rounded-lg bg-lightbgcolor flex items-center justify-center text-2xl`}>
                    <img src={modelitem.icon} alt="img" className='w-10 h-10' />
                  </div>
                  <div>
                    <h3 className="mb-1 text-xl font-semibold text-maincolor ">
                      {modelitem.name}
                    </h3>

                  </div>
                </div>
                <div>
                  <p className="text-base text-muted-foreground">
                    {modelitem.company}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Requestpopup
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </div>
  )
}

export default Modelcatalog